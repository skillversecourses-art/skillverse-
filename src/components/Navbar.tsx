import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

type Page = 'home' | 'privacy' | 'terms' | 'refund' | 'auth' | 'course';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'home' }) => {
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // If we're on a legal page, go home first then scroll to section
  const handleNavLink = (sectionId: string) => {
    setMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      // Give time for home page to render, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    onNavigate('home');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <button
          className="navbar-brand"
          onClick={() => onNavigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: 0 }}
        >
          <div className="brand-icon">⚡</div>
          <span className="brand-name">SkillVerse</span>
        </button>

        <div className="navbar-links">
          <button className="nav-link" onClick={() => handleNavLink('courses')}>Courses</button>
          <button className="nav-link" onClick={() => handleNavLink('categories')}>Categories</button>
          <button className="nav-link" onClick={() => handleNavLink('instructors')}>Instructors</button>
          <button className="nav-link" onClick={() => handleNavLink('pricing')}>Pricing</button>
        </div>

        <div className="navbar-actions">
          <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          {user ? (
            <>
              <div className="nav-user-pill">
                <span className="nav-user-avatar">{(user.user_metadata?.full_name || user.email || '?')[0].toUpperCase()}</span>
                <span className="nav-user-name">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
              </div>
              <button className="btn btn-outline" style={{padding:'8px 18px',fontSize:'13px'}} onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline" style={{padding:'8px 18px',fontSize:'13px'}} onClick={() => onNavigate('auth')}>
                Sign In
              </button>
              <button className="btn btn-primary" style={{padding:'8px 18px',fontSize:'13px'}} onClick={() => onNavigate('auth')}>
                Get Started
              </button>
            </>
          )}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>

      {searchOpen && (
        <div className="search-bar-drop container">
          <div className="search-bar-wrap">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input autoFocus type="text" placeholder="Search for courses, skills, instructors..." className="search-input"/>
            <button className="btn btn-primary" style={{padding:'8px 16px',fontSize:'13px'}}>Search</button>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-link" onClick={() => handleNavLink('courses')}>Courses</button>
          <button className="mobile-link" onClick={() => handleNavLink('categories')}>Categories</button>
          <button className="mobile-link" onClick={() => handleNavLink('instructors')}>Instructors</button>
          <button className="mobile-link" onClick={() => handleNavLink('pricing')}>Pricing</button>
          <div className="mobile-actions">
            {user ? (
              <>
                <div className="nav-user-pill" style={{justifyContent:'center'}}>
                  <span className="nav-user-avatar">{(user.user_metadata?.full_name || user.email || '?')[0].toUpperCase()}</span>
                  <span className="nav-user-name">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                </div>
                <button className="btn btn-outline" style={{width:'100%',justifyContent:'center'}} onClick={handleSignOut}>Sign Out</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline" style={{width:'100%',justifyContent:'center'}} onClick={() => { setMenuOpen(false); onNavigate('auth'); }}>Sign In</button>
                <button className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} onClick={() => { setMenuOpen(false); onNavigate('auth'); }}>Get Started</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
