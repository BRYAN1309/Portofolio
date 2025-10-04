import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../common/Button';
import { personalInfo } from '@/data/portfolio';

const SimpleHero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    personalInfo.name,
    'a Software Engineer',
    'an AI Enthusiast'
  ];

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const getTypingSpeed = () => {
      if (isDeleting) return Math.random() * 50 + 30; 
      return Math.random() * 100 + 80; 
    };
    
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentFullText.substring(0, displayedText.length - 1)
          : currentFullText.substring(0, displayedText.length + 1)
      );
    }, getTypingSpeed());

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* ✅ Removed TSParticles - now using global AnimatedBackground */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: '#343434' }}>
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: '#343434' }}
          >
            Hi, I'm{' '}
            <span style={{ color: '#343434' }}>
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#343434', opacity: 0.9 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#343434', opacity: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button variant="hero" size="lg" onClick={scrollToProjects}>
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(personalInfo.cv, "_blank")}
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: '#343434' }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: '#343434' }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(192, 192, 192, 0.5)', color: '#343434' }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#343434' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: '#343434' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default SimpleHero;