import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Calendar, Clock, User, Mail, Phone, Building, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleDemoModal = ({ isOpen, onClose }: ScheduleDemoModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Freeze background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    type OverscrollStyle = CSSStyleDeclaration & {
      overscrollBehavior?: string;
    };
    const bodyStyle = document.body.style as OverscrollStyle;
    const htmlStyle = document.documentElement.style as OverscrollStyle;
    const prevBodyOverscroll = bodyStyle.overscrollBehavior;
    const prevHtmlOverscroll = htmlStyle.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    bodyStyle.overscrollBehavior = "contain";
    htmlStyle.overscrollBehavior = "contain";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      bodyStyle.overscrollBehavior = prevBodyOverscroll;
      htmlStyle.overscrollBehavior = prevHtmlOverscroll;
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const payload = new URLSearchParams({
        _subject: "New Schedule Demo Request",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: formData.industry,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
        _captcha: "false",
      });

      const res = await fetch("https://formsubmit.co/ajax/info@ressy.ai", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error(`Email failed (${res.status})`);

      toast({
        title: "Demo request sent!",
        description: "We'll reach out within 24 hours to schedule your call.",
      });
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Could not send your request",
        description: "Please try again in a moment or email info@ressy.ai",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Schedule Your Demo</h2>
              <p className="text-sm text-purple-100">See RessyAI in action</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                <User className="w-4 h-4 inline mr-1.5 text-purple-600" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                <Mail className="w-4 h-4 inline mr-1.5 text-purple-600" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                <Phone className="w-4 h-4 inline mr-1.5 text-purple-600" />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                <Building className="w-4 h-4 inline mr-1.5 text-purple-600" />
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300"
                placeholder="Your Company"
              />
            </div>
          </div>

          {/* Industry Selection with Custom Styling */}
          <div className="space-y-2">
            <label
              htmlFor="industry"
              className="block text-sm font-medium text-gray-700"
            >
              Industry *
            </label>
            <div className="relative">
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300 appearance-none bg-white cursor-pointer"
              >
                <option value="">Select your industry</option>
                <option value="restaurant">🍽️ Restaurant</option>
                <option value="salon">💇 Salon & Spa</option>
                <option value="dental">🦷 Dental</option>
                <option value="retail">🛍️ Retail</option>
                <option value="hospitality">🏨 Hospitality</option>
                <option value="other">📋 Other</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700"
              >
                <Calendar className="w-4 h-4 inline mr-1.5 text-purple-600" />
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700"
              >
                <Clock className="w-4 h-4 inline mr-1.5 text-purple-600" />
                Preferred Time
              </label>
              <div className="relative">
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300 appearance-none bg-white cursor-pointer"
                >
                  <option value="">Select time</option>
                  <option value="9:00 AM">🌅 9:00 AM</option>
                  <option value="10:00 AM">☀️ 10:00 AM</option>
                  <option value="11:00 AM">☀️ 11:00 AM</option>
                  <option value="1:00 PM">🌤️ 1:00 PM</option>
                  <option value="2:00 PM">🌤️ 2:00 PM</option>
                  <option value="3:00 PM">🌤️ 3:00 PM</option>
                  <option value="4:00 PM">🌆 4:00 PM</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Information (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none hover:border-purple-300 resize-none"
              placeholder="Tell us about your business needs..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Schedule Demo"}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center pt-2">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>,
    document.body,
  );
};

export default ScheduleDemoModal;
