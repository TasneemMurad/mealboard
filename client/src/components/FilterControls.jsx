import { useState } from 'react';

const CUISINES = [
  'Italian',
  'Japanese',
  'Russian',
  'Indian',
  'Mexican',
  'French',
  'Middle Eastern',
  'Jordanian',
  'Palestinian',
];

function FilterControls({
  searchText,
  onSearchChange,
  selectedCuisine,
  onCuisineChange,
  sortOrder,
  onSortChange,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActiveFilter = selectedCuisine.length > 0 || sortOrder !== 'none';

  const handleCuisineToggle = (cuisine) => {
    if (selectedCuisine.includes(cuisine)) {
      onCuisineChange(selectedCuisine.filter((item) => item !== cuisine));
    } else {
      onCuisineChange([...selectedCuisine, cuisine]);
    }
  };

  const handleReset = () => {
    onCuisineChange([]);
    onSortChange('none');
  };

  return (
    <div className="header-filter-wrapper">
      <div className="search-capsule">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
        </svg>

        <input
          type="text"
          placeholder="Search recipes..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {searchText && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}

        <button
          type="button"
          className={`filter-toggle-btn ${showFilters ? 'active' : ''}`}
          onClick={() => setShowFilters((prev) => !prev)}
          aria-label="Toggle filters"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
          </svg>
          {hasActiveFilter && <span className="filter-dot"></span>}
        </button>
      </div>

      {showFilters && (
        <div className="filter-popover">
          <div className="filter-popover-header">
            <span>Filter & Sort</span>
            {hasActiveFilter && (
              <button type="button" className="reset-filters-btn" onClick={handleReset}>
                Reset all
              </button>
            )}
          </div>

          <div className="filter-popover-group">
            <label>Cuisine (Select one or more)</label>
            <div className="filter-pills">
              <button
                type="button"
                className={`filter-pill ${selectedCuisine.length === 0 ? 'selected' : ''}`}
                onClick={() => onCuisineChange([])}
              >
                All Cuisines
              </button>

              {CUISINES.map((cuisine) => (
                <button
                  key={cuisine}
                  type="button"
                  className={`filter-pill ${selectedCuisine.includes(cuisine) ? 'selected' : ''}`}
                  onClick={() => handleCuisineToggle(cuisine)}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-popover-group">
            <label>Prep Time</label>
            <div className="filter-pills">
              <button
                type="button"
                className={`filter-pill ${sortOrder === 'none' ? 'selected' : ''}`}
                onClick={() => onSortChange('none')}
              >
                Default
              </button>
              <button
                type="button"
                className={`filter-pill ${sortOrder === 'fast' ? 'selected' : ''}`}
                onClick={() => onSortChange('fast')}
              >
                Shortest first
              </button>
              <button
                type="button"
                className={`filter-pill ${sortOrder === 'slow' ? 'selected' : ''}`}
                onClick={() => onSortChange('slow')}
              >
                Longest first
              </button>

              <button
                type="button"
                className="apply-filters-btn"
                onClick={() => setShowFilters(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterControls;