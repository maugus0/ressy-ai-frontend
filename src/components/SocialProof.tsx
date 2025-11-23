import { useState } from "react";
import ScheduleDemoModal from "./ScheduleDemoModal";

const SocialProof = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Coming soon
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Business owners love{" "}
              <span className="text-purple-600">ressy.ai</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              We're about to launch our pilot and many businesses across Canada
              are already on our waitlist. Join them today to be among the first
              to experience AI-powered reception that books, answers, and
              follows up.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10 text-center">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5 sm:mb-6 lg:mb-8 leading-relaxed">
              Pilot cohorts fill up quickly. Secure your spot and we'll reach
              out with next steps.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </section>

      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="waitlist"
      />
    </>
  );
};

export default SocialProof;
