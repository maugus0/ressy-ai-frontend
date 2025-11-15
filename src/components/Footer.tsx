import {
  // Heart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  // Twitter,
  Instagram,
  // X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const ressyLogo = `${import.meta.env.BASE_URL}ressy-logo.png`;

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink =
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!hash.startsWith("#")) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const smoothScroll = () => {
        const target = document.querySelector(hash) as HTMLElement | null;
        if (!target) return;
        if (prefersReduced) {
          target.scrollIntoView();
          return;
        }

        const navOffset = 80;
        const targetY =
          target.getBoundingClientRect().top + window.pageYOffset - navOffset;

        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({ top: targetY, behavior: "smooth" });
          return;
        }

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

      if (location.pathname !== "/") {
        e.preventDefault();
        navigate("/", { state: { scrollTo: hash } });
        return;
      }

      e.preventDefault();
      smoothScroll();
    };

  const XIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm9.5 10.2l4.2-6.2H16l-3.2 4.8L10 7h-1.7l4.3 6.5-4.3 6.5H9l3.3-4.9 3.4 4.9h1.6l-4.3-6.3z" />
    </svg>
  );
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 via-pink-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/15 via-violet-300/10 to-indigo-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-200/20 via-pink-200/10 to-indigo-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <img src={ressyLogo} alt="Ressy AI Logo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Revolutionizing business operations with AI-powered voice agents.
              Handle reservations, orders, and customer service 24/7 with
              human-like conversations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ressyai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/ressy-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ressy.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-lg">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#voice-agents"
                  onClick={handleHashLink("#voice-agents")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Voice Agents
                </a>
              </li>
              <li>
                <a
                  href="#usecases"
                  onClick={handleHashLink("#usecases")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  onClick={handleHashLink("#dashboard")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#roi"
                  onClick={handleHashLink("#roi")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  ROI Calculator
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  onClick={handleHashLink("#integrations")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/restaurants"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/salons"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Salons
                </Link>
              </li>
              <li>
                <Link
                  to="/dental"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Dental Clinics
                </Link>
              </li>
              <li>
                <a
                  href="#usecases"
                  onClick={handleHashLink("#usecases")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Retail Stores
                </a>
              </li>
              <li>
                <a
                  href="#usecases"
                  onClick={handleHashLink("#usecases")}
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help-center"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/api-reference"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  System Status
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@ressy.ai"
                  className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info section */}
        <div className="border-t border-purple-200 py-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-purple-100">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Email us</p>
                <a
                  href="mailto:info@ressy.ai"
                  className="text-slate-800 hover:text-purple-600 transition-colors duration-300"
                >
                  info@ressy.ai
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-purple-100">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Call us</p>
                <a
                  href="tel:+1 (234) 567 8900"
                  className="text-slate-800 hover:text-purple-600 transition-colors duration-300"
                >
                  +1 (234) 567 8900
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-purple-100">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Visit us</p>
                <p className="text-slate-800">Vancouver, Canada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-purple-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-slate-500 hover:text-purple-600 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-500 hover:text-purple-600 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-slate-500 hover:text-purple-600 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 RessyAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
