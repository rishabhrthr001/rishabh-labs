import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-2 shadow-lg">
        {/* WhatsApp */}
        <a
          href="https://wa.me/918447351776"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-green-500/10 transition-all"
        >
          <FaWhatsapp className="w-4 h-4 text-green-500" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-white/10" />

        {/* Call */}
        <a
          href="tel:+918447351776"
          className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-[#f97316]/10 transition-all"
        >
          <Phone className="w-4 h-4 text-[#f97316]" />
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;
