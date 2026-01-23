import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import ServicesHorizontal from "./components/ServicesHorizontal";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import BusinessBundle from "./components/BusinessBundle";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import LegalPage from "./components/LegalPage";
import About from "./components/About";
import SEO from "./components/SEO";
import FloatingContact from "./components/FloatingContact";

function App() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("web-dev");

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  const handleNavigate = (view: any) => {
    if (view.type === "home") navigate("/");
    if (view.type === "about") navigate("/about");
    if (view.type === "service") navigate(`/services/${view.serviceId}`);
    if (view.type === "legal") navigate(`/legal/${view.pageId}`);
  };

  return (
    <div className="bg-dark text-slate-100 selection:bg-accent selection:text-black font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} />

      <main className="flex-grow">
        <Routes>
          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="CodeKea | Future-Proof Software Development"
                  description="Premium software development agency specializing in Web3, AI Automation, Mobile Apps, and High-Performance Websites. Transform your business today."
                  image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
                />

                <Hero />
                <TechMarquee />

                <ServicesHorizontal
                  onLearnMore={(id) => navigate(`/services/${id}`)}
                />

                <Projects />

                <Pricing onSelectService={setSelectedService} />
                <BusinessBundle onSelectService={setSelectedService} />

                <Testimonials />
                <FAQ />

                <Contact selectedService={selectedService} />
              </>
            }
          />

          {/* ================= ABOUT ================= */}
          <Route path="/about" element={<About />} />

          {/* ================= SERVICE DETAIL ================= */}
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          {/* ================= LEGAL ================= */}
          <Route path="/legal/:pageId" element={<LegalPage />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingContact />
    </div>
  );
}

export default App;
