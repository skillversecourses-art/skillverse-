import React from 'react';
import './LegalPage.css';

interface Props { onBack: () => void; }

const toc = [
  'Information We Collect',
  'How We Use Your Data',
  'Data Sharing & Disclosure',
  'Cookies & Tracking',
  'Your Rights',
  'Data Retention',
  'Security',
  'Children\'s Privacy',
  'Changes to Policy',
  'Contact Us',
];

const PrivacyPolicy: React.FC<Props> = ({ onBack }) => (
  <div className="legal-page">
    <div className="container">
      <button className="legal-back-btn" onClick={onBack}>← Back to Home</button>

      <div className="legal-hero">
        <div className="legal-badge">🔒 Privacy Policy</div>
        <h1 className="legal-title">Your Privacy Matters</h1>
        <span className="legal-updated">Last updated: May 3, 2024</span>
      </div>

      <div className="legal-layout">
        <aside className="legal-toc">
          <div className="toc-title">On this page</div>
          {toc.map((t, i) => (
            <a key={i} href={`#pp-${i}`} className="toc-link">{t}</a>
          ))}
        </aside>

        <div className="legal-content">
          <div className="legal-highlight">
            <p>This Privacy Policy explains how SkillVerse collects, uses, and protects your personal information when you use our platform. By using SkillVerse, you agree to the practices described here.</p>
          </div>

          {[
            {
              title: 'Information We Collect',
              content: [
                'We collect information you provide directly to us when you create an account, purchase a course, or contact our support team.',
                'This includes: your name, email address, phone number, billing information, and profile details.',
                'We also automatically collect usage data such as pages visited, course progress, device type, IP address, and browser information.',
              ],
              list: ['Account registration data', 'Payment and billing information', 'Course progress and completion data', 'Communications you send us', 'Device and browser metadata'],
            },
            {
              title: 'How We Use Your Data',
              content: ['We use your information to provide, improve, and personalize your learning experience on SkillVerse.'],
              list: ['Process your enrollments and payments', 'Send course updates and learning reminders', 'Provide customer support', 'Improve our platform and content recommendations', 'Comply with legal obligations', 'Prevent fraud and abuse'],
            },
            {
              title: 'Data Sharing & Disclosure',
              content: ['We do not sell your personal data to third parties. We may share your data only in the following circumstances:'],
              list: ['With instructors (your name and progress only)', 'With payment processors (Razorpay, Stripe) for transactions', 'With service providers who help us operate the platform', 'When required by law or legal process', 'With your explicit consent'],
            },
            {
              title: 'Cookies & Tracking',
              content: ['We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze usage patterns.', 'You can control cookies through your browser settings. Disabling cookies may limit certain platform features.'],
            },
            {
              title: 'Your Rights',
              content: ['You have the following rights regarding your personal data:'],
              list: ['Access — request a copy of your personal data', 'Correction — update inaccurate information', 'Deletion — request erasure of your data', 'Portability — receive your data in a structured format', 'Objection — opt out of certain data processing', 'Withdraw consent at any time'],
            },
            {
              title: 'Data Retention',
              content: ['We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, most data is removed within 30 days, though some records may be retained for legal compliance for up to 7 years.'],
            },
            {
              title: 'Security',
              content: ['We implement industry-standard security measures including 256-bit SSL encryption, two-factor authentication, and regular security audits to protect your data.'],
              highlight: { type: 'success', text: 'All payment data is processed through PCI-DSS compliant payment gateways. We never store your full card details on our servers.' },
            },
            {
              title: "Children's Privacy",
              content: ['SkillVerse is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us their data, please contact us immediately.'],
            },
            {
              title: 'Changes to This Policy',
              content: ['We may update this Privacy Policy periodically. We will notify you of significant changes via email or a prominent notice on our platform at least 14 days before they take effect.'],
            },
            {
              title: 'Contact Us',
              content: ['If you have questions about this Privacy Policy or wish to exercise your data rights, please reach out to us:'],
              contact: true,
            },
          ].map((s, i) => (
            <div className="legal-section" key={i} id={`pp-${i}`}>
              <div className="legal-section-number">{i + 1}</div>
              <h2>{s.title}</h2>
              {s.content.map((p, j) => <p key={j}>{p}</p>)}
              {s.list && <ul>{s.list.map((l, j) => <li key={j}>{l}</li>)}</ul>}
              {s.highlight && (
                <div className={`legal-highlight ${s.highlight.type}`}>
                  <p>{s.highlight.text}</p>
                </div>
              )}
              {s.contact && (
                <div className="legal-contact-card">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <div className="contact-detail">Email us at</div>
                    <a href="mailto:privacy@skillverse.in" className="contact-val">privacy@skillverse.in</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
