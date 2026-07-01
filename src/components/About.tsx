import { Cloud, Award, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Profile</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
        </div>

        <div className="about-layout">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <div className="about-image-container">
              <img 
                src="/cloud_architect_avatar.png" 
                alt="Gokul M Profile" 
                className="about-profile-img"
              />
            </div>
          </div>

          <div className="about-card glass-card relative">
            <div className="about-card-glow"></div>
            <p className="about-text">
              Bridging high-impact cloud education with robust enterprise architectures.
            </p>
            <p className="about-text-secondary">
              As a seasoned AWS Solutions Architect, DevOps Engineer, and authorized AWS Academy Educator, 
              I consult for corporate environments while running intensive cloud bootcamps across India. 
              My dual expertise allows me to construct secure, scalable cloud ecosystems and break down complex 
              concepts for engineering students and IT teams alike.
            </p>

            <ul className="about-quick-bullets" style={{ listStyle: 'none', padding: 0 }}>
              <li className="bullet-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <div className="bullet-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(224, 169, 109, 0.1)', border: '1px solid rgba(224, 169, 109, 0.2)' }}>
                  <Award size={16} style={{ color: '#E0A96D' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>AWS Academy Authorization</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Authorized to deliver official, accredited AWS Academy programs.</p>
                </div>
              </li>

              <li className="bullet-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <div className="bullet-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(159, 133, 255, 0.1)', border: '1px solid rgba(159, 133, 255, 0.2)' }}>
                  <Calendar size={16} style={{ color: '#9F85FF' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Chitkara University (2026)</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Designed and delivered a full 5-month AWS &amp; DevOps semester program.</p>
                </div>
              </li>

              <li className="bullet-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <div className="bullet-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(0, 113, 227, 0.1)', border: '1px solid rgba(0, 113, 227, 0.2)' }}>
                  <Cloud size={16} style={{ color: '#0071E3' }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Enterprise-Grade Consultations</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>6+ years of consulting for custom VPCs, serverless apps, and IAM boundaries.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
