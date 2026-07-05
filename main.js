/* ==========================================================================
   ERHALO24 — shared site behaviour
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- hamburger nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const panel  = document.querySelector('.nav-panel');
  const scrim  = document.querySelector('.nav-scrim');

  function openNav(){
    toggle.classList.add('is-open');
    panel.classList.add('is-open');
    scrim.classList.add('is-open');
    toggle.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav(){
    toggle.classList.remove('is-open');
    panel.classList.remove('is-open');
    scrim.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  if(toggle){
    toggle.addEventListener('click', () => {
      toggle.classList.contains('is-open') ? closeNav() : openNav();
    });
    scrim.addEventListener('click', closeNav);
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeNav(); });
  }

  /* mark the current page's nav link active */
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-panel a[href]').forEach(a => {
    if(a.getAttribute('href') === here) a.classList.add('is-active');
  });

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- accounts accordion ---------- */
  document.querySelectorAll('.account__row').forEach(row => {
    row.addEventListener('click', () => {
      const account = row.closest('.account');
      const wasOpen = account.classList.contains('is-open');
      document.querySelectorAll('.account.is-open').forEach(a => a.classList.remove('is-open'));
      if(!wasOpen) account.classList.add('is-open');
    });
  });

  /* ---------- hero background image (set via data attribute so this file has no hard-coded paths) ---------- */
  const heroBg = document.querySelector('[data-hero-bg]');
  if(heroBg){
    heroBg.style.setProperty('--hero-image', `url("${heroBg.dataset.heroBg}")`);
  }
});
