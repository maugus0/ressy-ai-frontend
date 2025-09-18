import React from 'react';

const DemoMockup = () => {
  return (
    <section className="relative w-full flex justify-center items-center py-12">
      {/* Phone Mockup Container with floating animation */}
      <div className="relative w-[500px] h-[912px] animate-floating">
        {/* Phone Mockup Image */}
        <img
          src="/mockup.png" // Ensure this file is in your /public folder
          alt="Phone mockup"
          className="w-full h-full object-contain drop-shadow-2xl"
        />

        {/* Overlay Form */}
        <div
          className="absolute flex flex-col justify-center items-center p-8 space-y-4"
          style={{
            top: '320px',
            bottom: '60px',
            left: '35px',
            right: '35px',
          }}
        >
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 text-center">Try it!</h2>
          <p className="text-center text-gray-700 font-semibold">
            Call <span className="text-purple-600">Ressy.ai</span>
          </p>

          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Phone number"
            className="w-[250px] px-4 py-3 rounded-2xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-[250px] px-4 py-3 rounded-2xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          {/* Button */}
          <button
            className="w-[250px] py-3 rounded-2xl bg-purple-600 text-white font-semibold 
                       shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            Call me
          </button>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DemoMockup;