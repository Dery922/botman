import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Sparkles } from 'lucide-react';
import Button from './Button';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Features', 'How it Works', 'Pricing', 'Testimonials'];

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className={`navbar-content ${scrolled ? 'scrolled' : ''}`}>
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon-wrapper">
              <Bot className="logo-icon" />
              <Sparkles className="logo-sparkle" />
            </div>
            <span className="logo-text">
              <span className="logo-text-gradient">Bot</span>
              <span className="logo-text-white">Man</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="desktop-cta">
            <Button variant="outline" size="sm">Sign In</Button>
            <Button variant="gradient" size="sm">Start Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="mobile-menu-divider">
              <div className="mobile-cta">
                <Button variant="outline" fullWidth>Sign In</Button>
                <Button variant="gradient" fullWidth>Start Free</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;