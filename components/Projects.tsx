import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { PROJECTS } from "../data/content";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black z-0" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

      {/* Central Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Forging{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-accent to-rose-500">
                Digital Reality
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-sm text-right md:text-left hidden md:block"
          >
            We don't just write code; we engineer experiences that define brands
            and disrupt industries.
          </motion.p>
        </div>

        <div className="space-y-12 md:space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-3/5 group relative perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface border border-white/10">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    >
                      View Live <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <img
                    src={project.image}
                    alt={`${project.title} - Premium Software Development Project by Rishabh Labs`}
                    loading="lazy"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-display font-bold text-white/10">
                    0{index + 1}
                  </span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm font-medium text-purple-300 bg-purple-900/20 rounded-full border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
