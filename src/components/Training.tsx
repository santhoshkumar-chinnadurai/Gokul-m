import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Clock, Users } from 'lucide-react';

interface TrainingProgram {
  id: string;
  institution: string;
  topic: string;
  duration: string;
  category: 'AWS' | 'DevOps' | 'Azure AI';
  description: string;
  audience: string;
}

export const Training: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'AWS' | 'DevOps' | 'Azure AI'>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const programs: TrainingProgram[] = [
    {
      id: "chitkara-2026",
      institution: "Chitkara University",
      topic: "AWS & DevOps",
      duration: "5 Months (Semester Program)",
      category: "AWS",
      description: "Delivered official academic semester-long curriculum comprising hands-on laboratory sessions, custom sandboxes, and exams mapped to the Solutions Architect – Associate syllabus.",
      audience: "Engineering Undergraduates"
    },
    {
      id: "gmr-sanc",
      institution: "GMR Institute of Technology, Nunna, Vijayawada",
      topic: "AWS Cloud Training",
      duration: "14 Days",
      category: "AWS",
      description: "Intensive training program focusing on AWS fundamentals, serverless architectures, and hands-on core infrastructure provisioning.",
      audience: "Undergraduate Engineering Students"
    },
    {
      id: "gce-thanjavur",
      institution: "Govt. College of Engineering, Thanjavur",
      topic: "AWS & DevOps",
      duration: "20 Days",
      category: "DevOps",
      description: "Covers automated container build workflows, application scaling, continuous integration, and secure multi-tier networking setups.",
      audience: "Engineering Students & Faculty"
    },
    {
      id: "mit-mysore",
      institution: "MIT, Mysore",
      topic: "Cloud Architecture",
      duration: "17 Days",
      category: "AWS",
      description: "Focuses on high-availability concepts, load balancers, multi-region setups, and database scalability metrics.",
      audience: "Undergraduate Students"
    },
    {
      id: "dmi-chennai",
      institution: "DMI College of Engineering, Chennai",
      topic: "AWS & DevOps",
      duration: "24 Days",
      category: "DevOps",
      description: "Hands-on implementation of Infrastructure as Code using Terraform, Git integration, and CI/CD pipelines.",
      audience: "Students & Developers"
    },
    {
      id: "svec-ap",
      institution: "Sri Vasavi Engineering College (SVEC), Andhra Pradesh",
      topic: "AWS Cloud Training",
      duration: "19 Days",
      category: "AWS",
      description: "Introduction to cloud databases, S3 lifecycle operations, serverless hosting, and security boundaries.",
      audience: "Cloud Aspirants & Students"
    },
    {
      id: "aimit-mangalore",
      institution: "AIMIT, Mangalore",
      topic: "Cloud & DevOps",
      duration: "13 Days",
      category: "DevOps",
      description: "Focused course on Docker containerization, microservice setups, and cloud release automation.",
      audience: "Postgraduate IT Students"
    },
    {
      id: "bit-coimbatore",
      institution: "BIT (Bannari Amman Institute), Coimbatore",
      topic: "AWS Foundations",
      duration: "21 Days",
      category: "AWS",
      description: "AWS cloud practitioner foundations, virtualization concepts, global infrastructures, and core security frameworks.",
      audience: "Undergraduate Students"
    },
    {
      id: "nehru-coimbatore",
      institution: "Nehru Arts & Science College, Coimbatore",
      topic: "Azure AI & Cloud",
      duration: "16 Days",
      category: "Azure AI",
      description: "Explores Microsoft Azure services, cognitive models, machine learning workspaces, and Azure AI foundations.",
      audience: "Undergraduates & Researchers"
    },
    {
      id: "jeppiaar-chennai",
      institution: "Jeppiaar University, Chennai",
      topic: "AWS & DevOps",
      duration: "23 Days",
      category: "DevOps",
      description: "Comprehensive workshop series building production-ready Dockerized node.js apps deployed via pipelines.",
      audience: "Engineering Students & Web Developers"
    },
    {
      id: "dhanalakshmi-perambalur",
      institution: "Dhanalakshmi College of Engineering, Perambalur",
      topic: "AWS Cloud & Architecture",
      duration: "11 Days",
      category: "AWS",
      description: "Introduction to Virtual Private Clouds (VPCs), custom subnets, security groups, and cloud scaling patterns.",
      audience: "Engineering Undergraduates"
    }
  ];

  const handleCardClick = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  const filteredPrograms = programs.filter(prog => {
    const matchesTab = activeTab === 'All' || prog.category === activeTab;
    const matchesSearch = 
      prog.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="section training-section" id="training">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Training &amp; Workshops</h2>
          <div className="title-line"></div>
        </div>

        <div className="training-controls glass-card">
          <div className="search-box">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by college or topic..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-tabs">
            {(['All', 'AWS', 'DevOps', 'Azure AI'] as const).map(tab => (
              <button 
                key={tab}
                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="training-grid">
          {filteredPrograms.map((program) => {
            const isExpanded = expandedCardId === program.id;
            const badgeClass = program.category === 'AWS' ? 'aws-badge' : program.category === 'DevOps' ? 'devops-badge' : 'azure-badge';
            return (
              <div
                key={program.id}
                className={`training-card glass-card interactive-card`}
                onClick={() => handleCardClick(program.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Meta row: badge + duration */}
                <div className="training-card-meta">
                  <span className={`training-badge ${badgeClass}`}>
                    {program.category}
                  </span>
                  <div className="training-duration">
                    <Clock size={11} />
                    <span>{program.duration}</span>
                  </div>
                </div>

                {/* Title & institution */}
                <h3 className="training-title">{program.topic}</h3>
                <p className="training-inst">{program.institution}</p>

                {/* Expandable details */}
                <div
                  style={{
                    maxHeight: isExpanded ? '220px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-in-out',
                    width: '100%',
                    marginTop: isExpanded ? '1rem' : '0',
                  }}
                >
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: '0 0 0.8rem 0', lineHeight: 1.6 }}>
                    {program.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--accent-indigo)' }}>
                    <Users size={11} />
                    <span>{program.audience}</span>
                  </div>
                </div>

                {/* Expand hint */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', width: '100%', justifyContent: 'center', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.7rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <span>{isExpanded ? 'Show less' : 'View details'}</span>
                  {isExpanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
