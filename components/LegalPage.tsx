import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

import { LEGAL_CONTENT } from "../data/content";
import SEO from "./SEO";

const LegalPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: "privacy" | "terms" | "cookie" }>();
  const navigate = useNavigate();

  const content = pageId ? LEGAL_CONTENT[pageId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <SEO
        title="Privacy Policy"
        description="Read CodeKea’s privacy policy and how we protect your data."
        noIndex
      />

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
          {content.title}
        </h1>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-line leading-relaxed p-8 bg-surface/50 border border-white/10 rounded-3xl backdrop-blur-sm">
          {content.content}
        </div>
      </div>
    </motion.div>
  );
};

export default LegalPage;
