import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  // ── Init theme from localStorage (or default to dark) ──────────
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  // ── Scroll handler (separate effect, no theme deps) ────────────
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
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
            <a
              href="https://www.linkedin.com/in/gokul-m-0253912b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-linkedin-icon"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
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
          <a
            href="https://www.linkedin.com/in/gokul-m-0253912b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-linkedin-link"
          >
            <LinkedInIcon size={18} />
            <span>Connect on LinkedIn</span>
          </a>
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
