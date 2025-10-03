import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import Button from '../common/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: personalInfo.social.github, icon: Github },
    { name: 'LinkedIn', url: personalInfo.social.linkedin, icon: Linkedin },
    { name: 'Email', url: `mailto:${personalInfo.email}`, icon: Mail }
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
    <footer className="bg-[#E6E6E6] border-t border-[#d9d9d9]">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#343434] mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-[#434343] max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={personalInfo.social.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-[#343434] text-white hover:bg-[#434343]">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-[#343434] mb-4">{personalInfo.name}</h3>
            <p className="text-[#434343] mb-6 leading-relaxed">
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
                    className="p-3 bg-white shadow-md rounded-lg text-[#434343] hover:text-[#343434] hover:shadow-lg transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#343434]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#434343] hover:text-[#343434] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#343434]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#434343]">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-[#434343]">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[#434343]">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d9d9d9] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#434343] text-sm">
            <span>© {currentYear} {personalInfo.name}. Built with React & TypeScript</span>
          </div>
          <div className="text-[#434343] text-sm">
            Designed & built by {personalInfo.name}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
