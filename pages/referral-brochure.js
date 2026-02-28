/* ============================================
   Partner Onboarding & Brochure Pages
   ============================================ */

function getReferralPage() {
    return `
    <section class="section">
        <div class="container" style="max-width: 880px;">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Get Started
                </span>
                <h2 class="section-title">Start Trading with <span class="text-gradient">J&D Vantage Quant</span></h2>
                <p class="section-subtitle">Create your brokerage account, connect with our team, and let our algorithms work for you.</p>
            </div>

            <!-- Step 1: Open Account -->
            <div class="onboard-block reveal" style="margin-bottom: var(--space-8);">
                <div class="onboard-step-label">
                    <span class="onboard-step-num">1</span>
                    <span>Open Your Brokerage Account</span>
                </div>
                <p class="onboard-desc">Register with Vantage Markets through our partnership links below. Use code <strong class="text-purple">jdvantagequant</strong> during sign-up for optimized trading conditions.</p>

                <div class="onboard-accounts">
                    <a href="https://vigco.co/la-com-inv/jdvantagequant" target="_blank" rel="noopener" class="onboard-account-card onboard-account-live">
                        <div class="onboard-account-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <div class="onboard-account-info">
                            <div class="onboard-account-title">Live Account <span class="badge badge-green" style="font-size: 9px; margin-left: 8px;">Recommended</span></div>
                            <div class="onboard-account-sub">Trade with real capital — minimum $300</div>
                        </div>
                        <svg class="onboard-account-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>

                    <a href="https://vigco.co/da-com-inv/jdvantagequant" target="_blank" rel="noopener" class="onboard-account-card">
                        <div class="onboard-account-icon onboard-icon-cyan">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        </div>
                        <div class="onboard-account-info">
                            <div class="onboard-account-title">Demo Account</div>
                            <div class="onboard-account-sub">Practice risk-free with virtual funds</div>
                        </div>
                        <svg class="onboard-account-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>

                    <div class="onboard-extras">
                        <a href="https://vigco.co/hp-com-inv/jdvantagequant" target="_blank" rel="noopener" class="onboard-extra-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Vantage Markets Portal
                        </a>
                        <span class="onboard-extra-dot"></span>
                        <a href="https://vigco.co/app-com1-inv/jdvantagequant" target="_blank" rel="noopener" class="onboard-extra-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                            Download Mobile App
                        </a>
                    </div>
                </div>
            </div>

            <!-- Step 2: Install MT5 -->
            <div class="onboard-block reveal" style="margin-bottom: var(--space-8);">
                <div class="onboard-step-label">
                    <span class="onboard-step-num">2</span>
                    <span>Install MetaTrader 5</span>
                </div>
                <p class="onboard-desc">Download MT5 from your broker dashboard or the official MetaQuotes website. Available on Windows, macOS, iOS, and Android. Log in using the credentials from your new account.</p>
            </div>

            <!-- Step 3: Fund -->
            <div class="onboard-block reveal" style="margin-bottom: var(--space-8);">
                <div class="onboard-step-label">
                    <span class="onboard-step-num">3</span>
                    <span>Fund Your Account</span>
                </div>
                <p class="onboard-desc">Deposit a minimum of <strong>$300</strong> into your live trading account. Your capital stays in YOUR brokerage account at all times — we never hold or access client funds.</p>
            </div>

            <!-- Step 4: Connect -->
            <div class="onboard-block reveal" style="margin-bottom: var(--space-8);">
                <div class="onboard-step-label">
                    <span class="onboard-step-num">4</span>
                    <span>Connect with Our Team</span>
                </div>
                <p class="onboard-desc">Share your MT5 login credentials securely with our team. We'll configure your account settings and deploy the algorithmic trading strategy within 24 hours.</p>
                <a href="#" onclick="navigateTo('contact'); return false;" class="onboard-cta-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Contact us to get started
                </a>
            </div>

            <!-- Step 5: Monitor -->
            <div class="onboard-block reveal" style="margin-bottom: var(--space-12);">
                <div class="onboard-step-label">
                    <span class="onboard-step-num">5</span>
                    <span>Monitor & Grow</span>
                </div>
                <p class="onboard-desc">Once activated, our algorithms trade autonomously 24/5. Track your performance in real-time through MT5 or your broker dashboard. Withdraw profits anytime — no lock-up periods.</p>
            </div>

            <!-- Advantages -->
            <div style="margin-bottom: var(--space-10);">
                <h3 class="text-center reveal" style="font-size: var(--text-xl); margin-bottom: var(--space-8);">Your <span class="text-gradient">Advantages</span></h3>
                <div class="onboard-advantages reveal">
                    <div class="onboard-adv-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <div>
                            <strong>Client Fund Custody</strong>
                            <span>Your money stays in your own brokerage account</span>
                        </div>
                    </div>
                    <div class="onboard-adv-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <div>
                            <strong>Performance-Only Fees</strong>
                            <span>We earn only when you profit — zero management fees</span>
                        </div>
                    </div>
                    <div class="onboard-adv-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <div>
                            <strong>No Lock-up Period</strong>
                            <span>Withdraw your funds at any time, no questions asked</span>
                        </div>
                    </div>
                    <div class="onboard-adv-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <div>
                            <strong>Optimized Spreads</strong>
                            <span>Best trading conditions through our institutional partnership</span>
                        </div>
                    </div>
                    <div class="onboard-adv-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <div>
                            <strong>24-Hour Setup</strong>
                            <span>Most accounts are fully configured and live within one business day</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center reveal">
                <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-primary btn-lg" style="margin-right: var(--space-3);">Get Started Now</a>
                <a href="#" onclick="navigateTo('brochure'); return false;" class="btn btn-secondary btn-lg">View Brochure</a>
            </div>
        </div>
    </section>
    `;
}

function getBrochurePage() {
    return `
    <section class="section">
        <div class="container" style="max-width: 900px;">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Overview
                </span>
                <h2 class="section-title">About J&D Vantage Quant</h2>
                <p class="section-subtitle">Everything you need to know about our algorithmic trading solutions at a glance.</p>
            </div>

            <!-- Welcome -->
            <div class="card card-glow-purple reveal" style="padding: var(--space-8); margin-bottom: var(--space-8);">
                <h3 style="font-size: var(--text-2xl); margin-bottom: var(--space-4);">Welcome to <span class="text-gradient">J&D Vantage Quant</span></h3>
                <p style="color: var(--text-secondary); line-height: 1.8;">
                    J&D Vantage Quant is a leading algorithmic trading firm specializing in gold (XAUUSD) trading strategies. Founded by a team of engineers and market analysts, we combine cutting-edge technology with deep financial expertise to deliver consistent trading results. Our client custody model ensures your capital stays in YOUR account at all times, while our algorithms work around the clock to maximize your potential returns.
                </p>
            </div>

            <!-- Key Benefits -->
            <div class="grid grid-2" style="margin-bottom: var(--space-8);">
                <div class="card reveal delay-1" style="padding: var(--space-6);">
                    <h4 style="color: var(--color-green); margin-bottom: var(--space-3);">✅ What We Offer</h4>
                    <ul class="feature-list">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Managed algorithmic trading from $300
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            18/18 consecutive profitable months
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Performance-based fees only
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            No lock-up, withdraw anytime
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Full transparency & reporting
                        </li>
                    </ul>
                </div>
                <div class="card reveal delay-2" style="padding: var(--space-6);">
                    <h4 style="color: var(--color-purple); margin-bottom: var(--space-3);">🏆 Track Record</h4>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                        <div>
                            <div style="font-size: var(--text-2xl); font-weight:800; color: var(--color-green);">+593%</div>
                            <div style="font-size: var(--text-xs); color: var(--text-muted);">Total Return</div>
                        </div>
                        <div>
                            <div style="font-size: var(--text-2xl); font-weight:800; color: var(--color-purple);">18/18</div>
                            <div style="font-size: var(--text-xs); color: var(--text-muted);">Profitable Months</div>
                        </div>
                        <div>
                            <div style="font-size: var(--text-2xl); font-weight:800; color: var(--color-cyan);">72.7%</div>
                            <div style="font-size: var(--text-xs); color: var(--text-muted);">Win Rate</div>
                        </div>
                        <div>
                            <div style="font-size: var(--text-2xl); font-weight:800; color: var(--color-amber);">$300</div>
                            <div style="font-size: var(--text-xs); color: var(--text-muted);">Minimum Entry</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Comparison -->
            <div class="card reveal" style="padding: var(--space-8); margin-bottom: var(--space-8);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">Traditional vs J&D Vantage Quant</h3>
                <div class="brochure-comparison">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Traditional Funds</th>
                                <th style="color: var(--color-purple);">J&D Vantage Quant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minimum Investment</td>
                                <td>$10,000 - $100,000+</td>
                                <td style="color: var(--color-green); font-weight:600;">$300</td>
                            </tr>
                            <tr>
                                <td>Fund Custody</td>
                                <td>Fund holds your money</td>
                                <td style="color: var(--color-green); font-weight:600;">You keep your money</td>
                            </tr>
                            <tr>
                                <td>Withdrawal</td>
                                <td>Lock-up periods (3-12mo)</td>
                                <td style="color: var(--color-green); font-weight:600;">Anytime, no restrictions</td>
                            </tr>
                            <tr>
                                <td>Management Fees</td>
                                <td>2% annually + performance</td>
                                <td style="color: var(--color-green); font-weight:600;">Performance-based only</td>
                            </tr>
                            <tr>
                                <td>Transparency</td>
                                <td>Monthly/Quarterly reports</td>
                                <td style="color: var(--color-green); font-weight:600;">Real-time monitoring</td>
                            </tr>
                            <tr>
                                <td>Target Return</td>
                                <td>8-15% annually</td>
                                <td style="color: var(--color-green); font-weight:600;">~10% monthly*</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-3);">*Target return is not guaranteed. Past performance does not indicate future results. Trading carries risk.</p>
                </div>
            </div>

            <!-- Business Model -->
            <div class="card card-glow-cyan reveal" style="padding: var(--space-8); margin-bottom: var(--space-8);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-4);">Our Business Model</h3>
                <p style="color: var(--text-secondary); margin-bottom: var(--space-5);">We operate on a simple, transparent business model that aligns our interests with yours:</p>
                <div class="grid grid-3" style="gap: var(--space-4);">
                    <div class="text-center" style="padding: var(--space-4);">
                        <div style="font-size: var(--text-3xl); margin-bottom: var(--space-2);">🔒</div>
                        <h4 style="font-size: var(--text-sm); margin-bottom: var(--space-1);">Client Custody</h4>
                        <p style="font-size: var(--text-xs); color: var(--text-muted); margin:0;">Your money, your account, your control</p>
                    </div>
                    <div class="text-center" style="padding: var(--space-4);">
                        <div style="font-size: var(--text-3xl); margin-bottom: var(--space-2);">📈</div>
                        <h4 style="font-size: var(--text-sm); margin-bottom: var(--space-1);">Algo Trading</h4>
                        <p style="font-size: var(--text-xs); color: var(--text-muted); margin:0;">Strategies deployed on your account</p>
                    </div>
                    <div class="text-center" style="padding: var(--space-4);">
                        <div style="font-size: var(--text-3xl); margin-bottom: var(--space-2);">💰</div>
                        <h4 style="font-size: var(--text-sm); margin-bottom: var(--space-1);">Profit Sharing</h4>
                        <p style="font-size: var(--text-xs); color: var(--text-muted); margin:0;">We earn only when you profit</p>
                    </div>
                </div>
            </div>

            <div class="text-center reveal" style="margin-top: var(--space-8);">
                <a href="JandD-Vantage-Quant-Brochure.pdf" download class="btn btn-primary btn-lg" style="margin-right: var(--space-3);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Brochure PDF
                </a>
                <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-secondary btn-lg">Get Started</a>
            </div>
        </div>
    </section>
    `;
}
