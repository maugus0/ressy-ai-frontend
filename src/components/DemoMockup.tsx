import React from 'react'; // React is not explicitly used, but good practice if you plan to add state

const DemoMockup = () => {
  return (
    <section className="relative w-full flex justify-center items-center py-12">
      {/* Phone Mockup Container */}
      <div className="relative w-[500px] h-[912px]">
        {/* Phone Mockup Image */}
        <img
          src="/mockup.png" // Make sure this file is in your /public folder!
          alt="Phone mockup"
          className="w-full h-full object-contain drop-shadow-xl"
        />

        {/* Overlay Form - Adjusted to fill the screen area */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 space-y-4" // Use flexbox for vertical centering and padding for sizing
             style={{
               top: '120px',    // Adjust this value to align with the top of the phone screen
               bottom: '60px',  // Adjust this value to align with the bottom of the phone screen
               left: '30px',    // Adjust this value to align with the left of the phone screen
               right: '30px',   // Adjust this value to align with the right of the phone screen
             }}
        >
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 text-center">
            Try it!
          </h2>
          <p className="text-center text-gray-700 font-semibold">
            Call <span className="text-purple-600">Ressy.ai</span>
          </p>

          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Phone number"
            className="w-[250px] px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-[250px] px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          {/* Button */}
          <button className="w-[250px] py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
            Call me
          </button>

          {/* Disclaimer */}
          
        </div>
      </div>
    </section>
    
  );
};

export default DemoMockup;