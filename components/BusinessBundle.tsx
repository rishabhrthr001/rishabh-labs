import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { BUSINESS_BUNDLES } from "../data/content";

interface BusinessBundleProps {
  onSelectService: (service: string) => void;
}

const BusinessBundle: React.FC<BusinessBundleProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        window.innerWidth < 768 ? window.innerWidth * 0.75 : 750;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelectPlan = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    onSelectService(id);

    // Always go home first (if on another route)
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <section id="bundle" className="py-20 bg-black relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold uppercase text-xs tracking-wider block mb-1">
            Exclusive Packages
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Business Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
              Bundles
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* ARROWS (desktop only) */}
          <div className="hidden md:block absolute top-1/2 -left-8 -translate-y-1/2 z-20">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-surface border border-purple-500/30 text-white hover:bg-purple-900/20 hover:border-accent duration-200 shadow-md"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 z-20">
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-surface border border-purple-500/30 text-white hover:bg-purple-900/20 hover:border-accent duration-200 shadow-md"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* === CARDS SCROLLER === */}
          <div
            ref={scrollRef}
            className="
              flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory
              scroll-smooth py-6
            "
          >
            {BUSINESS_BUNDLES.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="
                  w-[88vw]
                  sm:w-[82vw]
                  md:w-auto 
                  md:min-w-[620px]
                  lg:min-w-[820px]
                  snap-center flex-shrink-0
                "
              >
                {/* OUTER FRAME */}
                <div
                  className={`relative rounded-2xl p-[1px] bg-gradient-to-r ${
                    plan.popular
                      ? "from-orange-400 via-white to-rose-400"
                      : "from-purple-500/30 via-rose-500/30 to-purple-500/30"
                  }`}
                >
                  {/* CARD */}
                  <div className="bg-[#050505] rounded-2xl p-4 sm:p-6 md:p-10">
                    {/* Subtitle */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] sm:text-xs font-bold uppercase mb-4 mx-auto">
                      <Star className="w-3 h-3" /> {plan.subtitle}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-white text-center mb-3">
                      {plan.title}
                    </h2>

                    {/* Desc */}
                    <p className="text-[11px] sm:text-sm text-gray-400 text-center mb-5 sm:mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="text-center mb-5 sm:mb-6">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <div className="text-[9px] sm:text-[10px] text-accent font-mono mt-1 uppercase">
                        One-time Investment
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[11px] sm:text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={(e) => handleSelectPlan(e, plan.id)}
                      className={`w-full px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow
                        ${
                          plan.popular
                            ? "bg-gradient-to-r from-orange-400 to-rose-500 text-white"
                            : "bg-gradient-to-r from-purple-600 to-rose-600 text-white"
                        }
                      `}
                    >
                      Choose Plan
                    </button>

                    {/* Guarantee */}
                    <div className="text-center text-[10px] text-gray-500 mt-3 flex justify-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> 100% Guarantee
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile hint */}
          <div className="flex md:hidden justify-center mt-1">
            <p className="text-[10px] text-gray-500 flex items-center gap-1">
              Swipe <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBundle;
