import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import type { Course } from '../data/courses';
import { courseLessons } from '../data/courseLessons';
import './CoursePlayer.css';

interface CoursePlayerProps {
  course: Course;
  onBack: () => void;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ course, onBack }) => {
  const { user, signOut } = useAuth();
  const lessons = courseLessons[course.id] || [];
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentLesson = lessons[activeLesson];
  const progress = lessons.length > 0 ? Math.round((completedLessons.size / lessons.length) * 100) : 0;

  const toggleComplete = (index: number) => {
    setCompletedLessons(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  };

  const handleNext = () => {
    if (activeLesson < lessons.length - 1) {
      setCompletedLessons(prev => new Set(prev).add(activeLesson));
      setActiveLesson(activeLesson + 1);
    }
  };

  const handlePrev = () => {
    if (activeLesson > 0) setActiveLesson(activeLesson - 1);
  };

  return (
    <div className="player-page">
      {/* Top bar */}
      <div className="player-topbar">
        <div className="player-topbar-left">
          <button className="player-back-btn" onClick={onBack}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div className="player-course-info">
            <h1 className="player-course-title">{course.title}</h1>
            <span className="player-course-meta">{course.instructor} · {course.lessons} lessons · {course.duration}</span>
          </div>
        </div>
        <div className="player-topbar-right">
          <div className="player-progress-wrap">
            <div className="player-progress-bar">
              <div className="player-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="player-progress-text">{progress}%</span>
          </div>
          <div className="player-user-info">
            <span className="player-user-avatar">{(user?.user_metadata?.full_name || user?.email || '?')[0].toUpperCase()}</span>
            <button className="player-signout-btn" onClick={signOut}>Sign Out</button>
          </div>
        </div>
      </div>

      <div className="player-content">
        {/* Video area */}
        <div className={`player-main ${sidebarOpen ? '' : 'full-width'}`}>
          <div className="player-video-wrap">
            {currentLesson ? (
              currentLesson.videoUrl ? (
                <iframe
                  key={currentLesson.videoUrl}
                  className="player-video"
                  src={currentLesson.videoUrl}
                  title={currentLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="player-video-placeholder">
                  <div className="pvp-icon">🎬</div>
                  <h3 className="pvp-title">{currentLesson.title}</h3>
                  <p className="pvp-desc">Video content is being prepared. Check back soon!</p>
                </div>
              )
            ) : (
              <div className="player-video-placeholder">
                <div className="pvp-icon">📚</div>
                <h3 className="pvp-title">Select a Lesson</h3>
                <p className="pvp-desc">Choose a lesson from the sidebar to start learning.</p>
              </div>
            )}
          </div>

          {/* Below video info */}
          {currentLesson && (
            <div className="player-lesson-info">
              <div className="pli-header">
                <div>
                  <span className="pli-badge">Lesson {activeLesson + 1} of {lessons.length}</span>
                  <h2 className="pli-title">{currentLesson.title}</h2>
                  <p className="pli-desc">{currentLesson.description}</p>
                </div>
                <div className="pli-duration">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {currentLesson.duration}
                </div>
              </div>

              <div className="pli-actions">
                <button className="btn btn-outline" onClick={handlePrev} disabled={activeLesson === 0} style={{padding:'10px 20px', fontSize:'13px'}}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  Previous
                </button>
                <button
                  className={`btn ${completedLessons.has(activeLesson) ? 'btn-ghost' : 'btn-primary'}`}
                  onClick={() => toggleComplete(activeLesson)}
                  style={{padding:'10px 20px', fontSize:'13px'}}
                >
                  {completedLessons.has(activeLesson) ? '✅ Completed' : '☐ Mark Complete'}
                </button>
                <button className="btn btn-primary" onClick={handleNext} disabled={activeLesson === lessons.length - 1} style={{padding:'10px 20px', fontSize:'13px'}}>
                  Next
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar toggle */}
        <button className="player-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {sidebarOpen
              ? <><path d="M15 18l-6-6 6-6"/></>
              : <><path d="M9 18l6-6-6-6"/></>}
          </svg>
        </button>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="player-sidebar">
            <div className="player-sidebar-header">
              <h3 className="psb-title">Course Content</h3>
              <span className="psb-count">{completedLessons.size}/{lessons.length} completed</span>
            </div>
            <div className="player-lessons-list">
              {lessons.map((lesson, idx) => (
                <button
                  key={idx}
                  className={`player-lesson-item ${idx === activeLesson ? 'active' : ''} ${completedLessons.has(idx) ? 'completed' : ''}`}
                  onClick={() => setActiveLesson(idx)}
                >
                  <span className="pli-num">
                    {completedLessons.has(idx) ? (
                      <svg width="16" height="16" fill="none" stroke="#34d399" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </span>
                  <div className="pli-text">
                    <span className="pli-lesson-title">{lesson.title}</span>
                    <span className="pli-lesson-dur">{lesson.duration}</span>
                  </div>
                  {idx === activeLesson && <span className="pli-playing">▶</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlayer;
