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

    // Scroll to top instantly BEFORE swapping content (prevents seeing old page scroll)
    window.scrollTo(0, 0);

    // Render page content with a brief fade transition
    const appContainer = document.getElementById('app-content');
    if (appContainer) {
        if (!isInitialLoad) {
            appContainer.style.opacity = '0';
            appContainer.style.transform = 'translateY(12px)';
        }
        appContainer.innerHTML = pageRegistry[pageName]();
        
        if (!isInitialLoad) {
            // Trigger reflow then animate in
            void appContainer.offsetHeight;
            appContainer.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            appContainer.style.opacity = '1';
            appContainer.style.transform = 'translateY(0)';
            // Clean up inline styles after animation
            setTimeout(() => {
                appContainer.style.transition = '';
                appContainer.style.opacity = '';
                appContainer.style.transform = '';
            }, 400);
        }
    }

    if (isInitialLoad) {
        isInitialLoad = false;
    }

    // Update active nav link
    updateActiveNav(pageName);

    // Re-initialize scroll reveals & animations
    setTimeout(() => {
        initScrollReveal();
        initHeroAnimations();
        animateBarCharts();
        initSnapScroll(pageName);
        initScrollIndicatorFade();
        initCountUpStats();
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

// ---- Fullpage Smooth Scroll — DISABLED (using normal scroll) ---- //
function initSnapScroll(pageName) {
    // Normal scrolling — no snap/fullpage behavior
    return;
}

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

// ---- Scroll Indicator Fade ---- //
function initScrollIndicatorFade() {
    const indicator = document.querySelector('.hero-scroll-indicator');
    if (!indicator) return;

    let faded = false;
    const onScroll = () => {
        if (window.scrollY > 100 && !faded) {
            faded = true;
            indicator.style.transition = 'opacity 0.5s ease';
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else if (window.scrollY <= 100 && faded) {
            faded = false;
            indicator.style.opacity = '1';
            indicator.style.pointerEvents = '';
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ---- Count-Up Animation for Stats ---- //
function initCountUpStats() {
    const statValues = document.querySelectorAll('.fold2-stat-value');
    if (statValues.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(el => observer.observe(el));
}

function animateValue(el) {
    const text = el.textContent.trim();
    const prefix = text.match(/^[+$]*/)?.[0] || '';
    const suffix = text.match(/[%]*$/)?.[0] || '';
    const core = text.replace(prefix, '').replace(suffix, '');

    // Handle fraction format like "18/18"
    if (core.includes('/')) {
        const [num, den] = core.split('/').map(Number);
        let current = 0;
        const duration = 1200;
        const startTime = performance.now();
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            current = Math.round(eased * num);
            el.textContent = `${prefix}${current}/${den}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        return;
    }

    const numValue = parseFloat(core);
    if (isNaN(numValue)) return;

    const isInt = !core.includes('.');
    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * numValue;
        el.textContent = `${prefix}${isInt ? Math.round(current) : current.toFixed(core.split('.')[1]?.length || 0)}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

// ---- Initialize Application ---- //
function initApp() {
    // Ensure scroll is never blocked on init
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

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
