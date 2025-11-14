import { useState } from "react";
import DemoMockup from "./DemoMockup";
// import LiquidEther from "./LiquidEther";
import Iridescence from "./Iridescence";
// import { toast } from "@/hooks/use-toast";
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:pt-20">
        {" "}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up-slow pt-40 lg:pt-0">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-gray-200 text-xs sm:text-sm font-medium mb-4 backdrop-blur-md">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ businesses using AI
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Your AI receptionist that books, answers, and follows up.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Capture every call, schedule appointments, qualify leads and
              answer questions instantly — no hold music, no scripts to
              memorise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 sm:px-7 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Start free trial
              </button>
              <button
                onClick={handlePlayDemo}
                className="px-5 sm:px-7 py-3 sm:py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:from-gray-700 hover:via-gray-800 hover:to-black hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:text-purple-300 transition-colors"
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Call accuracy
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Availability
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">
                  75%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  More bookings
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-[80%] max-w-[280px] sm:max-w-sm lg:max-w-md">
              <DemoMockup />
            </div>
          </div>
        </div>
      </div>
      <style>{`
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-up-slow { animation: slideUp 1.5s ease-out forwards; }

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
      />
    </section>
  );
};

export default Hero;
