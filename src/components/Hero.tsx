import React, { useState, useEffect } from 'react';
import { Terminal, Award, BookOpen, Clock, ThumbsUp, Zap, MapPin } from 'lucide-react';

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
            <a href="#about" className="hero-cta-ghost">
              Learn More ↓
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────────── */}
        <div className="hero-right">

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
