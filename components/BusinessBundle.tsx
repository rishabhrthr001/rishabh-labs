import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_BUNDLES } from '../data/content';

interface BusinessBundleProps {
  onSelectService: (service: string) => void;
}

const BusinessBundle: React.FC<BusinessBundleProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.9 : 800;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPlan = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onSelectService(id);
    
    // Smooth scroll with small delay
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 50);
  };

  return (
    <section id="bundle" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] pointer-events-none" />
      
      {/* Central Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
            Exclusive Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Business Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">Bundles</span>
          </h2>
        </div>

        <div className="relative group/carousel">
           {/* Navigation Arrows */}
           <div className="hidden md:block absolute top-1/2 -left-4 xl:-left-12 -translate-y-1/2 z-30">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-surface border border-purple-500/30 text-white hover:bg-purple-900/20 hover:border-accent transition-all hover:scale-110 group shadow-lg shadow-purple-900/20 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-6 h-6 group-hover:text-accent transition-colors" />
            </button>
          </div>
          <div className="hidden md:block absolute top-1/2 -right-4 xl:-right-12 -translate-y-1/2 z-30">
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-surface border border-purple-500/30 text-white hover:bg-purple-900/20 hover:border-accent transition-all hover:scale-110 group shadow-lg shadow-purple-900/20 cursor-pointer backdrop-blur-md"
            >
              <ArrowRight className="w-6 h-6 group-hover:text-accent transition-colors" />
            </button>
          </div>

          {/* Carousel Content */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 px-4 scroll-smooth items-center"
          >
            {BUSINESS_BUNDLES.map((currentPlan) => (
              <motion.div
                key={currentPlan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-[90vw] md:w-auto md:min-w-[800px] lg:min-w-[900px] snap-center relative z-20 flex-shrink-0"
              >
                <div className={`relative rounded-[2.5rem] p-[1px] bg-gradient-to-r ${currentPlan.popular ? 'from-orange-400 via-white to-rose-400' : 'from-purple-500/50 via-rose-500/50 to-purple-500/50'}`}>
                  {/* Glow effect for popular plan */}
                  {currentPlan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-accent to-rose-400 blur-xl opacity-40 animate-pulse pointer-events-none" />
                  )}
                  
                  <div className="relative bg-[#050505] rounded-[2.5rem] p-6 md:p-12 overflow-hidden h-full">
                    {/* Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                      {/* Left Content */}
                      <div className="flex-1 text-center lg:text-left relative z-30 w-full">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-rose-500/20 border border-purple-500/30 text-purple-300 font-bold text-sm tracking-wide uppercase mb-6 mx-auto lg:mx-0">
                          <Star className="w-4 h-4 fill-purple-300" /> {currentPlan.subtitle}
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                          {currentPlan.title}
                        </h2>
                        
                        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                          {currentPlan.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                          <button
                            onClick={(e) => handleSelectPlan(e, currentPlan.id)}
                            className={`relative z-50 w-full sm:w-auto px-8 py-4 font-bold rounded-full transition-transform duration-200 ease-out hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.3)] cursor-pointer
                              ${currentPlan.popular 
                                ? 'bg-gradient-to-r from-orange-400 to-rose-500 text-white' 
                                : 'bg-gradient-to-r from-purple-600 to-rose-700 text-white hover:bg-purple-500'
                              }
                            `}
                          >
                            Choose Plan
                          </button>
                          <p className="text-sm text-gray-500 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" /> 100% Satisfaction Guarantee
                          </p>
                        </div>
                      </div>

                      {/* Right Card */}
                      <div className="w-full max-w-[400px] lg:w-[350px] flex-shrink-0 relative z-20 pointer-events-none">
                        {currentPlan.popular && (
                          <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20 bg-accent text-white font-extrabold px-3 py-1 md:px-4 rounded-full text-[10px] md:text-xs uppercase tracking-wider shadow-lg transform rotate-6 border-2 border-white">
                            Most Popular
                          </div>
                        )}
                        <div className={`bg-white/5 border rounded-2xl p-6 md:p-8 backdrop-blur-md relative transform transition-transform duration-300
                           ${currentPlan.popular ? 'border-accent/50 shadow-[0_0_30px_rgba(249,115,22,0.15)]' : 'border-white/10'}
                        `}>
                          
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <currentPlan.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                          </div>

                          <div className="pb-6 border-b border-white/10 mb-6">
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">{currentPlan.price}</span>
                            </div>
                            <span className="text-xs text-accent font-mono mt-2 block uppercase tracking-wider">One-time Investment</span>
                          </div>

                          <ul className="space-y-3 md:space-y-4">
                            {currentPlan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${currentPlan.popular ? 'text-accent' : 'text-purple-400'}`} />
                                <span className="text-gray-300 text-sm font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Swipe Indicator */}
          <div className="flex md:hidden justify-center gap-2 -mt-6">
             <div className="text-xs text-gray-500 flex items-center gap-1 animate-pulse">
                Swipe for more <ArrowRight className="w-3 h-3" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessBundle;