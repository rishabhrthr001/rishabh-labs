import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] font-bold tracking-wider uppercase text-sm mb-2 block">
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
              Businesses
            </span>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface/50 border border-white/10 p-8 rounded-3xl relative hover:bg-white/5 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />

              <div className="mb-6">
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-sm text-gray-400">
                  {t.role} @ {t.company}
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-2">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="snap-center flex-shrink-0 w-[90vw] bg-surface/50 border border-white/10 p-6 rounded-3xl relative hover:bg-white/5 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />

              <div className="mb-4">
                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                <p className="text-xs text-gray-400">
                  {t.role} @ {t.company}
                </p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Swipe hint */}
        <p className="text-xs text-gray-500 flex md:hidden justify-center gap-1 mt-3">
          Swipe <span className="animate-pulse">→</span>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
