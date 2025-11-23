import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Calendar, Clock, User, Mail, Phone, Building, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

type ModalMode = "demo" | "trial" | "waitlist";

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: ModalMode;
}

const ScheduleDemoModal = ({
  isOpen,
  onClose,
  mode = "demo",
}: ScheduleDemoModalProps) => {
  const getHeaderContent = () => {
    switch (mode) {
      case "trial":
        return {
          title: "Start Your Free Trial",
          subtitle: "Fill in your information to start your 7-day free trial",
        };
      case "waitlist":
        return {
          title: "Join the Waitlist",
          subtitle: "Fill in your information to join our waitlist",
        };
      default:
        return {
          title: "Schedule Your Demo",
          subtitle: "See RessyAI in action",
        };
    }
  };

  const headerContent = getHeaderContent();
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 4) return "Name must be at least 4 characters";
    if (name.trim().length > 100)
      return "Name must be less than 100 characters";
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim()))
      return "Name can only contain letters, spaces, hyphens, and apostrophes";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()))
      return "Please enter a valid email address";
    if (email.length > 254) return "Email must be less than 254 characters";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Phone number is required";
    // Remove common formatting characters
    const cleaned = phone.replace(/[\s\-()+]/g, "");
    // Check if it's a valid phone number (7-15 digits)
    if (!/^\d{7,15}$/.test(cleaned)) return "Please enter a valid phone number";
    return "";
  };

  const validateCompany = (company: string): string => {
    if (!company.trim()) return "Company name is required";
    if (company.trim().length < 4)
      return "Company name must be at least 4 characters";
    if (company.trim().length > 100)
      return "Company name must be less than 100 characters";
    return "";
  };

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

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const companyError = validateCompany(formData.company);

    const newErrors: Record<string, string> = {};
    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;
    if (companyError) newErrors.company = companyError;

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need attention before submitting.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      // Web3Forms – reliable and CORS-friendly
      const ACCESS_KEY = "5f9a6bfe-1a62-477a-8d68-8b268cb5f597";
      const subject =
        mode === "trial"
          ? "New Free Trial Request"
          : mode === "waitlist"
            ? "New Waitlist Signup"
            : "New Schedule Demo Request";
      const basePayload = {
        access_key: ACCESS_KEY,
        subject,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: formData.industry,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
      };

      const submitOnce = async (to: string) => {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...basePayload, to }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data?.success) {
          throw new Error(data?.message || `Web3Forms failed (${res.status})`);
        }
      };

      // Send to single recipient as requested
      await submitOnce("ahanj049@gmail.com");

      const successMessage =
        mode === "trial"
          ? "Trial request sent! We'll reach out within 24 hours to get you started."
          : mode === "waitlist"
            ? "You're on the waitlist! We'll notify you when we launch."
            : "Demo request sent! We'll reach out within 24 hours to schedule your call.";

      toast({
        title:
          mode === "trial"
            ? "Trial request sent!"
            : mode === "waitlist"
              ? "You're on the waitlist!"
              : "Demo request sent!",
        description: successMessage,
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
      setErrors({});
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "company":
        error = validateCompany(value);
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp border border-gray-200">
        {/* Header */}
        <div className="sticky top-0 bg-gray-50 border-b border-gray-200 text-gray-900 px-6 sm:px-8 py-5 sm:py-6 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {headerContent.title}
              </h2>
              <p className="text-sm text-gray-600">{headerContent.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-gray-500" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none ${
                  errors.name
                    ? "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1.5">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-gray-500" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none ${
                  errors.email
                    ? "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400"
                }`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1.5">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none ${
                  errors.phone
                    ? "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400"
                }`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1.5">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-gray-500" />
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none ${
                  errors.company
                    ? "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400"
                }`}
                placeholder="Your Company"
              />
              {errors.company && (
                <p className="text-sm text-red-600 mt-1.5">{errors.company}</p>
              )}
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
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none hover:border-gray-400 appearance-none cursor-pointer"
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
                className="block text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gray-500" />
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none hover:border-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Clock className="w-4 h-4 text-gray-500" />
                Preferred Time
              </label>
              <div className="relative">
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none hover:border-gray-400 appearance-none cursor-pointer"
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none hover:border-gray-400 resize-none"
              placeholder="Tell us about your business needs..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Sending..."
                : mode === "trial"
                  ? "Start Free Trial"
                  : mode === "waitlist"
                    ? "Join Waitlist"
                    : "Schedule Demo"}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center pt-2">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="text-purple-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-purple-600 hover:underline">
              Terms of Service
            </a>
            .
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
