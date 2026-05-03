import React from 'react';
import './Hero.css';
import { stats } from '../data/courses';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span>🚀</span>
            <span>India's #1 Premium Learning Platform</span>
          </div>

          <h1 className="hero-title">
            Unlock Your
            <span className="hero-title-gradient"> Future Career</span>
            <br />with Expert Courses
          </h1>

          <p className="hero-desc">
            Learn in-demand tech skills from industry experts. Get certified, build real projects, and land your dream job — all at your own pace.
          </p>

          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary" style={{padding:'14px 28px',fontSize:'15px'}}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
              Explore Courses
            </a>
            <a href="#" className="btn btn-outline" style={{padding:'14px 28px',fontSize:'15px'}}>
              Watch Demo
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              {['👨🏽‍💻','👩🏻‍💼','👨🏾‍🎓','👩🏼‍🔬','👨🏽‍🏫'].map((e,i) => (
                <span key={i} className="avatar-pill">{e}</span>
              ))}
            </div>
            <div className="trust-text">
              <span className="trust-bold">50,000+</span>
              <span className="trust-sub"> learners already enrolled</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/hero_banner.png" alt="Premium Learning Platform" className="hero-img" />
            <div className="hero-card hero-card-1">
              <span className="hc-icon">🏆</span>
              <div>
                <div className="hc-title">Top Rated</div>
                <div className="hc-sub">4.9 ★ Rating</div>
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <span className="hc-icon">🎓</span>
              <div>
                <div className="hc-title">Certificate</div>
                <div className="hc-sub">Industry-recognized</div>
              </div>
            </div>
            <div className="hero-card hero-card-3">
              <span className="hc-icon">⚡</span>
              <div>
                <div className="hc-title">Live Mentoring</div>
                <div className="hc-sub">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
