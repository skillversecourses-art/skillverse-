import React, { useState, useMemo } from 'react';
import { courses, categories } from '../data/courses';
import type { Course } from '../data/courses';
import CourseCard from './CourseCard';
import './CoursesSection.css';

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const PRICE_FILTERS = ['All', 'Free', 'Paid'];
const SORT_OPTIONS = ['Most Popular', 'Highest Rated', 'Newest', 'Price: Low to High', 'Price: High to Low'];

interface CoursesSectionProps {
  onEnroll: (course: Course) => void;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ onEnroll }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const filtered = useMemo(() => {
    let list = [...courses];
    if (activeCategory !== 'all') list = list.filter(c => c.category === activeCategory);
    if (activeLevel !== 'All') list = list.filter(c => c.level === activeLevel);
    if (priceFilter === 'Free') list = list.filter(c => c.isFree);
    if (priceFilter === 'Paid') list = list.filter(c => !c.isFree);
    if (search) list = list.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === 'Highest Rated') list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'Most Popular') list.sort((a, b) => b.students - a.students);
    else if (sortBy === 'Price: Low to High') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price: High to Low') list.sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, activeLevel, priceFilter, sortBy, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (id: string) => { setActiveCategory(id); setPage(1); };

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="cs-header">
          <div>
            <p className="section-label">📚 Our Courses</p>
            <h2 className="section-title">Learn From the Best</h2>
            <p className="section-subtitle">Hand-picked courses from India's top industry experts. Start learning today.</p>
          </div>
          <div className="cs-search">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            <input type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} placeholder="Search courses..." className="cs-search-input" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="cat-tabs" id="categories">
          {categories.map(c => (
            <button key={c.id} className={`cat-tab ${activeCategory === c.id ? 'active' : ''}`} onClick={() => handleCategory(c.id)}>
              <span>{c.icon}</span><span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="filters-bar">
          <div className="filter-group">
            <span className="filter-label">Level:</span>
            {LEVELS.map(l => (
              <button key={l} className={`filter-btn ${activeLevel === l ? 'active' : ''}`} onClick={() => { setActiveLevel(l); setPage(1); }}>{l}</button>
            ))}
          </div>
          <div className="filter-group">
            <span className="filter-label">Price:</span>
            {PRICE_FILTERS.map(p => (
              <button key={p} className={`filter-btn ${priceFilter === p ? 'active' : ''}`} onClick={() => { setPriceFilter(p); setPage(1); }}>{p}</button>
            ))}
          </div>
          <div className="sort-wrap">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="21" y1="18" x2="7" y2="18" /></svg>
            <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {SORT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div className="cs-results-info">
          Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> courses
        </div>

        {paginated.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No courses found</h3>
            <p>Try adjusting your filters or search term.</p>
            <button className="btn btn-ghost" onClick={() => { setSearch(''); setActiveCategory('all'); setActiveLevel('All'); setPriceFilter('All'); }}>Clear All Filters</button>
          </div>
        ) : (
          <div className="courses-grid">
            {paginated.map(c => <CourseCard key={c.id} course={c} onEnroll={onEnroll} />)}
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>← Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
            ))}
            <button className="page-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next →</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
