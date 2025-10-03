import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, CheckCircle } from 'lucide-react';
import { organizations } from '@/data/portfolio';

const SimpleOrganizations: React.FC = () => {
  return (
    <section id="organizations" className="py-20 bg-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#343434] mb-6">
            Community & Organizations
          </h2>
          <p className="text-xl text-[#434343] max-w-2xl mx-auto">
            Contributing to the tech community and making a positive impact
          </p>
        </motion.div>

        {/* Organizations List */}
        <div className="space-y-8">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md p-8 rounded-xl border border-[#d9d9d9] hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Organization Info */}
                <div className="lg:col-span-1">
                  <div className="w-40 h-40 rounded-lg mb-6 overflow-hidden border border-[#d9d9d9] mx-auto lg:mx-0">
                    {org.image ? (
                      <img 
                        src={org.image} 
                        alt={org.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E6E6E6] flex items-center justify-center">
                        <Users className="w-12 h-12 text-[#343434]" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-center lg:text-left text-[#343434]">
                    {org.name}
                  </h3>
                  
                  <div className="text-[#343434] font-medium mb-3 text-center lg:text-left">
                    {org.position}
                  </div>

                  <div className="flex items-center justify-center lg:justify-start text-[#434343] text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-[#343434]" />
                    {org.duration}
                  </div>
                </div>

                {/* Description and Achievements */}
                <div className="lg:col-span-2">
                  <p className="text-[#434343] leading-relaxed mb-6">
                    {org.description}
                  </p>

                  <h4 className="text-lg font-semibold mb-4 text-[#343434]">Key Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {org.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achievementIndex * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-[#343434] rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white shadow-md p-8 rounded-xl border border-[#d9d9d9] text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-[#343434]">Community Impact</h3>
            <p className="text-[#434343] leading-relaxed mb-8">
              I believe in giving back to the tech community that has given me so much. 
              Through organizing events, contributing to open source, and mentoring others, 
              I strive to make technology more accessible and inclusive for everyone.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">500+</div>
                <div className="text-[#434343] text-sm">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">20+</div>
                <div className="text-[#434343] text-sm">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">15+</div>
                <div className="text-[#434343] text-sm">Open Source Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">50+</div>
                <div className="text-[#434343] text-sm">Developers Mentored</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleOrganizations;
