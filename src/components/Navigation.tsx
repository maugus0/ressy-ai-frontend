"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 font-inter">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 sm:px-10 py-4 shadow-lg transition-all w-full max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src="./ressy-logo.png" // 👉 replace with your logo file path
              alt="Ressy AI Logo"
              className="h-8 w-auto" // keeps aspect ratio, height = 32px
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <a
              href="#features"
              className="relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Use Cases
            </a>
            <div className="relative group">
              <button className="relative flex items-center space-x-1 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all group-hover:after:w-full">
                <span>Features</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg mt-3 shadow-xl w-48">
                <a
                  href="#businesss"
                  className="block px-5 py-2 text-sm hover:bg-gray-50"
                >
                  businesss
                </a>
                <a
                  href="#retail"
                  className="block px-5 py-2 text-sm hover:bg-gray-50"
                >
                  Retail
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="relative flex items-center space-x-1 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all group-hover:after:w-full">
                <span>Integrations</span>
              </button>
              <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg mt-3 shadow-xl w-48">
                <a
                  href="#pos"
                  className="block px-5 py-2 text-sm hover:bg-gray-50"
                >
                  POS Systems
                </a>
                <a
                  href="#crm"
                  className="block px-5 py-2 text-sm hover:bg-gray-50"
                >
                  CRM
                </a>
              </div>
            </div>
            <a
              href="#pricing"
              className="relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              Pricing
            </a>
            <a
              href="#careers"
              className="relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black after:transition-all hover:after:w-full"
            >
              FAQ
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 font-medium">
            <Button
              size="sm"
              className="bg-black text-white rounded-full px-6 py-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              Schedule a demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-4 text-gray-700 font-medium">
            <a href="#features" className="hover:text-gray-900">
              Features
            </a>
            <details>
              <summary className="cursor-pointer hover:text-gray-900">
                Use Cases
              </summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <a href="#businesss" className="hover:text-gray-900">
                  businesss
                </a>
                <a href="#retail" className="hover:text-gray-900">
                  Retail
                </a>
              </div>
            </details>
            <details>
              <summary className="cursor-pointer hover:text-gray-900">
                Integrations
              </summary>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <a href="#pos" className="hover:text-gray-900">
                  POS Systems
                </a>
                <a href="#crm" className="hover:text-gray-900">
                  CRM
                </a>
              </div>
            </details>
            <a href="#pricing" className="hover:text-gray-900">
              Pricing
            </a>
            <a href="#careers" className="hover:text-gray-900">
              Careers
            </a>
            <Button className="bg-black text-white rounded-full w-full">
              Schedule a demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;