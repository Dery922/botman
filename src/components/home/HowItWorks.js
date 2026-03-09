import React, { useEffect, useRef, useState } from 'react';
import { PhoneCall, Settings, Bot, CheckCircle, ArrowRight, Smartphone, Zap, Users } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import './HowItWorks.css'; // Import the CSS file

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Smartphone,
      title: '1. Connect WhatsApp',
      description: 'Link your WhatsApp Business account in one click. Our guided OAuth flow handles the complex Meta verification for you.',
      color: 'blue',
      details: ['OAuth 2.0 authentication', 'Auto-verify webhooks', '5-minute setup']
    },
    {
      icon: Settings,
      title: '2. Build Your Bot',
      description: 'Drag, drop, and configure. No coding required. Add AI capabilities, forms, and business logic with our visual builder.',
      color: 'purple',
      details: ['200+ pre-built templates', 'Visual flow designer', 'AI training playground']
    },
    {
      icon: Bot,
      title: '3. Train & Customize',
      description: 'Upload your knowledge base, set up responses, and customize the personality to match your brand voice.',
      color: 'pink',
      details: ['PDF/website training', 'Brand voice settings', 'Multi-language support']
    },
    {
      icon: CheckCircle,
      title: '4. Go Live',
      description: 'Deploy instantly. Start handling customer inquiries 24/7 with zero latency.',
      color: 'green',
      details: ['Instant deployment', 'Real-time monitoring', '99.9% uptime SLA']
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-badge">
            🚀 Simple Process
          </span>
          <h2 className="section-title">
            From zero to live in{' '}
            <span className="gradient-text">under 10 minutes</span>
          </h2>
          <p className="section-description">
            No complicated setup. No developer required. Just four simple steps to 
            transform your customer service.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="timeline-container">
          {/* Connection Line (Desktop) */}
          <div className="connection-line">
            <div className={`line-progress ${isVisible ? 'visible' : ''}`} />
          </div>

          {/* Steps Grid */}
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`step-card ${isVisible ? 'visible' : ''}`}
              >
                <GlassCard className="glass-card">
                  {/* Step Number */}
                  <div className="step-number">
                    <span className="gradient-text">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="step-icon-container">
                    <div className={`icon-glow ${step.color}`} />
                    <div className={`icon-wrapper ${step.color}`}>
                      <step.icon />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="details-list">
                    {step.details.map((detail, i) => (
                      <li key={i} className="detail-item">
                        <div className="detail-bullet" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow for non-last items (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="mobile-arrow">
                      <ArrowRight />
                    </div>
                  )}
                </GlassCard>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="desktop-arrow">
                    <div className="arrow-wrapper">
                      <ArrowRight />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Preview */}
        <div className={`stats-preview ${isVisible ? 'visible' : ''}`}>
          <GlassCard className="glass-card">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon-wrapper yellow">
                  <Zap />
                </div>
                <div>
                  <p className="stat-value gradient-text">10min</p>
                  <p className="stat-label">Average setup time</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper blue">
                  <Users />
                </div>
                <div>
                  <p className="stat-value gradient-text">85%</p>
                  <p className="stat-label">Automation rate</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper green">
                  <CheckCircle />
                </div>
                <div>
                  <p className="stat-value gradient-text">24/7</p>
                  <p className="stat-label">Customer support</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;