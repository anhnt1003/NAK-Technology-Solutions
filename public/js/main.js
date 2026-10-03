(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky header state
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 12); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    header.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? btn.dataset.close : btn.dataset.open);
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); btn.focus(); } });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Count-up numbers
  function countUp(el) {
    var to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.decimals || '0', 10);
    if (reduce) { el.textContent = to.toFixed(dec); return; }
    var start = performance.now(), dur = 1400;
    (function tick(now) {
      var p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }
  var counts = document.querySelectorAll('.count');
  if (counts.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counts.forEach(function (c) { cio.observe(c); });
  } else {
    counts.forEach(function (c) { c.textContent = c.dataset.to; });
  }

  // Card spotlight follows pointer
  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // Hero network canvas
  var canvas = document.getElementById('heroCanvas');
  if (canvas && !reduce) {
    var ctx = canvas.getContext('2d'), dpr = Math.min(window.devicePixelRatio || 1, 2), w, h, pts = [], mouse = { x: -999, y: -999 }, running = true;
    var resize = function () {
      var r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(90, Math.max(28, (w * h) / 16000)));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
    };
    var draw = function () {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      var maxD = 140;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        var dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 120) { p.x += (p.x - mouse.x) * 0.012; p.y += (p.y - mouse.y) * 0.012; }
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fillStyle = 'rgba(255,122,61,0.8)'; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < maxD) {
            ctx.strokeStyle = 'rgba(255,160,110,' + (0.22 * (1 - d / maxD)).toFixed(3) + ')';
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('pointermove', function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.parentElement.addEventListener('pointerleave', function () { mouse.x = mouse.y = -999; });
    // Pause when off-screen or tab hidden
    var visible = true;
    function sync() { var should = visible && !document.hidden; if (should && !running) { running = true; draw(); } else if (!should) running = false; }
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; sync(); }).observe(canvas);
    document.addEventListener('visibilitychange', sync);
    draw();
  }

  // Contact form
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var submit = form.querySelector('button[type=submit]');
    var label = submit.querySelector('.btn-label');
    var original = label.textContent;
    var showErr = function (name, msg) {
      var field = form.elements[name].closest('.field');
      field.classList.toggle('invalid', !!msg);
      form.elements[name].setAttribute('aria-invalid', msg ? 'true' : 'false');
      field.querySelector('.err').textContent = msg || '';
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = ''; status.className = 'form-status';
      var d = Object.fromEntries(new FormData(form).entries());
      var bad = false;
      showErr('name', ''); showErr('email', ''); showErr('message', '');
      if (!d.name.trim()) { showErr('name', form.dataset.errName); bad = true; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) { showErr('email', form.dataset.errEmail); bad = true; }
      if (d.message.trim().length < 10) { showErr('message', form.dataset.errMessage); bad = true; }
      if (bad) { var first = form.querySelector('.invalid input, .invalid textarea'); if (first) first.focus(); return; }
      submit.disabled = true; label.textContent = form.dataset.sending;
      fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
        .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
        .then(function (j) {
          if (j.ok) { form.reset(); status.textContent = form.dataset.ok; status.classList.add('ok'); }
          else { status.textContent = form.dataset.fail; status.classList.add('fail'); }
        })
        .catch(function () { status.textContent = form.dataset.fail; status.classList.add('fail'); })
        .finally(function () { submit.disabled = false; label.textContent = original; });
    });
  }
})();
