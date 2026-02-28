/* ============================================
   Legal Pages: Terms, Disclaimers, Privacy, Refund
   ============================================ */

function getTermsPage() {
    return `
    <section class="section legal-page">
        <div class="container" style="max-width: 800px;">
            <div class="section-header reveal">
                <span class="section-label">Legal</span>
                <h2 class="section-title">Terms of Service</h2>
                <p class="section-subtitle">Last updated: June 2025</p>
            </div>

            <div class="card reveal" style="padding: var(--space-8);">
                <div class="legal-section">
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using the services provided by J&D Vantage Quant ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
                </div>

                <div class="legal-section">
                    <h3>2. Services Description</h3>
                    <p>J&D Vantage Quant provides algorithmic trading solutions, trade copying services, Expert Advisor development, custom indicator development, and trading consultation services. Our services are provided on an "as-is" basis and are subject to the disclaimers and risk warnings contained herein.</p>
                </div>

                <div class="legal-section">
                    <h3>3. Client Custody Model</h3>
                    <p>Under our managed trading services, clients maintain full custody and control of their trading accounts at all times. We access client accounts solely through authorized API connections for the purpose of executing trading strategies. We do not have the ability to withdraw or transfer client funds.</p>
                </div>

                <div class="legal-section">
                    <h3>4. Fee Structure</h3>
                    <p>Our fee structure is performance-based. Fees are charged only on profits generated through our trading strategies. Specific fee percentages and calculation methods are disclosed during the onboarding process. No management fees, subscription fees, or hidden costs are charged.</p>
                </div>

                <div class="legal-section">
                    <h3>5. Risk Acknowledgment</h3>
                    <p>By using our services, you acknowledge that:</p>
                    <ul>
                        <li>Trading in financial instruments carries a high level of risk</li>
                        <li>Past performance is not indicative of future results</li>
                        <li>You may lose all or a portion of your invested capital</li>
                        <li>Algorithmic trading systems are subject to technical failures</li>
                        <li>Market conditions can change rapidly and unpredictably</li>
                    </ul>
                </div>

                <div class="legal-section">
                    <h3>6. Intellectual Property</h3>
                    <p>All trading algorithms, strategies, Expert Advisors, indicators, software, and content provided by J&D Vantage Quant are proprietary. Clients may not reverse-engineer, decompile, distribute, or share any proprietary tools or strategies without express written permission.</p>
                </div>

                <div class="legal-section">
                    <h3>7. Limitation of Liability</h3>
                    <p>J&D Vantage Quant shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to trading losses, system downtime, or data breaches. Our maximum liability shall not exceed the fees paid by the client in the preceding 12 months.</p>
                </div>

                <div class="legal-section">
                    <h3>8. Termination</h3>
                    <p>Either party may terminate the service relationship at any time. Upon termination, all open positions may be closed, and any outstanding fees will become immediately due. Client funds remain fully accessible at all times regardless of termination status.</p>
                </div>

                <div class="legal-section">
                    <h3>9. Governing Law</h3>
                    <p>These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through mediation before pursuing legal remedies.</p>
                </div>

                <div class="legal-section">
                    <h3>10. Contact</h3>
                    <p>For questions regarding these Terms of Service, contact us at <strong>jdvantagequant@gmail.com</strong></p>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getDisclaimersPage() {
    return `
    <section class="section legal-page">
        <div class="container" style="max-width: 800px;">
            <div class="section-header reveal">
                <span class="section-label">Legal</span>
                <h2 class="section-title">Risk Disclaimers</h2>
                <p class="section-subtitle">Important risk information — please read carefully before using our services.</p>
            </div>

            <div class="card reveal" style="padding: var(--space-8);">
                <div class="legal-section" style="border-left: 3px solid var(--color-red); padding-left: var(--space-5);">
                    <h3 style="color: var(--color-red);">⚠️ General Risk Warning</h3>
                    <p>Trading in foreign exchange ("Forex") and Contracts for Difference ("CFDs") is highly speculative, carries a high level of risk, and may not be suitable for all investors. You may sustain a loss of some or all of your invested capital. Therefore, you should not speculate with capital that you cannot afford to lose.</p>
                </div>

                <div class="legal-section">
                    <h3>Algorithmic Trading Risks</h3>
                    <p>Automated trading systems, including Expert Advisors (EAs), are subject to the following risks:</p>
                    <ul>
                        <li><strong>System failures:</strong> Software bugs, server outages, or connectivity issues may result in missed trades or unintended executions</li>
                        <li><strong>Market risk:</strong> Rapid market movements, gaps, or extreme volatility can cause significant losses beyond expected parameters</li>
                        <li><strong>Slippage:</strong> Actual execution prices may differ from intended prices, especially during high volatility</li>
                        <li><strong>Over-optimization:</strong> Historical backtest results may not accurately represent future performance</li>
                        <li><strong>Liquidity risk:</strong> In certain market conditions, it may be difficult to close positions at desired prices</li>
                    </ul>
                </div>

                <div class="legal-section">
                    <h3>Past Performance Disclaimer</h3>
                    <p>Past performance results have many inherent limitations. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. Hypothetical results are generally prepared with the benefit of hindsight and do not involve financial risk.</p>
                </div>

                <div class="legal-section">
                    <h3>Not Financial Advice</h3>
                    <p>The information provided through our website, services, and communications does not constitute financial advice, investment advice, trading advice, or any other sort of advice. You should not treat any of the content as such. We do not recommend that any financial instrument should be bought, sold, or held by you. Nothing on this website should be taken as an offer to buy or sell financial instruments.</p>
                </div>

                <div class="legal-section">
                    <h3>Third-Party Risks</h3>
                    <p>We are not responsible for the actions, policies, or reliability of third-party brokers, platforms, or service providers. Client funds held with brokers are subject to the broker's terms, conditions, and regulatory protections. We recommend using regulated brokers in your jurisdiction.</p>
                </div>

                <div class="legal-section">
                    <h3>No Guarantee of Results</h3>
                    <p>We make no guarantees regarding trading performance, returns, or profitability. Target returns mentioned on our website (e.g., ~10% monthly) are goals based on historical performance and should not be interpreted as promises or guarantees. Actual results will vary and may include periods of loss.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getPrivacyPage() {
    return `
    <section class="section legal-page">
        <div class="container" style="max-width: 800px;">
            <div class="section-header reveal">
                <span class="section-label">Legal</span>
                <h2 class="section-title">Privacy Policy</h2>
                <p class="section-subtitle">Last updated: June 2025</p>
            </div>

            <div class="card reveal" style="padding: var(--space-8);">
                <div class="legal-section">
                    <h3>1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, including:</p>
                    <ul>
                        <li>Name, email address, and phone number</li>
                        <li>Trading account information (account numbers, broker details)</li>
                        <li>Communication history (emails, messages, support tickets)</li>
                        <li>Payment information for service subscriptions</li>
                        <li>Website usage data through cookies and analytics</li>
                    </ul>
                </div>

                <div class="legal-section">
                    <h3>2. How We Use Your Information</h3>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our trading services</li>
                        <li>Set up and manage your trading account connections</li>
                        <li>Process fee payments and generate invoices</li>
                        <li>Send performance reports and service updates</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Analyze service usage to improve our offerings</li>
                    </ul>
                </div>

                <div class="legal-section">
                    <h3>3. Data Protection</h3>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure API connections, and regular security audits.</p>
                </div>

                <div class="legal-section">
                    <h3>4. Data Sharing</h3>
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share information only with:</p>
                    <ul>
                        <li>Service providers who assist in operating our business (under NDA)</li>
                        <li>Legal authorities when required by law</li>
                        <li>Brokers, only to the extent necessary for service provision</li>
                    </ul>
                </div>

                <div class="legal-section">
                    <h3>5. Cookies</h3>
                    <p>Our website uses cookies and similar technologies to enhance user experience, analyze traffic, and improve our services. You can control cookie preferences through your browser settings.</p>
                </div>

                <div class="legal-section">
                    <h3>6. Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to or restrict processing</li>
                        <li>Data portability</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                </div>

                <div class="legal-section">
                    <h3>7. Contact</h3>
                    <p>For privacy-related inquiries, contact us at <strong>jdvantagequant@gmail.com</strong></p>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getRefundPage() {
    return `
    <section class="section legal-page">
        <div class="container" style="max-width: 800px;">
            <div class="section-header reveal">
                <span class="section-label">Legal</span>
                <h2 class="section-title">Refund Policy</h2>
                <p class="section-subtitle">Last updated: June 2025</p>
            </div>

            <div class="card reveal" style="padding: var(--space-8);">
                <div class="legal-section" style="border-left: 3px solid var(--color-red); padding-left: var(--space-5);">
                    <h3 style="color: var(--color-red);">ALL SALES ARE FINAL</h3>
                    <p>Due to the nature of digital products and financial services, all purchases made through J&D Vantage Quant are final and non-refundable unless otherwise stated below.</p>
                </div>

                <div class="legal-section">
                    <h3>1. Expert Advisors (EAs) & Indicators</h3>
                    <p>All EA and indicator purchases are final. As digital products that are delivered immediately, they cannot be returned. We provide comprehensive documentation and support to help you use our products effectively. Demo accounts are available for testing before purchase.</p>
                </div>

                <div class="legal-section">
                    <h3>2. Consultation Services</h3>
                    <p>Consultation sessions that have been scheduled and confirmed are non-refundable. Sessions may be rescheduled with at least 24 hours' notice. Cancellations made less than 24 hours before the scheduled session will not be refunded.</p>
                </div>

                <div class="legal-section">
                    <h3>3. Custom Development</h3>
                    <p>Custom EA and indicator development fees are structured as milestone payments. Completed milestones are non-refundable. If either party terminates the project before completion, the client is responsible for payment of all completed milestones and work-in-progress.</p>
                </div>

                <div class="legal-section">
                    <h3>4. Managed Trading & Trade Copier</h3>
                    <p>Performance fees charged on profits are non-refundable. There are no upfront fees to refund. Clients can disconnect from our services at any time with no termination fees or penalties.</p>
                </div>

                <div class="legal-section">
                    <h3>5. Exceptions</h3>
                    <p>Refunds may be considered at our sole discretion in cases of:</p>
                    <ul>
                        <li>Duplicate charges or billing errors</li>
                        <li>Service not delivered as described (with evidence)</li>
                        <li>Technical issues that prevent product use (after troubleshooting)</li>
                    </ul>
                    <p style="margin-top: var(--space-3);">All exception requests must be submitted to <strong>jdvantagequant@gmail.com</strong> within 7 days of purchase.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}
