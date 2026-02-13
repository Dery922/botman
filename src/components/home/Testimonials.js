// components/home/Testimonials.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Owner',
      company: 'FashionHub',
      content: 'BotForge transformed our customer service. We handle 3x more inquiries with the same team size. The AI is incredibly accurate and the setup took less than an hour.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'QuickMart Delivery',
      content: 'The WhatsApp Flows feature is a game-changer for order tracking. Our customers love the real-time updates. Best investment we made this year.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Customer Support Lead',
      company: 'TechFlow Solutions',
      content: 'Finally, a platform that actually understands compliance. We were worried about the Meta ban but BotForge is 100% compliant. The team helped us migrate seamlessly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'David Omondi',
      role: 'Founder',
      company: 'JuaFlow Kenya',
      content: 'As an African startup, we needed affordable WhatsApp automation. BotForge delivered. The multi-language support works perfectly for our diverse customer base.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Director',
      company: 'UrbanStore',
      content: 'The template management system saved us weeks of work. We launch campaigns in minutes instead of days. 10/10 would recommend.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
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
            💬 Trusted by Businesses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{' '}
            <span className="gradient-text">1000+ companies</span>
          </h2>
          <p className="text-xl text-white/70">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50" />
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Quote Icon */}
                  <Quote size={48} className="text-white/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-xl text-white/90 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="text-lg font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-white/60">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="glass p-3 rounded-full hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="glass p-3 rounded-full hover:bg-white/10 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-center text-white/60 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="glass px-6 py-3 rounded-xl">
                <div className="w-24 h-8 bg-white/10 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;