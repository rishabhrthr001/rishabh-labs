import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { getServicePrices, Currency } from "../data/content";
import { getUserGeo } from "./utils/geoLocation";

interface PricingProps {
  onSelectService: (service: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currency, setCurrency] = useState<Currency>("USD");

  /* ===== GEO DETECTION ===== */

  useEffect(() => {
    const detect = async () => {
      const geo = await getUserGeo();
      setCurrency(geo.currency);
    };

    detect();
  }, []);

  /* ===== PRICING ===== */

  const services = getServicePrices(currency);

  const sortedServices = [...services].sort((a, b) => {
    const priceA = Number(a.price.replace(/[^0-9]/g, ""));
    const priceB = Number(b.price.replace(/[^0-9]/g, ""));
    return priceA - priceB;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
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
    }

    onSelectService(serviceKey);

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] pointer-events-none" />

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
          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-surface border border-white/10 text-white hover:bg-white/10 hover:border-[#f97316] hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-surface border border-white/10 text-white hover:bg-white/10 hover:border-[#f97316] hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* SCROLLER */}
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
                className="min-w-[300px] md:min-w-[360px] snap-center p-8 rounded-3xl bg-surface border border-white/10 hover:border-[#f97316]/40"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-[#f97316]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>

                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>

                <div className="mb-8 p-4 bg-black/40 rounded-xl border border-white/5">
                  <p className="text-gray-500 text-xs uppercase mb-1">
                    Starting from
                  </p>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm">/ project</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#f97316]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(service.id)}
                  className="w-full py-3 rounded-xl border border-white/10 hover:bg-[#f97316] hover:text-white"
                >
                  Get Started <ArrowRight className="w-4 h-4 inline ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
