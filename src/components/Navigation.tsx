"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 font-inter">
      <div
        className={`bg-white border border-gray-200 rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-lg transition-all w-[94%] sm:w-[95%] md:w-full max-w-7xl
        ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"} duration-700 ease-out`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src="./ressy-logo.png" // 👉 replace with actual path
              alt="Ressy AI Logo"
              className="h-7 sm:h-8 w-auto"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-gray-700 font-medium">
            <a
              href="#usecases"
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Use Cases
            </a>

            {/* Features Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-black transition-colors">
                <span>Features</span>
                <ChevronDown size={16} className="opacity-60 group-hover:opacity-100 transition" />
              </button>
              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg mt-3 shadow-xl w-48">
                <a href="#business" className="block px-5 py-2 text-sm hover:bg-gray-50">
                  Business
                </a>
                <a href="#retail" className="block px-5 py-2 text-sm hover:bg-gray-50">
                  Retail
                </a>
              </div>
            </div>

            {/* Integrations Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-black transition-colors">
                <span>Integrations</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg mt-3 shadow-xl w-48">
                <a href="#pos" className="block px-5 py-2 text-sm hover:bg-gray-50">
                  POS Systems
                </a>
                <a href="#crm" className="block px-5 py-2 text-sm hover:bg-gray-50">
                  CRM
                </a>
              </div>
            </div>

            <a
              href="#pricing"
              className="relative transition-colors hover:text-black after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Pricing
            </a>
            <a
              href="#faq"
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
            <a href="#usecases" className="hover:text-black">
              Use Cases
            </a>
            <details>
              <summary className="cursor-pointer hover:text-black flex items-center">
                Features
              </summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <a href="#business" className="hover:text-black">
                  Business
                </a>
                <a href="#retail" className="hover:text-black">
                  Retail
                </a>
              </div>
            </details>
            <details>
              <summary className="cursor-pointer hover:text-black flex items-center">
                Integrations
              </summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <a href="#pos" className="hover:text-black">
                  POS Systems
                </a>
                <a href="#crm" className="hover:text-black">
                  CRM
                </a>
              </div>
            </details>
            <a href="#pricing" className="hover:text-black">
              Pricing
            </a>
            <a href="#faq" className="hover:text-black">
              FAQ
            </a>
            <Button className="bg-black text-white font-semibold rounded-full w-full">
              Schedule a demo
            </Button>
          </div>
        )}
      </div>

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