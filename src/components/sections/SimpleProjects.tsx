import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, User, ImageIcon } from 'lucide-react';
import Button from '../common/Button';
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
        <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg mb-6 flex items-center justify-center border border-border/30">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Project Preview</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-48 rounded-lg mb-6 overflow-hidden border border-border/30">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => handleImageError(project.id)}
        />
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-primary text-sm font-medium">Featured</span>
                </div>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <ProjectImage project={project} />

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* My Roles */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">My Roles</span>
                </div>
                <div className="bg-secondary/20 rounded-lg p-3 border border-border/20 mb-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.roles.map((role) => (
                      <span
                        key={role}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  {project.roleDescription && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.roleDescription}
                    </p>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <Button variant="primary" size="sm" className="w-full">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Small Project Image for Other Projects */}
                  {project.image && !imageErrors[project.id] && (
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden border border-border/30">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(project.id)}
                      />
                    </div>
                  )}
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* My Roles - Compact version */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1 mb-2">
                      <User className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-foreground">Roles</span>
                    </div>
                    <div className="bg-secondary/15 rounded-md p-2 border border-border/15">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.roles.map((role) => (
                          <span
                            key={role}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                      {project.roleDescription && (
                        <p className="text-xs text-muted-foreground leading-tight line-clamp-3">
                          {project.roleDescription}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SimpleProjects;