// components/home/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'How it Works', 'Integrations', 'API', 'Changelog']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Guides', 'Blog', 'Community', 'Templates', 'Status']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Partners', 'Legal', 'Contact']
    },
    {
      title: 'Compliance',
      links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Meta Policy 2026', 'Security', 'Compliance Center']
    }
  ];

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Bot size={32} className="text-white" />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-xl rounded-full" />
              </div>
              <span className="text-2xl font-bold">
                <span className="gradient-text">Bot</span>
                <span className="text-white">Forge</span>
              </span>
            </motion.div>
            
            <p className="text-white/60 mb-6 leading-relaxed">
              The most compliant and developer-friendly WhatsApp bot platform. 
              Built for businesses that take customer service seriously.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="glass p-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="glass p-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="glass p-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="glass p-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <a
                        href="#"
                        className="text-white/60 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 BotForge. All rights reserved. Meta WhatsApp Business API Certified Partner.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-red-400" />
              <span>for businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;