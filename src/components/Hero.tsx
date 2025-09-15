import { useState } from "react";
import PhonePrototype from "./PhonePrototype";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Wave Background with Purple Theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-violet-900/25"></div>
        
        {/* Animated Wave SVG with multiple layers */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(139, 92, 246, 0.15)', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: 'rgba(168, 85, 247, 0.1)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(99, 102, 241, 0.12)', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(168, 85, 247, 0.08)', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: 'rgba(99, 102, 241, 0.06)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(139, 92, 246, 0.1)', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgba(99, 102, 241, 0.05)', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: 'rgba(139, 92, 246, 0.03)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(168, 85, 247, 0.07)', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Multiple wave layers with different speeds */}
            <path
              d="M0,350 C360,250 720,450 1080,350 C1260,300 1350,375 1440,350 L1440,800 L0,800 Z"
              fill="url(#waveGradient1)"
              className="animate-wave-slow opacity-80"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="-360 0;360 0;-360 0"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,450 C480,350 960,550 1440,450 L1440,800 L0,800 Z"
              fill="url(#waveGradient2)"
              className="animate-wave-slower opacity-60"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="360 0;-360 0;360 0"
                dur="25s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,520 C240,420 480,620 720,520 C960,420 1200,620 1440,520 L1440,800 L0,800 Z"
              fill="url(#waveGradient3)"
              className="animate-wave-slowest opacity-40"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="-180 0;180 0;-180 0"
                dur="30s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        
        {/* Enhanced floating orbs with purple theme */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/15 via-violet-500/10 to-indigo-500/8 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-indigo-500/12 via-purple-500/8 to-pink-500/6 rounded-full blur-2xl animate-float-gentle delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-violet-500/10 via-purple-500/6 to-blue-500/8 rounded-full blur-3xl animate-float-gentle delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-pink-500/8 via-violet-500/5 to-indigo-500/7 rounded-full blur-2xl animate-float-gentle delay-3000"></div>
        
        {/* Textured overlay patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_0%,transparent_50%)] opacity-60"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(168,85,247,0.05),transparent)] opacity-40"></div>
        
        {/* Animated dot grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-pulse"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50"></div>
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-25px) translateY(-10px); }
          50% { transform: translateX(0) translateY(-20px); }
          75% { transform: translateX(25px) translateY(-10px); }
        }
        @keyframes wave-slower {
          0%, 100% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(30px) translateY(-15px); }
          66% { transform: translateX(-20px) translateY(-25px); }
        }
        @keyframes wave-slowest {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-40px) translateY(-30px); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.02); }
          50% { transform: translateY(-10px) translateX(-15px) scale(0.98); }
          75% { transform: translateY(-30px) translateX(5px) scale(1.01); }
        }
        
        .animate-wave-slow { animation: wave-slow 15s ease-in-out infinite; }
        .animate-wave-slower { animation: wave-slower 20s ease-in-out infinite; }
        .animate-wave-slowest { animation: wave-slowest 25s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 12s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
        .delay-3000 { animation-delay: 3s; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/60 text-secondary-foreground text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-pulse"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ businesses using AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[0.9] animate-slide-up">
              Your AI Receptionist for Business Calls
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up">
              Ressy AI answers calls, books appointments, and supports your customers 24/7. 
              Never miss another opportunity while you focus on what matters most.
            </p>

            {/* Email Form */}
            <div className="max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background/80 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? "Added!" : "Join Waitlist"}
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                Join 10,000+ businesses on the waitlist. No spam, ever.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Call accuracy</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">50%</div>
                <div className="text-sm text-muted-foreground">More bookings</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <PhonePrototype />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;