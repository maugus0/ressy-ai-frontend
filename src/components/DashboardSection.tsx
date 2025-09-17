import React from "react";

const DashboardSection = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/40 to-teal-50/30">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">all-in-one</span>{" "}
          <span className="text-black">dashboard</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-12">
          See live calls, transcripts, transactions, and outcomes in one place. Update
          business info, track payments, monitor earnings, and identify peak call times —
          so you can staff smarter and grow revenue effortlessly.
        </p>

        {/* Mockup */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
          <img
            src="/mac-dash.png" // Add your dashboard screenshot in /public
            alt="Dashboard Preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;