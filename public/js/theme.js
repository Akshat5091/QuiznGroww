/**
 * QuiznGroww Theme Manager
 * Handles Dark / Light mode switching, system preference detection,
 * and persistence in localStorage without Flash of Unstyled Content.
 */
(function () {
  const STORAGE_KEY = 'quizngroww-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    // Default to dark mode for studio vibe, or match system
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function updateThemeToggleIcons(theme) {
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach((btn) => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
    });
  }

  // Apply immediately before DOM render
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  window.QuiznGrowwTheme = {
    get: () => document.documentElement.getAttribute('data-theme') || 'dark',
    set: applyTheme,
    toggle: () => {
      const current = window.QuiznGrowwTheme.get();
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      return next;
    },
    initToggles: () => {
      updateThemeToggleIcons(window.QuiznGrowwTheme.get());
      document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
        btn.onclick = () => window.QuiznGrowwTheme.toggle();
      });
    },
  };

  function initAmbientBorderGlyphs() {
    if (document.querySelector('.ambient-cosmos-field')) return;

    const canvas = document.createElement('div');
    canvas.className = 'ambient-cosmos-field';
    canvas.setAttribute('aria-hidden', 'true');

    // Streamlined ambient knowledge particles (5 left, 5 right) for an airy, uncluttered aesthetic
    const glyphs = [
      // Left border zone (5 unique symbols: ⚡, 🧬, 🔬, 🧩, 🪐)
      { symbol: '⚡', top: '10%', left: '1.8vw', size: '1.7rem', color: '#f59e0b', anim: 'anim-drift-a', dur: '9.0s', del: '-2.0s' },
      { symbol: '🧬', top: '30%', left: '2.2vw', size: '1.6rem', color: '#10b981', anim: 'anim-drift-b', dur: '11.5s', del: '-4.5s' },
      { symbol: '🔬', top: '50%', left: '1.6vw', size: '1.7rem', color: '#06b6d4', anim: 'anim-drift-c', dur: '10.0s', del: '-1.8s' },
      { symbol: '🧩', top: '70%', left: '2.0vw', size: '1.6rem', color: '#f97316', anim: 'anim-drift-d', dur: '12.0s', del: '-6.0s' },
      { symbol: '🪐', top: '90%', left: '1.8vw', size: '1.7rem', color: '#6366f1', anim: 'anim-drift-b', dur: '12.5s', del: '-5.0s' },

      // Right border zone (5 unique symbols: 💡, ⚛, 🚀, 🔭, ✦)
      { symbol: '💡', top: '12%', right: '2.0vw', size: '1.7rem', color: '#fbbf24', anim: 'anim-drift-b', dur: '10.5s', del: '-3.0s' },
      { symbol: '⚛', top: '32%', right: '2.4vw', size: '1.8rem', color: '#38bdf8', anim: 'anim-drift-a', dur: '9.5s', del: '-1.5s' },
      { symbol: '🚀', top: '52%', right: '1.8vw', size: '1.7rem', color: '#ea580c', anim: 'anim-drift-c', dur: '8.8s', del: '-4.2s' },
      { symbol: '🔭', top: '72%', right: '2.2vw', size: '1.6rem', color: '#8b5cf6', anim: 'anim-drift-d', dur: '11.8s', del: '-6.5s' },
      { symbol: '✦', top: '92%', right: '1.8vw', size: '1.5rem', color: '#c084fc', anim: 'anim-drift-d', dur: '12.0s', del: '-7.5s' }
    ];

    canvas.innerHTML = glyphs.map((g) => {
      const posStyle = g.left ? `left: ${g.left};` : `right: ${g.right};`;
      return `
        <span class="ambient-random-glyph ${g.anim}" style="top: ${g.top}; ${posStyle} font-size: ${g.size}; color: ${g.color}; --dur: ${g.dur}; --del: ${g.del};">
          ${g.symbol}
        </span>
      `;
    }).join('');

    document.body.appendChild(canvas);
  }

  /**
   * Smart Header Auto-Hide on Scroll
   * Smoothly slides header out when scrolling down past threshold,
   * immediately reveals header when scrolling up or returning to top.
   */
  function initSmartHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;
    const SCROLL_THRESHOLD = 70; // Header auto-hides after scrolling down 70px

    function updateHeaderVisibility() {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Always show when near the top
      if (currentScrollY <= 25) {
        header.classList.remove('header-hidden');
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // Do not auto-hide if a modal overlay is currently open
      const hasOpenModal = document.querySelector('.modal-overlay:not(.hidden)');
      if (hasOpenModal) {
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      const delta = currentScrollY - lastScrollY;

      // Scrolled down past threshold -> slide out smoothly
      if (delta > 6 && currentScrollY > SCROLL_THRESHOLD) {
        header.classList.add('header-hidden');

        // Close user dropdown menu if open when scrolling down
        const userDropdown = document.getElementById('user-dropdown-menu');
        if (userDropdown && !userDropdown.classList.contains('hidden')) {
          userDropdown.classList.add('hidden');
        }
      }
      // Scrolled up -> reveal header instantly
      else if (delta < -6) {
        header.classList.remove('header-hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderVisibility);
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * Seamless Zero-Blink Client-Side Page Router (QuiznGrowwNav)
   * Prevents browser MPA white/dark flash, teardown, and header/footer refresh.
   * Utilizes View Transitions API when available with instant hover prefetching.
   */
  const pageCache = new Map();

  function normalizePath(pathname) {
    if (!pathname) return '/';
    let p = pathname.replace(/\/$/, '') || '/';
    if (p === '/html/index.html' || p === '/index.html') return '/';
    if (p === '/html/topics.html') return '/topics';
    if (p === '/html/leaderboard.html') return '/leaderboard';
    if (p === '/html/about.html') return '/about';
    if (p === '/html/contact.html') return '/contact';
    if (p === '/html/feedback.html') return '/feedback';
    return p;
  }

  function updateActiveNav(targetPath) {
    const cleanPath = normalizePath((targetPath || window.location.pathname).split('?')[0]);
    document.querySelectorAll('.site-header .nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = normalizePath(href.split('?')[0]);
      if (linkPath === cleanPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  async function fetchPage(url) {
    const cacheKey = url.pathname + url.search;
    if (pageCache.has(cacheKey)) {
      return pageCache.get(cacheKey);
    }
    const res = await fetch(cacheKey, {
      headers: { 'X-Requested-With': 'QuiznGroww-SPA' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    pageCache.set(cacheKey, html);
    return html;
  }

  function prefetchLink(url) {
    if (!url || url.origin !== window.location.origin) return;
    if (url.pathname === '/quiz') return;
    const cacheKey = url.pathname + url.search;
    if (pageCache.has(cacheKey)) return;
    fetchPage(url).catch(() => {});
  }

  function loadScript(src, requiredGlobal) {
    return new Promise((resolve) => {
      if (requiredGlobal && typeof window[requiredGlobal] === 'function') {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = (err) => {
        console.error('Failed to load script:', src, err);
        resolve();
      };
      document.body.appendChild(s);
    });
  }

  async function executePageInit(pathname) {
    const path = normalizePath(pathname);
    if (path === '/') {
      if (typeof window.initHomePage !== 'function') {
        await loadScript('/js/main.js?v=5.0', 'initHomePage');
      }
      if (typeof window.initHomePage === 'function') {
        window.initHomePage();
      }
    } else if (path === '/topics') {
      if (typeof window.initTopicsPage !== 'function') {
        await loadScript('/js/topics.js?v=5.0', 'initTopicsPage');
      }
      if (typeof window.initTopicsPage === 'function') {
        window.initTopicsPage();
      }
    } else if (path === '/leaderboard') {
      if (typeof window.initLeaderboardPage !== 'function') {
        await loadScript('/js/leaderboard.js?v=5.0', 'initLeaderboardPage');
      }
      if (typeof window.initLeaderboardPage === 'function') {
        window.initLeaderboardPage();
      }
    } else if (path === '/about') {
      if (typeof window.initAboutPage !== 'function') {
        await loadScript('/js/about.js?v=5.0', 'initAboutPage');
      }
      if (typeof window.initAboutPage === 'function') {
        window.initAboutPage();
      }
    } else if (path === '/contact') {
      if (typeof window.initContactPage !== 'function') {
        await loadScript('/js/contact.js?v=5.0', 'initContactPage');
      }
      if (typeof window.initContactPage === 'function') {
        window.initContactPage();
      }
    } else if (path === '/feedback') {
      if (typeof window.initFeedbackPage !== 'function') {
        await loadScript('/js/feedback.js?v=5.0', 'initFeedbackPage');
      }
      if (typeof window.initFeedbackPage === 'function') {
        window.initFeedbackPage();
      }
    }

    // Always re-wire global header/auth/sound bindings
    if (window.QuiznGrowwTheme?.initToggles) window.QuiznGrowwTheme.initToggles();
    if (window.QuiznGrowwSound?.init) window.QuiznGrowwSound.init();
    if (window.QuiznGrowwAuth?.renderNav) window.QuiznGrowwAuth.renderNav();
    document.dispatchEvent(new CustomEvent('quizngroww:page-loaded', { detail: { path } }));
  }

  let isNavigating = false;

  async function navigate(targetUrlString, options = {}) {
    if (isNavigating) return;
    const url = new URL(targetUrlString, window.location.origin);
    if (url.origin !== window.location.origin) {
      window.location.href = url.href;
      return;
    }

    // Quiz gameplay runs natively for isolation
    if (url.pathname === '/quiz') {
      window.location.href = url.href;
      return;
    }

    const currentKey = window.location.pathname + window.location.search;
    const targetKey = url.pathname + url.search;
    if (currentKey === targetKey && !options.force && !url.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    isNavigating = true;

    try {
      // 1. Fetch target HTML (often already in pageCache from hover prefetch)
      const htmlText = await fetchPage(url);
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(htmlText, 'text/html');

      const currentContent = document.getElementById('page-content');
      const newContent = newDoc.getElementById('page-content');

      if (!currentContent || !newContent) {
        // Fallback to normal navigation if page-content container is absent
        window.location.href = url.href;
        return;
      }

      // Update URL in browser address bar (unless popstate)
      if (!options.isPopState) {
        window.history.pushState({ path: targetKey }, '', targetKey);
      }

      // Update page title
      if (newDoc.title) {
        document.title = newDoc.title;
      }

      // Update header nav active tab indicator
      updateActiveNav(url.pathname);

      // Slide header back into view if it was auto-hidden
      const header = document.querySelector('.site-header');
      if (header) header.classList.remove('header-hidden');

      // Close any open dropdowns or modal overlays
      const dropdown = document.getElementById('user-dropdown-menu');
      if (dropdown) dropdown.classList.add('hidden');
      document.querySelectorAll('.modal-overlay').forEach((m) => {
        m.classList.remove('active');
        m.classList.add('hidden');
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Apply seamless transition: Native View Transitions or smooth CSS cross-fade
      if (document.startViewTransition) {
        await document.startViewTransition(() => {
          currentContent.innerHTML = newContent.innerHTML;
        }).finished;
      } else {
        currentContent.classList.add('page-transitioning');
        await new Promise((r) => setTimeout(r, 60));
        currentContent.innerHTML = newContent.innerHTML;
        currentContent.classList.remove('page-transitioning');
      }

      // Execute scripts for newly loaded page
      await executePageInit(url.pathname);

    } catch (err) {
      console.error('Seamless navigation error, falling back:', err);
      window.location.href = url.href;
    } finally {
      isNavigating = false;
    }
  }

  function initSpaRouter() {
    // Intercept clicks on internal links
    document.addEventListener('click', (e) => {
      // Ignore clicks with modifier keys (ctrl, meta, shift, alt)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.defaultPrevented) return;

      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Ignore anchor jumps on same page, javascript:, mailto:, tel:
      if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      // Ignore links explicitly targeting another tab/window or download
      if (link.target === '_blank' || link.hasAttribute('download')) {
        return;
      }

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      // If linking to /quiz, let native handle it
      if (url.pathname === '/quiz') return;

      // Intercept and smoothly navigate!
      e.preventDefault();
      if (window.QuiznGrowwSound?.click) window.QuiznGrowwSound.click();
      navigate(link.href);
    });

    // Hover / touch prefetch for instant 0ms transitions
    document.addEventListener('pointerenter', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript:') || link.target === '_blank') return;
      try {
        const url = new URL(link.href, window.location.origin);
        prefetchLink(url);
      } catch (err) {}
    }, { capture: true, passive: true });

    document.addEventListener('touchstart', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript:') || link.target === '_blank') return;
      try {
        const url = new URL(link.href, window.location.origin);
        prefetchLink(url);
      } catch (err) {}
    }, { capture: true, passive: true });

    // Handle browser Back / Forward buttons smoothly
    window.addEventListener('popstate', () => {
      navigate(window.location.href, { isPopState: true });
    });

    // Initial page active state check
    updateActiveNav(window.location.pathname);
  }

  window.QuiznGrowwNav = {
    navigate,
    prefetch: prefetchLink,
    updateActiveNav,
    init: initSpaRouter,
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.QuiznGrowwTheme.initToggles();
    initAmbientBorderGlyphs();
    initSmartHeaderScroll();
    initSpaRouter();
  });
})();

