import React, { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Shield, 
  Bot, 
  Workflow, 
  BarChart3, 
  Smartphone,
  Plug,
  Cloud,
  AArrowDown
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import './Features.css'; // Import the CSS file

const Features = () => {
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

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy production-ready WhatsApp bots in minutes, not months. Zero coding required.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: '100% Compliant',
      description: 'Fully Meta Business API compliant. No risk of bans or policy violations.',
      color: 'green'
    },
    {
      icon: Bot,
      title: 'AI-Powered',
      description: 'Advanced NLP understanding. Train on your own knowledge base and documents.',
      color: 'purple'
    },
    {
      icon: Workflow,
      title: 'Visual Builder',
      description: 'Drag-and-drop conversation designer. Create complex flows without code.',
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor performance, conversion rates, and customer satisfaction instantly.',
      color: 'pink'
    },
    {
      icon: Smartphone,
      title: 'Multi-Device',
      description: 'Works seamlessly across all devices. Mobile-optimized chat experience.',
      color: 'indigo'
    },
    {
      icon: Plug,
      title: '100+ Integrations',
      description: 'Connect with CRM, e-commerce, payment gateways, and more.',
      color: 'cyan'
    },
    {
      icon: Cloud,
      title: 'Enterprise Grade',
      description: '99.9% uptime, end-to-end encryption, and SOC2 compliance.',
      color: 'gray'
    },
    {
      icon: AArrowDown,
      title: '24/7 Support',
      description: 'Dedicated account managers and priority support for all plans.',
      color: 'red'
    }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      yellow: 'yellow',
      green: 'green',
      purple: 'purple',
      blue: 'blue',
      pink: 'pink',
      indigo: 'indigo',
      cyan: 'cyan',
      gray: 'gray',
      red: 'red'
    };
    return colorMap[color] || 'purple';
  };

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-badge">
            ✨ Powerful Features
          </span>
          <h2 className="section-title">
            Everything you need to{' '}
            <span className="gradient-text">scale customer service</span>
          </h2>
          <p className="section-description">
            Build, deploy, and manage sophisticated WhatsApp bots that delight your customers 
            and supercharge your support team.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`features-grid ${isVisible ? 'visible' : ''}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
            >
              <GlassCard className="glass-card">
                {/* Icon with Gradient Background */}
                <div className="icon-container">
                  <div className={`icon-glow ${getColorClass(feature.color)}`} />
                  <div className="icon-wrapper">
                    <feature.icon />
                  </div>
                </div>

                {/* Content */}
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="hover-line" />
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`bottom-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-container">
            <span className="cta-text">Ready to get started?</span>
            <button className="cta-link">
              Explore all features →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;