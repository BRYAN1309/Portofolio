import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Users, BookOpen, Coffee, Award, Heart, Lightbulb } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import profilepicture from "@/assets/profilepciture.jpg"

const SimpleAbout: React.FC = () => {
  const iconMap = {
    "Problem Solver": Lightbulb,
    "Team Collaborator": Users,
    "Continuous Learner": BookOpen
  };

  return (
    <section id="about" className="py-20" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full p-1 animate-pulse" style={{ backgroundColor: '#434343' }}>
                <div className="w-full h-full rounded-full" style={{ backgroundColor: '#E6E6E6' }}></div>
              </div>
              {/* Profile Image */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-transparent p-1" style={{ backgroundColor: '#434343' }}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: '#E6E6E6' }}>
                  <img 
                    src={profilepicture} 
                    alt="Profile Picture" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343434' }}>
            {personalInfo.aboutMe.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#343434' }}>
            {personalInfo.aboutMe.description}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {personalInfo.aboutMe.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
              style={{ backgroundColor: '#434343' }}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#E6E6E6' }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: '#E6E6E6' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personalInfo.aboutMe.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.title as keyof typeof iconMap] || Heart;
            
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{ backgroundColor: '#434343' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(52, 52, 52, 0.3)' }}>
                    <Icon className="w-6 h-6" style={{ color: '#E6E6E6' }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#E6E6E6' }}>{highlight.title}</h3>
                </div>
                <p className="leading-relaxed" style={{ color: '#D0D0D0' }}>
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-xl border border-border/50 max-w-4xl mx-auto text-center"
          style={{ backgroundColor: '#434343' }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 rounded-full"
              style={{ backgroundColor: 'rgba(52, 52, 52, 0.3)' }}
            >
              <User className="w-8 h-8" style={{ color: '#E6E6E6' }} />
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#E6E6E6' }}>Beyond the Code</h3>
          <p className="leading-relaxed mb-6" style={{ color: '#D0D0D0' }}>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community. I believe that great software comes from understanding 
            both the technical challenges and the human needs behind every project.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm" style={{ color: '#D0D0D0' }}>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              <span>Coffee Enthusiast</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Lifelong Learner</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Open Source Contributor</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleAbout;
