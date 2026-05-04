import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuth } from './context/AuthContext';
import type { Course } from './data/courses';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';
import AuthPage from './components/AuthPage';
import CoursePlayer from './components/CoursePlayer';
import Checkout from './components/Checkout';
import { useEnrollment } from './hooks/useEnrollment';

type Page = 'home' | 'privacy' | 'terms' | 'refund' | 'auth' | 'course' | 'checkout';

const features = [
  { icon: '🎯', title: 'Expert Instructors', desc: 'Learn from top industry professionals with 10+ years of experience.' },
  { icon: '📜', title: 'Certified Courses', desc: 'Earn industry-recognized certificates to boost your career prospects.' },
  { icon: '⚡', title: 'Learn at Your Pace', desc: 'Lifetime access to all course content. Learn anytime, anywhere.' },
  { icon: '🤝', title: 'Live Mentoring', desc: '1-on-1 mentoring sessions and community support to keep you on track.' },
  { icon: '🛠️', title: 'Hands-on Projects', desc: 'Build real-world projects to showcase in your professional portfolio.' },
  { icon: '💼', title: 'Job Placement', desc: 'Career support with resume reviews and interview preparation sessions.' },
];

const testimonials = [
  { name: 'Aditya Kumar', role: 'Software Engineer @ Google', avatar: '👨🏽‍💻', text: 'SkillVerse completely changed my career trajectory. The Web Dev bootcamp was world-class — I landed a Google offer just 6 months after completing it!', rating: 5, course: 'Web Development Bootcamp' },
  { name: 'Priyanka Nair', role: 'Data Scientist @ Amazon', avatar: '👩🏻‍💼', text: 'The Data Science course was incredibly comprehensive. The hands-on projects and live mentoring were exactly what I needed to break into AI.', rating: 5, course: 'Data Science & ML' },
  { name: 'Rohit Mehta', role: 'Security Analyst @ Infosys', avatar: '👨🏾‍💼', text: 'The Cybersecurity course is unmatched in quality. Real-world labs, expert instructors, and a vibrant community — absolutely worth every rupee!', rating: 5, course: 'Cybersecurity' },
];

const App: React.FC = () => {
  const { user } = useAuth();
  const { isEnrolled, enrollInCourse } = useEnrollment();
  const [page, setPage] = useState<Page>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // When user signs in and was trying to enroll, go to course player or checkout
  useEffect(() => {
    if (user && page === 'auth' && selectedCourse) {
      if (isEnrolled(selectedCourse.id)) {
        setPage('course');
      } else if (selectedCourse.price > 0) {
        setPage('checkout');
      } else {
        enrollInCourse(selectedCourse.id);
        setPage('course');
      }
    }
  }, [user, page, selectedCourse, isEnrolled, enrollInCourse]);

  const goHome = () => {
    setPage('home');
    setSelectedCourse(null);
  };

  // Handle enrollment: if signed in, go to checkout/player; otherwise go to auth
  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    if (user) {
      if (isEnrolled(course.id)) {
        setPage('course');
      } else if (course.price > 0) {
        setPage('checkout');
      } else {
        enrollInCourse(course.id);
        setPage('course');
      }
    } else {
      setPage('auth');
    }
  };

  // Auth page
  if (page === 'auth') return (
    <AuthPage
      onBack={goHome}
      initialMode="signin"
    />
  );

  // Course player (protected)
  if (page === 'course' && selectedCourse && user) return (
    <CoursePlayer course={selectedCourse} onBack={goHome} />
  );

  // Checkout page (protected)
  if (page === 'checkout' && selectedCourse && user) return (
    <Checkout 
      course={selectedCourse} 
      onBack={() => setPage('home')} 
      onSuccess={() => setPage('course')} 
    />
  );

  // Legal pages
  if (page === 'privacy') return (
    <>
      <Navbar onNavigate={setPage} currentPage={page} />
      <PrivacyPolicy onBack={goHome} />
      <Footer onNavigate={setPage} />
    </>
  );
  if (page === 'terms') return (
    <>
      <Navbar onNavigate={setPage} currentPage={page} />
      <TermsOfService onBack={goHome} />
      <Footer onNavigate={setPage} />
    </>
  );
  if (page === 'refund') return (
    <>
      <Navbar onNavigate={setPage} currentPage={page} />
      <RefundPolicy onBack={goHome} />
      <Footer onNavigate={setPage} />
    </>
  );

  return (
    <div className="app">
      <Navbar onNavigate={setPage} currentPage={page} />
      <Hero />

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <p className="section-label">⭐ Why SkillVerse</p>
            <h2 className="section-title">Everything You Need to Succeed</h2>
            <p className="section-subtitle">We've built the most comprehensive learning ecosystem for modern professionals.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection onEnroll={handleEnroll} />

      {/* Testimonials */}
      <section className="testimonials-section" id="instructors">
        <div className="container">
          <div className="t-header">
            <p className="section-label">💬 Success Stories</p>
            <h2 className="section-title">Students Who Made It</h2>
            <p className="section-subtitle">Join thousands of learners who transformed their careers with SkillVerse.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="t-card" key={i}>
                <div className="t-stars">{'★'.repeat(t.rating)}</div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-badge">{t.course}</div>
                <div className="t-author">
                  <span className="t-avatar">{t.avatar}</span>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section" id="pricing">
        <div className="container">
          <div className="cta-card">
            <div className="cta-orb cta-orb-1" />
            <div className="cta-orb cta-orb-2" />
            <div className="cta-content">
              <p className="section-label" style={{ textAlign: 'center' }}>🚀 Limited Offer</p>
              <h2 className="cta-title">Start Learning Today</h2>
              <p className="cta-subtitle">Get access to 200+ premium courses. First month only ₹99!</p>
              <div className="cta-actions">
                <a href="#courses" className="btn btn-gold" style={{ padding: '14px 32px', fontSize: '16px' }}>
                  🎓 Get Full Access — ₹99/month
                </a>
                <a href="#courses" className="btn btn-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
                  Browse Free Courses
                </a>
              </div>
              <p className="cta-note">
                ✅ No commitment · Cancel anytime ·{' '}
                <button
                  onClick={() => setPage('refund')}
                  style={{ background: 'none', border: 'none', color: '#6fa3ff', cursor: 'pointer', font: 'inherit', textDecoration: 'underline' }}
                >
                  30-day money-back guarantee
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={setPage} />
    </div>
  );
};

export default App;
