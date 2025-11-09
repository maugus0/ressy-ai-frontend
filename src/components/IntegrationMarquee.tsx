import React from "react";
const integration1 = `${import.meta.env.BASE_URL}integration_1.svg`;
const integration2 = `${import.meta.env.BASE_URL}integration_2.svg`;

const IntegrationMarquee = () => {
  return (
    <section
      id="integrations"
      className="relative w-full py-16 bg-gradient-to-b from-white via-purple-50/40 to-teal-50/30 overflow-hidden scroll-mt-28"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Integrates with your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
            Existing Stack
          </span>
        </h2>
      </div>

      <div className="relative w-full space-y-8">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <img
              src={integration1}
              alt="Integration Logos"
              className="h-24 sm:h-28 lg:h-32 min-w-full"
            />
            <img
              src={integration2}
              alt="Integration Logos"
              className="h-24 sm:h-28 lg:h-32 min-w-full"
            />
            <img
              src={integration1}
              alt="Integration Logos"
              className="h-24 sm:h-28 lg:h-32 min-w-full"
            />
          </div>
        </div>

        {/* Row 2 (reverse) */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            <img
              src={integration2}
              alt="Integration Logos"
              className="h-24 sm:h-28 lg:h-32 min-w-full"
            />
            <img
              src={integration1}
              alt="Integration Logos"
              className="h-24 sm:h-28 lg:h-32 min-w-full"
            />
            <img
              src={integration2}
              alt="Integration Logos"
              className="h-24 sm:h-28 lg:h-32 min-w-full"
            />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }

        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IntegrationMarquee;
