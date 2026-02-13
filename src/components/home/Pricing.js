// components/home/Pricing.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      gradient: 'from-gray-500 to-gray-600'
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
      gradient: 'from-purple-600 to-blue-600'
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
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="glass px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            💰 Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent plans,{' '}
            <span className="gradient-text">no hidden fees</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Start free, scale as you grow. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${!annual ? 'text-white' : 'text-white/60'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-16 h-8 glass rounded-full p-1"
            >
              <motion.div
                animate={{ x: annual ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              />
            </button>
            <span className={`text-lg ${annual ? 'text-white' : 'text-white/60'}`}>
              Annual
              <span className="ml-2 text-sm gradient-text font-semibold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30"
                >
                  <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-purple-500/50">
                    <Sparkles size={16} className="text-yellow-300" />
                    <span className="text-sm font-semibold gradient-text">Most Popular</span>
                  </div>
                </motion.div>
              )}

              <GlassCard 
                className={`p-8 h-full flex flex-col relative ${
                  plan.popular ? 'border-2 border-purple-500/30' : ''
                }`}
                hover={false}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-white/60 mb-1">/month</span>
                  </div>
                  {annual && (
                    <p className="text-sm gradient-text mt-2">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'gradient' : 'outline'}
                  size="lg"
                  fullWidth
                  className="mb-8"
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <Check size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={18} className="text-white/20 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-white/80' : 'text-white/40'}>
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <GlassCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Need something <span className="gradient-text">custom?</span>
                </h3>
                <p className="text-white/70 text-lg mb-6">
                  We offer custom enterprise solutions for high-volume businesses, 
                  including dedicated infrastructure, custom SLAs, and on-premise deployment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="gradient" size="lg">
                    Contact Sales Team
                  </Button>
                  <Button variant="outline" size="lg">
                    View Enterprise Brochure
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="glass p-3 rounded-xl">
                    <Zap size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold">99.99% SLA</p>
                    <p className="text-sm text-white/60">Enterprise uptime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="glass p-3 rounded-xl">
                    <Shield size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">SSO & SAML</p>
                    <p className="text-sm text-white/60">Advanced security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="glass p-3 rounded-xl">
                    <TrendingUp size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Custom reporting</p>
                    <p className="text-sm text-white/60">Tailored analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="glass p-3 rounded-xl">
                    {/* <Users size={20} className="text-purple-400" /> */}
                  </div>
                  <div>
                    <p className="font-semibold">Dedicated support</p>
                    <p className="text-sm text-white/60">Account manager</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;