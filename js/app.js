/* ============================================
   J&D Vantage Quant - Main Application Router
   SPA Navigation + Core Functionality
   ============================================ */

// ---- Global State ---- //
let currentPage = 'home';
let isMenuOpen = false;
let isInitialLoad = true;

// ---- Page Registry ---- //
// Each page file exposes a function like getHomePage(), getOfferingsPage(), etc.
// This object maps route names to their generator functions.
const pageRegistry = {};

function registerPage(name, generatorFn) {
    pageRegistry[name] = generatorFn;
}

// ---- Navigation ---- //
function navigateTo(pageName) {
    if (!pageRegistry[pageName]) {
        console.warn(`Page "${pageName}" not registered.`);
        return;
    }

    // Close mobile menu if open
    closeMobileMenu();

    // Update current page
    currentPage = pageName;

    // Render page content
    const appContainer = document.getElementById('app-content');
    if (appContainer) {
        appContainer.innerHTML = pageRegistry[pageName]();
    }

    // Scroll to top — instant on first load, smooth on navigation
    if (isInitialLoad) {
        window.scrollTo(0, 0);
        isInitialLoad = false;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav link
    updateActiveNav(pageName);

    // Re-initialize scroll reveals & animations
    setTimeout(() => {
        initScrollReveal();
        initHeroAnimations();
        animateBarCharts();
        initSnapScroll(pageName);
    }, 100);

    // Update browser URL (hash-based routing)
    window.location.hash = pageName;

    // Update page title
    updatePageTitle(pageName);
}

// ---- Update Active Navigation ---- //
function updateActiveNav(pageName) {
    // Desktop nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });

    // Dropdown items
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
        if (item.dataset.page === pageName) {
            const parentLink = item.closest('.nav-dropdown').querySelector('.nav-link');
            if (parentLink) parentLink.classList.add('active');
        }
    });

    // Mobile nav
    document.querySelectorAll('.mobile-nav-link, .mobile-nav-sub-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
}

// ---- Page Titles ---- //
function updatePageTitle(pageName) {
    const titles = {
        home: 'J&D Vantage Quant — Algorithmic Trading Solutions',
        offerings: 'Solutions — J&D Vantage Quant',
        about: 'About Us — J&D Vantage Quant',
        contact: 'Contact — J&D Vantage Quant',
        goldFxDetails: 'GoldFX Pro Strategy — J&D Vantage Quant',
        quantAccess: 'Quant Access — J&D Vantage Quant',
        howItWorks: 'How It Works — J&D Vantage Quant',
        terms: 'Terms & Conditions — J&D Vantage Quant',
        disclaimers: 'Disclaimers — J&D Vantage Quant',
        indicators: 'Custom Indicators — J&D Vantage Quant',
        products: 'Products — J&D Vantage Quant',
        consultation: 'Consultation — J&D Vantage Quant',
        customDev: 'Custom Development — J&D Vantage Quant',
        tradeCopier: 'Trade Copier — J&D Vantage Quant',
        goldClutch: 'GoldClutch EA — J&D Vantage Quant',
        goldShort: 'GoldShort EA — J&D Vantage Quant',
        goldShortSL: 'GoldShort SL EA — J&D Vantage Quant',
        brochure: 'Brochure — J&D Vantage Quant',
        refund: 'Refund Policy — J&D Vantage Quant',
        privacy: 'Privacy Policy — J&D Vantage Quant',
        referral: 'Partner Onboarding — J&D Vantage Quant',
    };
    document.title = titles[pageName] || 'J&D Vantage Quant';
}

// ---- Mobile Menu ---- //
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const toggle = document.getElementById('menu-toggle');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileNav.classList.add('open');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.querySelector('.header')?.classList.add('nav-open');
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const toggle = document.getElementById('menu-toggle');
    
    if (mobileNav) mobileNav.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelector('.header')?.classList.remove('nav-open');
    isMenuOpen = false;
}

// ---- Hero Stagger Animation ---- //
function initHeroAnimations() {
    const heroAnims = document.querySelectorAll('.hero-anim');
    if (heroAnims.length === 0) return;

    // Trigger staggered entrance after a tiny delay
    requestAnimationFrame(() => {
        heroAnims.forEach(el => {
            el.classList.add('hero-visible');
        });
    });

    // Scroll down indicator click
    const scrollCircle = document.querySelector('.scroll-circle');
    if (scrollCircle) {
        scrollCircle.addEventListener('click', () => {
            const hero = document.getElementById('heroSection');
            if (hero) {
                const nextSection = hero.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// ---- Scroll Reveal (IntersectionObserver) ---- //
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(el => {
            // Don't re-observe already revealed elements
            if (!el.classList.contains('revealed')) {
                observer.observe(el);
            }
        });
    } else {
        // Fallback for older browsers
        reveals.forEach(el => el.classList.add('revealed'));
    }
}

// ---- Fullpage Smooth Scroll (home page only, desktop) ---- //
let fpActive = false;
let fpSections = [];
let fpCurrentIndex = 0;
let fpAnimating = false;
let fpWheelHandler = null;
let fpKeyHandler = null;
let fpTouchStartY = 0;
let fpTouchHandler = null;
let fpTouchEndHandler = null;

function initSnapScroll(pageName) {
    // Cleanup previous
    destroyFullpage();

    if (pageName === 'home' && window.innerWidth > 1024) {
        setupFullpage();
    }
}

function setupFullpage() {
    const appContent = document.getElementById('app-content');
    if (!appContent) return;

    fpSections = Array.from(appContent.querySelectorAll('.snap-panel'));
    if (fpSections.length === 0) return;

    fpActive = true;
    fpCurrentIndex = 0;
    fpAnimating = false;

    // Find which section is currently closest
    const scrollY = window.scrollY;
    let closest = 0;
    let closestDist = Infinity;
    fpSections.forEach((sec, i) => {
        const dist = Math.abs(sec.offsetTop - scrollY);
        if (dist < closestDist) {
            closestDist = dist;
            closest = i;
        }
    });
    fpCurrentIndex = closest;

    // Wheel handler — accumulate delta for smooth trackpad support
    let fpAccumulatedDelta = 0;
    let fpLastWheelTime = 0;
    const FP_DELTA_THRESHOLD = 60;
    const FP_COOLDOWN = 100; // ms between accepted scroll events

    fpWheelHandler = (e) => {
        e.preventDefault();
        if (!fpActive || fpAnimating) return;

        const now = Date.now();
        const delta = e.deltaY;

        // Reset accumulation if too much time passed (new gesture)
        if (now - fpLastWheelTime > 300) {
            fpAccumulatedDelta = 0;
        }
        fpLastWheelTime = now;

        // Accumulate delta for trackpad inertia
        fpAccumulatedDelta += delta;

        if (Math.abs(fpAccumulatedDelta) < FP_DELTA_THRESHOLD) return;

        // Reset accumulator
        const direction = fpAccumulatedDelta > 0 ? 1 : -1;
        fpAccumulatedDelta = 0;

        if (direction > 0) {
            // Scrolling DOWN
            if (fpCurrentIndex < fpSections.length - 1) {
                fpCurrentIndex++;
                scrollToSection(fpCurrentIndex);
            } else {
                // Past last panel — scroll to page bottom (footer)
                const docBottom = document.documentElement.scrollHeight - window.innerHeight;
                if (Math.abs(window.scrollY - docBottom) > 10) {
                    fpCurrentIndex = fpSections.length;
                    fpAnimating = true;
                    document.documentElement.classList.add('fp-animating');
                    smoothScrollTo(docBottom, 900, () => {
                        fpAnimating = false;
                        document.documentElement.classList.remove('fp-animating');
                    });
                }
            }
        } else {
            // Scrolling UP
            if (fpCurrentIndex >= fpSections.length) {
                fpCurrentIndex = fpSections.length - 1;
                scrollToSection(fpCurrentIndex);
            } else if (fpCurrentIndex > 0) {
                fpCurrentIndex--;
                scrollToSection(fpCurrentIndex);
            }
        }
    };

    // Keyboard handler (arrow keys, page up/down)
    fpKeyHandler = (e) => {
        if (!fpActive || fpAnimating) return;
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            if (fpCurrentIndex < fpSections.length - 1) {
                fpCurrentIndex++;
                scrollToSection(fpCurrentIndex);
            } else if (fpCurrentIndex === fpSections.length - 1) {
                // Scroll to footer
                const docBottom = document.documentElement.scrollHeight - window.innerHeight;
                if (Math.abs(window.scrollY - docBottom) > 10) {
                    fpCurrentIndex = fpSections.length;
                    fpAnimating = true;
                    document.documentElement.classList.add('fp-animating');
                    smoothScrollTo(docBottom, 750, () => {
                        fpAnimating = false;
                        document.documentElement.classList.remove('fp-animating');
                    });
                }
            }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            if (fpCurrentIndex >= fpSections.length) {
                fpCurrentIndex = fpSections.length - 1;
                scrollToSection(fpCurrentIndex);
            } else if (fpCurrentIndex > 0) {
                fpCurrentIndex--;
                scrollToSection(fpCurrentIndex);
            }
        }
    };

    // Touch handlers for trackpad swipe gestures
    fpTouchHandler = (e) => {
        fpTouchStartY = e.touches[0].clientY;
    };
    fpTouchEndHandler = (e) => {
        if (!fpActive || fpAnimating) return;
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDist = fpTouchStartY - touchEndY;
        if (Math.abs(swipeDist) < 50) return; // min swipe distance

        if (swipeDist > 0 && fpCurrentIndex < fpSections.length - 1) {
            fpCurrentIndex++;
            scrollToSection(fpCurrentIndex);
        } else if (swipeDist < 0 && fpCurrentIndex > 0) {
            fpCurrentIndex--;
            scrollToSection(fpCurrentIndex);
        }
    };

    window.addEventListener('wheel', fpWheelHandler, { passive: false });
    window.addEventListener('keydown', fpKeyHandler);
    window.addEventListener('touchstart', fpTouchHandler, { passive: true });
    window.addEventListener('touchend', fpTouchEndHandler, { passive: true });
}

function scrollToSection(index) {
    if (!fpSections[index]) return;

    fpAnimating = true;
    document.documentElement.classList.add('fp-animating');

    const target = fpSections[index].offsetTop;

    // Use smooth scroll with premium easing
    smoothScrollTo(target, 900, () => {
        fpAnimating = false;
        document.documentElement.classList.remove('fp-animating');
    });
}

function smoothScrollTo(targetY, duration, callback) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    if (Math.abs(diff) < 2) { if (callback) callback(); return; }
    let startTime = null;

    // Premium ease-in-out quart — smooth acceleration & deceleration
    function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuart(progress);

        window.scrollTo(0, startY + diff * eased);

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            if (callback) callback();
        }
    }

    requestAnimationFrame(step);
}

function destroyFullpage() {
    fpActive = false;
    fpAnimating = false;
    document.documentElement.classList.remove('fp-animating');

    if (fpWheelHandler) {
        window.removeEventListener('wheel', fpWheelHandler);
        fpWheelHandler = null;
    }
    if (fpKeyHandler) {
        window.removeEventListener('keydown', fpKeyHandler);
        fpKeyHandler = null;
    }
    if (fpTouchHandler) {
        window.removeEventListener('touchstart', fpTouchHandler);
        fpTouchHandler = null;
    }
    if (fpTouchEndHandler) {
        window.removeEventListener('touchend', fpTouchEndHandler);
        fpTouchEndHandler = null;
    }

    fpSections = [];
}

// Handle resize — enable/disable fullpage
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
        destroyFullpage();
    } else if (typeof currentPage !== 'undefined' && currentPage === 'home' && !fpActive) {
        setupFullpage();
    }
});

// ---- Header Scroll Effect ---- //
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.scrollY;

                if (currentScroll > 80) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                    header.classList.remove('header-hidden');
                }

                // Hide on scroll down, show on scroll up
                if (currentScroll > lastScroll && currentScroll > 200) {
                    header.classList.add('header-hidden');
                } else if (currentScroll < lastScroll) {
                    header.classList.remove('header-hidden');
                }

                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ---- Back to Top Button ---- //
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---- Copy to Clipboard ---- //
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.textContent;
        btnElement.textContent = 'Copied!';
        btnElement.classList.add('copied');
        setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = btnElement.textContent;
        btnElement.textContent = 'Copied!';
        btnElement.classList.add('copied');
        setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.classList.remove('copied');
        }, 2000);
    });
}

// ---- Contact Form (EmailJS) ---- //
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_tq68f5a', 'template_ks3pz7a', form)
            .then(() => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.style.background = 'var(--gradient-green)';
                form.reset();
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                submitBtn.textContent = 'Error — Try Again';
                submitBtn.style.background = 'var(--gradient-danger)';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            });
    } else {
        // Fallback: Open mailto
        const name = form.querySelector('[name="from_name"]')?.value || '';
        const email = form.querySelector('[name="from_email"]')?.value || '';
        const subject = form.querySelector('[name="subject"]')?.value || '';
        const message = form.querySelector('[name="message"]')?.value || '';
        
        window.location.href = `mailto:jdvantagequant@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// ---- Hash-based Routing ---- //
function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && pageRegistry[hash]) {
        navigateTo(hash);
    }
}

// ---- Bar Chart Animation ---- //
function animateBarCharts() {
    const bars = document.querySelectorAll('.chart-bar');
    if (bars.length === 0) return;

    bars.forEach((bar, index) => {
        const targetHeight = bar.getAttribute('data-height');
        if (targetHeight) {
            // Stagger the animation for each bar
            setTimeout(() => {
                bar.style.height = targetHeight;
            }, index * 60);
        }
    });
}

// ---- Initialize Application ---- //
function initApp() {
    // Initialize header scroll
    initHeaderScroll();
    
    // Initialize back to top
    initBackToTop();
    
    // Handle hash routing
    window.addEventListener('hashchange', handleHashChange);
    
    // Load initial page from hash or default to home
    const initialPage = window.location.hash.replace('#', '') || 'home';
    if (pageRegistry[initialPage]) {
        navigateTo(initialPage);
    } else {
        navigateTo('home');
    }
}

// initApp() is called from index.html after page registration
