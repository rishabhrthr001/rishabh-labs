import React, { useRef, useState, useEffect } from "react";
import { SERVICES } from "../data/content";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesHorizontal: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !scrollRef.current || !sectionRef.current) return;

    const scroller = scrollRef.current;
    const section = sectionRef.current;

    const onWheel = (e: WheelEvent) => {
      const startThreshold = 30;
      const endThreshold = 30;

      const atStart = scroller.scrollLeft <= startThreshold;
      const atEnd =
        scroller.scrollLeft + scroller.clientWidth >=
        scroller.scrollWidth - endThreshold;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if ((goingDown && !atEnd) || (goingUp && !atStart)) {
        e.preventDefault();
        scroller.scrollLeft += e.deltaY;
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="services" className="relative bg-dark py-20">
      <div
        className={`${
          isMobile
            ? "relative"
            : "sticky top-0 h-screen flex items-center justify-start overflow-hidden"
        } bg-dark`}
      >
        {/* Header */}
        <div className="absolute top-10 left-4 md:left-20 z-20 max-w-md pointer-events-none">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 md:mb-4">
            Our Expertise
          </h2>

          <p className="text-gray-400 text-xs md:text-base block">
            Scroll to explore our full range of technical capabilities.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className={`
            flex gap-6 md:gap-8 px-4 md:px-28 z-10 items-center
            ${
              isMobile
                ? "overflow-x-auto snap-x snap-mandatory pb-10 pt-32 w-full no-scrollbar"
                : "overflow-x-scroll overflow-y-hidden no-scrollbar h-full"
            }
          `}
        >
          {/* Spacer Left */}
          <div className="w-[20px] md:w-[200px] flex-shrink-0" />

          {SERVICES.map((service) => (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/services/${service.id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(`/services/${service.id}`);
              }}
              className="relative group cursor-pointer
                h-[400px] w-[260px]
                md:h-[480px] md:w-[340px]
                lg:h-[500px] lg:w-[360px]
                flex-shrink-0 rounded-3xl bg-surface border border-white/5
                p-6 md:p-8 flex flex-col overflow-hidden
                hover:border-[#f97316]/50 transition-colors shadow-2xl snap-center"
            >
              {/* Background Icon */}
              <div className="absolute -bottom-10 -right-10 z-0 opacity-[0.03] group-hover:opacity-[0.08] rotate-12 transition-opacity pointer-events-none">
                <service.icon className="w-56 h-56 text-white" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5 border border-white/5 group-hover:border-[#f97316]/30 group-hover:bg-[#f97316]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#f97316]" />
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {service.shortDescription}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features?.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs md:text-sm text-gray-400"
                    >
                      <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer Row */}
                <div className="mt-auto border-t border-white/5 pt-3 flex items-center gap-1.5 text-xs md:text-sm font-bold text-white group-hover:text-[#f97316] transition-colors">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}

          {/* Spacer Right */}
          <div className="w-[20px] md:w-[200px] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHorizontal;
