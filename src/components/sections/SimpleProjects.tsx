import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Button from '../common/Button';
import { projects } from '@/data/portfolio';

const SimpleProjects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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

              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-muted/20 rounded-lg mb-6 flex items-center justify-center border border-border/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Project Preview</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
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
                  className="gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold">{project.title}</h4>
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
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

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
