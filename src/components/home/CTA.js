// components/home/CTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Sparkles, ArrowRight, Bot, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import GlassCard from '../common/GlassCard';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="relative p-16 text-center overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-70" />
                  <div className="relative glass p-6 rounded-3xl">
                    <Bot size={64} className="text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to transform your{' '}
                <span className="gradient-text">customer service?</span>
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join 1,000+ businesses already automating their WhatsApp support. 
                Start your free 14-day trial today. No credit card required.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} className="text-yellow-300" />
                  <span className="text-white/80">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={20} className="text-blue-400" />
                  <span className="text-white/80">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket size={20} className="text-green-400" />
                  <span className="text-white/80">Cancel anytime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg">
                  Start Building Free
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </div>

              {/* Trust Message */}
              <p className="text-sm text-white/40 mt-8">
                ⚡ No code required • 5-minute setup • 100% Meta compliant
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;