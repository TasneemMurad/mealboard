import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import FilterControls from './FilterControls';

function Header({
  searchText,
  onSearchChange,
  selectedCuisine,
  onCuisineChange,
  sortOrder,
  onSortChange }
) {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isScrolled = !isHomePage || scrollY > 60;

  const textOpacity = Math.max(0, 1 - scrollY / 220);
  const textTranslateY = scrollY * 0.25;

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <h2>CookShelf</h2>

        {isHomePage && (
          <FilterControls
            searchText={searchText}
            onSearchChange={onSearchChange}
            selectedCuisine={selectedCuisine}
            onCuisineChange={onCuisineChange}
            sortOrder={sortOrder}
            onSortChange={onSortChange}
          />
        )}

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      {isHomePage && (
        <div className="headerPhoto">
          <img
            src="/images/Header.jpg"
            alt="CookShelf Delicious Dishes"
            className="headerPhoto-img"
          />
          <div className="headerPhoto-fade-overlay"></div>

          <div
            className="hero-caption"
            style={{
              opacity: textOpacity,
              transform: `translateY(-${textTranslateY}px)`,
            }}
          >
            <h1>Every Great Meal<br />Starts Here</h1>
            <p>Discover curated recipes and find your next favorite dish.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;