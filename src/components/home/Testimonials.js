import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import './Testimonials.css'; // Import the CSS file

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-badge">
            💬 Trusted by Businesses
          </span>
          <h2 className="section-title">
            Loved by{' '}
            <span className="gradient-text">1000+ companies</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="slider-container">
          <div key={currentIndex} className="testimonial-card">
            <GlassCard>
              <div className="testimonial-content">
                {/* Image */}
                <div className="image-container">
                  <div className="image-glow" />
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="testimonial-image"
                  />
                </div>

                {/* Content */}
                <div className="testimonial-text-container">
                  {/* Quote Icon */}
                  <Quote className="quote-icon" />

                  {/* Rating */}
                  <div className="rating-container">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="star-icon" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="testimonial-quote">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="author-name">{testimonials[currentIndex].name}</p>
                    <p className="author-role">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button
              onClick={prevSlide}
              className="nav-button"
              disabled={isAnimating}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="nav-button"
              disabled={isAnimating}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="dots-container">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`trust-badges ${isVisible ? 'visible' : ''}`}>
          <p className="trust-title">Trusted by innovative companies worldwide</p>
          <div className="badges-grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="badge-item">
                <div className="badge-placeholder" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;