"use client";

const Hero = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* SVG Wave Background */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <style>{`
            .path-0{
              animation:pathAnim-0 8s linear infinite;
            }
            @keyframes pathAnim-0{
              0%{d: path("M 0,600 L 0,300 C 84,283.684 168,267.368 264,262 C 360,256.632 468,262.211 553,238 C 638,213.789 700,159.789 810,115 C 920,70.211 1078,34.632 1191,17 C 1304,-0.632 1372,-0.316 1440,0 L 1440,600 L 0,600 Z");}
              50%{d: path("M 0,600 L 0,300 C 93,319.665 186,339.330 276,308 C 365,276.670 449,194.344 554,162 C 658,129.656 782,147.292 871,151 C 959,154.708 1012,144.488 1101,117 C 1189,89.512 1314,44.756 1440,0 L 1440,600 L 0,600 Z");}
              100%{d: path("M 0,600 L 0,300 C 84,283.684 168,267.368 264,262 C 360,256.632 468,262.211 553,238 C 638,213.789 700,159.789 810,115 C 920,70.211 1078,34.632 1191,17 C 1304,-0.632 1372,-0.316 1440,0 L 1440,600 L 0,600 Z");}
            }

            .path-1{
              animation:pathAnim-1 8s linear infinite;
            }
            @keyframes pathAnim-1{
              0%{d: path("M 0,600 L 0,500 C 106,531.732 212,563.464 299,526 C 385,488.536 451,381.876 548,362 C 644,342.124 772,409.033 864,390 C 955,370.967 1011,265.990 1101,220 C 1190,174.010 1315,187.005 1440,200 L 1440,600 L 0,600 Z");}
              50%{d: path("M 0,600 L 0,500 C 97,476.335 195,452.670 294,433 C 392,413.330 492,397.656 575,366 C 657,334.344 722,286.708 828,292 C 933,297.292 1080,355.512 1189,349 C 1297,342.488 1368,271.244 1440,200 L 1440,600 L 0,600 Z");}
              100%{d: path("M 0,600 L 0,500 C 106,531.732 212,563.464 299,526 C 385,488.536 451,381.876 548,362 C 644,342.124 772,409.033 864,390 C 955,370.967 1011,265.990 1101,220 C 1190,174.010 1315,187.005 1440,200 L 1440,600 L 0,600 Z");}
            }
          `}</style>

          <path
            d="M 0,600 L 0,300 C 84,283.684 168,267.368 264,262 C 360,256.632 468,262.211 553,238 C 638,213.789 700,159.789 810,115 C 920,70.211 1078,34.632 1191,17 C 1304,-0.632 1372,-0.316 1440,0 L 1440,600 L 0,600 Z"
            fill="hsl(262 83% 68%)"
            fillOpacity="0.6"
            className="path-0"
          ></path>

          <path
            d="M 0,600 L 0,500 C 106,531.732 212,563.464 299,526 C 385,488.536 451,381.876 548,362 C 644,342.124 772,409.033 864,390 C 955,370.967 1011,265.990 1101,220 C 1190,174.010 1315,187.005 1440,200 L 1440,600 L 0,600 Z"
            fill="hsl(262 83% 58%)"
            fillOpacity="0.9"
            className="path-1"
          ></path>
        </svg>

        {/* Optional noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs sm:text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ restaurants
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight animate-slide-up">
              Never miss another call.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 animate-gradient">
                AI answers every call.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up delay-200">
              Transform your restaurant with an AI phone agent that takes perfect
              orders, upsells naturally, and works 24/7. Stop losing revenue to
              busy signals and overwhelmed staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14 animate-fade-in delay-300">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300">
                Start free trial
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Watch demo
              </button>
            </div>

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

          {/* Right side - Image placeholder (Spline removed) */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl animate-float bg-white/40 backdrop-blur">
              <div className="absolute inset-0 flex items-center justify-center text-purple-600 font-bold">
                Image / 3D Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;