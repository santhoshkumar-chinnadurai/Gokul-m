import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copyright">
          &copy; {currentYear} Gokul M. All Rights Reserved.
        </div>
        
        <div className="footer-center">
          <span className="footer-role">AWS Solutions Architect &amp; DevOps Consultant</span>
        </div>
        
        <div className="footer-tech">
          Built with React • TS • Vite • GSAP
        </div>
      </div>
    </footer>
  );
};
