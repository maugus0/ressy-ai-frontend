"use client";

import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
        {/* Animated wave layers */}
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            className="animate-wave-1"
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.1"
          />
          <path
            className="animate-wave-2"
            d="M0,450 C400,350 800,550 1200,450 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.08"
          />
          <path
            className="animate-wave-3"
            d="M0,500 C350,400 650,600 1200,500 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-3)"
            opacity="0.06"
          />
          
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-particle bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs sm:text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ restaurants
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight animate-slide-up">
              Your AI Receptionist
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-gradient">
                for Business Calls
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up delay-200">
              Ressy AI answers calls, books appointments, and supports your customers 24/7. 
              Never miss another opportunity with intelligent call handling.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in delay-300">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Join Waitlist
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14 animate-fade-in delay-300">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300">
                Start free trial
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Watch demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 animate-fade-in delay-500">
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-xl font-bold text-gray-900 group-hover:scale-110 transition-transform">
                  99.2%
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Order accuracy
                </div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-xl font-bold text-gray-900 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Availability
                </div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-xl font-bold text-gray-900 group-hover:scale-110 transition-transform">
                  30%
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Revenue boost
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Spline Model */}
          {/* Right side - Spline Model */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl animate-float">
              <div className="absolute inset-0 scale-[1.2] translate-y-8">
                <Spline scene="https://prod.spline.design/50WfH-izB-FZaW0i/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes wave-1 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-10px); }
          50% { transform: translateX(-15px) translateY(-5px); }
          75% { transform: translateX(10px) translateY(-8px); }
        }
        
        @keyframes wave-2 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-20px) translateY(-8px); }
          50% { transform: translateX(15px) translateY(-12px); }
          75% { transform: translateX(-10px) translateY(-6px); }
        }
        
        @keyframes wave-3 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(15px) translateY(-6px); }
          50% { transform: translateX(-20px) translateY(-10px); }
          75% { transform: translateX(12px) translateY(-4px); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-15px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-wave-1 { animation: wave-1 15s ease-in-out infinite; }
        .animate-wave-2 { animation: wave-2 20s ease-in-out infinite reverse; }
        .animate-wave-3 { animation: wave-3 25s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle 20s linear infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
        .animate-fade-in { animation: fade-in 1s ease forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 6s ease infinite; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default Hero;