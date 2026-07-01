import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Sync initial theme with html attribute
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
    setTheme(currentTheme);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled background state
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide / Show on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'header-hidden' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo cursor-pointer" onClick={() => scrollToSection('hero')}>
            GOKUL M<span className="glow-dot"></span>
          </div>

          <nav className="nav-links">
            <button onClick={() => scrollToSection('about')} className="nav-link bg-transparent border-0 cursor-pointer">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link bg-transparent border-0 cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link bg-transparent border-0 cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('training')} className="nav-link bg-transparent border-0 cursor-pointer">Training</button>
            <button onClick={() => scrollToSection('certifications')} className="nav-link bg-transparent border-0 cursor-pointer">Certifications</button>
          </nav>

          <div className="nav-actions">
            <button 
              className="theme-toggle magnetic-target" 
              onClick={toggleTheme} 
              aria-label="Toggle Theme"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="theme-toggle-icon" />
              ) : (
                <Moon size={18} className="theme-toggle-icon" />
              )}
            </button>

            <div className="nav-cta">
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline btn-sm magnetic-target">
                Contact Me
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-nav-toggle" 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
          <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">Experience</button>
          <button onClick={() => scrollToSection('training')} className="mobile-nav-link">Training</button>
          <button onClick={() => scrollToSection('certifications')} className="mobile-nav-link">Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact Me</button>
        </nav>

        {/* Theme toggle in mobile overlay — icon only, no ugly text button */}
        <div className="mobile-nav-footer">
          <button
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </>
  );
};
