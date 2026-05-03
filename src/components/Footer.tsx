import React from 'react';
import './Footer.css';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms' | 'refund') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="footer">
    <div className="footer-glow" />
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <div className="brand-icon">⚡</div>
            <span className="brand-name">SkillVerse</span>
          </div>
          <p className="footer-tagline">Empowering India's next generation of tech professionals with world-class online education.</p>
          <div className="footer-socials">
            {[
              { icon: '𝕏', label: 'Twitter' },
              { icon: 'in', label: 'LinkedIn' },
              { icon: '▶', label: 'YouTube' },
              { icon: 'f', label: 'Facebook' },
            ].map(s => (
              <a key={s.label} href="#" className="social-btn" aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Courses</h4>
          <ul className="footer-links">
            {['Web Development', 'Data Science & AI', 'Cybersecurity', 'UI/UX Design', 'Cloud Computing', 'Mobile Development'].map(l => (
              <li key={l}><a href="#courses" className="footer-link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links">
            {['About Us', 'Careers', 'Blog', 'Press', 'Partnerships', 'Contact'].map(l => (
              <li key={l}><a href="#" className="footer-link">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Stay Updated</h4>
          <p className="footer-newsletter-text">Get the latest courses and offers directly in your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '13px' }}>Subscribe</button>
          </div>
          <div className="footer-badges">
            <div className="f-badge">🔒 SSL Secured</div>
            <div className="f-badge">✅ NSDC Approved</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2024 SkillVerse. All rights reserved.</p>
        <div className="footer-bottom-links">
          <button className="footer-link footer-link-btn" onClick={() => onNavigate('privacy')}>Privacy Policy</button>
          <button className="footer-link footer-link-btn" onClick={() => onNavigate('terms')}>Terms of Service</button>
          <button className="footer-link footer-link-btn" onClick={() => onNavigate('refund')}>Refund Policy</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
