/**
 * ============================================================
 *  AntiGravity Portfolio — Main JavaScript
 * ============================================================
 *  Pure vanilla JS (ES6+). No frameworks, no dependencies.
 *  Handles navigation, animations, interactions & utilities.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------
   *  0. UTILITY HELPERS
   * ------------------------------------------------------ */

  /**
   * Debounce — delays `fn` execution until `wait` ms have
   * elapsed since the last invocation. Useful for scroll/resize.
   * @param {Function} fn   Callback to debounce
   * @param {number}   wait Milliseconds to wait
   * @returns {Function}
   */
  const debounce = (fn, wait = 15) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  };

  /**
   * Safe query — returns element or null without throwing.
   * @param {string} selector CSS selector
   * @param {Element} [root=document] Root element
   * @returns {Element|null}
   */
  const qs = (selector, root = document) => root.querySelector(selector);

  /**
   * Safe queryAll — always returns an array (never a live NodeList).
   * @param {string} selector CSS selector
   * @param {Element} [root=document] Root element
   * @returns {Element[]}
   */
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  /** Fixed header height used as scroll offset (px). */
  const HEADER_HEIGHT = 64;

  /* --------------------------------------------------------
   *  1. SMOOTH SCROLL NAVIGATION
   * ------------------------------------------------------ */

  /**
   * Intercept clicks on anchor links that point to an in-page
   * section (href="#...") and smooth-scroll to that section
   * with an offset equal to the fixed header height.
   */
  const initSmoothScroll = () => {
    // Collect every anchor whose href starts with '#' and has
    // at least one character after the hash.
    const navLinks = qsa('a[href^="#"]');

    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        // Ignore empty hashes like "#"
        if (!targetId || targetId === '#') return;

        const targetSection = qs(targetId);
        if (!targetSection) return;

        e.preventDefault();

        // Calculate position accounting for the sticky header
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          HEADER_HEIGHT;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Close mobile menu if it's open (cross-feature hook)
        closeMobileMenu();
      });
    });
  };

  /* --------------------------------------------------------
   *  2. ACTIVE NAV LINK HIGHLIGHTING
   * ------------------------------------------------------ */

  /**
   * Uses IntersectionObserver to watch each main section.
   * When a section occupies enough of the viewport the
   * corresponding nav link receives the `active` class.
   */
  const initActiveNavHighlight = () => {
    const sections = qsa('section[id]');
    const navLinks = qsa('a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    /**
     * Set the active class on the link whose href matches the
     * given section id, and remove it from all others.
     * @param {string} id Section id (without '#')
     */
    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    // rootMargin: negative top margin so a section is
    // "intersecting" only after it clears the fixed header,
    // and a generous negative bottom keeps the highlight from
    // jumping too soon when scrolling fast.
    const observerOptions = {
      root: null,
      rootMargin: `-${HEADER_HEIGHT}px 0px -40% 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  };

  /* --------------------------------------------------------
   *  3. SCROLL-BASED HEADER ENHANCEMENT
   * ------------------------------------------------------ */

  /**
   * Adds the `scrolled` class to <header> when the user has
   * scrolled past 50 px, giving it a subtle shadow / border.
   * Uses a debounced scroll listener for performance.
   */
  const initHeaderScroll = () => {
    const header = qs('header');
    if (!header) return;

    /** Track the last known state to avoid redundant DOM writes. */
    let isScrolled = false;

    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;

      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        header.classList.toggle('scrolled', isScrolled);
      }
    };

    // Fire once immediately in case the page loads already scrolled
    onScroll();

    window.addEventListener('scroll', debounce(onScroll, 10), { passive: true });
  };

  /* --------------------------------------------------------
   *  4. COPY EMAIL FUNCTIONALITY
   * ------------------------------------------------------ */

  /**
   * Clicking the #copy-email-btn copies the email address to
   * the clipboard and shows an inline tooltip "Email disalin!"
   * that auto-dismisses after 2 seconds.  Degrades gracefully
   * when the Clipboard API is unavailable.
   */
  const initCopyEmail = () => {
    const btn = qs('#copy-email-btn');
    if (!btn) return;

    const EMAIL = 'reynaldi@systems.core';

    btn.addEventListener('click', async () => {
      try {
        // Modern Clipboard API (requires secure context)
        await navigator.clipboard.writeText(EMAIL);
      } catch {
        // Fallback: hidden textarea trick
        const textarea = document.createElement('textarea');
        textarea.value = EMAIL;
        textarea.setAttribute('readonly', '');
        textarea.style.cssText = 'position:absolute;left:-9999px;';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      showCopyFeedback(btn);
    });
  };

  /**
   * Show a brief "Email disalin!" tooltip near the button.
   * Auto-removes itself after 2 seconds.
   * @param {Element} anchor Element to position the tooltip near
   */
  const showCopyFeedback = (anchor) => {
    // Prevent stacking multiple tooltips
    const existing = qs('.copy-tooltip');
    if (existing) existing.remove();

    const tooltip = document.createElement('span');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = 'Email disalin!';

    // Style the tooltip inline so it works without extra CSS
    Object.assign(tooltip.style, {
      position: 'absolute',
      top: '-2.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '0.35rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: '0.75rem',
      fontWeight: '500',
      color: '#fff',
      background: 'rgba(139, 92, 246, 0.85)',
      backdropFilter: 'blur(4px)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: '0',
      transition: 'opacity 0.25s ease',
      zIndex: '50',
    });

    // Ensure the parent is positioned so the tooltip can anchor
    if (getComputedStyle(anchor).position === 'static') {
      anchor.style.position = 'relative';
    }

    anchor.appendChild(tooltip);

    // Trigger reflow then fade in
    requestAnimationFrame(() => {
      tooltip.style.opacity = '1';
    });

    // Fade out & remove after 2 s
    setTimeout(() => {
      tooltip.style.opacity = '0';
      tooltip.addEventListener('transitionend', () => tooltip.remove(), { once: true });

      // Safety net: remove even if transitionend doesn't fire
      setTimeout(() => {
        if (tooltip.parentNode) tooltip.remove();
      }, 300);
    }, 2000);
  };

  /* --------------------------------------------------------
   *  5. MOBILE NAVIGATION TOGGLE
   * ------------------------------------------------------ */

  /** @type {boolean} Track mobile menu state */
  let mobileMenuOpen = false;

  /**
   * Close the mobile menu and reset the hamburger icon.
   * Exposed so other features (e.g. smooth scroll) can call it.
   */
  const closeMobileMenu = () => {
    const btn = qs('#mobile-menu-btn');
    const menu = qs('#mobile-nav');
    if (!btn || !menu) return;

    mobileMenuOpen = false;
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    // Restore body scroll
    document.body.style.overflow = '';
  };

  /**
   * Initialise the hamburger toggle button. The button's inner
   * spans animate from ☰ to ✕ via the `.open` class. The mobile
   * nav panel slides down smoothly.
   */
  const initMobileMenu = () => {
    const btn = qs('#mobile-menu-btn');
    const menu = qs('#mobile-nav');
    if (!btn || !menu) return;

    // Accessibility: ensure ARIA attributes exist
    btn.setAttribute('aria-controls', 'mobile-nav');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Toggle navigation menu');

    btn.addEventListener('click', () => {
      mobileMenuOpen = !mobileMenuOpen;

      btn.classList.toggle('open', mobileMenuOpen);
      btn.setAttribute('aria-expanded', String(mobileMenuOpen));
      menu.classList.toggle('open', mobileMenuOpen);

      // Prevent background scrolling when menu is open
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    });

    // Close when clicking outside the menu area
    document.addEventListener('click', (e) => {
      if (mobileMenuOpen && !btn.contains(e.target) && !menu.contains(e.target)) {
        closeMobileMenu();
      }
    });
  };

  /* --------------------------------------------------------
   *  6. SCROLL REVEAL ANIMATIONS
   * ------------------------------------------------------ */

  /**
   * Elements with class `reveal` fade-in and slide-up as they
   * enter the viewport.  The `revealed` class is added once,
   * meaning the animation plays only the first time.
   */
  const initScrollReveal = () => {
    const revealElements = qsa('.reveal');
    if (revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use rAF to batch the class change with the next paint
          requestAnimationFrame(() => {
            entry.target.classList.add('revealed');
          });

          // Stop watching — the animation is one-shot
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => revealObserver.observe(el));
  };

  /* --------------------------------------------------------
   *  7. PARALLAX AMBIENT GLOW (Hero Section)
   * ------------------------------------------------------ */

  /**
   * On desktop the `.hero-glow` backdrop gradient subtly
   * follows the mouse cursor, creating a living ambient light.
   * Uses requestAnimationFrame for jank-free updates.
   */
  const initParallaxGlow = () => {
    const glow = qs('.hero-glow');
    if (!glow) return;

    // Skip on touch devices — no persistent cursor
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    /** Normalised mouse position (0 → 1) */
    let mouseX = 0.5;
    let mouseY = 0.5;

    /** Currently rendered position (lerped) */
    let currentX = 0.5;
    let currentY = 0.5;

    /** Animation frame handle for cleanup */
    let rafId = null;

    /** Whether the cursor is inside the hero area */
    let isActive = false;

    const heroSection = glow.closest('section') || glow.parentElement;

    // Track mouse movement inside the hero section
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;

      if (!isActive) {
        isActive = true;
        animate();
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      isActive = false;
      // Gently drift back to centre
      mouseX = 0.5;
      mouseY = 0.5;
    });

    /**
     * Lerp loop — smoothly interpolates the glow position
     * toward the current mouse coordinates.
     */
    const animate = () => {
      // Linear interpolation factor (lower = smoother / slower)
      const lerpFactor = 0.06;

      currentX += (mouseX - currentX) * lerpFactor;
      currentY += (mouseY - currentY) * lerpFactor;

      // Convert to percentage offsets from centre (±20% range)
      const offsetX = (currentX - 0.5) * 40; // -20% to +20%
      const offsetY = (currentY - 0.5) * 40;

      glow.style.transform = `translate(${offsetX}%, ${offsetY}%)`;

      // Keep animating while drifting back to centre
      const dx = Math.abs(mouseX - currentX);
      const dy = Math.abs(mouseY - currentY);

      if (dx > 0.001 || dy > 0.001) {
        rafId = requestAnimationFrame(animate);
      } else {
        isActive = false;
        cancelAnimationFrame(rafId);
      }
    };
  };

  /* --------------------------------------------------------
   *  8. CURRENT YEAR IN FOOTER
   * ------------------------------------------------------ */

  /**
   * Populates every element with class `current-year` with
   * the current four-digit year.
   */
  const initCurrentYear = () => {
    const yearElements = qsa('.current-year');
    const year = new Date().getFullYear();

    yearElements.forEach((el) => {
      el.textContent = year;
    });
  };

  /* --------------------------------------------------------
   *  🚀  INITIALISE ALL MODULES
   * ------------------------------------------------------ */

  initSmoothScroll();
  initActiveNavHighlight();
  initHeaderScroll();
  initCopyEmail();
  initMobileMenu();
  initScrollReveal();
  initParallaxGlow();
  initCurrentYear();
});
