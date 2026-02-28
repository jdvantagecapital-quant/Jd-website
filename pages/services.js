/* ============================================
   Service Pages: Quant Access, Trade Copier,
   Products, Consultation, Custom Dev, Indicators
   ============================================ */

function getQuantAccessPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    Managed Trading
                </span>
                <h2 class="section-title">Quant Access</h2>
                <p class="section-subtitle">Institutional-grade algorithmic trading — accessible from just $300.</p>
            </div>

            <!-- Pricing Card -->
            <div class="quant-pricing-card reveal" style="max-width: 600px; margin: 0 auto var(--space-12);">
                <div class="card card-glow-purple text-center" style="padding: var(--space-10);">
                    <span class="badge badge-purple" style="margin-bottom: var(--space-4);">Most Popular</span>
                    <h3 style="font-size: var(--text-3xl); margin-bottom: var(--space-2);">$300</h3>
                    <p style="color: var(--text-muted); margin-bottom: var(--space-6);">Minimum Entry Capital</p>
                    
                    <div style="text-align: left; margin-bottom: var(--space-8);">
                        <ul class="feature-list">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                XAUUSD Gold Trading
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                MetaTrader 5 Platform
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                ~10% Monthly Target Return
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                Fully Automated Execution
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                No Lock-Up Period
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                Withdraw Anytime
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                Performance-Based Fees Only
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                24/7 Monitoring & Support
                            </li>
                        </ul>
                    </div>

                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-primary btn-lg" style="width:100%;">Get Started Now →</a>
                </div>
            </div>

            <!-- How to Get Started -->
            <div style="margin-bottom: var(--space-12);">
                <h3 class="text-center reveal" style="font-size: var(--text-2xl); margin-bottom: var(--space-8);">Getting Started in <span class="text-gradient">3 Easy Steps</span></h3>
                <div class="quant-steps">
                    <div class="card text-center reveal delay-1" style="padding: var(--space-8);">
                        <div class="icon-box icon-box-purple icon-box-lg" style="margin: 0 auto var(--space-4);">
                            <span style="font-size: var(--text-xl); font-weight:700;">1</span>
                        </div>
                        <h4 style="margin-bottom: var(--space-2);">Open Account</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Open a brokerage account with our recommended broker. Use our referral link for optimized conditions and spreads.</p>
                    </div>
                    <div class="card text-center reveal delay-2" style="padding: var(--space-8);">
                        <div class="icon-box icon-box-cyan icon-box-lg" style="margin: 0 auto var(--space-4);">
                            <span style="font-size: var(--text-xl); font-weight:700;">2</span>
                        </div>
                        <h4 style="margin-bottom: var(--space-2);">Fund & Connect</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Deposit minimum $300 and share your account credentials securely. We'll set up the algorithmic connection.</p>
                    </div>
                    <div class="card text-center reveal delay-3" style="padding: var(--space-8);">
                        <div class="icon-box icon-box-green icon-box-lg" style="margin: 0 auto var(--space-4);">
                            <span style="font-size: var(--text-xl); font-weight:700;">3</span>
                        </div>
                        <h4 style="margin-bottom: var(--space-2);">Start Earning</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Our algorithms begin trading automatically. Monitor your performance in real-time through your MT5 account.</p>
                    </div>
                </div>
            </div>

            <!-- FAQ-style info -->
            <div class="grid grid-2">
                <div class="card card-glow-cyan reveal delay-1" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-3);">💰 Fee Structure</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin:0;">We charge performance-based fees only — a percentage of profits generated. No management fees, no subscription fees, no hidden costs. If we don't make money for you, you don't pay us anything.</p>
                </div>
                <div class="card card-glow-purple reveal delay-2" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-3);">🔐 Security</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin:0;">Your funds remain in your brokerage account at all times. We use trade-only API access — meaning we can place trades but cannot withdraw your funds. Full client custody model.</p>
                </div>
                <div class="card card-glow-green reveal delay-3" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-3);">📊 Performance Tracking</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin:0;">Track every trade in real-time through your MT5 platform. We also provide weekly performance reports with detailed analytics including win rate, P&L, drawdown, and more.</p>
                </div>
                <div class="card reveal delay-4" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-3);">🤝 Support</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin:0;">Get direct access to our team via Discord, Telegram, or email. We're available for questions, strategy discussions, and account reviews. Community support included.</p>
                </div>
            </div>

            <div class="card reveal" style="margin-top: var(--space-8); padding: var(--space-6); border-left: 3px solid var(--color-amber);">
                <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;"><strong style="color: var(--color-amber);">⚠️ Disclaimer:</strong> Trading involves risk. Past performance is not indicative of future results. Only invest capital you can afford to lose. The ~10% monthly target is a goal, not a guarantee.</p>
            </div>
        </div>
    </section>
    `;
}

function getTradeCopierPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Automation
                </span>
                <h2 class="section-title">Trade Copier Pro</h2>
                <p class="section-subtitle">Mirror our master account trades in real-time with ultra-low latency execution.</p>
            </div>

            <!-- Live Dashboard Demo -->
            <div class="card card-glow-cyan reveal" style="padding: var(--space-8); margin-bottom: var(--space-10);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: var(--space-6); flex-wrap:wrap; gap: var(--space-3);">
                    <h3 style="font-size: var(--text-xl); margin:0;">Live Dashboard</h3>
                    <span class="badge badge-green"><span class="pulse-dot"></span> Connected</span>
                </div>
                <div class="copier-dashboard">
                    <div class="copier-account">
                        <div class="copier-account-header">
                            <span class="badge badge-purple">Master</span>
                            <span style="font-size: var(--text-sm); color: var(--text-muted);">Account #270552787</span>
                        </div>
                        <div class="copier-account-stats">
                            <div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">Balance</div>
                                <div style="font-size: var(--text-lg); font-weight:600; color: var(--color-green);">$69,317.42</div>
                            </div>
                            <div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">Equity</div>
                                <div style="font-size: var(--text-lg); font-weight:600;">$69,142.18</div>
                            </div>
                            <div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">P&L</div>
                                <div style="font-size: var(--text-lg); font-weight:600; color: var(--color-green);">+$59,317</div>
                            </div>
                        </div>
                    </div>
                    <div class="copier-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                    <div class="copier-account">
                        <div class="copier-account-header">
                            <span class="badge badge-cyan">Child</span>
                            <span style="font-size: var(--text-sm); color: var(--text-muted);">Account #279382652</span>
                        </div>
                        <div class="copier-account-stats">
                            <div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">Balance</div>
                                <div style="font-size: var(--text-lg); font-weight:600; color: var(--color-green);">$12,847.30</div>
                            </div>
                            <div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">Copy Ratio</div>
                                <div style="font-size: var(--text-lg); font-weight:600;">0.2x</div>
                            </div>
                            <div>
                                <div style="font-size: var(--text-xs); color: var(--text-muted);">Status</div>
                                <div style="font-size: var(--text-lg); font-weight:600; color: var(--color-green);">Active</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copier-meta" style="margin-top: var(--space-4); display:flex; gap: var(--space-6); flex-wrap:wrap;">
                    <div><span style="color: var(--text-muted);">Total Trades:</span> <strong>247</strong></div>
                    <div><span style="color: var(--text-muted);">Avg. Latency:</span> <strong style="color: var(--color-green);">~15ms</strong></div>
                    <div><span style="color: var(--text-muted);">Uptime:</span> <strong style="color: var(--color-green);">99.9%</strong></div>
                    <div><span style="color: var(--text-muted);">Last Sync:</span> <strong>Just now</strong></div>
                </div>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-3" style="margin-bottom: var(--space-10);">
                <div class="card text-center reveal delay-1" style="padding: var(--space-6);">
                    <div class="icon-box icon-box-purple icon-box-lg" style="margin: 0 auto var(--space-4);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </div>
                    <h4 style="margin-bottom: var(--space-2);">Ultra-Low Latency</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Sub-15ms trade execution speed ensures you get the same entry and exit prices as our master account.</p>
                </div>
                <div class="card text-center reveal delay-2" style="padding: var(--space-6);">
                    <div class="icon-box icon-box-cyan icon-box-lg" style="margin: 0 auto var(--space-4);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    </div>
                    <h4 style="margin-bottom: var(--space-2);">Custom Lot Sizing</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Automatically adjust position sizes based on your account balance with configurable copy ratios.</p>
                </div>
                <div class="card text-center reveal delay-3" style="padding: var(--space-6);">
                    <div class="icon-box icon-box-green icon-box-lg" style="margin: 0 auto var(--space-4);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h4 style="margin-bottom: var(--space-2);">Real-Time Monitoring</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Live dashboard showing all active trades, P&L, account metrics, and sync status in real-time.</p>
                </div>
                <div class="card text-center reveal delay-4" style="padding: var(--space-6);">
                    <div class="icon-box icon-box-amber icon-box-lg" style="margin: 0 auto var(--space-4);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h4 style="margin-bottom: var(--space-2);">Risk Management</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Built-in drawdown limits, maximum position controls, and automatic copying pause on risk thresholds.</p>
                </div>
                <div class="card text-center reveal delay-5" style="padding: var(--space-6);">
                    <div class="icon-box icon-box-purple icon-box-lg" style="margin: 0 auto var(--space-4);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h4 style="margin-bottom: var(--space-2);">24/5 Operation</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Continuous trade copying throughout forex market hours. No manual intervention required.</p>
                </div>
                <div class="card text-center reveal delay-6" style="padding: var(--space-6);">
                    <div class="icon-box icon-box-cyan icon-box-lg" style="margin: 0 auto var(--space-4);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <h4 style="margin-bottom: var(--space-2);">Detailed Reports</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Weekly and monthly performance reports with trade-by-trade breakdown, win rates, and analytics.</p>
                </div>
            </div>

            <!-- Use Cases -->
            <div class="card reveal" style="padding: var(--space-8);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Who Is Trade Copier For?</h3>
                <div class="grid grid-2" style="gap: var(--space-4);">
                    <div style="padding: var(--space-4); background: rgba(124,58,237,0.05); border-radius: var(--radius-lg);">
                        <h4 style="font-size: var(--text-sm); color: var(--color-purple); margin-bottom: var(--space-2);">🏢 Fund Managers</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Manage multiple client accounts with a single master strategy. Scale operations efficiently.</p>
                    </div>
                    <div style="padding: var(--space-4); background: rgba(34,211,238,0.05); border-radius: var(--radius-lg);">
                        <h4 style="font-size: var(--text-sm); color: var(--color-cyan); margin-bottom: var(--space-2);">👤 Individual Traders</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Copy proven strategies to your account without needing to actively monitor markets.</p>
                    </div>
                    <div style="padding: var(--space-4); background: rgba(16,185,129,0.05); border-radius: var(--radius-lg);">
                        <h4 style="font-size: var(--text-sm); color: var(--color-green); margin-bottom: var(--space-2);">📚 Learning Traders</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Learn from professional trading by observing real-time execution of institutional-grade strategies.</p>
                    </div>
                    <div style="padding: var(--space-4); background: rgba(245,158,11,0.05); border-radius: var(--radius-lg);">
                        <h4 style="font-size: var(--text-sm); color: var(--color-amber); margin-bottom: var(--space-2);">⏰ Busy Professionals</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Don't have time to trade? Let our algorithms work while you focus on your career and life.</p>
                    </div>
                </div>
            </div>

            <div class="text-center" style="margin-top: var(--space-10);">
                <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-primary btn-lg">Set Up Trade Copier →</a>
            </div>
        </div>
    </section>
    `;
}

function getProductsPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    Products
                </span>
                <h2 class="section-title">Our Products</h2>
                <p class="section-subtitle">Professional-grade trading tools developed with precision and passion.</p>
            </div>

            <!-- Trade Copier Pro - Featured -->
            <div class="card card-glow-purple reveal" style="padding: var(--space-8); margin-bottom: var(--space-8);">
                <div style="display:flex; align-items:center; gap: var(--space-3); margin-bottom: var(--space-5); flex-wrap:wrap;">
                    <span class="badge badge-purple">⭐ Featured</span>
                    <h3 style="font-size: var(--text-2xl); margin:0;">Trade Copier Pro</h3>
                </div>
                <p style="color: var(--text-secondary); margin-bottom: var(--space-5);">Enterprise-grade trade copying solution with ultra-low latency, custom lot sizing, and comprehensive risk management. Perfect for fund managers and individual traders alike.</p>
                
                <!-- Terminal Preview -->
                <div class="products-terminal reveal delay-1">
                    <div class="terminal-header">
                        <div class="terminal-dots">
                            <span style="background: #ef4444;"></span>
                            <span style="background: #f59e0b;"></span>
                            <span style="background: #10b981;"></span>
                        </div>
                        <span class="terminal-title">Trade Copier Pro v2.1</span>
                    </div>
                    <div class="terminal-body">
                        <div style="color: var(--color-green);">[✓] Connected to Master Account #270552787</div>
                        <div style="color: var(--color-cyan);">[→] Copying trade: XAUUSD BUY 0.05 @ 2,647.32</div>
                        <div style="color: var(--color-green);">[✓] Trade copied to Child #279382652 in 12ms</div>
                        <div style="color: var(--color-cyan);">[→] Copying trade: XAUUSD SELL 0.05 @ 2,651.18</div>
                        <div style="color: var(--color-green);">[✓] Trade closed: +$19.30 profit</div>
                        <div style="color: var(--text-muted);">[i] Session P&L: +$247.80 | Win Rate: 74.2%</div>
                        <div style="color: var(--color-green);">[✓] All systems operational | Latency: 14ms</div>
                    </div>
                </div>

                <div style="margin-top: var(--space-5);">
                    <a href="#" onclick="navigateTo('tradeCopier'); return false;" class="btn btn-primary">Learn More →</a>
                </div>
            </div>

            <!-- Other Products Grid -->
            <div class="grid grid-2">
                <div class="card card-glow-cyan reveal delay-1" style="padding: var(--space-8);">
                    <span class="badge badge-cyan" style="margin-bottom: var(--space-3);">Expert Advisor</span>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-3);">GoldFX Pro EA Suite</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-5);">Complete suite of gold trading Expert Advisors including GoldFX Pro, GoldClutch, GoldShort, and GoldShort SL. Each with unique strategy characteristics to suit different risk profiles.</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-5);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            4 unique trading strategies
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            MT5 compatible
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Backtested since 2020
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('offerings'); return false;" class="btn btn-outline-cyan">View All EAs →</a>
                </div>

                <div class="card reveal delay-2" style="padding: var(--space-8); border: 1px dashed rgba(124,58,237,0.3);">
                    <span class="badge badge-amber" style="margin-bottom: var(--space-3);">Coming Soon</span>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-3);">Multi-Pair EA</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-5);">Next-generation multi-pair Expert Advisor with AI-driven market regime detection. Currently in advanced development and testing phase.</p>
                    <ul class="feature-list">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            AI market regime detection
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Multi-currency support
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Expected Q3 2025
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getConsultationPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Professional Services
                </span>
                <h2 class="section-title">Consultation Services</h2>
                <p class="section-subtitle">Expert guidance for traders at every level — from beginner to professional.</p>
            </div>

            <!-- Pricing Tiers -->
            <div class="consultation-grid">
                <div class="card reveal delay-1" style="padding: var(--space-8);">
                    <span class="badge badge-green" style="margin-bottom: var(--space-4);">Free</span>
                    <h3 style="font-size: var(--text-2xl); margin-bottom: var(--space-1);">Discovery</h3>
                    <div style="font-size: var(--text-3xl); font-weight:800; color: var(--color-green); margin-bottom: var(--space-4);">FREE</div>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6);">Introductory call to understand your needs</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-6);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            15-minute introductory call
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Needs assessment
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Service overview
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            No obligation
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-outline-purple" style="width:100%;">Book Free Call</a>
                </div>

                <div class="card card-glow-purple reveal delay-2" style="padding: var(--space-8); position: relative;">
                    <span class="badge badge-purple" style="margin-bottom: var(--space-4);">Popular</span>
                    <h3 style="font-size: var(--text-2xl); margin-bottom: var(--space-1);">Strategy</h3>
                    <div style="font-size: var(--text-3xl); font-weight:800; color: var(--color-purple); margin-bottom: var(--space-4);">$199</div>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6);">Deep-dive strategy consultation</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-6);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            60-minute strategy session
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Portfolio analysis & review
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Custom strategy recommendations
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Risk assessment report
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            7-day email follow-up
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-primary" style="width:100%;">Book Strategy Session</a>
                </div>

                <div class="card card-glow-cyan reveal delay-3" style="padding: var(--space-8);">
                    <span class="badge badge-cyan" style="margin-bottom: var(--space-4);">Premium</span>
                    <h3 style="font-size: var(--text-2xl); margin-bottom: var(--space-1);">Premium</h3>
                    <div style="font-size: var(--text-3xl); font-weight:800; color: var(--color-cyan); margin-bottom: var(--space-4);">$699</div>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-6);">Comprehensive trading transformation</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-6);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            3x 90-minute sessions
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Complete portfolio overhaul
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Custom EA configuration
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            30-day priority support
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Monthly progress check-in
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Detailed written report
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-outline-cyan" style="width:100%;">Book Premium Package</a>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getCustomDevPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    Development
                </span>
                <h2 class="section-title">Custom EA Development</h2>
                <p class="section-subtitle">Turn your trading ideas into powerful automated strategies with our expert development team.</p>
            </div>

            <!-- 4-Step Process -->
            <div class="dev-process" style="margin-bottom: var(--space-12);">
                <div class="card reveal delay-1" style="padding: var(--space-6);">
                    <div style="display:flex; align-items:center; gap: var(--space-4);">
                        <div class="icon-box icon-box-purple icon-box-lg">
                            <span style="font-weight:800; font-size: var(--text-lg);">1</span>
                        </div>
                        <div>
                            <h4 style="margin-bottom: var(--space-1);">Consultation</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Discuss your trading idea, strategy logic, risk parameters, and goals. We analyze feasibility and provide a development roadmap.</p>
                        </div>
                    </div>
                </div>
                <div class="card reveal delay-2" style="padding: var(--space-6);">
                    <div style="display:flex; align-items:center; gap: var(--space-4);">
                        <div class="icon-box icon-box-cyan icon-box-lg">
                            <span style="font-weight:800; font-size: var(--text-lg);">2</span>
                        </div>
                        <div>
                            <h4 style="margin-bottom: var(--space-1);">Development</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Our expert developers build your EA with clean, optimized MQL5 code. Regular progress updates and milestone reviews.</p>
                        </div>
                    </div>
                </div>
                <div class="card reveal delay-3" style="padding: var(--space-6);">
                    <div style="display:flex; align-items:center; gap: var(--space-4);">
                        <div class="icon-box icon-box-green icon-box-lg">
                            <span style="font-weight:800; font-size: var(--text-lg);">3</span>
                        </div>
                        <div>
                            <h4 style="margin-bottom: var(--space-1);">Testing & Optimization</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Rigorous backtesting, forward testing, and parameter optimization across multiple market conditions and timeframes.</p>
                        </div>
                    </div>
                </div>
                <div class="card reveal delay-4" style="padding: var(--space-6);">
                    <div style="display:flex; align-items:center; gap: var(--space-4);">
                        <div class="icon-box icon-box-amber icon-box-lg">
                            <span style="font-weight:800; font-size: var(--text-lg);">4</span>
                        </div>
                        <div>
                            <h4 style="margin-bottom: var(--space-1);">Delivery & Support</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Final delivery with documentation, installation guide, and post-delivery support. Revisions included until you're satisfied.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Platforms -->
            <div class="card reveal" style="padding: var(--space-8); margin-bottom: var(--space-10);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">Supported Platforms</h3>
                <div class="dev-platforms">
                    <div class="dev-platform-card">
                        <div style="font-size: var(--text-2xl); margin-bottom: var(--space-2);">📊</div>
                        <div style="font-weight:600;">MetaTrader 5</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">MQL5</div>
                    </div>
                    <div class="dev-platform-card">
                        <div style="font-size: var(--text-2xl); margin-bottom: var(--space-2);">📈</div>
                        <div style="font-weight:600;">MetaTrader 4</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">MQL4</div>
                    </div>
                    <div class="dev-platform-card">
                        <div style="font-size: var(--text-2xl); margin-bottom: var(--space-2);">📉</div>
                        <div style="font-weight:600;">TradingView</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Pine Script</div>
                    </div>
                    <div class="dev-platform-card">
                        <div style="font-size: var(--text-2xl); margin-bottom: var(--space-2);">⚙️</div>
                        <div style="font-weight:600;">cTrader</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">cAlgo C#</div>
                    </div>
                    <div class="dev-platform-card">
                        <div style="font-size: var(--text-2xl); margin-bottom: var(--space-2);">🐍</div>
                        <div style="font-weight:600;">Python</div>
                        <div style="font-size: var(--text-xs); color: var(--text-muted);">Custom Bots</div>
                    </div>
                </div>
            </div>

            <!-- What We Build -->
            <div class="grid grid-3">
                <div class="card text-center reveal delay-1" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-2);">🤖 Expert Advisors</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Fully automated trading strategies with custom entry/exit logic, risk management, and reporting.</p>
                </div>
                <div class="card text-center reveal delay-2" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-2);">📊 Custom Indicators</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Technical indicators with proprietary calculations, visual overlays, and multi-timeframe analysis.</p>
                </div>
                <div class="card text-center reveal delay-3" style="padding: var(--space-6);">
                    <h4 style="margin-bottom: var(--space-2);">🔧 Trading Utilities</h4>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Trade managers, risk calculators, position sizers, trade copiers, and automation scripts.</p>
                </div>
            </div>

            <div class="text-center" style="margin-top: var(--space-10);">
                <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-primary btn-lg">Discuss Your Project →</a>
            </div>
        </div>
    </section>
    `;
}

function getIndicatorsPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    Trading Tools
                </span>
                <h2 class="section-title">Custom Indicators</h2>
                <p class="section-subtitle">Professional-grade indicators built for precision analysis and actionable signals.</p>
            </div>

            <div class="grid grid-3">
                <div class="card card-glow-purple reveal delay-1" style="padding: var(--space-8);">
                    <span class="badge badge-purple" style="margin-bottom: var(--space-4);">Popular</span>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-2);">Gold Momentum Pro</h3>
                    <div style="font-size: var(--text-3xl); font-weight:800; color: var(--color-purple); margin-bottom: var(--space-4);">$149</div>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-5);">Advanced momentum indicator specifically calibrated for XAUUSD. Identifies trend direction, strength, and reversal zones.</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-5);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Multi-timeframe analysis
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Visual buy/sell signals
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Alert notifications
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            MT5 compatible
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-primary" style="width:100%;">Purchase</a>
                </div>

                <div class="card card-glow-cyan reveal delay-2" style="padding: var(--space-8);">
                    <span class="badge badge-cyan" style="margin-bottom: var(--space-4);">Advanced</span>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-2);">Smart Support & Resistance</h3>
                    <div style="font-size: var(--text-3xl); font-weight:800; color: var(--color-cyan); margin-bottom: var(--space-4);">$199</div>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-5);">Automatically identifies key support and resistance levels using advanced price action analysis and volume profiling.</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-5);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Auto S/R zone detection
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Volume profile integration
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Historical level strength
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Configurable sensitivity
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-outline-cyan" style="width:100%;">Purchase</a>
                </div>

                <div class="card card-glow-green reveal delay-3" style="padding: var(--space-8);">
                    <span class="badge badge-green" style="margin-bottom: var(--space-4);">Premium</span>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-2);">Trend & Volume Dashboard</h3>
                    <div style="font-size: var(--text-3xl); font-weight:800; color: var(--color-green); margin-bottom: var(--space-4);">$249</div>
                    <p style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-5);">All-in-one dashboard with trend direction, volume analysis, volatility metrics, and trade signal scoring in one overlay.</p>
                    <ul class="feature-list" style="margin-bottom: var(--space-5);">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Trend + Volume + Volatility
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Trade signal scoring (1-10)
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Multi-pair scanner
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Custom alert rules
                        </li>
                    </ul>
                    <a href="#" onclick="navigateTo('contact'); return false;" class="btn btn-outline-purple" style="width:100%;">Purchase</a>
                </div>
            </div>

            <div class="card reveal" style="margin-top: var(--space-8); padding: var(--space-6); border-left: 3px solid var(--color-purple);">
                <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">
                    <strong style="color: var(--color-purple);">💡 Need something custom?</strong> We also develop custom indicators tailored to your specific trading strategy and requirements. <a href="#" onclick="navigateTo('customDev'); return false;" style="color: var(--color-cyan); text-decoration: underline;">Learn more about custom development →</a>
                </p>
            </div>
        </div>
    </section>
    `;
}
