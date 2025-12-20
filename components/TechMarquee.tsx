import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "../data/content";

const TechMarquee: React.FC = () => {
  return (
    <div className="bg-black border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="flex relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Double the list to create seamless loop */}
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div
              key={index}
              className="text-2xl font-display font-bold text-purple-400 hover:text-white/80  duration-300 cursor-default select-none"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
