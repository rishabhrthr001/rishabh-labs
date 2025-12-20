import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark"
    >
      {/* Background Elements - Optimized (Static instead of Pulse) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea1a_0%,transparent_70%)] opacity-60" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Static Blobs (Removed animate-pulse for performance) */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[100px]" />

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.2)] pointer-events-auto"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-sm font-medium text-purple-200 tracking-wide">
            Forging the Next Generation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tight mb-8 text-white drop-shadow-2xl"
        >
          Code
          <br className="md:hidden" />
          <span className="relative">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-accent to-rose-400 opacity-20 blur-xl"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-accent to-rose-400">
              Kea
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          We engineer premium digital experiences. From high-scale web platforms
          to AI-driven automation, we turn visionary ideas into dominant
          realities.
        </motion.p>

        {/* Buttons - Pointer events auto to ensure clickability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <button
            onClick={(e) => handleScroll(e, "#bundle")}
            className="group relative px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] active:scale-95 z-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Business Plans{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={(e) => handleScroll(e, "#contact")}
            className="px-8 py-4 bg-transparent border border-purple-500/50 text-white font-medium rounded-full hover:bg-purple-500/10 hover:border-accent hover:text-accent transform-gpu transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] active:scale-95 z-50"
          >
            Get a Quote
          </button>
        </motion.div>
      </div>

      {/* Decorative Floor Grid - Background Z-Index */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
