import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Code } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const SimpleExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey building exceptional digital experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-primary text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.duration}
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-muted-foreground mb-4">
                      {experience.company}
                    </h4>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          <Code className="w-3 h-3 mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleExperience;