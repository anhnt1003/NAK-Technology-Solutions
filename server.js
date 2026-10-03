const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const cfg = require('./src/config');
const { icon } = require('./src/icons');
const dict = { vi: require('./src/i18n/vi'), en: require('./src/i18n/en') };

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
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
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
  next();
});

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
      meta: t.meta[metaKey || page],
      canonical: `${cfg.siteUrl}/${lang}${slug ? '/' + slug : ''}`,
      altLang: lang === 'vi' ? 'en' : 'vi',
    });
  };
}

// Root: pick language from Accept-Language
app.get('/', (req, res) => {
  const pref = req.acceptsLanguages('vi', 'en') || cfg.defaultLang;
  res.redirect(302, `/${pref}`);
});

const L = '/:lang(vi|en)';
app.get(L, render('home'));
app.get(`${L}/services`, render('services'));
app.get(`${L}/about`, render('about'));
app.get(`${L}/contact`, render('contact'));

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
  for (const slug of cfg.pages) {
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
