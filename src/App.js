// App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import Pricing from './components/home/Pricing';
import Testimonials from './components/home/Testimonials';
import CTA from './components/home/CTA';
import Footer from './components/home/Footer';
import ThreeBackground from './components/effects/ThreeBackground';
import FloatingShapes from './components/effects/FloatingShapes';
import './index.css';
import ChatWidget from './components/chat/ChatWidget';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Floating Shapes Layer */}
      <FloatingShapes />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <CTA />
          <Footer />
          <ChatWidget />
        </motion.div>
      </div>
    </div>
  );
}

export default App;