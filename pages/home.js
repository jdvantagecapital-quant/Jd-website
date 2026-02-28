/* ============================================
   Home Page - J&D Vantage Quant
   Complete Redesign — Feb 2026
   ============================================ */

function getHomePage() {
    return `
    <!-- ======== HERO SECTION ======== -->
    <section class="hero snap-panel" id="heroSection">
        <!-- Background accents -->
        <div class="hero-bg-accent hero-bg-accent-1"></div>
        <div class="hero-bg-accent hero-bg-accent-2"></div>
        <div class="hero-bg-accent hero-bg-accent-3"></div>

        <div class="container">
            <div class="hero-center">
                <h1 class="hero-title hero-title-center">
                    <span class="title-line hero-anim" data-delay="1">Algorithmic</span>
                    <span class="title-line title-gradient-fire hero-anim" data-delay="2">Gold Trading</span>
                    <span class="title-line hero-line-sub hero-anim" data-delay="3">Engineered for Precision</span>
                </h1>

                <p class="hero-desc hero-desc-center hero-anim" data-delay="4">
                    Verified live results. Client fund custody. Performance-only fees.<br>
                    Deploy institutional-grade algorithms starting from <strong class="text-green">$300</strong>.
                </p>

                <div class="hero-cta hero-anim" data-delay="5" style="justify-content:center;">
                    <a href="#" class="btn btn-hero-primary" onclick="navigateTo('offerings'); return false;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        Deploy Now
                    </a>
                    <a href="#" class="btn btn-hero-secondary" onclick="navigateTo('howItWorks'); return false;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        How It Works
                    </a>
                </div>

                <!-- Scroll Down Indicator -->
                <div class="hero-scroll-indicator hero-anim" data-delay="6">
                    <div class="scroll-circle">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ======== FOLD 2 — AT A GLANCE ======== -->
    <section class="fold2 snap-panel">
        <div class="container">
            <!-- Top: Tagline -->
            <div class="fold2-header reveal">
                <span class="fold2-label">At a Glance</span>
                <h2 class="fold2-title">Engineered for <span class="text-gradient">Performance</span></h2>
            </div>

            <!-- Middle: Stat Boxes -->
            <div class="fold2-stats reveal">
                <div class="fold2-stat-card">
                    <span class="fold2-stat-value text-green">+593%</span>
                    <span class="fold2-stat-label">Flagship Return</span>
                    <span class="fold2-stat-sub">GoldFX Pro · 18 months</span>
                </div>
                <div class="fold2-stat-card">
                    <span class="fold2-stat-value text-cyan">18/18</span>
                    <span class="fold2-stat-label">Profitable Months</span>
                    <span class="fold2-stat-sub">Zero losing months</span>
                </div>
                <div class="fold2-stat-card">
                    <span class="fold2-stat-value text-amber">4</span>
                    <span class="fold2-stat-label">Active Strategies</span>
                    <span class="fold2-stat-sub">Gold-focused EAs</span>
                </div>
                <div class="fold2-stat-card">
                    <span class="fold2-stat-value text-purple">$300</span>
                    <span class="fold2-stat-label">Minimum Capital</span>
                    <span class="fold2-stat-sub">No lock-up period</span>
                </div>
            </div>

            <!-- Bottom: Quick Nav Cards -->
            <div class="fold2-nav reveal">
                <a href="#" class="fold2-nav-card" onclick="navigateTo('offerings'); return false;">
                    <div class="fold2-nav-icon icon-box-purple">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                    </div>
                    <div class="fold2-nav-text">
                        <span class="fold2-nav-name">Strategies</span>
                        <span class="fold2-nav-desc">Explore all EAs & performance</span>
                    </div>
                    <span class="fold2-nav-arrow">→</span>
                </a>
                <a href="#" class="fold2-nav-card" onclick="navigateTo('quantAccess'); return false;">
                    <div class="fold2-nav-icon icon-box-green">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    </div>
                    <div class="fold2-nav-text">
                        <span class="fold2-nav-name">Managed Trading</span>
                        <span class="fold2-nav-desc">Deploy capital with our algorithms</span>
                    </div>
                    <span class="fold2-nav-arrow">→</span>
                </a>
                <a href="#" class="fold2-nav-card" onclick="navigateTo('tradeCopier'); return false;">
                    <div class="fold2-nav-icon icon-box-cyan">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </div>
                    <div class="fold2-nav-text">
                        <span class="fold2-nav-name">Trade Copier</span>
                        <span class="fold2-nav-desc">Mirror trades in milliseconds</span>
                    </div>
                    <span class="fold2-nav-arrow">→</span>
                </a>
            </div>

            <!-- Trust Strip -->
            <div class="fold2-trust reveal">
                <span class="fold2-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Client Fund Custody
                </span>
                <span class="fold2-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Performance Fees Only
                </span>
                <span class="fold2-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Verified Results
                </span>
                <span class="fold2-trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Withdraw Anytime
                </span>
            </div>
        </div>
    </section>

    <!-- ======== FEATURED STRATEGY SPOTLIGHT ======== -->
    <section class="section snap-panel">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Flagship Strategy
                </span>
                <h2 class="section-title">GoldFX Pro — Our Best Performer</h2>
                <p class="section-subtitle">Multi-pair XAUUSD strategy delivering consistent returns for 18 consecutive profitable months.</p>
            </div>

            <div class="featured-strategy-card reveal">
                <div class="featured-strategy-inner">
                    <div class="featured-strategy-left">
                        <div class="featured-strategy-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            Flagship Strategy
                        </div>
                        <h3 class="featured-strategy-name">GoldFX Pro</h3>
                        <p class="featured-strategy-desc">
                            Our premier multi-pair gold algorithm combining swing and momentum strategies across multiple timeframes. Backtested over 18 months with zero losing months and a Sharpe Ratio of 3.21.
                        </p>

                        <div class="featured-strategy-stats">
                            <div class="featured-stat">
                                <span class="featured-stat-value text-green">+593%</span>
                                <span class="featured-stat-label">Total Return</span>
                            </div>
                            <div class="featured-stat">
                                <span class="featured-stat-value text-cyan">18/18</span>
                                <span class="featured-stat-label">Profitable Months</span>
                            </div>
                            <div class="featured-stat">
                                <span class="featured-stat-value text-green">18.2%</span>
                                <span class="featured-stat-label">Max Drawdown</span>
                            </div>
                            <div class="featured-stat">
                                <span class="featured-stat-value text-amber">3.21</span>
                                <span class="featured-stat-label">Sharpe Ratio</span>
                            </div>
                        </div>

                        <div class="featured-strategy-cta">
                            <a href="#" class="btn btn-primary" onclick="navigateTo('goldFxDetails'); return false;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                                View Full Report
                            </a>
                            <a href="#" class="btn btn-secondary" onclick="navigateTo('quantAccess'); return false;">
                                Start Trading →
                            </a>
                        </div>
                    </div>
                    <div class="featured-strategy-right">
                        <div class="featured-strategy-chart-wrapper">
                            <div class="featured-chart-header">
                                <span class="featured-chart-title">Equity Curve</span>
                                <span class="featured-chart-period">Jan 2024 – Jun 2025</span>
                            </div>
                            <div class="featured-chart-visual">
                                <svg viewBox="0 0 400 160" preserveAspectRatio="none" class="featured-chart-svg">
                                    <defs>
                                        <linearGradient id="featuredGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style="stop-color:rgb(16,185,129);stop-opacity:1"/>
                                            <stop offset="50%" style="stop-color:rgb(34,211,238);stop-opacity:1"/>
                                            <stop offset="100%" style="stop-color:rgb(124,58,237);stop-opacity:1"/>
                                        </linearGradient>
                                        <linearGradient id="featuredFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(16,185,129);stop-opacity:0.25"/>
                                            <stop offset="100%" style="stop-color:rgb(16,185,129);stop-opacity:0"/>
                                        </linearGradient>
                                    </defs>
                                    <!-- Grid lines -->
                                    <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                                    <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                                    <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                                    <!-- Equity curve -->
                                    <path d="M0,145 L22,140 L44,135 L66,128 L88,120 L110,112 L132,105 L154,95 L176,88 L198,78 L220,70 L242,60 L264,52 L286,42 L308,35 L330,28 L352,20 L374,15 L400,8" fill="none" stroke="url(#featuredGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M0,145 L22,140 L44,135 L66,128 L88,120 L110,112 L132,105 L154,95 L176,88 L198,78 L220,70 L242,60 L264,52 L286,42 L308,35 L330,28 L352,20 L374,15 L400,8 L400,160 L0,160 Z" fill="url(#featuredFill)"/>
                                </svg>
                            </div>
                            <div class="featured-chart-labels">
                                <span>Jan 24</span>
                                <span>Jul 24</span>
                                <span>Jan 25</span>
                                <span>Jun 25</span>
                            </div>
                        </div>

                        <div class="featured-strategy-meta">
                            <div class="featured-meta-item">
                                <span class="featured-meta-label">Pairs</span>
                                <span class="featured-meta-value">XAUUSD Multi-Pair</span>
                            </div>
                            <div class="featured-meta-item">
                                <span class="featured-meta-label">Timeframe</span>
                                <span class="featured-meta-value">M15 / H1 / H4</span>
                            </div>
                            <div class="featured-meta-item">
                                <span class="featured-meta-label">Platform</span>
                                <span class="featured-meta-value">MetaTrader 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ======== STRATEGY CARDS ======== -->
    <section class="section snap-panel" style="background: var(--color-bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                    Our Strategies
                </span>
                <h2 class="section-title">Expert Advisor Performance</h2>
                <p class="section-subtitle">Four unique gold trading algorithms. All results based on $10,000 initial capital with verified backtests.</p>
            </div>

            <!-- Strategy Cards Grid — All 4 EAs -->
            <div class="ea-cards-grid-v2 reveal">
                <!-- GoldFX Pro -->
                <div class="ea-card-v2 ea-card-featured">
                    <div class="ea-card-v2-ribbon">⭐ Flagship</div>
                    <div class="ea-card-v2-header">
                        <div class="ea-card-v2-icon icon-box-amber">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </div>
                        <h4 class="ea-card-v2-name">GoldFX Pro</h4>
                        <span class="ea-card-v2-type">Multi-Pair Swing</span>
                    </div>
                    <div class="ea-card-v2-chart">
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gfxMini" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" style="stop-color:rgb(16,185,129);stop-opacity:0.3"/>
                                    <stop offset="100%" style="stop-color:rgb(16,185,129);stop-opacity:0"/>
                                </linearGradient>
                            </defs>
                            <path d="M0,38 L7,36 L14,34 L21,31 L28,28 L35,25 L42,22 L49,19 L56,17 L63,14 L70,12 L77,10 L84,8 L91,6 L98,5 L105,4 L112,3 L120,2" fill="none" stroke="#10b981" stroke-width="1.5"/>
                            <path d="M0,38 L7,36 L14,34 L21,31 L28,28 L35,25 L42,22 L49,19 L56,17 L63,14 L70,12 L77,10 L84,8 L91,6 L98,5 L105,4 L112,3 L120,2 L120,40 L0,40 Z" fill="url(#gfxMini)"/>
                        </svg>
                    </div>
                    <div class="ea-card-v2-stats">
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-green">+593%</span>
                            <span class="ea-card-v2-stat-lbl">Return</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-green">18.2%</span>
                            <span class="ea-card-v2-stat-lbl">Max DD</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-amber">3.21</span>
                            <span class="ea-card-v2-stat-lbl">Sharpe</span>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary btn-sm ea-card-v2-btn" onclick="navigateTo('goldFxDetails'); return false;">View Details</a>
                </div>

                <!-- GoldClutch -->
                <div class="ea-card-v2">
                    <div class="ea-card-v2-header">
                        <div class="ea-card-v2-icon icon-box-cyan">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <h4 class="ea-card-v2-name">GoldClutch</h4>
                        <span class="ea-card-v2-type">Swing Trading</span>
                    </div>
                    <div class="ea-card-v2-chart">
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gcMini" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" style="stop-color:rgb(34,211,238);stop-opacity:0.3"/>
                                    <stop offset="100%" style="stop-color:rgb(34,211,238);stop-opacity:0"/>
                                </linearGradient>
                            </defs>
                            <path d="M0,36 L10,34 L20,32 L30,30 L40,27 L50,28 L60,24 L70,21 L80,18 L90,15 L100,12 L110,9 L120,6" fill="none" stroke="#22d3ee" stroke-width="1.5"/>
                            <path d="M0,36 L10,34 L20,32 L30,30 L40,27 L50,28 L60,24 L70,21 L80,18 L90,15 L100,12 L110,9 L120,6 L120,40 L0,40 Z" fill="url(#gcMini)"/>
                        </svg>
                    </div>
                    <div class="ea-card-v2-stats">
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-green">+79.5%</span>
                            <span class="ea-card-v2-stat-lbl">Return</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-amber">19.9%</span>
                            <span class="ea-card-v2-stat-lbl">Max DD</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-cyan">2.47</span>
                            <span class="ea-card-v2-stat-lbl">Sharpe</span>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-cyan btn-sm ea-card-v2-btn" onclick="navigateTo('goldClutch'); return false;">View Details</a>
                </div>

                <!-- GoldShort -->
                <div class="ea-card-v2">
                    <div class="ea-card-v2-header">
                        <div class="ea-card-v2-icon icon-box-red">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        </div>
                        <h4 class="ea-card-v2-name">GoldShort</h4>
                        <span class="ea-card-v2-type">HF Scalping · <span class="text-red">⚠ High Risk</span></span>
                    </div>
                    <div class="ea-card-v2-chart">
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gsMini" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" style="stop-color:rgb(124,58,237);stop-opacity:0.3"/>
                                    <stop offset="100%" style="stop-color:rgb(124,58,237);stop-opacity:0"/>
                                </linearGradient>
                            </defs>
                            <path d="M0,38 L8,36 L16,33 L24,29 L32,26 L40,22 L48,19 L56,15 L64,12 L72,10 L80,8 L88,7 L96,5 L104,4 L112,3 L120,2" fill="none" stroke="#7c3aed" stroke-width="1.5"/>
                            <path d="M0,38 L8,36 L16,33 L24,29 L32,26 L40,22 L48,19 L56,15 L64,12 L72,10 L80,8 L88,7 L96,5 L104,4 L112,3 L120,2 L120,40 L0,40 Z" fill="url(#gsMini)"/>
                        </svg>
                    </div>
                    <div class="ea-card-v2-stats">
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-green">+328%</span>
                            <span class="ea-card-v2-stat-lbl">Return</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-red">53.6%</span>
                            <span class="ea-card-v2-stat-lbl">Max DD</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-purple">1.30</span>
                            <span class="ea-card-v2-stat-lbl">Sharpe</span>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-purple btn-sm ea-card-v2-btn" onclick="navigateTo('goldShort'); return false;">View Details</a>
                </div>

                <!-- GoldShort SL -->
                <div class="ea-card-v2">
                    <div class="ea-card-v2-header">
                        <div class="ea-card-v2-icon icon-box-green">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h4 class="ea-card-v2-name">GoldShort SL</h4>
                        <span class="ea-card-v2-type">Protected Scalping</span>
                    </div>
                    <div class="ea-card-v2-chart">
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gsslMini" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" style="stop-color:rgb(16,185,129);stop-opacity:0.3"/>
                                    <stop offset="100%" style="stop-color:rgb(16,185,129);stop-opacity:0"/>
                                </linearGradient>
                            </defs>
                            <path d="M0,37 L10,35 L20,33 L30,30 L40,28 L50,26 L60,23 L70,20 L80,17 L90,14 L100,11 L110,8 L120,5" fill="none" stroke="#10b981" stroke-width="1.5"/>
                            <path d="M0,37 L10,35 L20,33 L30,30 L40,28 L50,26 L60,23 L70,20 L80,17 L90,14 L100,11 L110,8 L120,5 L120,40 L0,40 Z" fill="url(#gsslMini)"/>
                        </svg>
                    </div>
                    <div class="ea-card-v2-stats">
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-green">+70%</span>
                            <span class="ea-card-v2-stat-lbl">Return</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-amber">32.5%</span>
                            <span class="ea-card-v2-stat-lbl">Max DD</span>
                        </div>
                        <div class="ea-card-v2-stat">
                            <span class="ea-card-v2-stat-val text-cyan">1.00</span>
                            <span class="ea-card-v2-stat-lbl">Sharpe</span>
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-purple btn-sm ea-card-v2-btn" onclick="navigateTo('goldShortSL'); return false;">View Details</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ======== COMPARISON TABLE ======== -->
    <section class="section snap-panel" style="background: var(--color-bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2" ry="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="10" y1="3" x2="10" y2="21"/></svg>
                    Full Comparison
                </span>
                <h2 class="section-title">Strategy Comparison</h2>
            </div>

            <!-- Full Comparison Table -->
            <div class="table-wrapper reveal" style="margin-top: var(--space-10);">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Strategy</th>
                            <th>Net Profit</th>
                            <th>Return %</th>
                            <th>Max DD</th>
                            <th>Win Rate</th>
                            <th>Sharpe</th>
                            <th>Period</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="highlight-row">
                            <td>
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <span class="badge badge-purple">⭐ Flagship</span>
                                    <strong style="color:var(--color-purple-light)">GoldFX Pro</strong>
                                </div>
                            </td>
                            <td><span class="text-green" style="font-weight:700">$59,317</span></td>
                            <td><span class="text-green" style="font-weight:700">+593%</span></td>
                            <td><span class="text-green">18.2%</span></td>
                            <td>72.7%</td>
                            <td style="color:var(--color-green)">3.21</td>
                            <td><span class="text-muted">18 Months</span></td>
                            <td><a href="#" class="btn btn-sm btn-primary" onclick="navigateTo('goldFxDetails'); return false;">Details</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <span class="badge badge-amber">Swing</span>
                                    <strong style="color:var(--text-primary)">GoldClutch</strong>
                                </div>
                            </td>
                            <td><span class="text-green">$7,945</span></td>
                            <td><span class="text-green">+79.5%</span></td>
                            <td><span class="text-amber">19.90%</span></td>
                            <td>—</td>
                            <td>2.47</td>
                            <td><span class="text-muted">Jan–Dec 25</span></td>
                            <td><a href="#" class="btn btn-sm btn-outline-purple" onclick="navigateTo('goldClutch'); return false;">Details</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <span class="badge badge-red">⚠ Risk</span>
                                    <strong style="color:var(--text-primary)">GoldShort</strong>
                                </div>
                            </td>
                            <td><span class="text-green">$32,798</span></td>
                            <td><span class="text-green">+328%</span></td>
                            <td><span class="text-red">53.6%</span></td>
                            <td>73%</td>
                            <td>1.30</td>
                            <td><span class="text-muted">Mar–Dec 25</span></td>
                            <td><a href="#" class="btn btn-sm btn-outline-purple" onclick="navigateTo('goldShort'); return false;">Details</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <span class="badge badge-green">🛡 Safe</span>
                                    <strong style="color:var(--text-primary)">GoldShort SL</strong>
                                </div>
                            </td>
                            <td><span class="text-green">$7,000</span></td>
                            <td><span class="text-green">+70%</span></td>
                            <td><span class="text-amber">32.5%</span></td>
                            <td>71%</td>
                            <td>1.00</td>
                            <td><span class="text-muted">Jan–Dec 25</span></td>
                            <td><a href="#" class="btn btn-sm btn-outline-purple" onclick="navigateTo('goldShortSL'); return false;">Details</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Risk Disclaimer -->
            <div class="risk-disclaimer reveal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <p><strong>Risk Disclaimer:</strong> Past performance is not indicative of future results. All trading involves risk. These results are based on backtested data with $10,000 initial capital. Only invest what you can afford to lose.</p>
            </div>
        </div>
    </section>

    <!-- ======== SERVICES SECTION ======== -->
    <section class="section snap-panel">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    Our Services
                </span>
                <h2 class="section-title">What We Offer</h2>
                <p class="section-subtitle">End-to-end algorithmic trading solutions built for every level of trader.</p>
            </div>

            <div class="grid grid-3 services-home-grid">
                <!-- Managed Trading -->
                <div class="card service-card-v2 card-shine reveal delay-1">
                    <div class="service-card-v2-top" style="background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.03));">
                        <div class="service-icon-v2 icon-box-purple icon-box-lg">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                        </div>
                        <h3>Managed Trading</h3>
                        <p>Let our algorithms trade your account. Performance-based fees only — we earn when you profit.</p>
                    </div>
                    <div class="service-card-v2-features">
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Capital stays in your account
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Withdraw anytime — zero lock-up
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Real-time monitoring dashboard
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Weekly performance reports
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-purple btn-sm service-card-v2-btn" onclick="navigateTo('quantAccess'); return false;">
                        Start with $300 →
                    </a>
                </div>

                <!-- Trade Copier -->
                <div class="card service-card-v2 card-shine reveal delay-2">
                    <div class="service-card-v2-top" style="background: linear-gradient(135deg, rgba(34,211,238,0.12), rgba(34,211,238,0.03));">
                        <div class="service-icon-v2 icon-box-cyan icon-box-lg">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        </div>
                        <h3>Trade Copier</h3>
                        <p>Mirror our master account trades in milliseconds with ultra-low latency execution.</p>
                    </div>
                    <div class="service-card-v2-features">
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Ultra-low latency (~15ms)
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Adjustable lot sizing
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Full SL/TP synchronization
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Complete trade history log
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-cyan btn-sm service-card-v2-btn" onclick="navigateTo('tradeCopier'); return false;">
                        View Live Demo →
                    </a>
                </div>

                <!-- EA Development -->
                <div class="card service-card-v2 card-shine reveal delay-3">
                    <div class="service-card-v2-top" style="background: linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.03));">
                        <div class="service-icon-v2 icon-box-green icon-box-lg">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <h3>EA Development</h3>
                        <p>Custom Expert Advisors built to your specifications. Concept to deployment.</p>
                    </div>
                    <div class="service-card-v2-features">
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            MT4, MT5 & cTrader
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Strategy optimization included
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Backtesting & forward testing
                        </div>
                        <div class="service-feature-v2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            TradingView Pine Script
                        </div>
                    </div>
                    <a href="#" class="btn btn-outline-purple btn-sm service-card-v2-btn" onclick="navigateTo('customDev'); return false;">
                        Request a Quote →
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ======== WHY CHOOSE US / TRUST ======== -->
    <section class="section snap-panel" style="background: var(--color-bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Why Choose Us
                </span>
                <h2 class="section-title">Built Different</h2>
                <p class="section-subtitle">Transparent, secure, and aligned with your success.</p>
            </div>

            <div class="trust-grid-v2">
                <div class="trust-card-v2 reveal">
                    <div class="trust-card-v2-number">01</div>
                    <div class="trust-card-v2-icon icon-box icon-box-purple icon-box-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3>Client Custody</h3>
                    <p>Your capital stays in your brokerage account at all times. We never touch your funds — ever. 100% ownership and control stays with you.</p>
                </div>
                <div class="trust-card-v2 reveal delay-1">
                    <div class="trust-card-v2-number">02</div>
                    <div class="trust-card-v2-icon icon-box icon-box-cyan icon-box-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h3>Performance-Based</h3>
                    <p>We only charge when we deliver profits. No management fees, no hidden charges. Our interests are perfectly aligned with yours.</p>
                </div>
                <div class="trust-card-v2 reveal delay-2">
                    <div class="trust-card-v2-number">03</div>
                    <div class="trust-card-v2-icon icon-box icon-box-green icon-box-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                    </div>
                    <h3>Zero Lock-up</h3>
                    <p>Withdraw your funds anytime. No waiting periods, no exit fees, no restrictions. Your money is always accessible.</p>
                </div>
                <div class="trust-card-v2 reveal delay-3">
                    <div class="trust-card-v2-number">04</div>
                    <div class="trust-card-v2-icon icon-box icon-box-amber icon-box-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3>Full Transparency</h3>
                    <p>Real-time monitoring, weekly reports, and complete trade history. You see every trade we make on your account.</p>
                </div>
            </div>

            <!-- Platforms tech strip -->
            <div class="platforms-strip reveal" style="margin-top: var(--space-12);">
                <span class="platforms-strip-label">Platforms & Technologies</span>
                <div class="platforms-strip-items">
                    <span class="platforms-strip-item">MetaTrader 5</span>
                    <span class="platforms-strip-item">MetaTrader 4</span>
                    <span class="platforms-strip-item">TradingView</span>
                    <span class="platforms-strip-item">cTrader</span>
                    <span class="platforms-strip-item">MQL5</span>
                    <span class="platforms-strip-item">Pine Script</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ======== FINAL CTA ======== -->
    <section class="section cta-section-home snap-panel">
        <div class="container">
            <div class="cta-card-v2 reveal">
                <div class="cta-card-v2-bg"></div>
                <div class="cta-card-v2-content">
                    <span class="section-label" style="margin-bottom: var(--space-4);">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        Get Started Today
                    </span>
                    
                    <h2 class="cta-card-v2-title">
                        Ready to Trade <span class="text-gradient">Smarter?</span>
                    </h2>
                    
                    <p class="cta-card-v2-desc">
                        Start with just $300. No lock-up. Performance-based fees only. Your capital, your control.
                    </p>
                    
                    <div class="cta-card-v2-buttons">
                        <a href="#" class="btn btn-primary btn-lg" onclick="navigateTo('quantAccess'); return false;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                            Start Trading
                        </a>
                        <a href="https://discord.gg/X6ppaUUjCy" target="_blank" rel="noopener" class="btn btn-secondary btn-lg" style="text-decoration:none;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                            Join Discord
                        </a>
                        <a href="#" class="btn btn-outline-purple btn-lg" onclick="navigateTo('brochure'); return false;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                            Brochure
                        </a>
                    </div>

                    <div class="cta-card-v2-trust">
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                            No Lock-up
                        </span>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                            Client Custody
                        </span>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                            Performance Fees Only
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
