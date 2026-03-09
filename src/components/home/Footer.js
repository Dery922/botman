import React from 'react';
import { Bot, Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.css'; // Import the CSS file

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
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="brand-column">
            <div className="brand-logo">
              <div className="logo-wrapper">
                <Bot className="logo-icon" />
                <div className="logo-glow" />
              </div>
              <span className="brand-name">
                <span className="gradient-text">Bot</span>
                <span className="brand-name-white">Forge</span>
              </span>
            </div>
            
            <p className="brand-description">
              The most compliant and developer-friendly WhatsApp bot platform. 
              Built for businesses that take customer service seriously.
            </p>

            {/* Social Links */}
            <div className="social-links">
              <a href="#" className="social-link">
                <Github />
              </a>
              <a href="#" className="social-link">
                <Twitter />
              </a>
              <a href="#" className="social-link">
                <Linkedin />
              </a>
              <a href="#" className="social-link">
                <Mail />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="links-columns">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="section-title">{section.title}</h3>
                <ul className="footer-links">
                  {section.links.map((link, i) => (
                    <li key={i} className="footer-link-item">
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <p className="copyright">
              © 2026 BotForge. All rights reserved. Meta WhatsApp Business API Certified Partner.
            </p>
            <div className="made-with">
              <span>Made with</span>
              <Heart className="heart-icon" />
              <span>for businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="footer-bg-element" />
      <div className="footer-glow" />
    </footer>
  );
};

export default Footer;