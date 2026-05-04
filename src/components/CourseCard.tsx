import React from 'react';
import type { Course } from '../data/courses';
import { useAuth } from '../context/AuthContext';
import { useEnrollment } from '../hooks/useEnrollment';
import './CourseCard.css';

interface Props {
  course: Course;
  onEnroll: (course: Course) => void;
}

const CourseCard: React.FC<Props> = ({ course, onEnroll }) => {
  const { user } = useAuth();
  const { isEnrolled } = useEnrollment();
  const formatNum = (n: number) => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n.toString();
  
  const enrolled = user && isEnrolled(course.id);

  return (
    <div className="course-card">
      <div className="card-img-wrap">
        <img src={course.image} alt={course.title} className="card-img" loading="lazy" />
        <div className="card-overlay">
          <button className="preview-btn" onClick={() => onEnroll(course)}>▶ Preview</button>
        </div>
        {course.isBestseller && <span className="card-tag tag-gold">🔥 Bestseller</span>}
        {course.isNew && <span className="card-tag tag-blue">✨ New</span>}
        {course.isFree && <span className="card-tag tag-green">🎁 Free</span>}
        <button className="wishlist-btn" aria-label="Wishlist">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span className={`badge badge-${course.level === 'Beginner' ? 'green' : course.level === 'Intermediate' ? 'blue' : 'red'}`}>
            {course.level}
          </span>
          <span className="card-category">{course.category}</span>
        </div>

        <h3 className="card-title">{course.title}</h3>
        <p className="card-desc">{course.description}</p>

        <div className="card-instructor">
          <span className="inst-avatar">{course.instructor[0]}</span>
          <span className="inst-name">{course.instructor}</span>
        </div>

        <div className="card-rating">
          <span className="rating-val">{course.rating}</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= Math.round(course.rating) ? '#fbbf24' : '#334155'}>
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <span className="rating-count">({formatNum(course.reviews)})</span>
        </div>

        <div className="card-stats">
          <span>👥 {formatNum(course.students)}</span>
          <span>⏱ {course.duration}</span>
          <span>📚 {course.lessons} lessons</span>
        </div>

        <div className="card-tags">
          {course.tags.slice(0, 3).map(t => <span key={t} className="tag-chip">{t}</span>)}
        </div>
      </div>

      <div className="card-footer">
        <div className="card-price">
          {course.isFree ? (
            <span className="price-free">FREE</span>
          ) : (
            <>
              <span className="price-current">₹{course.price.toLocaleString()}</span>
              <span className="price-original">₹{course.originalPrice.toLocaleString()}</span>
              <span className="price-discount">{Math.round((1 - course.price / course.originalPrice) * 100)}% off</span>
            </>
          )}
        </div>
        <button className="btn btn-primary enroll-btn" onClick={() => onEnroll(course)}>
          {enrolled ? 'Continue Learning' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
