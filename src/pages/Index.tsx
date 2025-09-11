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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background with Hue Effects and Texture */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
            <div className="animate-spin-slow absolute top-1/4 left-1/4 w-96 h-96 border border-purple-300 rounded-full"></div>
            <div className="animate-spin-reverse absolute bottom-1/4 right-1/4 w-80 h-80 border border-cyan-300 rounded-full"></div>
            <div className="animate-pulse absolute top-1/2 left-1/2 w-72 h-72 border border-pink-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/8 via-pink-400/6 to-blue-400/4 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/6 via-teal-400/4 to-emerald-400/3 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400/5 via-violet-400/3 to-purple-400/6 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      </div>
      
      <Navigation />
      <main className="pt-24">
        <Hero />
        {/* Features Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(6,182,212,0.03),transparent)]"></div>
          </div>
          <Features />
        </div>
        
        {/* How It Works Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-50/40 via-pink-50/20 to-orange-50/40"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.02)_25%,rgba(139,92,246,0.02)_50%,transparent_50%)] bg-[length:60px_60px]"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/10 to-purple-300/5 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <HowItWorks />
        </div>
        
        {/* Voice Agents Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 via-teal-50/30 to-emerald-50/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-100/20 to-transparent"></div>
          </div>
          <VoiceAgents />
        </div>
        
        {/* Live Demo Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50/50 via-blue-50/30 to-purple-50/40"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.03)_0%,transparent_50%,rgba(139,92,246,0.03)_100%)]"></div>
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-300/8 to-blue-300/4 rounded-full blur-3xl animate-bounce-slow"></div>
          </div>
          <LiveDemo />
        </div>
        
        {/* Social Proof Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/40 via-pink-50/20 to-purple-50/40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(236,72,153,0.02)_50%,transparent_60%)]"></div>
          </div>
          <SocialProof />
        </div>
        
        {/* Pricing Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-yellow-50/20 to-orange-50/40"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(245,158,11,0.02),transparent,rgba(245,158,11,0.02))]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-300/6 to-orange-300/3 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <Pricing />
        </div>
        
        {/* FAQ Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-bl from-green-50/40 via-emerald-50/20 to-teal-50/40"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.02)_0%,transparent_50%,rgba(16,185,129,0.02)_100%)] bg-[length:100px_100px]"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-emerald-300/6 to-teal-300/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <FAQ />
        </div>
        
        {/* Final CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-gray-50/40 to-white"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-100/30 to-transparent"></div>
          </div>
          <FinalCTA />
        </div>
      </main>
      
      {/* Global Background Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 50s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 40s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 8s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Index;