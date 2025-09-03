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
        {/* Base texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        {/* Animated hue gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 via-pink-400/8 to-blue-400/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/8 via-teal-400/6 to-emerald-400/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400/6 via-violet-400/4 to-purple-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-88 h-88 bg-gradient-to-br from-orange-400/6 via-yellow-400/4 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background opacity-90"></div>
      </div>
      
      <Navigation />
      <main className="pt-24">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px] -z-10"></div>
          <Features />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background/90 -z-10"></div>
          <HowItWorks />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[length:20px_20px] -z-10"></div>
          <VoiceAgents />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/95 -z-10"></div>
          <LiveDemo />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[length:30px_30px] -z-10"></div>
          <SocialProof />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/3 to-background/90 -z-10"></div>
          <Pricing />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:60px_60px] -z-10"></div>
          <FAQ />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/8 to-background/95 -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:25px_25px] -z-10"></div>
          <FinalCTA />
        </div>
      </main>
    </div>
  );
};

export default Index;