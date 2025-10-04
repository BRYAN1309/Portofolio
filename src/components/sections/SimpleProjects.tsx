import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, User, ImageIcon, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';
import { projects } from '@/data/portfolio';

const SimpleProjects: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const ProjectImage: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    if (!project.image || imageErrors[project.id]) {
      return (
        <div className="w-full h-80 bg-gradient-to-br from-[#D0D0D0] to-[#C0C0C0] rounded-xl mb-6 flex items-center justify-center border-2 border-[#C8C8C8] shadow-inner">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
              <ImageIcon className="w-10 h-10 text-[#343434]" />
            </div>
            <p className="text-[#343434] text-sm font-medium">Project Preview</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-80 rounded-xl mb-6 overflow-hidden border-2 border-[#C8C8C8] shadow-lg">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          onError={() => handleImageError(project.id)}
        />
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#343434]" />
            <span className="text-sm font-semibold text-[#343434]">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#343434] mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-[#505050] max-w-2xl mx-auto leading-relaxed">
            A showcase of my best work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white p-8 rounded-2xl border-2 border-[#D0D0D0] hover:border-[#343434] hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#343434] rounded-lg shadow-md">
                  <Star className="w-4 h-4 text-white fill-white" />
                  <span className="text-white text-sm font-semibold">Featured</span>
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-[#343434] hover:text-white hover:bg-[#343434] transition-all duration-300 shadow-md"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-[#343434] hover:text-white hover:bg-[#343434] transition-all duration-300 shadow-md"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              <ProjectImage project={project} />

              <h3 className="text-2xl font-bold mb-4 text-[#343434] group-hover:text-[#434343] transition-colors">
                {project.title}
              </h3>

              <p className="text-[#505050] mb-6 leading-relaxed text-base">
                {project.description}
              </p>

              {/* My Roles */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-[#343434] rounded-lg">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#343434]">My Roles</span>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#D8D8D8] shadow-sm">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 bg-white text-[#343434] rounded-lg text-sm font-medium border border-[#D0D0D0] shadow-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  {project.roleDescription && (
                    <p className="text-sm text-[#505050] leading-relaxed">
                      {project.roleDescription}
                    </p>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#343434] text-white rounded-lg text-sm font-medium shadow-md hover:bg-[#434343] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="primary" size="md" className="w-full group-hover:shadow-xl">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-[#343434]">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-xl border-2 border-[#D0D0D0] hover:border-[#343434] hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#343434] group-hover:text-[#434343] transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-[#343434] hover:text-white hover:bg-[#343434] transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-[#343434] hover:text-white hover:bg-[#343434] transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {project.image && !imageErrors[project.id] && (
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden border border-[#D0D0D0] shadow-md">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        onError={() => handleImageError(project.id)}
                      />
                    </div>
                  )}

                  <p className="text-[#505050] mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* My Roles - Compact version */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 bg-[#343434] rounded">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-[#343434]">Roles</span>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-lg p-3 border border-[#D8D8D8]">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.roles.map((role) => (
                          <span
                            key={role}
                            className="px-2 py-1 bg-white text-[#343434] rounded text-xs font-medium border border-[#D0D0D0]"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                      {project.roleDescription && (
                        <p className="text-xs text-[#505050] leading-tight line-clamp-2">
                          {project.roleDescription}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#343434] text-white rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-[#505050] text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-16">
          <a
            href="https://drive.google.com/file/d/1cHNjfZ02qOt86bUe_sJrYF3zcoMya6fg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg" className="px-10">
              View Full Portfolio on Google Drive
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleProjects;
