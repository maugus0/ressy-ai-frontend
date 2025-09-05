"use client";

import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 via-white to-purple-200 animate-gradient-slow" />

        {/* Glowing blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400/40 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 -right-40 w-[36rem] h-[36rem] bg-indigo-400/40 rounded-full blur-[160px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] bg-pink-400/30 rounded-full blur-[140px] animate-blob animation-delay-4000" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
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
              Never miss another call.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 animate-gradient">
                AI answers every call.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up delay-200">
              Transform your restaurant with an AI phone agent that takes perfect
              orders, upsells naturally, and works 24/7. Stop losing revenue to
              busy signals and overwhelmed staff.
            </p>

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

        .bg{
         transform: scale(1.2);
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease forwards; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient 6s ease infinite; }

        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background: linear-gradient(270deg, #f5f3ff, #faf5ff, #eef2ff);
          background-size: 600% 600%;
          animation: gradient-slow 20s ease infinite;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 20s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;