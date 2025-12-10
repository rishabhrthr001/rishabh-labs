import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../data/content";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know before we start.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl sm:rounded-2xl bg-surface/30 overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="
                  w-full flex items-center justify-between 
                  p-4 sm:p-6 
                  text-left hover:bg-white/5 transition-colors
                "
              >
                {/* Smaller font on mobile */}
                <span className="text-base sm:text-lg font-bold text-white leading-snug">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 pt-0 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
