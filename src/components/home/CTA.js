import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Sparkles, ArrowRight, Bot, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import GlassCard from '../common/GlassCard';
import './CTA.css'; // Import the CSS file

const CTA = () => {
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

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className={`cta-card-container ${isVisible ? 'visible' : ''}`}>
          <GlassCard>
            <div className="cta-glass-card">
              {/* Animated Background Elements */}
              <div className="bg-element bg-element-1" />
              <div className="bg-element bg-element-2" />

              {/* Content */}
              <div className="cta-content">
                {/* Icon */}
                <div className="animated-icon">
                  <div className="icon-container">
                    <div className="icon-glow" />
                    <div className="icon-wrapper">
                      <Bot />
                    </div>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="cta-heading">
                  Ready to transform your{' '}
                  <span className="gradient-text">customer service?</span>
                </h2>
                
                <p className="cta-description">
                  Join 1,000+ businesses already automating their WhatsApp support. 
                  Start your free 14-day trial today. No credit card required.
                </p>

                {/* Stats */}
                <div className="stats-row">
                  <div className="stat-item">
                    <Sparkles className="stat-icon yellow" />
                    <span className="stat-text">14-day free trial</span>
                  </div>
                  <div className="stat-item">
                    <MessageSquare className="stat-icon blue" />
                    <span className="stat-text">No credit card</span>
                  </div>
                  <div className="stat-item">
                    <Rocket className="stat-icon green" />
                    <span className="stat-text">Cancel anytime</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="cta-buttons">
                  <Button variant="gradient" size="lg">
                    Start Building Free
                    <ArrowRight className="btn-icon" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Talk to Sales
                  </Button>
                </div>

                {/* Trust Message */}
                <p className="trust-message">
                  ⚡ No code required • 5-minute setup • 100% Meta compliant
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CTA;