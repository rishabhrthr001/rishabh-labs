import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Confetti from "./Confetti";

interface ContactProps {
  selectedService: string;
}

const MOBILE_REGEX = /^[6-9]\d{9}$/;

const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-dev",
    message: "",
  });

  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (selectedService) {
      setFormState((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // 👉 Live mobile validation
  const validateMobile = (value: string) => {
    if (!value) return "Mobile number is required";
    if (value.startsWith("0")) return "Do not start the number with 0";

    if (!/^\d+$/.test(value)) return "Only numbers are allowed";

    if (value.length !== 10) return "Mobile number must be exactly 10 digits";

    if (!MOBILE_REGEX.test(value))
      return "Enter a valid Indian mobile number starting with 6–9";

    return null;
  };

  const handlePhoneChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    setFormState({ ...formState, phone: cleaned });

    const error = validateMobile(cleaned);
    setPhoneError(error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneValidation = validateMobile(formState.phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          phone: formState.phone,
          service: formState.service,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if ((window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17742009470/uP_3CIrIzcIbEP6ohoxC",
          value: 1.0,
          currency: "INR",
        });
      }

      setStatus("success");

      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "web-dev",
        message: "",
      });

      setPhoneError(null);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const isFormValid =
    !phoneError &&
    formState.phone &&
    formState.name &&
    formState.email &&
    formState.message;

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {status === "success" && <Confetti />}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-purple-900/20 to-transparent" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#f97316]/10 rounded-full blur-[100px]" />
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
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white"
                />
              </div>

              {/* MOBILE */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-300">
                  Mobile Number{" "}
                  <span className="text-gray-500">(No landline)</span>
                </label>

                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formState.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`w-full px-4 py-3 bg-black/60 border rounded-xl text-white ${
                    phoneError
                      ? "border-red-500"
                      : "border-white/10 focus:border-[#f97316]"
                  }`}
                />

                {phoneError && (
                  <p className="text-red-400 text-sm mt-1">{phoneError}</p>
                )}
              </div>
            </div>

            {/* SERVICE */}
            <select
              value={formState.service}
              onChange={(e) =>
                setFormState({ ...formState, service: e.target.value })
              }
              className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white"
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
            </select>

            {/* MESSAGE */}
            <textarea
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-white resize-none"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={
                status === "loading" || status === "success" || !isFormValid
              }
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${
                status === "success"
                  ? "bg-green-600"
                  : status === "error"
                    ? "bg-red-600"
                    : "bg-[#f97316] hover:bg-orange-400"
              } disabled:opacity-40`}
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : status === "success" ? (
                  <motion.div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Message Sent
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Try Again
                  </motion.div>
                ) : (
                  <motion.div className="flex items-center gap-2">
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
