import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import Button from '../common/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: personalInfo.social.github, 
      icon: Github 
    },
    { 
      name: 'LinkedIn', 
      url: personalInfo.social.linkedin, 
      icon: Linkedin 
    },
    { 
      name: 'Email', 
      url: `mailto:${personalInfo.email}`, 
      icon: Mail 
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface-elevated border-t border-border">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient mb-4">{personalInfo.name}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {personalInfo.tagline}. Based in {personalInfo.location}, 
              I create digital experiences that make a difference.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-surface rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>using React & TypeScript</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            Designed & built by {personalInfo.name}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;