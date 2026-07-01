import React, { useState } from 'react';
import { CloudLightning, GraduationCap, Cpu, Code, Link, BrainCircuit, MessageSquareCode, Terminal, X, ShieldCheck } from 'lucide-react';

interface CertData {
  title: string;
  issuer: string;
  validity: string;
  isPurple?: boolean;
  icon: React.ReactNode;
  details: string[];
}

export const Certifications: React.FC = () => {
  const [activeCertId, setActiveCertId] = useState<string | null>(null);

  const certDetails: Record<string, CertData> = {
    "aws-saa": {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      validity: "Validity: Jan 2026 – Jan 2029",
      icon: <CloudLightning size={24} className="cert-main-icon" />,
      details: [
        "Validated capabilities to deploy secure and robust applications on AWS technologies.",
        "Demonstrated skills in defining solutions using architectural design principles based on customer requirements.",
        "Comprehensive knowledge of AWS security, IAM boundaries, S3 storage architectures, and auto-scaling setups."
      ]
    },
    "aws-educator": {
      title: "AWS Academy Educator",
      issuer: "Amazon Web Services (AWS)",
      validity: "Validity: Ongoing",
      icon: <GraduationCap size={24} className="cert-main-icon" />,
      details: [
        "Authorized to deliver official, accredited AWS Academy Cloud curricula to universities and colleges.",
        "Evaluated on pedagogical skills and technical expertise across AWS Foundations and Solutions Architect pathways.",
        "Actively setup lab exercises, virtual classrooms, and curriculum assessments for over 60 programs."
      ]
    },
    "mcp-advanced": {
      title: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      validity: "Issued: Feb 2026",
      isPurple: true,
      icon: <Cpu size={24} className="cert-main-icon text-purple" />,
      details: [
        "Advanced implementation of MCP servers and custom clients.",
        "Focus on secure client-host connection contexts, sandboxed environments, and custom JSON schema parameters.",
        "Integration of LLM memory layers and real-time query pipelines."
      ]
    },
    "claude-api": {
      title: "Building with the Claude API",
      issuer: "Anthropic",
      validity: "Issued: Feb 2026",
      isPurple: true,
      icon: <Code size={24} className="cert-main-icon text-purple" />,
      details: [
        "Hands-on program building intelligent user-facing web tools utilizing Anthropic Claude models.",
        "Proficiency in prompt optimization, system instructions definition, and asynchronous message stream management.",
        "Designed agentic workflows utilizing tools/functions callbacks and structured output variables."
      ]
    },
    "mcp-intro": {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      validity: "Issued: Feb 2026",
      isPurple: true,
      icon: <Link size={24} className="cert-main-icon text-purple" />,
      details: [
        "Core protocol architectures connecting local resources to AI models.",
        "Understand schema definitions, command parameters, and context boundaries.",
        "Configured custom Claude Desktop tools configurations mapping file systems and terminal nodes."
      ]
    },
    "ai-fluency": {
      title: "AI Fluency Framework & Foundations",
      issuer: "Anthropic",
      validity: "Issued: Feb 2026",
      isPurple: true,
      icon: <BrainCircuit size={24} className="cert-main-icon text-purple" />,
      details: [
        "Conceptual overview of Transformer architectures, model training parameters, and scaling laws.",
        "Evaluates ethical safety boundaries, content toxicity filters, and system-prompt system structures.",
        "Applied best practices to incorporate generative assistants in enterprise workflows."
      ]
    },
    "claude-101": {
      title: "Claude 101",
      issuer: "Anthropic",
      validity: "Issued: Feb 2026",
      isPurple: true,
      icon: <MessageSquareCode size={24} className="cert-main-icon text-purple" />,
      details: [
        "Anthropic's baseline certification covering basic Claude operations and features.",
        "Focus on system prompts setups, token limits constraints, and user input sanitization.",
        "Configured Claude Projects, custom instruction presets, and collaborative workspaces."
      ]
    },
    "claude-code": {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      validity: "Issued: Feb 2026",
      isPurple: true,
      icon: <Terminal size={24} className="cert-main-icon text-purple" />,
      details: [
        "Advanced workshop on developer terminal integrations utilizing the Claude Code CLI tool.",
        "Automated codebase analysis, git commit message completions, and unit testing runs.",
        "Practiced secure execution boundaries for terminal-agent file editing tasks."
      ]
    }
  };

  const activeCert = activeCertId ? certDetails[activeCertId] : null;

  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="title-line"></div>
        </div>

        <h3 className="cert-category-title" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
          <CloudLightning size={24} style={{ color: 'var(--accent-orange)' }} />
          <span>Amazon Web Services</span>
        </h3>
        
        <div className="certifications-grid aws-certs" style={{ marginBottom: '4rem' }}>
          <div 
            className="cert-card glass-card interactive-card" 
            onClick={() => setActiveCertId("aws-saa")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <CloudLightning className="cert-main-icon" size={24} />
            </div>
            <h3>AWS Certified Solutions Architect – Associate</h3>
            <p className="cert-issuer">Amazon Web Services</p>
            <p className="cert-validity">Jan 2026 – Jan 2029</p>
            <span className="cert-click-hint">Click for details</span>
          </div>

          <div 
            className="cert-card glass-card interactive-card" 
            onClick={() => setActiveCertId("aws-educator")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <GraduationCap className="cert-main-icon" size={24} />
            </div>
            <h3>AWS Academy Educator</h3>
            <p className="cert-issuer">Amazon Web Services</p>
            <p className="cert-validity">Ongoing</p>
            <span className="cert-click-hint">Click for details</span>
          </div>
        </div>

        <h3 className="cert-category-title ant-title" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
          <Sparkles className="cert-main-icon text-purple" size={24} />
          <span>Anthropic AI Certifications</span>
        </h3>

        <div className="certifications-grid anthropic-certs">
          <div 
            className="cert-card glass-card interactive-card anthropic-card" 
            onClick={() => setActiveCertId("mcp-advanced")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <Cpu size={24} className="cert-main-icon text-purple" />
            </div>
            <h3>Model Context Protocol: Advanced Topics</h3>
            <p className="cert-issuer">Anthropic</p>
            <p className="cert-validity">Issued: Feb 2026</p>
            <span className="cert-click-hint">Click for details</span>
          </div>

          <div 
            className="cert-card glass-card interactive-card anthropic-card" 
            onClick={() => setActiveCertId("claude-api")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <Code size={24} className="cert-main-icon text-purple" />
            </div>
            <h3>Building with the Claude API</h3>
            <p className="cert-issuer">Anthropic</p>
            <p className="cert-validity">Issued: Feb 2026</p>
            <span className="cert-click-hint">Click for details</span>
          </div>

          <div 
            className="cert-card glass-card interactive-card anthropic-card" 
            onClick={() => setActiveCertId("mcp-intro")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <Link size={24} className="cert-main-icon text-purple" />
            </div>
            <h3>Introduction to Model Context Protocol</h3>
            <p className="cert-issuer">Anthropic</p>
            <p className="cert-validity">Issued: Feb 2026</p>
            <span className="cert-click-hint">Click for details</span>
          </div>

          <div 
            className="cert-card glass-card interactive-card anthropic-card" 
            onClick={() => setActiveCertId("ai-fluency")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <BrainCircuit size={24} className="cert-main-icon text-purple" />
            </div>
            <h3>AI Fluency Framework &amp; Foundations</h3>
            <p className="cert-issuer">Anthropic</p>
            <p className="cert-validity">Issued: Feb 2026</p>
            <span className="cert-click-hint">Click for details</span>
          </div>

          <div 
            className="cert-card glass-card interactive-card anthropic-card" 
            onClick={() => setActiveCertId("claude-101")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <MessageSquareCode size={24} className="cert-main-icon text-purple" />
            </div>
            <h3>Claude 101</h3>
            <p className="cert-issuer">Anthropic</p>
            <p className="cert-validity">Issued: Feb 2026</p>
            <span className="cert-click-hint">Click for details</span>
          </div>

          <div 
            className="cert-card glass-card interactive-card anthropic-card" 
            onClick={() => setActiveCertId("claude-code")}
          >
            <div className="cert-card-bg-glow"></div>
            <div className="cert-badge-wrapper">
              <Terminal size={24} className="cert-main-icon text-purple" />
            </div>
            <h3>Claude Code in Action</h3>
            <p className="cert-issuer">Anthropic</p>
            <p className="cert-validity">Issued: Feb 2026</p>
            <span className="cert-click-hint">Click for details</span>
          </div>
        </div>
      </div>

      {/* Dynamic Blurred Overlay Modal Details Popup */}
      <div 
        className={`cert-modal-overlay ${activeCert ? 'open' : ''}`}
        onClick={() => setActiveCertId(null)}
      >
        {activeCert && (
          <div 
            className="cert-modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="cert-modal-close"
              onClick={() => setActiveCertId(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="cert-modal-body">
              <div className="cert-modal-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem', textAlign: 'center' }}>
                <div className={`cert-modal-icon-wrapper ${activeCert.isPurple ? 'purple-icon' : ''}`} style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {activeCert.icon}
                </div>
                <h3 className="cert-modal-title" style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {activeCert.title}
                </h3>
                <p className="cert-modal-issuer" style={{ fontSize: '0.9rem', color: 'var(--accent-indigo)', fontWeight: 500, margin: 0 }}>
                  {activeCert.issuer}
                </p>
                <p className="cert-modal-validity" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                  {activeCert.validity}
                </p>
              </div>

              <ul className="cert-modal-details" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {activeCert.details.map((detail, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textAlign: 'left' }}>
                    <ShieldCheck size={18} style={{ color: activeCert.isPurple ? '#9F85FF' : '#E0A96D', flexShrink: 0, marginTop: '0.1rem' }} />
                    <p className="cert-modal-text" style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Sparkles: React.FC<{ className?: string; size?: number }> = ({ className, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>
);
