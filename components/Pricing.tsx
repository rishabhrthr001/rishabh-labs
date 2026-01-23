import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICE_PRICES } from "../data/content";

interface PricingProps {
  onSelectService: (service: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelectPlan = (id: number) => {
    let serviceKey = "web-dev";

    switch (id) {
      case 1:
        serviceKey = "web-dev";
        break;
      case 2:
        serviceKey = "product-design";
        break;
      case 3:
        serviceKey = "full-stack";
        break;
      case 4:
        serviceKey = "app-dev";
        break;
      case 5:
        serviceKey = "ai-automation";
        break;
      case 6:
        serviceKey = "web3";
        break;
      default:
        serviceKey = "web-dev";
    }

    onSelectService(serviceKey);

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const sortedServices = [...SERVICE_PRICES].sort((a, b) => {
    const priceA = Number(a.price.replace(/[₹,]/g, ""));
    const priceB = Number(b.price.replace(/[₹,]/g, ""));
    return priceA - priceB;
  });

  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
              Starting Rates
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional grade development shouldn't be a mystery. Swipe to
            explore our services.
          </p>
        </div>

        <div className="relative group/carousel">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-surface border border-white/10 text-white hover:bg-white/10 hover:border-accent transition-all shadow-xl backdrop-blur-sm hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-surface border border-white/10 text-white hover:bg-white/10 hover:border-accent transition-all shadow-xl backdrop-blur-sm hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 px-4 scroll-smooth"
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-center group relative p-8 rounded-3xl bg-surface border border-white/10 hover:border-accent/40 hover:bg-white/[0.02] transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_-10px_rgba(147,51,234,0.2)]"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>

                  <p className="text-gray-400 text-sm h-10">
                    {service.description}
                  </p>
                </div>

                <div className="mb-8 p-4 bg-black/40 rounded-xl border border-white/5 group-hover:border-purple-500/20 transition-colors">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Starting from
                  </p>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm">/ project</span>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectPlan(service.id)}
                  className="w-full py-3 rounded-xl border border-white/10 bg-transparent text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all group-hover:border-transparent cursor-pointer"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
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

export default Pricing;
