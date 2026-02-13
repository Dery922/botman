// components/home/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy production-ready WhatsApp bots in minutes, not months. Zero coding required.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: '100% Compliant',
      description: 'Fully Meta Business API compliant. No risk of bans or policy violations.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Bot,
      title: 'AI-Powered',
      description: 'Advanced NLP understanding. Train on your own knowledge base and documents.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Workflow,
      title: 'Visual Builder',
      description: 'Drag-and-drop conversation designer. Create complex flows without code.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor performance, conversion rates, and customer satisfaction instantly.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Multi-Device',
      description: 'Works seamlessly across all devices. Mobile-optimized chat experience.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Plug,
      title: '100+ Integrations',
      description: 'Connect with CRM, e-commerce, payment gateways, and more.',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Cloud,
      title: 'Enterprise Grade',
      description: '99.9% uptime, end-to-end encryption, and SOC2 compliance.',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: AArrowDown,
      title: '24/7 Support',
      description: 'Dedicated account managers and priority support for all plans.',
      color: 'from-red-400 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="relative py-32 overflow-hidden">
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
            ✨ Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{' '}
            <span className="gradient-text">scale customer service</span>
          </h2>
          <p className="text-xl text-white/70">
            Build, deploy, and manage sophisticated WhatsApp bots that delight your customers 
            and supercharge your support team.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 h-full group">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity`} />
                  <div className={`relative w-16 h-16 glass rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-20`}>
                    <feature.icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-2xl">
            <span className="text-lg font-medium">Ready to get started?</span>
            <button className="gradient-text font-semibold hover:underline flex items-center gap-2">
              Explore all features →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;