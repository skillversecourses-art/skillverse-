import React from 'react';
import './LegalPage.css';

interface Props { onBack: () => void; }

const toc = [
  'Acceptance of Terms',
  'Account Registration',
  'Course Access & Licenses',
  'Payment & Billing',
  'User Conduct',
  'Intellectual Property',
  'Instructor Terms',
  'Disclaimers',
  'Limitation of Liability',
  'Governing Law',
  'Contact Us',
];

const TermsOfService: React.FC<Props> = ({ onBack }) => (
  <div className="legal-page">
    <div className="container">
      <button className="legal-back-btn" onClick={onBack}>← Back to Home</button>

      <div className="legal-hero">
        <div className="legal-badge">📋 Terms of Service</div>
        <h1 className="legal-title">Terms & Conditions</h1>
        <span className="legal-updated">Last updated: May 3, 2024</span>
      </div>

      <div className="legal-layout">
        <aside className="legal-toc">
          <div className="toc-title">On this page</div>
          {toc.map((t, i) => (
            <a key={i} href={`#tos-${i}`} className="toc-link">{t}</a>
          ))}
        </aside>

        <div className="legal-content">
          <div className="legal-highlight">
            <p>By accessing or using SkillVerse, you agree to be bound by these Terms of Service. Please read them carefully before enrolling in any course or using any features of our platform.</p>
          </div>

          <div className="legal-section" id="tos-0">
            <div className="legal-section-number">1</div>
            <h2>Acceptance of Terms</h2>
            <p>By creating an account or using SkillVerse in any way, you confirm that you are at least 13 years old and that you accept these Terms of Service in full. If you are using SkillVerse on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</p>
            <p>We may update these terms from time to time. Continued use of the platform after changes take effect constitutes acceptance of the revised terms.</p>
          </div>

          <div className="legal-section" id="tos-1">
            <div className="legal-section-number">2</div>
            <h2>Account Registration</h2>
            <p>You must provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.</p>
            <ul>
              <li>One person may not maintain more than one free account</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>You may not share your account or transfer it to another person</li>
              <li>Accounts with false information may be suspended without notice</li>
            </ul>
          </div>

          <div className="legal-section" id="tos-2">
            <div className="legal-section-number">3</div>
            <h2>Course Access & Licenses</h2>
            <p>Upon purchasing a course, SkillVerse grants you a limited, non-exclusive, non-transferable license to access and view the course content for your personal, non-commercial educational purposes.</p>
            <div className="legal-highlight warning">
              <p>⚠️ You may not share, resell, reproduce, or redistribute course content in any form. Violation of this policy will result in immediate account termination.</p>
            </div>
            <ul>
              <li>Access is granted for lifetime unless otherwise stated</li>
              <li>Content may be updated or removed at instructor discretion</li>
              <li>Offline downloads are permitted only via the official SkillVerse app</li>
              <li>Certificates are issued only upon verified course completion</li>
            </ul>
          </div>

          <div className="legal-section" id="tos-3">
            <div className="legal-section-number">4</div>
            <h2>Payment & Billing</h2>
            <p>All prices are listed in Indian Rupees (INR) unless otherwise specified. Payments are processed securely through our payment partners. By completing a purchase, you authorize us to charge the provided payment method.</p>
            <ul>
              <li>Subscription plans are billed on a recurring basis until cancelled</li>
              <li>You may cancel your subscription at any time from your account settings</li>
              <li>Prices are subject to change with 30 days' advance notice</li>
              <li>Applicable taxes (GST) will be added at checkout</li>
            </ul>
          </div>

          <div className="legal-section" id="tos-4">
            <div className="legal-section-number">5</div>
            <h2>User Conduct</h2>
            <p>You agree not to use SkillVerse in any way that is unlawful, harmful, or disruptive. Prohibited conduct includes:</p>
            <ul>
              <li>Uploading or sharing illegal, offensive, or infringing content</li>
              <li>Harassing, bullying, or threatening other users or instructors</li>
              <li>Attempting to gain unauthorized access to any part of the platform</li>
              <li>Using automated tools to scrape or extract data from the platform</li>
              <li>Impersonating any person or entity</li>
              <li>Submitting fraudulent reviews or ratings</li>
            </ul>
          </div>

          <div className="legal-section" id="tos-5">
            <div className="legal-section-number">6</div>
            <h2>Intellectual Property</h2>
            <p>All course content, branding, trademarks, and platform code are owned by SkillVerse or its instructors and are protected by applicable intellectual property laws.</p>
            <p>Content you submit (such as forum posts or reviews) remains yours, but you grant SkillVerse a worldwide, royalty-free license to display and use it in connection with the platform.</p>
          </div>

          <div className="legal-section" id="tos-6">
            <div className="legal-section-number">7</div>
            <h2>Instructor Terms</h2>
            <p>Instructors who publish courses on SkillVerse agree to additional terms as part of the Instructor Agreement. Key points include:</p>
            <ul>
              <li>Instructors retain ownership of their original content</li>
              <li>SkillVerse receives a revenue share as detailed in the Instructor Agreement</li>
              <li>Instructors are responsible for the accuracy and legality of their content</li>
              <li>SkillVerse may remove content that violates our policies</li>
            </ul>
          </div>

          <div className="legal-section" id="tos-7">
            <div className="legal-section-number">8</div>
            <h2>Disclaimers</h2>
            <p>SkillVerse provides the platform and content "as is" without warranties of any kind, express or implied. We do not guarantee that courses will help you achieve any specific career outcome or certification.</p>
            <div className="legal-highlight warning">
              <p>⚠️ Results may vary based on individual effort, prior knowledge, and external market conditions. Course completion certificates are not equivalent to government-issued academic qualifications.</p>
            </div>
          </div>

          <div className="legal-section" id="tos-8">
            <div className="legal-section-number">9</div>
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, SkillVerse shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform, even if we have been advised of the possibility of such damages.</p>
            <p>Our total liability to you for any claim shall not exceed the amount you paid to SkillVerse in the 12 months preceding the claim.</p>
          </div>

          <div className="legal-section" id="tos-9">
            <div className="legal-section-number">10</div>
            <h2>Governing Law</h2>
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.</p>
            <p>We encourage resolving disputes through our support team before escalating to formal legal proceedings.</p>
          </div>

          <div className="legal-section" id="tos-10">
            <div className="legal-section-number">11</div>
            <h2>Contact Us</h2>
            <p>For any questions regarding these Terms of Service, please contact our legal team:</p>
            <div className="legal-contact-card">
              <span className="contact-icon">⚖️</span>
              <div>
                <div className="contact-detail">Email us at</div>
                <a href="mailto:legal@skillverse.in" className="contact-val">legal@skillverse.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService;
