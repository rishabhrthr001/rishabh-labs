import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ABOUT_CONTENT } from "../data/content";
import SEO from "./SEO";

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <SEO
        title="About Us | CodeKea"
        description="Learn about CodeKea, a forward-thinking software agency bridging the gap between emerging tech and practical business solutions."
      />

      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
              Code
              <span className="text-transparent bg-clip-text bg-orange">
                Kea
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            {ABOUT_CONTENT.story}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {ABOUT_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-surface/50 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-[#f97316] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {ABOUT_CONTENT.values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-900/40 to-rose-900/40 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Innovate?
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Join the 50+ businesses that have transformed their digital
              presence with our expertise.
            </p>

            <button
              onClick={() => {
                navigate("/");

                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 150);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/30"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
