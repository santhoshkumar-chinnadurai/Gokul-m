import React, { useRef } from 'react';
import { Cloud, GitBranch, Sparkles, Cpu } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  iconColor?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills, iconColor = 'var(--accent-purple)' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const xc = (e.clientX - rect.left) / rect.width - 0.5;
    const yc = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-yc * 14}deg) rotateY(${xc * 14}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      className="skills-card glass-card interactive-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.12s ease-out', transformStyle: 'preserve-3d' }}
    >
      <div className="skills-card-header">
        <span style={{ color: iconColor, display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag-item">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Core Competencies</h2>
          <div className="title-line"></div>
        </div>

        <div className="skills-grid">
          <SkillCard
            title="Cloud & Architecture"
            icon={<Cloud size={22} />}
            iconColor="var(--accent-orange)"
            skills={[
              'Amazon Web Services (AWS)',
              'Multi-Tier VPC Design & Security',
              'EC2 Autoscaling & Load Balancers',
              'Serverless — Lambda & API Gateway',
              'S3 Lifecycle & Cross-Region Replication',
              'RDS Aurora, PostgreSQL & DynamoDB',
            ]}
          />
          <SkillCard
            title="DevOps & Automation"
            icon={<GitBranch size={22} />}
            iconColor="var(--accent-indigo)"
            skills={[
              'CI/CD — GitHub Actions & GitLab CI',
              'Infrastructure as Code (Terraform)',
              'Docker Containerisation & EKS/ECS',
              'CloudFormation Stack Deployments',
              'CloudWatch Monitoring & SNS Alerts',
            ]}
          />
          <SkillCard
            title="AI & Modern Tools"
            icon={<Sparkles size={22} />}
            iconColor="var(--accent-purple)"
            skills={[
              'Model Context Protocol (MCP)',
              'Anthropic Claude API Integration',
              'Claude Code — CLI Automations',
              'GenAI Agent Orchestration',
              'Prompt Engineering & LLM Tools',
            ]}
          />
          <SkillCard
            title="Systems & Labs"
            icon={<Cpu size={22} />}
            iconColor="var(--accent-cyan)"
            skills={[
              'Linux Administration & Bash Scripts',
              'Corporate Network Configurations',
              'Academic Sandbox Lab Environments',
              'Incident Troubleshooting & CloudTrail',
              'Custom Training Lab Accounts',
            ]}
          />
        </div>
      </div>
    </section>
  );
};
