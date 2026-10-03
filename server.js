const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const cfg = require('./src/config');
const { icon } = require('./src/icons');
const data = require('./src/data');
const dict = { vi: require('./src/i18n/vi'), en: require('./src/i18n/en') };
const privacy = require('./src/privacy');
dict.vi.privacy = privacy.vi;
dict.en.privacy = privacy.en;
const extra = require('./src/i18n/extra');
dict.vi.x = extra.vi;
dict.en.x = extra.en;
const solutions = require('./src/content/solutions');
const posts = require('./src/content/posts');
const faq = require('./src/content/faq');
const extras = require('./src/content/extras');

const app = express();
const isProd = process.env.NODE_ENV === 'production';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        upgradeInsecureRequests: isProd ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);
// Canonical host: send nak.com.vn / www variants to SITE_URL (other hosts, e.g. Hostinger temp domain, are untouched)
if (isProd) {
  const canonicalHost = new URL(cfg.siteUrl).host;
  app.use((req, res, next) => {
    if (/^(www\.)?nak\.com\.vn$/.test(req.hostname) && (req.hostname !== canonicalHost || req.protocol !== 'https')) {
      return res.redirect(301, cfg.siteUrl + req.originalUrl);
    }
    next();
  });
}
app.use(compression());
app.use(express.json({ limit: '20kb' }));
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: isProd ? '7d' : 0,
    etag: true,
  })
);

// Shared view locals
app.use((req, res, next) => {
  res.locals.cfg = cfg;
  res.locals.icon = icon;
  res.locals.data = data;
  res.locals.content = { solutions, posts, faq, extras };
  next();
});

function pageOf(req, extraLocals) {
  const lang = req.params.lang;
  return { t: dict[lang], lang, altLang: lang === 'vi' ? 'en' : 'vi', ...extraLocals };
}

function render(page, metaKey) {
  return (req, res) => {
    const lang = req.params.lang;
    const t = dict[lang];
    const slug = page === 'home' ? '' : page;
    res.render(`pages/${page}`, {
      t,
      lang,
      page,
      slug,
      meta: t.meta[metaKey || page] || t.x.meta[metaKey || page],
      canonical: `${cfg.siteUrl}/${lang}${slug ? '/' + slug : ''}`,
      altLang: lang === 'vi' ? 'en' : 'vi',
    });
  };
}

function notFound(req, res, next) { next(); }

// Root: pick language from Accept-Language
app.get('/', (req, res) => {
  const pref = req.acceptsLanguages('vi', 'en') || cfg.defaultLang;
  res.redirect(302, `/${pref}`);
});

const L = '/:lang(vi|en)';
app.get(L, render('home'));
app.get(`${L}/solutions`, render('solutions'));
app.get(`${L}/projects`, render('projects'));
app.get(`${L}/about`, render('about'));
app.get(`${L}/contact`, render('contact'));
app.get(`${L}/privacy`, render('privacy', 'privacy'));
app.get(`${L}/resources`, render('resources', 'resources'));
app.get(`${L}/insights`, render('insights', 'insights'));

app.get(`${L}/solutions/:id`, (req, res, next) => {
  const idx = solutions.findIndex((x) => x.id === req.params.id);
  if (idx < 0) return notFound(req, res, next);
  const lang = req.params.lang;
  const sol = solutions[idx];
  const c = sol[lang];
  const slug = `solutions/${sol.id}`;
  res.render('pages/solution', {
    ...pageOf(req), page: 'solutions', slug, sol, c, idx,
    meta: { title: `${c.title} | NAK Technology Solutions`, desc: c.tagline + '. ' + c.intro.slice(0, 120) },
    canonical: `${cfg.siteUrl}/${lang}/${slug}`,
  });
});

app.get(`${L}/insights/:slug`, (req, res, next) => {
  const post = posts.find((p) => p.slug === req.params.slug);
  if (!post) return next();
  const lang = req.params.lang;
  const slug = `insights/${post.slug}`;
  res.render('pages/post', {
    ...pageOf(req), page: 'insights', slug, post, c: post[lang],
    meta: { title: `${post[lang].title} | NAK Technology Solutions`, desc: post[lang].excerpt },
    canonical: `${cfg.siteUrl}/${lang}/${slug}`,
  });
});

app.get(`${L}/projects/:n`, (req, res, next) => {
  const n = Number(req.params.n);
  const detail = extras.projectDetails[n];
  if (!Number.isInteger(n) || !detail) return next();
  const lang = req.params.lang;
  const slug = `projects/${n}`;
  const p = dict[lang].projects[n];
  res.render('pages/project', {
    ...pageOf(req), page: 'projects', slug, n, p, d: detail[lang], media: data.projectMedia[n],
    meta: { title: `${p.title} | NAK Technology Solutions`, desc: p.text },
    canonical: `${cfg.siteUrl}/${lang}/${slug}`,
  });
});

// Contact form
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false });
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v, max) => String(v || '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

function getTransport() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true') === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

app.post('/api/contact', limiter, async (req, res) => {
  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot: silently drop bots
  if (b.consent !== true) return res.status(400).json({ ok: false }); // consent is required (PDPL)

  const data = {
    name: clean(b.name, 120),
    email: clean(b.email, 160),
    phone: clean(b.phone, 40),
    company: clean(b.company, 160),
    service: clean(b.service, 80),
    message: String(b.message || '').trim().slice(0, 4000),
  };
  if (!data.name || !EMAIL_RE.test(data.email) || data.message.length < 10) {
    return res.status(400).json({ ok: false });
  }

  const transport = getTransport();
  if (!transport) {
    if (isProd) {
      console.error('SMTP is not configured; contact request could not be delivered.');
      return res.status(500).json({ ok: false });
    }
    console.log('[dev] contact request:', data);
    return res.json({ ok: true });
  }

  try {
    await transport.sendMail({
      from: `"${cfg.short} Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `[Website] ${data.service || 'Contact'} - ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.company}`,
        `Service: ${data.service}`,
        `Consent to personal data processing: yes (${new Date().toISOString()})`,
        '',
        data.message,
      ].join('\n'),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).json({ ok: false });
  }
});

// SEO
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: ${cfg.siteUrl}/sitemap.xml\n`);
});
app.get('/sitemap.xml', (req, res) => {
  const urls = [];
  const paths = [
    ...cfg.pages,
    ...solutions.map((x) => `solutions/${x.id}`),
    ...posts.map((p) => `insights/${p.slug}`),
    ...Object.keys(extras.projectDetails).map((n) => `projects/${n}`),
  ];
  for (const slug of paths) {
    for (const lang of cfg.langs) {
      const alts = cfg.langs
        .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${cfg.siteUrl}/${l}${slug ? '/' + slug : ''}"/>`)
        .join('');
      urls.push(`<url><loc>${cfg.siteUrl}/${lang}${slug ? '/' + slug : ''}</loc>${alts}</url>`);
    }
  }
  res
    .type('application/xml')
    .send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`);
});

// 404
app.use((req, res) => {
  const lang = /^\/en(\/|$)/.test(req.path) ? 'en' : 'vi';
  const t = dict[lang];
  res.status(404).render('pages/404', {
    t, lang, page: '404', slug: '', meta: t.meta.notFound,
    canonical: `${cfg.siteUrl}/${lang}`, altLang: lang === 'vi' ? 'en' : 'vi',
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).type('text/plain').send('Internal Server Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`NAK website running on port ${PORT}`));
