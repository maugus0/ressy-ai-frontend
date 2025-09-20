import React from 'react';

const DemoMockup = () => {
  return (
    <section className="relative w-full flex justify-center items-center py-12">
      {/* Phone Mockup Container with floating animation */}
      <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] 
                      aspect-[500/912] animate-floating">
        {/* Phone Mockup Image */}
        <img
          src="/mockup.png" // Ensure this file is in your /public folder
          alt="Phone mockup"
          className="w-full h-full object-contain drop-shadow-2xl"
        />

        {/* Overlay Form */}
        <div
          className="
            absolute 
            left-1/2 -translate-x-1/2
            w-[75%] max-w-[260px] 
            flex flex-col justify-center items-center 
            p-3 sm:p-4 space-y-3

            top-[45%] sm:top-[55%]   /* 📱 Mobile 45%, tablet+ 55% */
            w-[65%] sm:w-[75%]       /* 📱 Mobile narrower, tablet+ normal */
          "
        >
          {/* Title */}
          <h2 className="text-sm sm:text-base font-bold text-gray-900 text-center">Try it!</h2>
          <p className="text-center text-gray-700 font-medium text-xs sm:text-sm">
            Call <span className="text-purple-600">Ressy.ai</span>
          </p>

          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-3 py-2 rounded-xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-3 py-2 rounded-xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
          />

          {/* Button */}
          <button
            className="w-full py-2 sm:py-3 rounded-xl bg-purple-600 text-white font-semibold 
                       shadow-md hover:scale-105 hover:shadow-lg transition text-xs sm:text-sm"
          >
            Call me
          </button>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-floating {
          animation: floating 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DemoMockup;