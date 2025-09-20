import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import VoiceAgents from "@/components/VoiceAgents";
import LiveDemo from "@/components/LiveDemo";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import IndustrySolutions from "@/components/IndustrySolutions";
import ROICalculator from "@/components/ROICalculator";
import ComparisonTable from "@/components/ComparisonTable";
import DashboardSection from "@/components/DashboardSection";
import IntegrationMarquee from "@/components/IntegrationMarquee";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setLoading(false), 800); 
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-[9999] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/logo-white.png"
        alt="Loading..."
        className="w-24 h-24 animate-spin-slow"
      />
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
          filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.6));
        }
      `}</style>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="min-h-screen relative overflow-hidden from-background via-muted/20 to-accent/10">
        {/* Interactive animated background */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-secondary/5 to-accent/3"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/10 to-purple-200/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-cyan-200/5 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        </div>

        <main className="relative">
          <Navigation />
          <Hero />

          {/* ✅ Your sections */}
          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 via-teal-50/30 to-emerald-50/50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-100/20 to-transparent"></div>
            </div>
            <IndustrySolutions />
          </section>

          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 via-teal-50/30 to-emerald-50/50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-100/20 to-transparent"></div>
            </div>
            <VoiceAgents />
          </section>

          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 via-teal-50/30 to-emerald-50/50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-100/20 to-transparent"></div>
            </div>
            <DashboardSection />
          </section>

          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 via-teal-50/30 to-emerald-50/50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-100/20 to-transparent"></div>
            </div>
            <IntegrationMarquee />
          </section>

          <ROICalculator />
          <ComparisonTable />

          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/40 via-pink-50/20 to-purple-50/40"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.08),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(236,72,153,0.02)_50%,transparent_60%)]"></div>
            </div>
            <SocialProof />
          </section>

          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-gray-50/40 to-white"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_70%)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-100/30 to-transparent"></div>
            </div>
            <FinalCTA />
          </section>

          <section className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-bl from-green-50/40 via-emerald-50/20 to-teal-50/40"></div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.02)_0%,transparent_50%,rgba(16,185,129,0.02)_100%)] bg-[length:100px_100px]"></div>
              <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-emerald-300/6 to-teal-300/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            <FAQ />
          </section>
        </main>

        <Footer />

        <style>{`
          .delay-1000 { animation-delay: 1s; }
          .delay-2000 { animation-delay: 2s; }
          .delay-4000 { animation-delay: 4s; }
        `}</style>
      </div>
    </>
  );
};

export default Index;