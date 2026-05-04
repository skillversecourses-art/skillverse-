import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';

interface AuthPageProps {
  onBack: () => void;
  initialMode?: 'signin' | 'signup';
}

const AuthPage: React.FC<AuthPageProps> = ({ onBack, initialMode = 'signin' }) => {
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!fullName.trim()) {
          setError('Please enter your full name');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        const { error } = await signUp(email, password, fullName);
        if (error) {
          setError(error);
        } else {
          setSuccess('Account created! Please check your email to verify your account, then sign in.');
          setMode('signin');
          setPassword('');
        } 
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error);
        } else {
          onBack();
        }
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="auth-page">
      {/* Animated background */}
      <div className="auth-bg">
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />
        <div className="auth-orb auth-orb-3" />
        <div className="auth-grid-lines" />
      </div>

      <div className="auth-container">
        {/* Left panel — branding */}
        <div className="auth-left">
          <button className="auth-back-btn" onClick={onBack}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </button>

          <div className="auth-brand">
            <div className="auth-brand-icon">⚡</div>
            <h1 className="auth-brand-name">SkillVerse</h1>
            <p className="auth-brand-tagline">Unlock your potential with India's #1 learning platform</p>
          </div>

          <div className="auth-features-list">
            <div className="auth-feature-item">
              <div className="auth-feature-icon">🎓</div>
              <div>
                <div className="auth-feature-title">200+ Expert Courses</div>
                <div className="auth-feature-desc">Learn from industry leaders</div>
              </div>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feature-icon">📜</div>
              <div>
                <div className="auth-feature-title">Verified Certificates</div>
                <div className="auth-feature-desc">Boost your career prospects</div>
              </div>
            </div>
            <div className="auth-feature-item">
              <div className="auth-feature-icon">🎯</div>
              <div>
                <div className="auth-feature-title">Lifetime Access</div>
                <div className="auth-feature-desc">Learn at your own pace</div>
              </div>
            </div>
          </div>

          <div className="auth-trust">
            <div className="auth-trust-avatars">
              {['👨🏽‍💻','👩🏻‍💼','👨🏾‍🎓','👩🏼‍🔬'].map((e,i) => (
                <span key={i} className="auth-trust-avatar">{e}</span>
              ))}
            </div>
            <span className="auth-trust-text">Joined by <strong>50,000+</strong> learners</span>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="auth-right">
          <div className="auth-form-card">
            <div className="auth-form-header">
              <h2 className="auth-form-title">
                {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="auth-form-subtitle">
                {mode === 'signin'
                  ? 'Sign in to continue your learning journey'
                  : 'Start your learning journey today — it\'s free!'}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="auth-tabs">
              <button
                className={`auth-tab ${mode === 'signin' ? 'active' : ''}`}
                onClick={() => { setMode('signin'); setError(null); setSuccess(null); }}
              >
                Sign In
              </button>
              <button
                className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
                onClick={() => { setMode('signup'); setError(null); setSuccess(null); }}
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div className="auth-alert auth-alert-error">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                {error}
              </div>
            )}
            {success && (
              <div className="auth-alert auth-alert-success">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              {mode === 'signup' && (
                <div className="auth-field">
                  <label className="auth-label">Full Name</label>
                  <div className="auth-input-wrap">
                    <svg className="auth-input-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input
                      type="text"
                      className="auth-input"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </div>
                </div>
              )}

              <div className="auth-field">
                <label className="auth-label">Email Address</label>
                <div className="auth-input-wrap">
                  <svg className="auth-input-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="auth-field">
                <label className="auth-label">
                  Password
                  {mode === 'signin' && (
                    <button type="button" className="auth-forgot-link" onClick={() => setError('Please contact support to reset your password.')}>
                      Forgot password?
                    </button>
                  )}
                </label>
                <div className="auth-input-wrap">
                  <svg className="auth-input-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="auth-input"
                    placeholder={mode === 'signup' ? 'Min 6 characters' : 'Enter your password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    minLength={6}
                  />
                  <button type="button" className="auth-eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="auth-spinner" />
                ) : mode === 'signin' ? (
                  <>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg>
                    Sign In
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                    Create Account
                  </>
                )}
              </button>
            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <div className="auth-social">
              <button type="button" className="auth-social-btn" onClick={async () => {
                setError(null);
                const { error } = await signInWithGoogle();
                if (error) setError(error);
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <p className="auth-switch">
              {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
              {' '}
              <button type="button" className="auth-switch-btn" onClick={switchMode}>
                {mode === 'signin' ? 'Sign Up Free' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
