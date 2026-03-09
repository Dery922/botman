import React, { useEffect, useRef, useState } from 'react';
import { Bot, Zap, Shield, Users, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import GlassCard from '../common/GlassCard';
import './Hero.css'; // Import the CSS file

const Hero = () => {
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

  const stats = [
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Messages Sent', value: '5M+', icon: MessageSquare },
    { label: 'Uptime', value: '99.9%', icon: Shield },
  ];

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="container">
        <div className="grid">
          {/* Left Content */}
          <div className={`content-left ${isVisible ? 'visible' : ''}`}>
            {/* Badge */}
            <div className={`badge ${isVisible ? 'visible' : ''}`}>
              <Sparkles className="badge-icon" />
              <span className="badge-text">
                The Future of WhatsApp Automation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`main-heading ${isVisible ? 'visible' : ''}`}>
              Build <span className="gradient-text">Powerful WhatsApp</span>{' '}
              Bots Without Code
            </h1>

            <p className={`description ${isVisible ? 'visible' : ''}`}>
              Create intelligent, compliant customer service bots for your business in minutes. 
              No developer required. 100% Meta Business API compliant.
            </p>

            {/* CTA Buttons */}
            <div className={`cta-buttons ${isVisible ? 'visible' : ''}`}>
              <Button variant="gradient" size="lg">
                Start Building Free
                <ArrowRight className="btn-icon" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className={`stats ${isVisible ? 'visible' : ''}`}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon-wrapper">
                    <stat.icon className="stat-icon" />
                  </div>
                  <div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Glass Card */}
          <div className={`content-right ${isVisible ? 'visible' : ''}`}>
            <div className="glass-card">
              <div className="card-gradient-overlay" />
              
              {/* Floating Bot Animation */}
              <div className="bot-container">
                <div className="bot-wrapper">
                  <div className="bot-icon-container">
                    <div className="bot-glow" />
                    <Bot className="bot-icon" />
                  </div>
                </div>
              </div>

              {/* Chat Preview */}
              <div className="chat-preview">
                <div className="chat-message bot">
                  <div className="chat-avatar bot">
                    <Bot />
                  </div>
                  <div className="chat-bubble bot">
                    <p className="chat-text">Hi! How can I help you today?</p>
                  </div>
                </div>
                
                <div className="chat-message user">
                  <div className="chat-bubble user">
                    <p className="chat-text">I need to track my order #12345</p>
                  </div>
                  <div className="chat-avatar user">
                    <Users />
                  </div>
                </div>
                
                <div className="chat-message bot">
                  <div className="chat-avatar bot">
                    <Bot />
                  </div>
                  <div className="chat-bubble bot highlight">
                    <p className="chat-text">Your order #12345 is out for delivery! 🚚</p>
                    <span className="chat-time">2 minutes ago</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="tech-badges">
                <span className="tech-badge">No-Code</span>
                <span className="tech-badge">AI-Powered</span>
                <span className="tech-badge">Meta Approved</span>
                <span className="tech-badge">GDPR Ready</span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-element floating-element-1" />
            <div className="floating-element floating-element-2" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="glass">
          <ArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Hero;