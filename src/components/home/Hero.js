// components/home/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap, Shield, Users, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import GlassCard from '../common/GlassCard';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Messages Sent', value: '5M+', icon: MessageSquare },
    { label: 'Uptime', value: '99.9%', icon: Shield },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-yellow-300" />
              <span className="text-sm font-medium gradient-text">
                The Future of WhatsApp Automation
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Build <span className="gradient-text">Powerful WhatsApp</span>{' '}
              Bots Without Code
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 mb-8 max-w-lg"
            >
              Create intelligent, compliant customer service bots for your business in minutes. 
              No developer required. 100% Meta Business API compliant.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="gradient" size="lg">
                Start Building Free
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="glass p-3 rounded-xl">
                    <stat.icon size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 45 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <GlassCard className="p-8 relative overflow-hidden group">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Bot Animation */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full" />
                    <Bot size={120} className="relative text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Chat Preview */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="glass px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">Hi! How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <div className="glass px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                    <p className="text-sm">I need to track my order #12345</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center">
                    <Users size={16} />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="glass px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] border border-purple-500/30">
                    <p className="text-sm">Your order #12345 is out for delivery! 🚚</p>
                    <span className="text-xs text-white/50">2 minutes ago</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
                <span className="text-xs px-3 py-1 glass rounded-full">No-Code</span>
                <span className="text-xs px-3 py-1 glass rounded-full">AI-Powered</span>
                <span className="text-xs px-3 py-1 glass rounded-full">Meta Approved</span>
                <span className="text-xs px-3 py-1 glass rounded-full">GDPR Ready</span>
              </div>
            </GlassCard>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl"
            />
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="glass p-3 rounded-full">
          <ArrowRight size={20} className="rotate-90 text-white/70" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;