import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { INTERNATIONAL_OFFER } from '../data/content';

const InternationalOffer: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 shadow-[0_0_50px_-12px_rgba(251,191,36,0.3)]"
        >
          <div className="bg-black/90 rounded-[22px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 backdrop-blur-xl">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">International Special</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Launch Your Startup <br />
                <span className="text-yellow-400">Global Ready.</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                {INTERNATIONAL_OFFER.description} Get everything you need to scale internationally without the enterprise price tag.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                  Claim Offer <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-yellow-500/30 transition-colors">
              <div className="text-center mb-8 pb-8 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{INTERNATIONAL_OFFER.title}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-yellow-400">{INTERNATIONAL_OFFER.price}</span>
                  <span className="text-gray-500">/one-time</span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {INTERNATIONAL_OFFER.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternationalOffer;