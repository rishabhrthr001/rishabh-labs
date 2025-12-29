import React from "react";
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { NAV_LINKS } from "../data/content";

interface FooterProps {
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ type: "home" });
                window.scrollTo(0, 0);
              }}
              className="text-2xl font-display font-bold tracking-tighter text-white mb-4 block w-fit"
            >
              Code<span className="text-accent">Kea</span>
            </a>

            <p className="text-gray-400 max-w-sm mb-4">
              Empowering businesses with future-proof digital solutions. From
              simple websites to complex blockchain architectures.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a
                href="mailto:contact@codekea.com"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm w-fit"
              >
                <Mail className="w-4 h-4" />
                contact@codekea.com
              </a>

              <a
                href="tel:+918447351776"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm w-fit"
              >
                <Phone className="w-4 h-4" />
                +91-8447351776
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href === "about") {
                        onNavigate({ type: "about" });
                        window.scrollTo(0, 0);
                      } else {
                        onNavigate({ type: "home" });
                        setTimeout(() => {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          } else if (link.href === "#hero") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }, 100);
                      }
                    }}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    onNavigate({ type: "legal", pageId: "privacy" })
                  }
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ type: "legal", pageId: "terms" })}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onNavigate({ type: "legal", pageId: "cookie" })
                  }
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeKea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
