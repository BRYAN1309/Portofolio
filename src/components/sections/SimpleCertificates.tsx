import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificates } from '@/data/portfolio';

const SimpleCertificates = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (certId) => {
    setImageErrors((prev) => ({ ...prev, [certId]: true }));
  };

  return (
    <section
      id="certificates"
      className="py-20"
      style={{ backgroundColor: "#E6E6E6", color: "#343434" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Certificates & Achievements
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#343434]">
            Professional certifications and continuous learning milestones
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white p-6 rounded-xl shadow-md border border-[#d9d9d9] transition-all duration-300 group"
            >
              {/* Certificate Image */}
              <div className="w-full h-48 bg-[#f5f5f5] rounded-lg mb-6 overflow-hidden border border-[#d9d9d9]">
                {certificate.image && !imageErrors[certificate.id] ? (
                  <img
                    src={certificate.image}
                    alt={`${certificate.name} certificate`}
                    onError={() => handleImageError(certificate.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#434343]/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <Award className="w-8 h-8 text-[#343434]" />
                      </div>
                      <p className="text-sm text-[#343434]">Certificate Image</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-[#343434] transition-colors">
                {certificate.name}
              </h3>

              {/* Issuer */}
              <p className="text-[#343434] font-medium mb-3">
                {certificate.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center text-sm text-[#343434] mb-4">
                <Calendar className="w-4 h-4 mr-2 text-[#343434]" />
                {certificate.date}
              </div>

              {/* Credential ID */}
              {certificate.credentialId && (
                <div className="text-xs mb-4 p-2 bg-[#343434] rounded border border-[#1a1a1a] text-[#E6E6E6]">
                  <span className="font-medium">Credential ID: </span>
                  {certificate.credentialId}
                </div>
              )}

              {/* View Certificate Button */}
              {certificate.certificateUrl && (
                <motion.a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 
                             bg-[#343434] text-[#E6E6E6] rounded-lg 
                             hover:bg-[#1a1a1a] transition-colors text-sm 
                             border border-[#1a1a1a]"
                >
                  <ExternalLink className="w-4 h-4 text-[#E6E6E6]" />
                  View Certificate
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#d9d9d9] text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="leading-relaxed text-[#343434]">
              I'm committed to staying at the forefront of technology through
              continuous learning and professional development. These
              certifications represent my dedication to mastering new skills and
              technologies that enable me to deliver modern solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">
                  {certificates.length}
                </div>
                <div className="text-sm text-[#343434]">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">2</div>
                <div className="text-sm text-[#343434]">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#343434]">5+</div>
                <div className="text-sm text-[#343434]">Platforms</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleCertificates;
