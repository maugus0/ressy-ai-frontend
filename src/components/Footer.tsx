import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 via-blue-500/8 to-cyan-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/8 via-violet-500/6 to-indigo-500/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/6 via-teal-500/4 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <img
                src="./ressy-logo.png"
                alt="Ressy AI Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Revolutionizing restaurant operations with AI-powered voice agents. 
              Handle reservations, orders, and customer service 24/7 with human-like conversations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Voice Agents</a></li>
              <li><a href="#reservations" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Reservations AI</a></li>
              <li><a href="#ordering" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Order Management</a></li>
              <li><a href="#analytics" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Analytics Dashboard</a></li>
              <li><a href="#integrations" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Integrations</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#restaurants" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Restaurants</a></li>
              <li><a href="#cafes" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Cafes & Bars</a></li>
              <li><a href="#retail" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Retail</a></li>
              <li><a href="#hospitality" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Hospitality</a></li>
              <li><a href="#enterprise" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Help Center</a></li>
              <li><a href="#documentation" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Documentation</a></li>
              <li><a href="#api" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">API Reference</a></li>
              <li><a href="#status" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">System Status</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Contact info section */}
        <div className="border-t border-slate-700/50 py-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-slate-700/50">
                <Mail className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email us</p>
                <a href="mailto:hello@ressy.ai" className="text-white hover:text-cyan-400 transition-colors duration-300">
                  info@ressy.ai
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-slate-700/50">
                <Phone className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Call us</p>
                <a href="tel:+1-555-RESSY-AI" className="text-white hover:text-cyan-400 transition-colors duration-300">
                  +1 (555) RESSY-AI
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-slate-700/50">
                <MapPin className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Visit us</p>
                <p className="text-white">Vancouver, Canada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-slate-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for restaurants everywhere
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 RessyAI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;