import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate async network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-hide success toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1800);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-line"></div>
        </div>

        <div className="contact-layout">
          <div className="contact-info-panel">
            
            {/* Email Card */}
            <div className="contact-info-card glass-card interactive-card">
              <div className="contact-info-icon">
                <Mail />
              </div>
              <div className="contact-info-details">
                <span className="label">Email</span>
                <a href="mailto:Gokultecheducator@gmail.com" className="value">
                  Gokultecheducator@gmail.com
                </a>
              </div>
              <button 
                className="copy-btn bg-transparent border-0 cursor-pointer text-muted hover:text-white"
                onClick={() => handleCopy('Gokultecheducator@gmail.com', 'email')}
                title="Copy Email"
                style={{ padding: '0.5rem', display: 'flex', alignItems: 'center' }}
              >
                {copiedEmail ? <Check size={16} className="text-green" style={{ color: '#22c55e' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card glass-card interactive-card">
              <div className="contact-info-icon">
                <Phone />
              </div>
              <div className="contact-info-details">
                <span className="label">Phone</span>
                <a href="tel:8825686499" className="value">
                  +91 8825686499
                </a>
              </div>
              <button 
                className="copy-btn bg-transparent border-0 cursor-pointer text-muted hover:text-white"
                onClick={() => handleCopy('8825686499', 'phone')}
                title="Copy Phone"
                style={{ padding: '0.5rem', display: 'flex', alignItems: 'center' }}
              >
                {copiedPhone ? <Check size={16} className="text-green" style={{ color: '#22c55e' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-info-card glass-card interactive-card">
              <div className="contact-info-icon">
                <MapPin />
              </div>
              <div className="contact-info-details">
                <span className="label">Location</span>
                <span className="value">India (Consulting &amp; Workshops Pan-India)</span>
              </div>
            </div>

          </div>

          <div className="contact-form-card glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder=" " 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder=" " 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  placeholder=" " 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  id="message"
                  rows={5} 
                  placeholder=" " 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
                style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner-icon"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Floating Success Toast Alert Notification */}
      <div className={`success-toast-card glass-card ${showToast ? 'show' : ''}`} style={{ background: 'var(--bg-secondary)', borderColor: 'var(--accent-cyan)' }}>
        <div className="toast-content">
          <CheckCircle className="toast-icon" />
          <span>Message sent successfully! Thank you.</span>
        </div>
      </div>
    </section>
  );
};
