import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Gradient Background inspired by OpenPhone Sona */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/25 via-cyan-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-emerald-400/20 via-green-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-orange-400/25 via-yellow-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Sona-inspired purple/magenta gradients */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-gradient-to-br from-magenta-500/25 to-transparent rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 left-10 w-[250px] h-[250px] bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-2500"></div>
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20"></div>
      </div>
      
      <Navigation />
      <main className="pt-28">
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
      </main>
    </div>
  );
};

export default Index;