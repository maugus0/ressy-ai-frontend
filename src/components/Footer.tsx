import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
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
              <img
                src="./ressy-logo.png"
                alt="Ressy AI Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Revolutionizing business operations with AI-powered voice agents. 
              Handle reservations, orders, and customer service 24/7 with human-like conversations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-800 transition-all duration-300 hover:scale-110"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
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
              <li><a href="#features" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Voice Agents</a></li>
              <li><a href="#reservations" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Reservations AI</a></li>
              <li><a href="#ordering" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Order Management</a></li>
              <li><a href="#analytics" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Analytics Dashboard</a></li>
              <li><a href="#integrations" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Integrations</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#business" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Businesses</a></li>
              <li><a href="#cafes" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Cafes & Bars</a></li>
              <li><a href="#retail" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Retail</a></li>
              <li><a href="#hospitality" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Hospitality</a></li>
              <li><a href="#enterprise" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-lg">Support</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Help Center</a></li>
              <li><a href="#documentation" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Documentation</a></li>
              <li><a href="#api" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">API Reference</a></li>
              <li><a href="#status" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">System Status</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline">Contact Us</a></li>
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
                <a href="mailto:hello@ressy.ai" className="text-slate-800 hover:text-purple-600 transition-colors duration-300">
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
                <a href="tel:+1-555-RESSY-AI" className="text-slate-800 hover:text-purple-600 transition-colors duration-300">
                  +1 (555) RESSY-AI
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
            <p className="text-slate-500 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for businesses everywhere
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-slate-500 hover:text-purple-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-500 hover:text-purple-600 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-500 hover:text-purple-600 transition-colors duration-300">
                Cookie Policy
              </a>
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