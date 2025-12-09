import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesHorizontalProps {
  onLearnMore: (id: string) => void;
}

const ServicesHorizontal: React.FC<ServicesHorizontalProps> = ({ onLearnMore }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to disable scroll-jacking
  useEffect(() => {
    const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Measure the content width vs viewport width to determine exact scroll distance
  useEffect(() => {
    const updateScrollRange = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const range = contentWidth - viewportWidth + (window.innerWidth < 768 ? 40 : 100); 
        setScrollRange(range > 0 ? range : 0);
      }
    };

    updateScrollRange();
    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

  return (
    <section 
        ref={targetRef} 
        id="services" 
        className={`relative bg-dark ${isMobile ? 'h-auto py-20' : 'h-[300vh]'}`}
    >
      <div className={`
        ${isMobile ? 'relative' : 'sticky top-0 h-screen overflow-hidden flex items-center'} 
        bg-dark
      `}>
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,#9333ea15_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] pointer-events-none" />
        
        {/* Central Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className={`
            absolute left-4 md:left-20 z-10 max-w-md pointer-events-none
            ${isMobile ? '-top-12' : 'top-10'}
        `}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 md:mb-4">Our Expertise</h2>
          <p className="text-gray-400 text-sm md:text-base hidden md:block">Drag or scroll to explore our full range of technical capabilities.</p>
        </div>

        <motion.div 
          ref={contentRef}
          style={{ x: isMobile ? 0 : x }} 
          className={`
            flex gap-6 md:gap-8 px-4 md:px-20 relative z-10 items-center
            ${isMobile ? 'overflow-x-auto snap-x snap-mandatory pb-8 pt-4 w-full no-scrollbar' : ''}
          `}
        >
          {/* Intro Spacer - Pushes content to start a bit later so header isn't covered immediately */}
          <div className="w-[10px] md:w-[50px] flex-shrink-0" />

          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative group h-[450px] w-[300px] md:h-[520px] md:w-[400px] flex-shrink-0 rounded-3xl bg-surface border border-white/5 p-6 md:p-8 flex flex-col overflow-hidden hover:border-accent/50 transition-colors shadow-2xl snap-center"
            >
              {/* Decorative Giant Icon Background */}
              <div className="absolute -bottom-12 -right-12 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform rotate-12">
                 <service.icon className="w-64 h-64 text-white" />
              </div>
              
              {/* Background Gradient Mesh */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors border border-white/5 group-hover:border-accent/30 shadow-inner">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">{service.title}</h3>
                
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Features List */}
                <div className="flex-grow">
                   <ul className="space-y-3 mb-6">
                      {service.features?.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feature}</span>
                          </li>
                      ))}
                   </ul>
                </div>

                <div className="pt-4 border-t border-white/5 mt-auto">
                  <button 
                    onClick={() => onLearnMore(service.id)}
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors group/btn"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* End Spacer */}
          <div className="w-[20px] md:w-[100px] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHorizontal;