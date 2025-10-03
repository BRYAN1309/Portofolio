import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const SimpleSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const techStack = [
    { id: 1, name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { id: 2, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 3, name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: 4, name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { id: 5, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: 6, name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { id: 7, name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { id: 8, name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 9, name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { id: 10, name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 11, name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { id: 12, name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { id: 13, name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: 14, name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { id: 15, name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { id: 16, name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { id: 17, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { id: 18, name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { id: 19, name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { id: 20, name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 21, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { id: 22, name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
  ];

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section id="skills" className="py-20 overflow-hidden" style={{ backgroundColor: '#E6E6E6' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#343434]">
            Skills & Expertise
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#434343]">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E6E6E6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E6E6E6] to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 py-8"
              animate={{ x: [0, -2200] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" }
              }}
            >
              {duplicatedStack.map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setHoveredSkill(tech.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3 rounded-2xl shadow-lg hover:shadow-xl bg-white border border-[#ddd]"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {hoveredSkill === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#fff] text-[#343434] px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-[#ddd] shadow-xl z-50 pointer-events-none"
                    >
                      {tech.name}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#fff] border-r border-b border-[#ddd]"></div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { title: "Languages", count: "7+", icon: <FaCode /> },
            { title: "Frontend", count: "7+", icon: <FaReact /> },
            { title: "Backend", count: "5+", icon: <FaNodeJs /> },
            { title: "Database", count: "3+", icon: <FaDatabase /> },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all bg-white border border-[#ddd]"
            >
              <div className="text-3xl mb-2 text-[#343434]">{category.icon}</div>
              <div className="text-2xl font-bold mb-1 text-[#343434]">{category.count}</div>
              <div className="text-sm font-semibold text-[#434343]">{category.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div
            className="p-8 rounded-2xl max-w-4xl mx-auto transition-all duration-300 shadow-md hover:shadow-xl bg-white border border-[#ddd]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#343434]">My Approach</h3>
            <p className="leading-relaxed text-lg text-[#434343]">
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
