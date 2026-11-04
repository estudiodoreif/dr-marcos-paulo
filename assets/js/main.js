/* Dr. Marcos Paulo Silveira — interações
   Header ao rolar · menu mobile · nav ativa · reveal · botão flutuante · cookies */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sem storage */ } },
  };

  /* Header: fundo ao rolar + botão flutuante após o hero */
  const header = $('.header');
  const hero = $('.hero');
  const footer = $('.footer');
  const fab = $('.fab');
  const links = $$('.nav__link');
  const sections = links.map((l) => $(l.getAttribute('href'))).filter(Boolean);

  const onScroll = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    header?.classList.toggle('is-scrolled', y > 12);

    // Botão flutuante: visível depois do hero e escondido sobre o rodapé
    if (fab && hero) {
      const nearFooter = footer && footer.getBoundingClientRect().top < vh - 40;
      fab.classList.toggle('is-visible', y > hero.offsetHeight * 0.75 && !nearFooter);
    }

    // Nav ativa: última seção cujo topo passou de 40% da tela
    let current = null;
    sections.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top < vh * 0.4 && r.bottom > vh * 0.4) current = s.id;
    });
    links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${current}`));
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile */
  const drawer = $('#drawer');
  const openBtn = $('[data-menu-open]');
  const closeBtn = $('[data-menu-close]');
  const setMenu = (open) => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    (open ? closeBtn : openBtn).focus({ preventScroll: true });
  };
  openBtn?.addEventListener('click', () => setMenu(true));
  closeBtn?.addEventListener('click', () => setMenu(false));
  $$('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) setMenu(false);
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => {
    if (e.matches && drawer.classList.contains('is-open')) setMenu(false);
  });

  /* Reveal ao rolar */
  const reveals = $$('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  }

  /* Aviso de cookies */
  const cookie = $('.cookie');
  const COOKIE_KEY = 'mps-cookie-ok';
  if (cookie && store.get(COOKIE_KEY) !== '1') {
    cookie.hidden = false;
    const showTimer = setTimeout(() => cookie.classList.add('is-visible'), 1200);
    $('[data-cookie-ok]', cookie).addEventListener('click', () => {
      clearTimeout(showTimer);
      store.set(COOKIE_KEY, '1');
      cookie.classList.remove('is-visible');
      setTimeout(() => { cookie.hidden = true; }, 400);
    });
  }

  /* Ano no rodapé */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
