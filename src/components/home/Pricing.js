import React, { useState, useEffect, useRef } from 'react';
import { Check, X, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import './Pricing.css'; // Import the CSS file

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
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

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses testing the waters',
      monthlyPrice: 29,
      annualPrice: 19,
      features: [
        { name: 'Up to 1,000 conversations/month', included: true },
        { name: '1 WhatsApp number', included: true },
        { name: 'Visual flow builder', included: true },
        { name: 'Basic templates', included: true },
        { name: 'Email support', included: true },
        { name: 'AI chatbot capabilities', included: false },
        { name: 'Custom knowledge base', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'API access', included: false },
        { name: 'Advanced analytics', included: false },
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'starter'
    },
    {
      name: 'Professional',
      description: 'For growing businesses that need advanced automation',
      monthlyPrice: 79,
      annualPrice: 59,
      features: [
        { name: 'Up to 10,000 conversations/month', included: true },
        { name: '3 WhatsApp numbers', included: true },
        { name: 'Visual flow builder', included: true },
        { name: 'Advanced templates', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'AI chatbot capabilities', included: true },
        { name: 'Custom knowledge base', included: true },
        { name: 'Team collaboration (3 agents)', included: true },
        { name: 'API access', included: false },
        { name: 'Advanced analytics', included: true },
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'professional'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom requirements',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        { name: 'Unlimited conversations', included: true },
        { name: 'Unlimited WhatsApp numbers', included: true },
        { name: 'Visual flow builder', included: true },
        { name: 'Custom template creation', included: true },
        { name: '24/7 priority support', included: true },
        { name: 'Advanced AI capabilities', included: true },
        { name: 'Custom knowledge base', included: true },
        { name: 'Unlimited team members', included: true },
        { name: 'Full API access', included: true },
        { name: 'Advanced analytics + custom reports', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'enterprise'
    }
  ];

  const getGradientClass = (gradient) => {
    const gradients = {
      starter: 'gradient-starter',
      professional: 'gradient-professional',
      enterprise: 'gradient-enterprise'
    };
    return gradients[gradient] || 'gradient-starter';
  };

  return (
    <section id="pricing" className="pricing-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-badge">
            💰 Simple Pricing
          </span>
          <h2 className="section-title">
            Transparent plans,{' '}
            <span className="gradient-text">no hidden fees</span>
          </h2>
          <p className="section-description">
            Start free, scale as you grow. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={`toggle-label ${!annual ? 'active' : 'inactive'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="toggle-button"
            >
              <div className={`toggle-slider ${annual ? 'annual' : 'monthly'}`} />
            </button>
            <span className={`toggle-label ${annual ? 'active' : 'inactive'}`}>
              Annual
              <span className="save-badge gradient-text">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${isVisible ? 'visible' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge">
                  <div className="badge-content">
                    <Sparkles className="badge-icon" />
                    <span className="badge-text gradient-text">Most Popular</span>
                  </div>
                </div>
              )}

              <GlassCard>
                <div className={`glass-card ${plan.popular ? 'popular' : ''}`}>
                  {/* Background Gradient */}
                  <div className={`card-gradient-bg ${getGradientClass(plan.gradient)}`} />

                  {/* Header */}
                  <div className="card-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="price-container">
                    <div className="price-wrapper">
                      <span className="price-amount">
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="price-period">/month</span>
                    </div>
                    {annual && (
                      <p className="annual-note gradient-text">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? 'gradient' : 'outline'}
                    size="lg"
                    fullWidth
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <div className="features-list">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="feature-item">
                        {feature.included ? (
                          <Check className="feature-icon included" size={18} />
                        ) : (
                          <X className="feature-icon excluded" size={18} />
                        )}
                        <span className={`feature-name ${feature.included ? 'included' : 'excluded'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className={`enterprise-section ${isVisible ? 'visible' : ''}`}>
          <GlassCard>
            <div className="enterprise-grid">
              <div>
                <h3 className="enterprise-title">
                  Need something <span className="gradient-text">custom?</span>
                </h3>
                <p className="enterprise-description">
                  We offer custom enterprise solutions for high-volume businesses, 
                  including dedicated infrastructure, custom SLAs, and on-premise deployment.
                </p>
                <div className="enterprise-buttons">
                  <Button variant="gradient" size="lg">
                    Contact Sales Team
                  </Button>
                  <Button variant="outline" size="lg">
                    View Enterprise Brochure
                  </Button>
                </div>
              </div>
              <div className="enterprise-features">
                <div className="enterprise-feature">
                  <div className="enterprise-feature-icon yellow">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="enterprise-feature-title">99.99% SLA</p>
                    <p className="enterprise-feature-description">Enterprise uptime</p>
                  </div>
                </div>
                <div className="enterprise-feature">
                  <div className="enterprise-feature-icon blue">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="enterprise-feature-title">SSO & SAML</p>
                    <p className="enterprise-feature-description">Advanced security</p>
                  </div>
                </div>
                <div className="enterprise-feature">
                  <div className="enterprise-feature-icon green">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="enterprise-feature-title">Custom reporting</p>
                    <p className="enterprise-feature-description">Tailored analytics</p>
                  </div>
                </div>
                <div className="enterprise-feature">
                  <div className="enterprise-feature-icon purple">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="enterprise-feature-title">Dedicated support</p>
                    <p className="enterprise-feature-description">Account manager</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;