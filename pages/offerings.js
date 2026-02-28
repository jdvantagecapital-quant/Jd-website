/* ============================================
   Offerings / Solutions Page
   ============================================ */

function getOfferingsPage() {
    return `
    <section class="section">
        <div class="container">
            <!-- Header -->
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    Our Solutions
                </span>
                <h2 class="section-title">Complete Trading Solutions</h2>
                <p class="section-subtitle">From entry-level algorithmic trading to custom EA development — we have solutions for every trader.</p>
            </div>

            <!-- Quick Nav -->
            <div class="offerings-nav reveal">
                <button class="offerings-nav-btn active" onclick="document.getElementById('trading-solutions').scrollIntoView({behavior:'smooth'})">Trading Solutions</button>
                <button class="offerings-nav-btn" onclick="document.getElementById('expert-advisors').scrollIntoView({behavior:'smooth'})">Expert Advisors</button>
                <button class="offerings-nav-btn" onclick="document.getElementById('professional-services').scrollIntoView({behavior:'smooth'})">Professional Services</button>
            </div>

            <!-- ===== TRADING SOLUTIONS ===== -->
            <div id="trading-solutions" style="padding-top: var(--space-8);">
                <h3 class="reveal" style="font-size: var(--text-2xl); margin-bottom: var(--space-8); display:flex; align-items:center; gap: var(--space-3);">
                    <span class="icon-box icon-box-purple" style="width:36px;height:36px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                    </span>
                    Trading Solutions
                </h3>

                <div class="grid grid-2" style="margin-bottom: var(--space-16);">
                    <!-- Quant Access -->
                    <div class="card card-glow-purple card-shine reveal delay-1">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-5);">
                            <div>
                                <span class="badge badge-purple" style="margin-bottom: var(--space-3);">Entry Level</span>
                                <h3 style="font-size: var(--text-xl);">Quant Access</h3>
                            </div>
                            <div style="text-align:right;">
                                <div style="font-size: var(--text-3xl); font-weight: var(--font-extrabold); color: var(--text-primary);">$300</div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">Minimum Entry</div>
                            </div>
                        </div>
                        <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-5);">
                            Start your algorithmic trading journey with our flagship XAUUSD strategy. Professional-grade execution with institutional performance.
                        </p>
                        <div class="feature-list" style="margin-bottom: var(--space-6);">
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                XAUUSD Algorithmic Strategy
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Real-time Trading Dashboard
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Weekly Performance Reports
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Community Access
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Instant Withdrawals — Zero Lock-Up
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary" onclick="navigateTo('quantAccess'); return false;" style="width:100%;">
                            Get Started →
                        </a>
                    </div>

                    <!-- Trade Copier -->
                    <div class="card card-glow-cyan card-shine reveal delay-2">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-5);">
                            <div>
                                <span class="badge badge-cyan" style="margin-bottom: var(--space-3);">Professional</span>
                                <h3 style="font-size: var(--text-xl);">Trade Copier</h3>
                            </div>
                            <div class="copier-status">
                                <span class="pulse-dot"></span>
                                Live
                            </div>
                        </div>
                        <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-5);">
                            Mirror trades from our master account to your account with ultra-low latency execution. Full SL/TP synchronization.
                        </p>
                        <div class="feature-list" style="margin-bottom: var(--space-6);">
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Ultra-Low Latency (&lt;100ms)
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Unlimited Child Accounts
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Real-Time Synchronization
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                24/7 Automated Operation
                            </div>
                            <div class="feature-item">
                                <div class="feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                                Adjustable Lot Multiplier
                            </div>
                        </div>
                        <a href="#" class="btn btn-outline-cyan" onclick="navigateTo('tradeCopier'); return false;" style="width:100%;">
                            View Live Demo →
                        </a>
                    </div>
                </div>
            </div>

            <!-- ===== EXPERT ADVISORS ===== -->
            <div id="expert-advisors" style="padding-top: var(--space-8);">
                <h3 class="reveal" style="font-size: var(--text-2xl); margin-bottom: var(--space-4); display:flex; align-items:center; gap: var(--space-3);">
                    <span class="icon-box icon-box-cyan" style="width:36px;height:36px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
                    </span>
                    Expert Advisors
                </h3>
                <p class="reveal" style="color: var(--text-muted); margin-bottom: var(--space-8); max-width:600px;">Our suite of algorithmic trading strategies, each designed for different risk profiles and market conditions.</p>

                <div class="grid grid-2" style="margin-bottom: var(--space-16);">
                    <!-- GoldFX Pro -->
                    <div class="card card-glow-purple ea-card reveal delay-1" style="border-color: rgba(124,58,237,0.2);">
                        <div class="ea-card-header">
                            <div>
                                <span class="badge badge-purple" style="margin-bottom: var(--space-2);">⭐ FLAGSHIP</span>
                                <div class="ea-card-name">GoldFX Pro</div>
                                <div class="ea-card-type">Advanced XAUUSD Strategy</div>
                            </div>
                        </div>
                        <div class="ea-card-chart">
                            <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gfxGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:0.8"/>
                                        <stop offset="100%" style="stop-color:#22d3ee;stop-opacity:0.8"/>
                                    </linearGradient>
                                    <linearGradient id="gfxFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:0.15"/>
                                        <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,72 L17,70 L34,66 L51,62 L68,55 L85,50 L102,48 L119,44 L136,40 L153,37 L170,35 L187,32 L204,28 L221,25 L238,20 L255,18 L272,12 L289,8 L300,5" fill="none" stroke="url(#gfxGrad)" stroke-width="2"/>
                                <path d="M0,72 L17,70 L34,66 L51,62 L68,55 L85,50 L102,48 L119,44 L136,40 L153,37 L170,35 L187,32 L204,28 L221,25 L238,20 L255,18 L272,12 L289,8 L300,5 L300,80 L0,80 Z" fill="url(#gfxFill)"/>
                            </svg>
                        </div>
                        <div class="ea-card-stats">
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-green">+593%</div>
                                <div class="ea-card-stat-label">Return</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-green">18.2%</div>
                                <div class="ea-card-stat-label">Max DD</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-cyan">72.7%</div>
                                <div class="ea-card-stat-label">Win Rate</div>
                            </div>
                        </div>
                        <div style="margin-top: var(--space-5);">
                            <a href="#" class="btn btn-primary btn-sm" onclick="navigateTo('goldFxDetails'); return false;" style="width:100%;">View Detailed Report →</a>
                        </div>
                    </div>

                    <!-- GoldClutch -->
                    <div class="card card-glow-green ea-card reveal delay-2">
                        <div class="ea-card-header">
                            <div>
                                <span class="badge badge-amber" style="margin-bottom: var(--space-2);">SWING TRADER</span>
                                <div class="ea-card-name">GoldClutch</div>
                                <div class="ea-card-type">M30 Swing Trading</div>
                            </div>
                        </div>
                        <div class="ea-card-chart">
                            <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gcGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8"/>
                                        <stop offset="100%" style="stop-color:#34d399;stop-opacity:0.8"/>
                                    </linearGradient>
                                    <linearGradient id="gcFill2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.15"/>
                                        <stop offset="100%" style="stop-color:#10b981;stop-opacity:0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,70 L25,65 L50,60 L75,55 L100,45 L125,48 L150,40 L175,35 L200,30 L225,25 L250,20 L275,15 L300,10" fill="none" stroke="url(#gcGrad2)" stroke-width="2"/>
                                <path d="M0,70 L25,65 L50,60 L75,55 L100,45 L125,48 L150,40 L175,35 L200,30 L225,25 L250,20 L275,15 L300,10 L300,80 L0,80 Z" fill="url(#gcFill2)"/>
                            </svg>
                        </div>
                        <div class="ea-card-stats">
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-green">+79.5%</div>
                                <div class="ea-card-stat-label">Return</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-amber">19.9%</div>
                                <div class="ea-card-stat-label">Max DD</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-cyan">2.47</div>
                                <div class="ea-card-stat-label">Sharpe</div>
                            </div>
                        </div>
                        <div style="margin-top: var(--space-5);">
                            <a href="#" class="btn btn-outline-cyan btn-sm" onclick="navigateTo('goldClutch'); return false;" style="width:100%;">View Full Report →</a>
                        </div>
                    </div>

                    <!-- GoldShort -->
                    <div class="card ea-card reveal delay-3" style="border-color: rgba(239,68,68,0.2);">
                        <div class="ea-card-header">
                            <div>
                                <span class="badge badge-red" style="margin-bottom: var(--space-2);">⚠ HIGH RISK</span>
                                <div class="ea-card-name">GoldShort</div>
                                <div class="ea-card-type">M1 Scalping — No Stop Loss</div>
                            </div>
                        </div>
                        <div class="ea-card-chart">
                            <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gsGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.8"/>
                                        <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.8"/>
                                    </linearGradient>
                                    <linearGradient id="gsFill2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.15"/>
                                        <stop offset="100%" style="stop-color:#ef4444;stop-opacity:0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,75 L20,72 L40,68 L60,60 L80,55 L100,50 L120,42 L140,38 L160,30 L180,25 L200,18 L240,12 L280,8 L300,5" fill="none" stroke="url(#gsGrad2)" stroke-width="2"/>
                                <path d="M0,75 L20,72 L40,68 L60,60 L80,55 L100,50 L120,42 L140,38 L160,30 L180,25 L200,18 L240,12 L280,8 L300,5 L300,80 L0,80 Z" fill="url(#gsFill2)"/>
                            </svg>
                        </div>
                        <div class="ea-card-stats">
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-green">+328%</div>
                                <div class="ea-card-stat-label">Return</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-red">53.6%</div>
                                <div class="ea-card-stat-label">Max DD</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-cyan">73%</div>
                                <div class="ea-card-stat-label">Win Rate</div>
                            </div>
                        </div>
                        <div style="margin-top: var(--space-5);">
                            <a href="#" class="btn btn-outline-purple btn-sm" onclick="navigateTo('goldShort'); return false;" style="width:100%;">View Full Report →</a>
                        </div>
                    </div>

                    <!-- GoldShort SL -->
                    <div class="card card-glow-green ea-card reveal delay-4">
                        <div class="ea-card-header">
                            <div>
                                <span class="badge badge-green" style="margin-bottom: var(--space-2);">🛡 PROTECTED</span>
                                <div class="ea-card-name">GoldShort SL</div>
                                <div class="ea-card-type">Protected Scalping with Stop-Loss</div>
                            </div>
                        </div>
                        <div class="ea-card-chart">
                            <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gsslGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8"/>
                                        <stop offset="100%" style="stop-color:#22d3ee;stop-opacity:0.8"/>
                                    </linearGradient>
                                    <linearGradient id="gsslFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.15"/>
                                        <stop offset="100%" style="stop-color:#10b981;stop-opacity:0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0,72 L25,68 L50,64 L75,58 L100,55 L125,50 L150,45 L175,40 L200,35 L225,30 L250,22 L275,18 L300,12" fill="none" stroke="url(#gsslGrad)" stroke-width="2"/>
                                <path d="M0,72 L25,68 L50,64 L75,58 L100,55 L125,50 L150,45 L175,40 L200,35 L225,30 L250,22 L275,18 L300,12 L300,80 L0,80 Z" fill="url(#gsslFill)"/>
                            </svg>
                        </div>
                        <div class="ea-card-stats">
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-green">+70%</div>
                                <div class="ea-card-stat-label">Return</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-amber">32.5%</div>
                                <div class="ea-card-stat-label">Max DD</div>
                            </div>
                            <div class="ea-card-stat">
                                <div class="ea-card-stat-value text-cyan">71%</div>
                                <div class="ea-card-stat-label">Win Rate</div>
                            </div>
                        </div>
                        <div style="margin-top: var(--space-5);">
                            <a href="#" class="btn btn-outline-cyan btn-sm" onclick="navigateTo('goldShortSL'); return false;" style="width:100%;">View Full Report →</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== PROFESSIONAL SERVICES ===== -->
            <div id="professional-services" style="padding-top: var(--space-8);">
                <h3 class="reveal" style="font-size: var(--text-2xl); margin-bottom: var(--space-8); display:flex; align-items:center; gap: var(--space-3);">
                    <span class="icon-box icon-box-green" style="width:36px;height:36px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </span>
                    Professional Services
                </h3>

                <div class="grid grid-2" style="margin-bottom: var(--space-12);">
                    <div class="card card-glow-purple reveal delay-1">
                        <div class="icon-box icon-box-purple icon-box-lg" style="margin-bottom: var(--space-4);">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <h3 style="margin-bottom: var(--space-3);">Consultation</h3>
                        <p style="font-size: var(--text-sm);">One-on-one strategy sessions with our trading experts. Get personalized advice on algorithmic trading, risk management, and portfolio optimization.</p>
                        <div style="margin-top: var(--space-4); display:flex; gap: var(--space-3); align-items:center;">
                            <span style="font-size: var(--text-sm); color: var(--text-muted);">From</span>
                            <span style="font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--color-green);">FREE</span>
                        </div>
                        <a href="#" class="btn btn-outline-purple btn-sm" onclick="navigateTo('consultation'); return false;" style="width:100%; margin-top: var(--space-4);">Book a Session →</a>
                    </div>

                    <div class="card card-glow-cyan reveal delay-2">
                        <div class="icon-box icon-box-cyan icon-box-lg" style="margin-bottom: var(--space-4);">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <h3 style="margin-bottom: var(--space-3);">Custom Development</h3>
                        <p style="font-size: var(--text-sm);">Custom Expert Advisors, indicators, and scripts built to your exact specifications. Support for MT4, MT5, TradingView, cTrader, and Python.</p>
                        <div style="margin-top: var(--space-4); display:flex; gap: var(--space-3); align-items:center;">
                            <span style="font-size: var(--text-sm); color: var(--text-muted);">Custom</span>
                            <span style="font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--color-cyan);">Pricing</span>
                        </div>
                        <a href="#" class="btn btn-outline-cyan btn-sm" onclick="navigateTo('customDev'); return false;" style="width:100%; margin-top: var(--space-4);">Learn More →</a>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="card-glass text-center reveal" style="padding: var(--space-12);">
                <h2 style="font-size: var(--text-3xl); margin-bottom: var(--space-4);">Ready to <span class="text-gradient">Get Started?</span></h2>
                <p style="color: var(--text-secondary); margin-bottom: var(--space-6); max-width:500px; margin-left:auto; margin-right:auto;">Start with just $300. No lock-up period. Withdraw anytime. Performance-based fees only.</p>
                <div style="display:flex; gap: var(--space-4); justify-content:center; flex-wrap:wrap;">
                    <a href="#" class="btn btn-primary btn-lg" onclick="navigateTo('quantAccess'); return false;">Start Trading</a>
                    <a href="#" class="btn btn-secondary btn-lg" onclick="navigateTo('contact'); return false;">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
    `;
}
