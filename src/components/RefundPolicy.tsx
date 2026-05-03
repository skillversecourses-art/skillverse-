import React from 'react';
import './LegalPage.css';

interface Props { onBack: () => void; }

const toc = [
  '30-Day Money-Back Guarantee',
  'Eligibility for Refund',
  'Non-Refundable Items',
  'Subscription Cancellations',
  'How to Request a Refund',
  'Refund Processing Time',
  'Partial Refunds',
  'Dispute Resolution',
  'Contact Us',
];

const RefundPolicy: React.FC<Props> = ({ onBack }) => (
  <div className="legal-page">
    <div className="container">
      <button className="legal-back-btn" onClick={onBack}>← Back to Home</button>

      <div className="legal-hero">
        <div className="legal-badge">💰 Refund Policy</div>
        <h1 className="legal-title">Refund Policy</h1>
        <span className="legal-updated">Last updated: May 3, 2024</span>
      </div>

      <div className="legal-layout">
        <aside className="legal-toc">
          <div className="toc-title">On this page</div>
          {toc.map((t, i) => (
            <a key={i} href={`#rp-${i}`} className="toc-link">{t}</a>
          ))}
        </aside>

        <div className="legal-content">
          <div className="legal-highlight success">
            <p>✅ We stand behind every course on SkillVerse. If you're not satisfied, we offer a full 30-day money-back guarantee — no questions asked.</p>
          </div>

          <div className="legal-section" id="rp-0">
            <div className="legal-section-number">1</div>
            <h2>30-Day Money-Back Guarantee</h2>
            <p>We want you to be 100% satisfied with your purchase. If for any reason you are not happy with a course, you can request a full refund within <strong style={{color:'#f1f5f9'}}>30 days of purchase</strong>.</p>
            <p>This guarantee applies to all individual course purchases made on SkillVerse.in. You do not need to provide a reason, but your feedback helps us improve.</p>
            <div className="legal-highlight success">
              <p>✅ Refunds are credited back to your original payment method within 5–7 business days after approval.</p>
            </div>
          </div>

          <div className="legal-section" id="rp-1">
            <div className="legal-section-number">2</div>
            <h2>Eligibility for Refund</h2>
            <p>To be eligible for a refund, the following conditions must be met:</p>
            <ul>
              <li>The refund request is submitted within 30 days of the original purchase date</li>
              <li>You have not completed more than 30% of the course content</li>
              <li>The course was purchased directly on SkillVerse.in (not through a third-party platform)</li>
              <li>You have not previously received a refund for the same course</li>
              <li>Your account is in good standing with no violations of our Terms of Service</li>
            </ul>
          </div>

          <div className="legal-section" id="rp-2">
            <div className="legal-section-number">3</div>
            <h2>Non-Refundable Items</h2>
            <p>The following are not eligible for refunds:</p>
            <ul>
              <li>Courses purchased as part of a promotional bundle at 90% or more discount</li>
              <li>Courses where a certificate of completion has already been issued</li>
              <li>Subscription plans after the billing cycle has started (see Section 4)</li>
              <li>Live workshop or bootcamp seats after the session has begun</li>
              <li>Gift cards or promotional credits</li>
              <li>Courses purchased through employer or institutional accounts</li>
            </ul>
            <div className="legal-highlight warning">
              <p>⚠️ Repeated refund requests (more than 2 per year) may result in account review and restriction of future purchases.</p>
            </div>
          </div>

          <div className="legal-section" id="rp-3">
            <div className="legal-section-number">4</div>
            <h2>Subscription Cancellations</h2>
            <p>For monthly or annual subscription plans, the following rules apply:</p>
            <ul>
              <li><strong style={{color:'#f1f5f9'}}>Monthly subscriptions:</strong> You may cancel at any time. Access continues until the end of the current billing period. No partial refunds are issued for unused days.</li>
              <li><strong style={{color:'#f1f5f9'}}>Annual subscriptions:</strong> You may request a full refund within 7 days of the initial purchase if you have not accessed any premium content.</li>
              <li>After the 7-day window for annual plans, no refunds are issued, but you will not be charged again after the subscription ends.</li>
            </ul>
            <p>To cancel your subscription, go to <strong style={{color:'#f1f5f9'}}>Account Settings → Billing → Cancel Subscription</strong>.</p>
          </div>

          <div className="legal-section" id="rp-4">
            <div className="legal-section-number">5</div>
            <h2>How to Request a Refund</h2>
            <p>Requesting a refund is simple and takes less than 2 minutes:</p>
            <ol>
              <li>Log in to your SkillVerse account</li>
              <li>Go to <strong style={{color:'#f1f5f9'}}>My Purchases</strong> from your profile menu</li>
              <li>Find the course and click <strong style={{color:'#f1f5f9'}}>"Request Refund"</strong></li>
              <li>Optionally leave feedback about why you're requesting a refund</li>
              <li>Submit — you'll receive a confirmation email within minutes</li>
            </ol>
            <p>Alternatively, you can email our support team directly and we'll process your request within 24 hours.</p>
            <div className="legal-contact-card">
              <span className="contact-icon">🎧</span>
              <div>
                <div className="contact-detail">Email refund support</div>
                <a href="mailto:refunds@skillverse.in" className="contact-val">refunds@skillverse.in</a>
              </div>
            </div>
          </div>

          <div className="legal-section" id="rp-5">
            <div className="legal-section-number">6</div>
            <h2>Refund Processing Time</h2>
            <p>Once your refund is approved, processing times depend on your payment method:</p>
            <ul>
              <li><strong style={{color:'#f1f5f9'}}>Credit/Debit Card:</strong> 5–7 business days</li>
              <li><strong style={{color:'#f1f5f9'}}>UPI / Net Banking:</strong> 3–5 business days</li>
              <li><strong style={{color:'#f1f5f9'}}>SkillVerse Wallet Credit:</strong> Instant</li>
              <li><strong style={{color:'#f1f5f9'}}>EMI Purchases:</strong> 7–10 business days (remaining EMIs are cancelled)</li>
            </ul>
            <p>You will receive an email confirmation as soon as the refund is initiated. If you don't see it within the stated timeframe, please contact your bank before reaching out to us.</p>
          </div>

          <div className="legal-section" id="rp-6">
            <div className="legal-section-number">7</div>
            <h2>Partial Refunds</h2>
            <p>In some cases, we may offer a partial refund at our discretion:</p>
            <ul>
              <li>If you have completed 30–60% of the course and can demonstrate a legitimate technical issue that prevented completion</li>
              <li>If a course's content was significantly misrepresented in the course description</li>
              <li>If a course was permanently removed from the platform before you could complete it</li>
            </ul>
            <p>Partial refund amounts are determined on a case-by-case basis by our support team.</p>
          </div>

          <div className="legal-section" id="rp-7">
            <div className="legal-section-number">8</div>
            <h2>Dispute Resolution</h2>
            <p>If your refund request is denied and you believe this is in error, you may escalate your case by emailing <a href="mailto:disputes@skillverse.in" style={{color:'#6fa3ff'}}>disputes@skillverse.in</a> with your order ID and a brief explanation.</p>
            <p>A senior support representative will review your case within 3 business days and provide a final resolution. We are committed to fair outcomes for all our learners.</p>
          </div>

          <div className="legal-section" id="rp-8">
            <div className="legal-section-number">9</div>
            <h2>Contact Us</h2>
            <p>Our support team is available Monday–Saturday, 9 AM to 7 PM IST. We typically respond within a few hours.</p>
            <div className="legal-contact-card">
              <span className="contact-icon">✉️</span>
              <div>
                <div className="contact-detail">General support</div>
                <a href="mailto:support@skillverse.in" className="contact-val">support@skillverse.in</a>
              </div>
            </div>
            <div className="legal-contact-card" style={{marginTop:'12px'}}>
              <span className="contact-icon">📞</span>
              <div>
                <div className="contact-detail">Call us (Mon–Sat, 9AM–7PM IST)</div>
                <a href="tel:+918000123456" className="contact-val">+91 80001 23456</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RefundPolicy;
