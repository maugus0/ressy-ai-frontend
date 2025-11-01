"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate, Link, useLocation } from "react-router-dom";
import ScheduleDemoModal from "./ScheduleDemoModal";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth scrolling with navbar offset, native-first with JS fallback
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!hash.startsWith('#')) return;
    
    // If not on home, navigate to home and request scroll there
    if (location.pathname !== '/') {
      e.preventDefault();
      setMobileOpen(false);
      navigate('/', { state: { scrollTo: hash } });
      return;
    }
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = document.querySelector(hash) as HTMLElement | null;
    if (!target) return;

    // If reduced motion preferred, allow default behavior
    if (prefersReduced) return;

    e.preventDefault();

    const navOffset = 80; // approximate fixed navbar height
    const targetY = target.getBoundingClientRect().top + window.pageYOffset - navOffset;

    // Try native smooth scrolling first
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      setTimeout(() => setMobileOpen(false), 400);
      return;
    }

    // Fallback JS animation
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 800;
    const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setMobileOpen(false);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 font-inter">
      <div
        className={`bg-white border border-gray-200 rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-lg transition-all w-[94%] sm:w-[95%] md:w-full max-w-7xl
        ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} duration-700 ease-out`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer" aria-label="Go to home">
            <img
              src="./ressy-logo.png" 
              alt="Ressy AI Logo"
              className="h-7 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-gray-700 font-medium">
            <a
              href="#usecases"
              onClick={(e) => handleNavClick(e, '#usecases')}
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Use Cases
            </a>

            <a
              href="#voice-agents"
              onClick={(e) => handleNavClick(e, '#voice-agents')}
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Voice Agents
            </a>

            <a
              href="#dashboard"
              onClick={(e) => handleNavClick(e, '#dashboard')}
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Dashboard
            </a>

            <a
              href="#integrations"
              onClick={(e) => handleNavClick(e, '#integrations')}
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Integrations
            </a>

            <a
              href="#roi"
              onClick={(e) => handleNavClick(e, '#roi')}
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, '#faq')}
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              size="sm"
              className="bg-black text-white font-semibold rounded-full px-5 sm:px-6 py-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule a demo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-3 text-gray-700 font-medium animate-fade-in">
            <a href="#usecases" onClick={(e) => handleNavClick(e, '#usecases')} className="hover:text-black">
              Use Cases
            </a>
            <a href="#voice-agents" onClick={(e) => handleNavClick(e, '#voice-agents')} className="hover:text-black">
              Voice Agents
            </a>
            <a href="#dashboard" onClick={(e) => handleNavClick(e, '#dashboard')} className="hover:text-black">
              Dashboard
            </a>
            <a href="#integrations" onClick={(e) => handleNavClick(e, '#integrations')} className="hover:text-black">
              Integrations
            </a>
            <a href="#roi" onClick={(e) => handleNavClick(e, '#roi')} className="hover:text-black">
              Pricing
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-black">
              FAQ
            </a>
            <Button className="bg-black text-white font-semibold rounded-full w-full" onClick={() => setIsModalOpen(true)}>
              Schedule a demo
            </Button>
          </div>
        )}
      </div>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Fade-in animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;