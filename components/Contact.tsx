import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Confetti from "./Confetti";

interface ContactProps {
  selectedService: string;
}

const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "web-dev",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Update local form state when selectedService prop changes
  useEffect(() => {
    if (selectedService) {
      setFormState((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          service: formState.service,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormState({
        name: "",
        email: "",
        service: "web-dev",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {status === "success" && <Confetti />}

      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-purple-900/20 to-transparent" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      {/* Central Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
              Something Great
            </span>
          </h2>
          <p className="text-gray-400">
            Ready to start your project? Fill out the form below and we'll get
            back to you within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-white transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-medium text-gray-300"
              >
                Interested Service
              </label>
              <select
                id="service"
                value={formState.service}
                onChange={(e) =>
                  setFormState({ ...formState, service: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-white transition-all appearance-none"
              >
                <option value="web-development">Web Development</option>
                <option value="app-development">Mobile App Development</option>
                <option value="full-stack">Full Stack Websites</option>
                <option value="custom-platform">Custom Platform</option>
                <option value="web3-smart contract">
                  Web3 & Smart Contracts
                </option>
                <option value="ai-automation">AI Automation</option>
                <option value="product-design">Product Design</option>
                <optgroup label="Business Bundles">
                  <option value="kickstarter-pack">Kickstarter Pack</option>
                  <option value="growth-acceelrator">Growth Accelerator</option>
                  <option value="market-dominator">Market Dominator</option>
                </optgroup>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={4}
                required
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-white transition-all resize-none"
                placeholder="Tell us about your project goals..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                status === "success"
                  ? "bg-green-600 text-white"
                  : status === "error"
                  ? "bg-red-600 text-white"
                  : "bg-accent text-white hover:bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
              }`}
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"
                  />
                ) : status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> Message Sent
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <AlertCircle className="w-5 h-5" /> Try Again
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
