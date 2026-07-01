import React, { useState, useEffect } from 'react';
import { Terminal, Award, BookOpen, Clock, ThumbsUp, Zap, MapPin } from 'lucide-react';

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'AWS Solutions Architect',
    'DevOps Engineer',
    'Cloud Educator & Consultant',
  ];

  useEffect(() => {
    let timer: any;
    const current = roles[roleIndex];
    if (isDeleting) {
      timer = setTimeout(() => setTypedText(p => p.slice(0, -1)), 45);
    } else {
      timer = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), 95);
    }
    if (!isDeleting && typedText === current) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex(p => (p + 1) % roles.length);
    }
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { icon: <Clock size={20} />, value: '6+',   label: 'Years Experience',   color: 'var(--accent-indigo)' },
    { icon: <BookOpen size={20} />, value: '60+', label: 'Training Programs',  color: 'var(--accent-cyan)' },
    { icon: <ThumbsUp size={20} />, value: '100%', label: 'Positive Feedback', color: 'var(--accent-orange)' },
    { icon: <Award size={20} />, value: '8',    label: 'Certifications',      color: 'var(--accent-purple)' },
  ];

  const highlights = [
    { icon: <Zap size={14} />, text: 'AWS Certified Solutions Architect' },
    { icon: <Award size={14} />, text: 'AWS Academy Educator' },
    { icon: <MapPin size={14} />, text: 'India — Available Worldwide' },
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Ambient background blobs */}
      <div className="hero-aurora">
        <div className="hero-blob-a"></div>
        <div className="hero-blob-b"></div>
      </div>

      <div className="container hero-container-new">

        {/* ── LEFT COLUMN ─────────────────────────────────── */}
        <div className="hero-left">

          {/* Badge */}
          <div className="hero-badge-pill">
            <Terminal size={12} />
            <span>Senior Cloud Specialist</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Hi, I'm<br />
            <span className="hero-name-gradient">Gokul M</span>
          </h1>

          {/* Typing role */}
          <div className="hero-role-row">
            <span className="hero-role-prefix">—</span>
            <span className="hero-role-text">{typedText}</span>
            <span className="hero-cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            AWS Certified Solutions Architect &amp; AWS Academy Educator. I design
            resilient multi-tier cloud architectures, automate enterprise DevOps
            pipelines, and empower the next generation of engineers with
            real-world cloud training.
          </p>

          {/* Credential pills */}
          <div className="hero-highlights">
            {highlights.map((h, i) => (
              <span key={i} className="hero-highlight-chip">
                {h.icon}
                {h.text}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-cta-row">
            <button onClick={scrollToContact} className="btn btn-primary hero-cta-btn">
              Contact Me
            </button>
            <a
              href="https://www.linkedin.com/in/gokul-m-0253912b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-linkedin-btn"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a href="#about" className="hero-cta-ghost">
              Learn More ↓
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────────── */}
        <div className="hero-right">

          {/* Profile Photo */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring"></div>
            <div className="hero-photo-ring hero-photo-ring-2"></div>
            <div className="hero-photo-frame">
              <img
                src="/gokul_photo.jpg"
                alt="Gokul M"
                className="hero-profile-photo"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/gokul-m-0253912b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-linkedin-badge"
            >
              <LinkedInIcon size={14} />
            </a>
          </div>

          {/* Stats grid */}
          <div className="hero-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat-card glass-card">
                <div className="hero-stat-icon" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Floating accent card */}
          <div className="hero-accent-card glass-card">
            <div className="accent-card-top">
              <span className="accent-dot"></span>
              <span className="accent-status">Open to Opportunities</span>
            </div>
            <div className="accent-card-body">
              <div className="accent-tag">Cloud Architecture</div>
              <div className="accent-tag">DevOps</div>
              <div className="accent-tag">Training</div>
              <div className="accent-tag">GenAI</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
