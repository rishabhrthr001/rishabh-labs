import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { BUSINESS_BUNDLES } from "../data/content";

interface BusinessBundleProps {
  onSelectService: (service: string) => void;
}

const BusinessBundle: React.FC<BusinessBundleProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        window.innerWidth < 768 ? window.innerWidth * 0.8 : 800;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelectPlan = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onSelectService(id);

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="bundle" className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-accent font-bold uppercase text-xs tracking-wider mb-1 block">
            Exclusive Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            Business Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
              Bundles
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Arrow Buttons */}
          <div className="hidden md:block absolute top-1/2 -left-8 -translate-y-1/2 z-20">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-surface border border-purple-500/30 text-white hover:bg-purple-900/20 hover:border-accent transition-all hover:scale-110 shadow-md backdrop-blur-md"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 z-20">
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-surface border border-purple-500/30 text-white hover:bg-purple-900/20 hover:border-accent transition-all hover:scale-110 shadow-md backdrop-blur-md"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Scroller */}
          <div
            ref={scrollRef}
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar
              pb-6 pt-6
              scroll-smooth items-center
            "
          >
            {BUSINESS_BUNDLES.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="
                  w-[94vw]
                  sm:w-[90vw]
                  md:w-auto md:min-w-[680px]
                  lg:min-w-[860px]
                  snap-center flex-shrink-0
                "
              >
                {/* Card Outer Frame */}
                <div
                  className={`relative rounded-3xl p-[1px] bg-gradient-to-r ${
                    plan.popular
                      ? "from-orange-400 via-white to-rose-400"
                      : "from-purple-500/40 via-rose-500/40 to-purple-500/40"
                  }`}
                >
                  <div className="bg-[#050505] rounded-3xl overflow-hidden p-5 md:p-10">
                    {/* Header Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase mb-4 mx-auto">
                      <Star className="w-3.5 h-3.5" /> {plan.subtitle}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 text-center">
                      {plan.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[13px] sm:text-sm text-gray-400 text-center mb-6">
                      {plan.description}
                    </p>

                    {/* Price Box */}
                    <div className="text-center mb-6">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <div className="text-[10px] text-accent font-mono mt-1 uppercase tracking-wider">
                        One-time Investment
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[13px] sm:text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={(e) => handleSelectPlan(e, plan.id)}
                      className={`w-full px-6 py-3 rounded-full text-sm font-bold shadow
                      ${
                        plan.popular
                          ? "bg-gradient-to-r from-orange-400 to-rose-500 text-white"
                          : "bg-gradient-to-r from-purple-600 to-rose-600 text-white"
                      }`}
                    >
                      Choose Plan
                    </button>

                    {/* Guarantee */}
                    <div className="text-center text-[11px] text-gray-500 mt-3 flex justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% Satisfaction
                      Guarantee
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden justify-center mt-2">
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Swipe <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBundle;
