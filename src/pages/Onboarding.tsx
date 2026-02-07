import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { onboardingSteps } from "@/data/onboardingSteps";
import { Compass } from "lucide-react";

const Onboarding = () => {
  useEffect(() => {
    document.title = "Getting Started | RessyAI";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Getting Started with RessyAI
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Follow our step-by-step guide to set up your AI receptionist.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="text-center py-10 sm:py-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <Compass className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-10 text-sm sm:text-base leading-relaxed">
              Our onboarding guide and interactive walkthrough are being
              finalised by our design team. Check back soon.
            </p>
          </div>

          {/* SLIDESHOW COMPONENT — to be provided by design team */}

          {/* Step Preview */}
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center">
              What to expect
            </h3>
            <div className="space-y-4">
              {onboardingSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 items-start rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ONBOARDING GUIDELINES — markdown or structured content */}

          {/* CTA */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Need help getting started? Email us at{" "}
              <a
                href="mailto:info@ressy.ai"
                className="text-purple-600 hover:underline font-medium"
              >
                info@ressy.ai
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
