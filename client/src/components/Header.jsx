import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = !isHomePage || scrollY > 60;

  const textOpacity = Math.max(0, 1 - scrollY / 220);
  const textTranslateY = scrollY * 0.25;

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <h2>CookShelf</h2>
        <nav>
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
            <p>Discover curated recipes, filter by cuisine, and find your next favorite dish.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;