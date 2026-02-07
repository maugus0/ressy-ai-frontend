import { useEffect } from "react";
import { Phone, Sparkles, Shield, Mic } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoMockup from "@/components/DemoMockup";

const ScheduleDemo = () => {
  useEffect(() => {
    document.title = "Schedule Demo | RessyAI";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden">
        {/* Background - Similar to Hero section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.08),transparent_70%)]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-indigo-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section with Demo Mockup */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 lg:pt-12 pb-4 sm:pb-6 lg:pb-8">
          <div className="grid lg:grid-cols-2 gap-0 sm:gap-4 lg:gap-16 items-start lg:items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 -mt-4 sm:mt-4 lg:mt-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 sm:mb-3 lg:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Instant Live Demo
                </span>
                <span className="text-gray-900 block sm:inline sm:ml-2">
                  — Ressy Calls You
                </span>
              </h1>
              <div className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed space-y-3 sm:space-y-4 lg:space-y-5">
                <p className="text-gray-700 font-medium">
                  Fill the form and Ressy will call you within{" "}
                  <span className="text-purple-600 font-semibold">
                    60 seconds
                  </span>{" "}
                  for a fully interactive demo.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-100">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    She speaks to you exactly the way she would speak to your
                    customers —{" "}
                    <span className="text-purple-600">in real time</span>.
                  </p>
                </div>
                <p className="text-gray-700 font-medium">
                  Ressy adapts to your selected business type using our preset
                  data:
                </p>
                <ul className="text-xs sm:text-sm lg:text-base text-left space-y-2.5 sm:space-y-3 max-w-xl mx-auto lg:mx-0">
                  <li className="flex items-start group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-1.5 sm:mt-2 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-700">
                      <span className="font-bold text-orange-600">
                        Restaurants:
                      </span>{" "}
                      Menu, hours, address, takeout orders, modifying orders,
                      reservations.
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-1.5 sm:mt-2 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-700">
                      <span className="font-bold text-pink-600">Salons:</span>{" "}
                      Stylist profiles, style suggestions based on your
                      description, appointments.
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-1.5 sm:mt-2 mr-2.5 sm:mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-700">
                      <span className="font-bold text-blue-600">Dentists:</span>{" "}
                      Doctor list, emergency triage, appointment booking.
                    </span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-indigo-100 mt-4 sm:mt-5">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    Experience how Ressy handles real customer conversations —{" "}
                    <span className="text-indigo-600">
                      fast, smart, and fully customized
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Demo Mockup */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end pt-0 sm:pt-2 lg:pt-0">
              <div className="w-[70%] sm:w-[75%] max-w-[260px] sm:max-w-sm lg:max-w-md">
                <DemoMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Questions Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-xl border border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mic className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-600" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900">
                Suggested Questions to Try on the Call
              </h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              Short, realistic, high-impact prompts for users to test:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* Restaurants */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-orange-100">
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">
                  For Restaurants
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span>"What's on your menu today?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span>"Can I place a takeout order?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span>
                      "I want to change the item in my previous order."
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span>"Are you open right now?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span>"Can you book a table for 2 at 7 PM?"</span>
                  </li>
                </ul>
              </div>

              {/* Salons */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-pink-100">
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">
                  For Salons
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">•</span>
                    <span>
                      "Here's what I'm wearing today — what hairstyle suits me?"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">•</span>
                    <span>"Who's your best stylist for coloring?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">•</span>
                    <span>
                      "Can you book me an appointment tomorrow afternoon?"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 mt-1">•</span>
                    <span>"What services do you offer?"</span>
                  </li>
                </ul>
              </div>

              {/* Dentists */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">
                  For Dentists
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>"I'm having tooth pain — what should I do?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>"Which doctor specializes in root canals?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>
                      "Can I book the earliest available appointment?"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>"Do you handle emergencies now?"</span>
                  </li>
                </ul>
              </div>

              {/* General */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">
                  General
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  (for all businesses)
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 mt-1">•</span>
                    <span>"What services do you provide?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 mt-1">•</span>
                    <span>"Can you repeat that?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 mt-1">•</span>
                    <span>"Can you send me the details by SMS?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 mt-1">•</span>
                    <span>"I'd like to update my booking."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2 mt-1">•</span>
                    <span>"What should I do next?"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* 5-Minute Live Demo Call */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 lg:mb-5">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                5-Minute Live Demo Call
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
                Enter your Business Name, Type, and Email — and Ressy will
                instantly call you for a 5-minute live demo. The call auto-ends
                at 5 minutes, so you get a quick, focused preview.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                Ask her anything. Experience the product in real time.
              </p>
            </div>

            {/* Custom Use Case Showcase */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 lg:mb-5">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Custom Use Case Showcase
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                Ressy tailors the demo using your business type and our internal
                data.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium mt-2 sm:mt-3">
                Get relevant answers, examples, and workflows designed
                specifically for your business on the spot.
              </p>
            </div>

            {/* Guardrail Stress Test */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 lg:mb-5">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Guardrail Stress Test
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
                Ask anything — seriously.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                Use this live call to push the limits, validate our guardrails,
                and see how Ressy handles edge cases with safety and accuracy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ScheduleDemo;
