/* ============================================
   About, Contact, HowItWorks Pages
   ============================================ */

function getAboutPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    About Us
                </span>
                <h2 class="section-title">Meet J&D Vantage Quant</h2>
                <p class="section-subtitle">Driving innovation in algorithmic trading with transparency, performance, and unwavering client focus.</p>
            </div>

            <!-- Mission / Vision -->
            <div class="grid grid-2" style="margin-bottom: var(--space-16);">
                <div class="card card-glow-purple reveal delay-1">
                    <div class="icon-box icon-box-purple icon-box-lg" style="margin-bottom: var(--space-5);">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-3);">Our Mission</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.8;">
                        To deliver superior performance with unparalleled transparency and unwavering control. We believe every trader deserves access to institutional-grade algorithmic trading tools, regardless of their capital size. Our mission is to democratize quantitative trading and empower individuals with sophisticated strategies that were once exclusive to hedge funds and institutions.
                    </p>
                </div>
                <div class="card card-glow-cyan reveal delay-2">
                    <div class="icon-box icon-box-cyan icon-box-lg" style="margin-bottom: var(--space-5);">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-3);">Our Vision</h3>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.8;">
                        To be the leading force in algorithmic trading innovation, bridging the gap between cutting-edge technology and everyday traders. We envision a future where data-driven decisions replace emotional trading, where transparency is the norm, and where every investor has access to tools that maximize their potential for success.
                    </p>
                </div>
            </div>

            <!-- Values -->
            <div style="margin-bottom: var(--space-16);">
                <h3 class="reveal text-center" style="font-size: var(--text-2xl); margin-bottom: var(--space-8);">Our <span class="text-gradient">Core Values</span></h3>
                <div class="about-values">
                    <div class="card about-value-card reveal delay-1">
                        <div class="about-value-icon icon-box-purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-base); margin-bottom: var(--space-2);">Innovation & Excellence</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Continuously pushing the boundaries of algorithmic trading technology through research, development, and rigorous testing methodologies.</p>
                        </div>
                    </div>
                    <div class="card about-value-card reveal delay-2">
                        <div class="about-value-icon icon-box-cyan">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-base); margin-bottom: var(--space-2);">Transparency & Integrity</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Maintaining complete honesty in our performance reporting, fee structures, and client communications. What you see is what you get.</p>
                        </div>
                    </div>
                    <div class="card about-value-card reveal delay-3">
                        <div class="about-value-icon icon-box-green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-base); margin-bottom: var(--space-2);">Client-Centric Approach</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Every decision we make centers around our clients' best interests. Your success is our success — literally, with performance-based fees.</p>
                        </div>
                    </div>
                    <div class="card about-value-card reveal delay-4">
                        <div class="about-value-icon icon-box-amber">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-base); margin-bottom: var(--space-2);">Continuous Improvement</h4>
                            <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Markets evolve, and so do we. Our strategies undergo constant optimization and adaptation to ensure consistent performance across all conditions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Team Section -->
            <div>
                <h3 class="reveal text-center" style="font-size: var(--text-2xl); margin-bottom: var(--space-3);">Our <span class="text-gradient">Team</span></h3>
                <p class="reveal text-center" style="color: var(--text-muted); margin-bottom: var(--space-10); max-width:500px; margin-left:auto; margin-right:auto;">The minds behind J&D Vantage Quant — combining engineering expertise with deep market knowledge.</p>

                <div class="team-grid">
                    <div class="card team-card reveal delay-1">
                        <div class="team-avatar">SD</div>
                        <div class="team-name">Sohil Dobariya</div>
                        <div class="team-role">Founder & Lead Strategist</div>
                        <div class="team-bio">B.E. Mechanical Engineering with NISM certifications. Expert in technical analysis and market dynamics. Combines engineering precision with deep financial market understanding to develop robust algorithmic strategies.</div>
                    </div>
                    <div class="card team-card reveal delay-2">
                        <div class="team-avatar">AJ</div>
                        <div class="team-name">Alis Jodhani</div>
                        <div class="team-role">Technical Expert</div>
                        <div class="team-bio">B.E. Information Technology with 3+ years in market analysis. Specializes in algorithmic strategy development, backtesting frameworks, and quantitative research. Brings cutting-edge tech solutions to trading challenges.</div>
                    </div>
                    <div class="card team-card reveal delay-3">
                        <div class="team-avatar">DJ</div>
                        <div class="team-name">Dishant Jodhani</div>
                        <div class="team-role">Marketing Head</div>
                        <div class="team-bio">B.E. Computer Engineering with software development background. Leads marketing and client relations. Bridges the gap between complex trading technology and accessible client communication.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getContactPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Contact Us
                </span>
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
            </div>

            <div class="contact-grid">
                <!-- Contact Form -->
                <div class="card reveal delay-1" style="padding: var(--space-8);">
                    <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-6);">Send a Message</h3>
                    <form onsubmit="handleContactSubmit(event)" id="contact-form">
                        <div class="form-group">
                            <label class="form-label" for="contact-name">Your Name</label>
                            <input type="text" name="from_name" id="contact-name" class="form-input" placeholder="John Doe" required autocomplete="name">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="contact-email">Email Address</label>
                            <input type="email" name="from_email" id="contact-email" class="form-input" placeholder="john@example.com" required autocomplete="email">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="contact-subject">Subject</label>
                            <input type="text" name="subject" id="contact-subject" class="form-input" placeholder="How can we help?">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="contact-message">Message</label>
                            <textarea name="message" id="contact-message" class="form-textarea" placeholder="Tell us about your trading goals..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="reveal delay-2">
                    <div class="contact-info-card">
                        <div class="icon-box icon-box-purple">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-1);">Email</h4>
                            <p style="margin:0; color: var(--text-primary); font-size: var(--text-base);">jdvantagequant@gmail.com</p>
                        </div>
                    </div>

                    <div class="contact-info-card">
                        <div class="icon-box icon-box-cyan">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-1);">Phone</h4>
                            <p style="margin:0; color: var(--text-primary); font-size: var(--text-base);">+91 75758 58430</p>
                        </div>
                    </div>

                    <div class="contact-info-card">
                        <div class="icon-box icon-box-green">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </div>
                        <div>
                            <h4 style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-1);">Website</h4>
                            <p style="margin:0; color: var(--text-primary); font-size: var(--text-base);">jdvantagequant.com</p>
                        </div>
                    </div>

                    <h4 style="font-size: var(--text-base); margin-top: var(--space-8); margin-bottom: var(--space-4);">Connect With Us</h4>
                    <div class="contact-social-links">
                        <a href="https://discord.gg/X6ppaUUjCy" target="_blank" rel="noopener noreferrer" class="contact-social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                            Discord
                        </a>
                        <a href="https://x.com/JD_Vantage_Cap" target="_blank" rel="noopener noreferrer" class="contact-social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            Twitter / X
                        </a>
                        <a href="https://t.me/JDvantagecapital" target="_blank" rel="noopener noreferrer" class="contact-social-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            Telegram
                        </a>
                    </div>

                    <!-- Operating Hours -->
                    <div class="card" style="margin-top: var(--space-6); padding: var(--space-5);">
                        <h4 style="font-size: var(--text-sm); color: var(--text-muted); margin-bottom: var(--space-3);">Response Time</h4>
                        <p style="font-size: var(--text-sm); margin:0;">We typically respond within <strong>24 hours</strong>. For urgent matters, please reach out via Discord or Telegram for faster response.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getHowItWorksPage() {
    return `
    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    Process
                </span>
                <h2 class="section-title">How It Works</h2>
                <p class="section-subtitle">Our streamlined 4-step process gets you trading in minutes. Simple, transparent, and secure.</p>
            </div>

            <!-- Process Timeline -->
            <div class="process-timeline" style="margin-bottom: var(--space-16);">
                <div class="process-step reveal delay-1">
                    <div class="process-step-number" style="border-color: var(--color-purple);">1</div>
                    <div class="process-step-content">
                        <h3>Client Custody</h3>
                        <p>Open your own brokerage account. Your capital stays in YOUR account at all times. We never have access to your funds. You maintain full ownership, withdrawal rights, and control of your money.</p>
                        <div style="margin-top: var(--space-3); display:flex; gap: var(--space-2); flex-wrap:wrap;">
                            <span class="badge badge-purple">Your Account</span>
                            <span class="badge badge-green">Full Control</span>
                            <span class="badge badge-cyan">Zero Risk</span>
                        </div>
                    </div>
                </div>

                <div class="process-step reveal delay-2">
                    <div class="process-step-number" style="border-color: var(--color-cyan);">2</div>
                    <div class="process-step-content">
                        <h3>Strategy Deployment</h3>
                        <p>Our algorithmic trading strategies are deployed on your account through secure API connections. No manual intervention needed. The algorithms operate 24/5 across forex market hours, executing trades based on sophisticated quantitative models.</p>
                        <div style="margin-top: var(--space-3); display:flex; gap: var(--space-2); flex-wrap:wrap;">
                            <span class="badge badge-cyan">Automated</span>
                            <span class="badge badge-purple">24/5 Trading</span>
                            <span class="badge badge-green">API Secured</span>
                        </div>
                    </div>
                </div>

                <div class="process-step reveal delay-3">
                    <div class="process-step-number" style="border-color: var(--color-green);">3</div>
                    <div class="process-step-content">
                        <h3>Performance Fees</h3>
                        <p>We only charge fees when we generate profits. Our performance-based structure ensures our incentives are perfectly aligned with yours. No management fees, no hidden costs. If we don't make you money, you don't pay us.</p>
                        <div style="margin-top: var(--space-3); display:flex; gap: var(--space-2); flex-wrap:wrap;">
                            <span class="badge badge-green">Profit-Based</span>
                            <span class="badge badge-amber">No Hidden Fees</span>
                            <span class="badge badge-purple">Aligned Interests</span>
                        </div>
                    </div>
                </div>

                <div class="process-step reveal delay-4">
                    <div class="process-step-number" style="border-color: var(--color-amber);">4</div>
                    <div class="process-step-content">
                        <h3>Instant Liquidity</h3>
                        <p>Withdraw your funds at any time with zero restrictions. No lock-up periods, no exit fees, no minimum holding requirements. Your money is always accessible when you need it. Complete financial freedom.</p>
                        <div style="margin-top: var(--space-3); display:flex; gap: var(--space-2); flex-wrap:wrap;">
                            <span class="badge badge-amber">Zero Lock-Up</span>
                            <span class="badge badge-green">No Exit Fees</span>
                            <span class="badge badge-cyan">Instant Access</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Key Differentiators -->
            <div>
                <h3 class="reveal text-center" style="font-size: var(--text-2xl); margin-bottom: var(--space-8);">Key <span class="text-gradient">Differentiators</span></h3>
                <div class="grid grid-3">
                    <div class="card text-center reveal delay-1" style="padding: var(--space-8);">
                        <div class="icon-box icon-box-purple icon-box-lg" style="margin: 0 auto var(--space-4);">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <h4 style="margin-bottom: var(--space-2);">Aligned Interests</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Performance-based fees mean we only profit when you do. Our success is directly tied to your trading performance.</p>
                    </div>
                    <div class="card text-center reveal delay-2" style="padding: var(--space-8);">
                        <div class="icon-box icon-box-cyan icon-box-lg" style="margin: 0 auto var(--space-4);">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h4 style="margin-bottom: var(--space-2);">Zero Conflicts</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">We never touch your capital. No conflicts of interest. Your funds stay in your broker — always under your control.</p>
                    </div>
                    <div class="card text-center reveal delay-3" style="padding: var(--space-8);">
                        <div class="icon-box icon-box-green icon-box-lg" style="margin: 0 auto var(--space-4);">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                        </div>
                        <h4 style="margin-bottom: var(--space-2);">Full Auditability</h4>
                        <p style="font-size: var(--text-sm); color: var(--text-muted); margin:0;">Every trade is logged and auditable. Complete transparency with real-time dashboards and detailed weekly reports.</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center reveal" style="margin-top: var(--space-16);">
                <a href="#" class="btn btn-primary btn-lg" onclick="navigateTo('quantAccess'); return false;">Start Trading with $300 →</a>
            </div>
        </div>
    </section>
    `;
}
