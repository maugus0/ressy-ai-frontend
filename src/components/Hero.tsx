// 📂 Make sure your image is at src/assets/bg.jpg
import DemoMockup from "./DemoMockup";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
      {/* Interactive Textured Background */}
      <div className="absolute inset-0 -z-20">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50/80 to-indigo-50/60"></div>
        
        {/* Interactive floating elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-200/15 to-cyan-200/10 rounded-full blur-2xl animate-float-slow delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/15 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        
        {/* Textured pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(6,182,212,0.05),transparent)] animate-spin-slow"></div>
        
        {/* Interactive mesh gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.03)_0%,transparent_50%)] bg-[length:100px_100px] hover:bg-[length:120px_120px] transition-all duration-1000"></div>
      </div>

      {/* 🌟 Content */}
      {/* 👇 Halved the padding values again for a significant shift up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 sm:pt-6 sm:pb-24 lg:pt-8 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/60 text-secondary-foreground text-sm font-medium mb-4 backdrop-blur-sm animate-fade-in">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ businesses using AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.05] animate-slide-up">
              Your AI receptionist that books, answers, and follows up.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up delay-200">
              Capture every call, schedule appointments, qualify leads and answer questions instantly—no hold music, no scripts to memorise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in delay-300">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Start free trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative px-8 py-4 border-2 border-primary/20 text-foreground rounded-xl font-semibold hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in delay-500">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  Call accuracy
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Availability
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  50%
                </div>
                <div className="text-sm text-muted-foreground">
                  More bookings
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <DemoMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;