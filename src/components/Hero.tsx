import { useState } from "react";
import DemoMockup from "./DemoMockup";
import LiquidEther from "./LiquidEther";
import Iridescence from "./Iridescence";
import { toast } from "@/hooks/use-toast";
import { useNavigate, useLocation } from "react-router-dom";
import ScheduleDemoModal from "./ScheduleDemoModal";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayDemo = () => {
    const hash = "#voice-agents";

    // If not on home, navigate to home and request scroll there
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: hash } });
      return;
    }

    // If on home page, scroll to the section
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.querySelector(hash) as HTMLElement | null;
    if (!target) return;

    // If reduced motion preferred, use instant scroll
    if (prefersReduced) {
      const navOffset = 80;
      const targetY =
        target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo(0, targetY);
      return;
    }

    const navOffset = 80; // approximate fixed navbar height
    const targetY =
      target.getBoundingClientRect().top + window.pageYOffset - navOffset;

    // Try native smooth scrolling first
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: targetY, behavior: "smooth" });
      return;
    }

    // Fallback JS animation
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 800;
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pb-12 sm:pb-16 lg:pb-20">
      {/* 🌊 Liquid Ether Background */}
      <div className="absolute inset-0 -z-20 ">
        <Iridescence
          color={[0.5, 0, 0.7]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      {/* 🌟 Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Desktop: Left Column Wrapper (contains title + rest) */}
          <div className="hidden lg:flex lg:flex-col lg:order-1 text-center lg:text-left animate-slide-up-slow pt-4 sm:pt-6 lg:pt-0 font-sans">
            {/* Badge */}
            <div
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 text-gray-200 text-xs sm:text-sm font-medium mb-4 sm:mb-5 lg:mb-6 backdrop-blur-md font-sans shadow-lg lg:inline-flex lg:self-start"
              style={{
                WebkitBackdropFilter: "blur(12px)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ businesses using AI
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight sm:leading-tight lg:leading-tight font-sans drop-shadow-lg">
              Your all-in-one AI receptionist that books, answers, and follows
              up.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-sans">
              Capture every call, schedule appointments, qualify leads and
              answer questions instantly — no hold music, no scripts to
              memorize.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Start free trial"
                aria-haspopup="dialog"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-base sm:text-lg font-sans"
                style={{
                  background: "linear-gradient(to right, #9333ea, #db2777)",
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                }}
              >
                Start free trial
              </button>
              <button
                onClick={handlePlayDemo}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl font-semibold shadow-xl hover:from-gray-700 hover:via-gray-800 hover:to-black hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-base sm:text-lg font-sans"
                style={{
                  background:
                    "linear-gradient(to right, #1f2937, #111827, #000000)",
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 font-sans mt-6 sm:mt-8">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans mb-1 sm:mb-2 drop-shadow-md">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-sans">
                  Call accuracy
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans mb-1 sm:mb-2 drop-shadow-md">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-sans">
                  Availability
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans mb-1 sm:mb-2 drop-shadow-md">
                  75%
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-sans">
                  More bookings
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Title Only (order-1) */}
          <div className="lg:hidden order-1 text-center animate-slide-up-slow pt-20 sm:pt-24 font-sans">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-0 sm:mb-0 leading-tight font-sans drop-shadow-lg">
              Your all-in-one AI receptionist that books, answers, and follows
              up.
            </h1>
          </div>

          {/* Phone Mockup (order-2 on mobile, order-2 on desktop) */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end -mt-10 sm:-mt-12 lg:mt-0 lg:pt-0">
            <div className="w-[85%] sm:w-[80%] max-w-[300px] sm:max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-300">
              <DemoMockup />
            </div>
          </div>

          {/* Mobile: Rest of Content (order-3) */}
          <div className="lg:hidden order-3 text-center animate-slide-up-slow -mt-10 sm:-mt-12 font-sans">
            {/* Badge */}
            <div
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 text-gray-200 text-xs sm:text-sm font-medium mb-3 sm:mb-4 backdrop-blur-md font-sans shadow-lg"
              style={{
                WebkitBackdropFilter: "blur(12px)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ businesses using AI
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto mb-4 sm:mb-5 leading-relaxed font-sans">
              Capture every call, schedule appointments, qualify leads and
              answer questions instantly — no hold music, no scripts to
              memorize.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-7">
              <button
                onClick={() => setIsModalOpen(true)}
                aria-label="Start free trial"
                aria-haspopup="dialog"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-base sm:text-lg font-sans"
                style={{
                  background: "linear-gradient(to right, #9333ea, #db2777)",
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                }}
              >
                Start free trial
              </button>
              <button
                onClick={handlePlayDemo}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl font-semibold shadow-xl hover:from-gray-700 hover:via-gray-800 hover:to-black hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-base sm:text-lg font-sans"
                style={{
                  background:
                    "linear-gradient(to right, #1f2937, #111827, #000000)",
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 font-sans mt-4 sm:mt-5">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans mb-1 sm:mb-2 drop-shadow-md">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-sans">
                  Call accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans mb-1 sm:mb-2 drop-shadow-md">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-sans">
                  Availability
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans mb-1 sm:mb-2 drop-shadow-md">
                  75%
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-sans">
                  More bookings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
  @keyframes slideUp {
    from { opacity: 0; -webkit-transform: translateY(40px); transform: translateY(40px); }
    to { opacity: 1; -webkit-transform: translateY(0); transform: translateY(0); }
  }
  .animate-slide-up-slow { 
    -webkit-animation: slideUp 1.5s ease-out forwards;
    animation: slideUp 1.5s ease-out forwards;
  }

  /* 📱 Mobile (<= 640px) */
  @media (max-width: 640px) {
    .phone-mockup-wrapper {
      margin-top: 2.5rem; /* ~mt-10 */
    }
      
  }

  /* 📲 Tablet (641px – 1024px) */
  @media (min-width: 641px) and (max-width: 1024px) {
    .phone-mockup-wrapper {
      margin-top: 3rem; /* ~mt-12 */
    }
  }

  /* 🖥️ Desktop (>= 1025px) */
  @media (min-width: 1025px) {
    .phone-mockup-wrapper {
      margin-top: 0; /* reset for side-by-side */
    }
  }
`}</style>

      {/* Animations */}

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="trial"
      />
    </section>
  );
};

export default Hero;
