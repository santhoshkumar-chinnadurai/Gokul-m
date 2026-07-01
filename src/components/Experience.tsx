import React, { useEffect, useRef } from 'react';
import { Calendar, ShieldAlert, Cpu, GitMerge, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  role: string;
  company: string;
  duration: string;
  icon: React.ReactNode;
  responsibilities: string[];
  isLeft: boolean;
}

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fillRef.current && timelineRef.current) {
      gsap.fromTo(
        fillRef.current,
        { height: '0%' },
        {
          height: '100%',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 40%',
            end: 'bottom 60%',
            scrub: true,
          }
        }
      );
    }
  }, []);

  const milestones: Milestone[] = [
    {
      role: "VPC Design & Network Security",
      company: "Self-Employed | 6+ Years Freelancing",
      duration: "Ongoing Portfolio Consulting",
      icon: <ShieldAlert size={18} className="text-orange" />,
      responsibilities: [
        "Designed secure multi-tier AWS VPCs featuring isolated subnets, route tables, Internet Gateways, and NAT Gateways.",
        "Administered IAM configurations, permission boundaries, and MFA enforcement for strict access security.",
        "Managed S3 lifecycle configurations, cross-region replication (CRR), and versioning policies."
      ],
      isLeft: true
    },
    {
      role: "Cloud Infrastructure & Serverless",
      company: "Self-Employed | Freelance Cloud Specialist",
      duration: "Ongoing Portfolio Consulting",
      icon: <Cpu size={18} style={{ color: '#9F85FF' }} />,
      responsibilities: [
        "Provisioned EC2 clusters, Auto-Scaling Groups (ASG), and Application Load Balancers (ALB) for dynamic traffic.",
        "Configured serverless computing backends with AWS Lambda functions and API Gateway integrations.",
        "Created relational databases with Amazon RDS (PostgreSQL/MySQL) and DynamoDB systems."
      ],
      isLeft: false
    },
    {
      role: "DevOps Pipelines & Automation",
      company: "Self-Employed | Devops Consulting",
      duration: "Ongoing Portfolio Consulting",
      icon: <GitMerge size={18} style={{ color: '#0071E3' }} />,
      responsibilities: [
        "Constructed automated CI/CD pipelines via GitHub Actions and GitLab CI to expedite build/release cycles.",
        "Wrote modular Infrastructure-as-Code (IaC) architectures utilizing Terraform.",
        "Containerized applications using Docker and orchestrated builds on ECS and EKS clusters."
      ],
      isLeft: true
    },
    {
      role: "Training, Consulting & Semester Delivery",
      company: "AWS Academy Educator",
      duration: "Jan 2026 – May 2026 (Semester)",
      icon: <GraduationCap size={18} style={{ color: '#E0A96D' }} />,
      responsibilities: [
        "Delivered a comprehensive 5-month semester program on AWS Cloud & DevOps at Chitkara University.",
        "Conducted 60+ training workshops pan-India for undergraduates, graduates, and engineering professionals.",
        "Designed custom sandbox lab environments, exercises, and exams aligned with AWS SAA objectives."
      ],
      isLeft: false
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-line"></div>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          {/* Centered vertical scroll tracker */}
          <div className="timeline-progress-line">
            <div className="timeline-progress-fill" ref={fillRef}></div>
          </div>

          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`timeline-item ${milestone.isLeft ? 'left-item' : 'right-item'}`}
            >
              <div className="timeline-marker"></div>
              
              <div className="timeline-content glass-card interactive-card">
                <div className="timeline-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <div>
                    <h3 className="experience-role" style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                      {milestone.role}
                    </h3>
                    <span className="experience-company" style={{ fontSize: '0.85rem', color: 'var(--accent-indigo)', fontWeight: 500 }}>
                      {milestone.company}
                    </span>
                  </div>
                  <div className="experience-duration" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '0.3rem 0.8rem', borderRadius: '99px' }}>
                    <Calendar size={12} />
                    <span>{milestone.duration}</span>
                  </div>
                </div>

                <ul className="responsibility-list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {milestone.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-indigo)', marginTop: '0.2rem' }}>•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
