// components/home/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneCall, Settings, Bot, CheckCircle, ArrowRight, Smartphone, Zap, Users } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Smartphone,
      title: '1. Connect WhatsApp',
      description: 'Link your WhatsApp Business account in one click. Our guided OAuth flow handles the complex Meta verification for you.',
      color: 'from-blue-400 to-blue-600',
      details: ['OAuth 2.0 authentication', 'Auto-verify webhooks', '5-minute setup']
    },
    {
      icon: Settings,
      title: '2. Build Your Bot',
      description: 'Drag, drop, and configure. No coding required. Add AI capabilities, forms, and business logic with our visual builder.',
      color: 'from-purple-400 to-purple-600',
      details: ['200+ pre-built templates', 'Visual flow designer', 'AI training playground']
    },
    {
      icon: Bot,
      title: '3. Train & Customize',
      description: 'Upload your knowledge base, set up responses, and customize the personality to match your brand voice.',
      color: 'from-pink-400 to-pink-600',
      details: ['PDF/website training', 'Brand voice settings', 'Multi-language support']
    },
    {
      icon: CheckCircle,
      title: '4. Go Live',
      description: 'Deploy instantly. Start handling customer inquiries 24/7 with zero latency.',
      color: 'from-green-400 to-emerald-600',
      details: ['Instant deployment', 'Real-time monitoring', '99.9% uptime SLA']
    }
  ];

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
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
            🚀 Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From zero to live in{' '}
            <span className="gradient-text">under 10 minutes</span>
          </h2>
          <p className="text-xl text-white/70">
            No complicated setup. No developer required. Just four simple steps to 
            transform your customer service.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 origin-left"
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <GlassCard className="p-8 h-full group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 glass rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-purple-500/50 transition-all">
                    <span className="text-xl font-bold gradient-text">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity`} />
                    <div className={`relative w-20 h-20 glass rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} bg-opacity-20`}>
                      <step.icon size={40} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 mb-6">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow for non-last items (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight size={24} className="text-white/40 rotate-90" />
                    </div>
                  )}
                </GlassCard>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="glass p-2 rounded-full">
                      <ArrowRight size={24} className="text-white/70" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <GlassCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="glass p-4 rounded-xl">
                  <Zap size={24} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">10min</p>
                  <p className="text-sm text-white/60">Average setup time</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="glass p-4 rounded-xl">
                  <Users size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">85%</p>
                  <p className="text-sm text-white/60">Automation rate</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="glass p-4 rounded-xl">
                  <CheckCircle size={24} className="text-green-400" />
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">24/7</p>
                  <p className="text-sm text-white/60">Customer support</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;