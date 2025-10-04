import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Code, ArrowRight } from 'lucide-react';

// Sample data - replace with your actual data
import { experiences } from '@/data/portfolio';

const SimpleExperience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#434343', color: '#E6E6E6' }}>
              Software Engineer Journey
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#343434' }}>
            Software Engineer Experience
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#5A5A5A' }}>
            Building exceptional digital experiences through innovation and dedication
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#434343', opacity: 0.2 }}></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 items-center justify-center z-10" style={{ backgroundColor: '#434343', borderColor: '#E6E6E6' }}>
                    <Building2 className="w-5 h-5" style={{ color: '#E6E6E6' }} />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                      style={{ backgroundColor: 'white', border: '1px solid #D0D0D0' }}
                    >
                      
                      <div className="relative">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5 gap-3">
                          <div>
                            <h3 className="text-2xl font-bold mb-2" style={{ color: '#343434' }}>
                              {experience.position}
                            </h3>
                            <h4 className="text-lg font-semibold flex items-center gap-2" style={{ color: '#5A5A5A' }}>
                              <Building2 className="w-4 h-4" />
                              {experience.company}
                            </h4>
                          </div>
                          <div className="flex items-center px-4 py-2 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                            <Calendar className="w-4 h-4 mr-2" style={{ color: '#434343' }} />
                            <span className="text-sm font-medium" style={{ color: '#434343' }}>
                              {experience.duration}
                            </span>
                          </div>
                        </div>

                        <p className="mb-6 leading-relaxed text-base" style={{ color: '#5A5A5A' }}>
                          {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                              style={{ 
                                backgroundColor: '#434343',
                                color: '#E6E6E6'
                              }}
                            >
                              <Code className="w-3 h-3 mr-2" />
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Hover Arrow Indicator */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
                        >
                          <ArrowRight className="w-6 h-6" style={{ color: '#434343' }} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;