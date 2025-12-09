import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';
import SEO from './SEO';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack }) => {
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen bg-dark text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
        <SEO 
            title={`${service.title} | Rishabh Labs Services`}
            description={service.shortDescription}
        />

        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-rose-950/20 fixed" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-8 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </button>

            <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-500">
                    {service.title}
                </h1>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-accent pl-6">
                {service.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                        {service.features?.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                    <div className="relative border-l border-white/10 ml-3 space-y-8 py-2">
                        {service.process?.map((step, idx) => (
                            <div key={idx} className="relative pl-8">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                                <h4 className="text-lg font-bold text-white mb-1">Step {idx + 1}</h4>
                                <p className="text-gray-400">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-rose-900/30 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start?</h3>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    Let's discuss how we can implement {service.title} for your business today.
                </p>
                <a 
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        onBack(); // Go back to home
                        setTimeout(() => {
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                    className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20"
                >
                    Get a Quote for {service.title}
                </a>
            </div>
        </div>
    </motion.div>
  );
};

export default ServiceDetail;