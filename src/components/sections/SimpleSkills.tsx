import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Settings, Languages } from 'lucide-react';
import { skills } from '@/data/portfolio';

const SimpleSkills: React.FC = () => {
  const skillCategories = [
    { name: 'Frontend', icon: Code2, color: 'bg-blue-500/20 text-blue-400' },
    { name: 'Backend', icon: Database, color: 'bg-green-500/20 text-green-400' },
    { name: 'Tools', icon: Settings, color: 'bg-purple-500/20 text-purple-400' },
    { name: 'Languages', icon: Languages, color: 'bg-orange-500/20 text-orange-400' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.name);
            const Icon = category.icon;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.id}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                          className="h-full gradient-hero rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-primary-glow/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="gradient-card p-8 rounded-xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              My diverse skill set allows me to work effectively across the full stack, 
              from crafting intuitive user interfaces to building robust backend systems. 
              I'm passionate about writing clean, maintainable code and creating seamless user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleSkills;