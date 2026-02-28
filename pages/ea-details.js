/* ============================================
   EA Detail Pages - GoldFX Pro, GoldClutch, 
   GoldShort, GoldShort SL
   ============================================ */

function getGoldFxDetailsPage() {
    const monthlyData = [
        { month: 'Jan 24', profit: 1046 },
        { month: 'Feb 24', profit: 600 },
        { month: 'Mar 24', profit: 1568 },
        { month: 'Apr 24', profit: 3771 },
        { month: 'May 24', profit: 2329 },
        { month: 'Jun 24', profit: 1700 },
        { month: 'Jul 24', profit: 2095 },
        { month: 'Aug 24', profit: 2963 },
        { month: 'Sep 24', profit: 2136 },
        { month: 'Oct 24', profit: 2205 },
        { month: 'Nov 24', profit: 3118 },
        { month: 'Dec 24', profit: 1838 },
        { month: 'Jan 25', profit: 1833 },
        { month: 'Feb 25', profit: 3379 },
        { month: 'Mar 25', profit: 2835 },
        { month: 'Apr 25', profit: 10986 },
        { month: 'May 25', profit: 9126 },
        { month: 'Jun 25', profit: 5788 }
    ];
    const maxProfit = Math.max(...monthlyData.map(d => d.profit));
    const barsHtml = monthlyData.map(d => {
        const pct = Math.round((d.profit / maxProfit) * 100);
        return `<div class="chart-bar-wrapper">
            <div class="chart-bar-value">$${d.profit.toLocaleString()}</div>
            <div class="chart-bar" data-height="${pct}%" style="height:0%;"></div>
            <div class="chart-bar-label">${d.month}</div>
        </div>`;
    }).join('');

    return `
    <section class="section">
        <div class="container">
            <a href="#" onclick="navigateTo('offerings'); return false;" class="btn btn-outline-purple" style="margin-bottom: var(--space-6); display:inline-flex;">← Back to Offerings</a>

            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    ⭐ Flagship Strategy
                </span>
                <h2 class="section-title">GoldFX Pro</h2>
                <p class="section-subtitle">Our flagship multi-pair gold strategy — 18 consecutive profitable months and counting.</p>
            </div>

            <!-- Key Stats -->
            <div class="ea-stats-grid reveal">
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">$59,317</div>
                    <div class="ea-stat-label">Net Profit</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-purple);">+593%</div>
                    <div class="ea-stat-label">Total Return</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-cyan);">72.7%</div>
                    <div class="ea-stat-label">Win Rate</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">18/18</div>
                    <div class="ea-stat-label">Profitable Months</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-amber);">1:3.5</div>
                    <div class="ea-stat-label">Risk : Reward</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-cyan);">19.6%</div>
                    <div class="ea-stat-label">Max Drawdown</div>
                </div>
            </div>

            <!-- Monthly Chart -->
            <div class="card card-chart reveal" style="padding: var(--space-8); margin-top: var(--space-10);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">📊 Monthly Performance (Jan 2024 – Jun 2025)</h3>
                <div class="chart-container">
                    ${barsHtml}
                </div>
            </div>

            <!-- Strategy Details -->
            <div class="grid grid-2" style="margin-top: var(--space-10);">
                <div class="card card-glow-purple reveal delay-1" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Strategy Overview</h3>
                    <ul class="feature-list">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Multi-pair gold strategy (XAUUSD primary)
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Proprietary entry/exit algorithms
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Dynamic position sizing based on volatility
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Multiple timeframe analysis
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Automated risk management with hard stops
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            News event filtering
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Adaptive to changing market regimes
                        </li>
                    </ul>
                </div>

                <div class="card card-glow-cyan reveal delay-2" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Key Features & Parameters</h3>
                    <div class="ea-params-grid">
                        <div class="ea-param">
                            <span class="ea-param-label">Platform</span>
                            <span class="ea-param-value">MetaTrader 5</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Instrument</span>
                            <span class="ea-param-value">XAUUSD (Gold)</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Timeframe</span>
                            <span class="ea-param-value">Multi-TF</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Min. Capital</span>
                            <span class="ea-param-value">$300</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Recommended</span>
                            <span class="ea-param-value">$1,000+</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Avg Monthly</span>
                            <span class="ea-param-value">~10%</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Total Trades</span>
                            <span class="ea-param-value">2,000+</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Profit Factor</span>
                            <span class="ea-param-value">2.6+</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Risk -->
            <div class="card reveal" style="margin-top: var(--space-8); padding: var(--space-6); border-left: 3px solid var(--color-amber);">
                <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">
                    <strong style="color: var(--color-amber);">⚠️ Risk Disclaimer:</strong> Past performance does not guarantee future results. Trading involves risk. The 18/18 month track record, while exceptional, is not a guarantee of continued profitability.
                </p>
            </div>

            <div class="text-center" style="margin-top: var(--space-10);">
                <a href="#" onclick="navigateTo('quantAccess'); return false;" class="btn btn-primary btn-lg">Start Trading with GoldFX Pro →</a>
            </div>
        </div>
    </section>
    `;
}

function getGoldClutchPage() {
    const monthlyData = [
        { month: 'Jan 25', profit: 420 },
        { month: 'Feb 25', profit: 580 },
        { month: 'Mar 25', profit: 350 },
        { month: 'Apr 25', profit: 890 },
        { month: 'May 25', profit: 1100 },
        { month: 'Jun 25', profit: 760 },
        { month: 'Jul 25', profit: 650 },
        { month: 'Aug 25', profit: 510 },
        { month: 'Sep 25', profit: 720 },
        { month: 'Oct 25', profit: 480 },
        { month: 'Nov 25', profit: 835 },
        { month: 'Dec 25', profit: 650 }
    ];
    const maxProfit = Math.max(...monthlyData.map(d => d.profit));
    const barsHtml = monthlyData.map(d => {
        const pct = Math.round((d.profit / maxProfit) * 100);
        return `<div class="chart-bar-wrapper">
            <div class="chart-bar-value">$${d.profit.toLocaleString()}</div>
            <div class="chart-bar" data-height="${pct}%" style="height:0%;"></div>
            <div class="chart-bar-label">${d.month}</div>
        </div>`;
    }).join('');

    return `
    <section class="section">
        <div class="container">
            <a href="#" onclick="navigateTo('offerings'); return false;" class="btn btn-outline-purple" style="margin-bottom: var(--space-6); display:inline-flex;">← Back to Offerings</a>

            <div class="section-header reveal">
                <span class="section-label">Expert Advisor</span>
                <h2 class="section-title">GoldClutch EA</h2>
                <p class="section-subtitle">A conservative gold scalping strategy designed for steady and sustainable account growth.</p>
            </div>

            <div class="ea-stats-grid reveal">
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">$7,945</div>
                    <div class="ea-stat-label">Net Profit</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-purple);">+79.5%</div>
                    <div class="ea-stat-label">Total Return</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-cyan);">68.1%</div>
                    <div class="ea-stat-label">Win Rate</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-amber);">19.9%</div>
                    <div class="ea-stat-label">Max Drawdown</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">1:2.1</div>
                    <div class="ea-stat-label">Risk : Reward</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-cyan);">M30</div>
                    <div class="ea-stat-label">Timeframe</div>
                </div>
            </div>

            <!-- Monthly Chart -->
            <div class="card card-chart reveal" style="padding: var(--space-8); margin-top: var(--space-10);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">📊 Monthly Performance (Jan – Dec 2025)</h3>
                <div class="chart-container">
                    ${barsHtml}
                </div>
            </div>

            <div class="grid grid-2" style="margin-top: var(--space-10);">
                <div class="card card-glow-purple reveal delay-1" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Strategy Overview</h3>
                    <ul class="feature-list">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Conservative gold scalping approach
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            30-minute (M30) timeframe analysis
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Tight stop-loss for capital protection
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Pattern recognition algorithms
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Low drawdown, steady equity curve
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Suitable for accounts $500+
                        </li>
                    </ul>
                </div>
                <div class="card card-glow-cyan reveal delay-2" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Parameters</h3>
                    <div class="ea-params-grid">
                        <div class="ea-param">
                            <span class="ea-param-label">Platform</span>
                            <span class="ea-param-value">MetaTrader 5</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Instrument</span>
                            <span class="ea-param-value">XAUUSD</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Timeframe</span>
                            <span class="ea-param-value">M30</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Style</span>
                            <span class="ea-param-value">Scalping</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Risk Level</span>
                            <span class="ea-param-value">Low</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Recommended</span>
                            <span class="ea-param-value">$500+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card reveal" style="margin-top: var(--space-8); padding: var(--space-6); border-left: 3px solid var(--color-amber);">
                <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">
                    <strong style="color: var(--color-amber);">⚠️ Risk Disclaimer:</strong> Past performance does not guarantee future results. All trading carries risk of significant losses.
                </p>
            </div>

            <div class="text-center" style="margin-top: var(--space-10);">
                <a href="#" onclick="navigateTo('quantAccess'); return false;" class="btn btn-primary btn-lg">Get Started →</a>
            </div>
        </div>
    </section>
    `;
}

function getGoldShortPage() {
    const monthlyData = [
        { month: 'Mar 25', profit: 1850 },
        { month: 'Apr 25', profit: 3200 },
        { month: 'May 25', profit: 4500 },
        { month: 'Jun 25', profit: 2900 },
        { month: 'Jul 25', profit: 3800 },
        { month: 'Aug 25', profit: 4100 },
        { month: 'Sep 25', profit: 3650 },
        { month: 'Oct 25', profit: 2750 },
        { month: 'Nov 25', profit: 3248 },
        { month: 'Dec 25', profit: 2800 }
    ];
    const maxProfit = Math.max(...monthlyData.map(d => d.profit));
    const barsHtml = monthlyData.map(d => {
        const pct = Math.round((d.profit / maxProfit) * 100);
        return `<div class="chart-bar-wrapper">
            <div class="chart-bar-value">$${d.profit.toLocaleString()}</div>
            <div class="chart-bar" data-height="${pct}%" style="height:0%;"></div>
            <div class="chart-bar-label">${d.month}</div>
        </div>`;
    }).join('');

    return `
    <section class="section">
        <div class="container">
            <a href="#" onclick="navigateTo('offerings'); return false;" class="btn btn-outline-purple" style="margin-bottom: var(--space-6); display:inline-flex;">← Back to Offerings</a>

            <div class="section-header reveal">
                <span class="section-label">⚠️ High Risk</span>
                <h2 class="section-title">GoldShort EA</h2>
                <p class="section-subtitle">High-frequency gold short strategy — aggressive returns with elevated risk profile. Not for everyone.</p>
            </div>

            <div class="ea-stats-grid reveal">
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">$32,798</div>
                    <div class="ea-stat-label">Net Profit</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-purple);">+328%</div>
                    <div class="ea-stat-label">Total Return</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-red);">53.6%</div>
                    <div class="ea-stat-label">Max Drawdown</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-cyan);">10,940</div>
                    <div class="ea-stat-label">Total Trades</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-amber);">M1</div>
                    <div class="ea-stat-label">Timeframe</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-red);">None</div>
                    <div class="ea-stat-label">Stop Loss</div>
                </div>
            </div>

            <!-- Monthly Chart -->
            <div class="card card-chart reveal" style="padding: var(--space-8); margin-top: var(--space-10);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">📊 Monthly Performance (Mar – Dec 2025)</h3>
                <div class="chart-container">
                    ${barsHtml}
                </div>
            </div>

            <!-- Warning Banner -->
            <div class="card reveal" style="margin-top: var(--space-8); padding: var(--space-6); border: 1px solid rgba(239,68,68,0.4); background: rgba(239,68,68,0.05);">
                <h4 style="color: var(--color-red); margin-bottom: var(--space-3);">⚠️ HIGH RISK WARNING</h4>
                <p style="font-size: var(--text-sm); color: var(--text-secondary); margin:0;">
                    This EA operates <strong>without a stop loss</strong> and uses a short-only strategy on gold. The 53.6% maximum drawdown indicates extreme risk. This strategy is suitable only for traders who understand and accept the possibility of significant losses. <strong>Not recommended for beginners or risk-averse traders.</strong>
                </p>
            </div>

            <div class="grid grid-2" style="margin-top: var(--space-10);">
                <div class="card card-glow-purple reveal delay-1" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Strategy Overview</h3>
                    <ul class="feature-list">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            High-frequency M1 (1-minute) trading
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            EMA 9 crossover-based entries
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Short-only on XAUUSD
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            <span style="color: var(--color-red);">No stop loss — high drawdown risk</span>
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            10,940 trades executed
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Aggressive position management
                        </li>
                    </ul>
                </div>
                <div class="card card-glow-cyan reveal delay-2" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Parameters</h3>
                    <div class="ea-params-grid">
                        <div class="ea-param">
                            <span class="ea-param-label">Platform</span>
                            <span class="ea-param-value">MetaTrader 5</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Instrument</span>
                            <span class="ea-param-value">XAUUSD</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Timeframe</span>
                            <span class="ea-param-value">M1</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Direction</span>
                            <span class="ea-param-value">Short Only</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Indicator</span>
                            <span class="ea-param-value">EMA 9</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Stop Loss</span>
                            <span class="ea-param-value" style="color: var(--color-red);">None</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Risk Level</span>
                            <span class="ea-param-value" style="color: var(--color-red);">Very High</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Recommended</span>
                            <span class="ea-param-value">$1,000+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center" style="margin-top: var(--space-10);">
                <a href="#" onclick="navigateTo('goldShortSL'); return false;" class="btn btn-secondary btn-lg" style="margin-right: var(--space-3);">
                    🛡️ View Safer Alternative: GoldShort SL
                </a>
                <a href="#" onclick="navigateTo('quantAccess'); return false;" class="btn btn-primary btn-lg">Get Started →</a>
            </div>
        </div>
    </section>
    `;
}

function getGoldShortSLPage() {
    const monthlyData = [
        { month: 'Jan 25', profit: 380 },
        { month: 'Feb 25', profit: 520 },
        { month: 'Mar 25', profit: 450 },
        { month: 'Apr 25', profit: 780 },
        { month: 'May 25', profit: 920 },
        { month: 'Jun 25', profit: 610 },
        { month: 'Jul 25', profit: 550 },
        { month: 'Aug 25', profit: 490 },
        { month: 'Sep 25', profit: 680 },
        { month: 'Oct 25', profit: 530 },
        { month: 'Nov 25', profit: 640 },
        { month: 'Dec 25', profit: 450 }
    ];
    const maxProfit = Math.max(...monthlyData.map(d => d.profit));
    const barsHtml = monthlyData.map(d => {
        const pct = Math.round((d.profit / maxProfit) * 100);
        return `<div class="chart-bar-wrapper">
            <div class="chart-bar-value">$${d.profit.toLocaleString()}</div>
            <div class="chart-bar" data-height="${pct}%" style="height:0%;"></div>
            <div class="chart-bar-label">${d.month}</div>
        </div>`;
    }).join('');

    return `
    <section class="section">
        <div class="container">
            <a href="#" onclick="navigateTo('offerings'); return false;" class="btn btn-outline-purple" style="margin-bottom: var(--space-6); display:inline-flex;">← Back to Offerings</a>

            <div class="section-header reveal">
                <span class="section-label">🛡️ Risk-Managed</span>
                <h2 class="section-title">GoldShort SL</h2>
                <p class="section-subtitle">The safer alternative — same short strategy with built-in stop loss protection.</p>
            </div>

            <div class="ea-stats-grid reveal">
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">$7,000</div>
                    <div class="ea-stat-label">Net Profit</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-purple);">+70%</div>
                    <div class="ea-stat-label">Total Return</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-amber);">32.5%</div>
                    <div class="ea-stat-label">Max Drawdown</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">1000 pips</div>
                    <div class="ea-stat-label">Stop Loss</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-cyan);">M1</div>
                    <div class="ea-stat-label">Timeframe</div>
                </div>
                <div class="ea-stat-card">
                    <div class="ea-stat-value" style="color: var(--color-green);">Yes ✓</div>
                    <div class="ea-stat-label">Protected</div>
                </div>
            </div>

            <!-- Monthly Chart -->
            <div class="card card-chart reveal" style="padding: var(--space-8); margin-top: var(--space-10);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">📊 Monthly Performance (Jan – Dec 2025)</h3>
                <div class="chart-container">
                    ${barsHtml}
                </div>
            </div>

            <!-- Comparison Table -->
            <div class="card reveal" style="margin-top: var(--space-10); padding: var(--space-8);">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">GoldShort vs GoldShort SL — Comparison</h3>
                <div class="goldshort-comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>⚠️ GoldShort</th>
                                <th>🛡️ GoldShort SL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Net Profit</td>
                                <td style="color: var(--color-green);">$32,798</td>
                                <td>$7,000</td>
                            </tr>
                            <tr>
                                <td>Return</td>
                                <td style="color: var(--color-green);">+328%</td>
                                <td>+70%</td>
                            </tr>
                            <tr>
                                <td>Max Drawdown</td>
                                <td style="color: var(--color-red);">53.6%</td>
                                <td style="color: var(--color-green);">32.5%</td>
                            </tr>
                            <tr>
                                <td>Stop Loss</td>
                                <td style="color: var(--color-red);">None</td>
                                <td style="color: var(--color-green);">1000 pips</td>
                            </tr>
                            <tr>
                                <td>Risk Level</td>
                                <td><span class="badge badge-red">Very High</span></td>
                                <td><span class="badge badge-amber">Moderate-High</span></td>
                            </tr>
                            <tr>
                                <td>Direction</td>
                                <td>Short Only</td>
                                <td>Short Only</td>
                            </tr>
                            <tr>
                                <td>Timeframe</td>
                                <td>M1</td>
                                <td>M1</td>
                            </tr>
                            <tr>
                                <td>Best For</td>
                                <td>Aggressive traders</td>
                                <td style="color: var(--color-green);">Risk-conscious traders</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="grid grid-2" style="margin-top: var(--space-10);">
                <div class="card card-glow-cyan reveal delay-1" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Why Choose GoldShort SL?</h3>
                    <ul class="feature-list">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Built-in 1000-pip stop loss protection
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            21% lower maximum drawdown than GoldShort
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Same core strategy with risk management overlay
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Better risk-adjusted returns
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            Suitable for cautious but growth-oriented traders
                        </li>
                    </ul>
                </div>
                <div class="card card-glow-purple reveal delay-2" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Parameters</h3>
                    <div class="ea-params-grid">
                        <div class="ea-param">
                            <span class="ea-param-label">Platform</span>
                            <span class="ea-param-value">MetaTrader 5</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Instrument</span>
                            <span class="ea-param-value">XAUUSD</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Timeframe</span>
                            <span class="ea-param-value">M1</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Direction</span>
                            <span class="ea-param-value">Short Only</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Stop Loss</span>
                            <span class="ea-param-value" style="color: var(--color-green);">1000 pips</span>
                        </div>
                        <div class="ea-param">
                            <span class="ea-param-label">Risk Level</span>
                            <span class="ea-param-value" style="color: var(--color-amber);">Moderate-High</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center" style="margin-top: var(--space-10);">
                <a href="#" onclick="navigateTo('quantAccess'); return false;" class="btn btn-primary btn-lg">Get Started with GoldShort SL →</a>
            </div>
        </div>
    </section>
    `;
}
