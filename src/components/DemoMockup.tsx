import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import mockupImg from "@/assets/mockup.png";

const DemoMockup = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState<
    "restaurant" | "salon" | "dental_clinic"
  >("restaurant");
  const [phoneLocal, setPhoneLocal] = useState("");
  const countries = [
    { label: "US", code: "+1", flag: "🇺🇸" },
    { label: "CA", code: "+1", flag: "🇨🇦" },
    { label: "AU", code: "+61", flag: "🇦🇺" },
    { label: "SG", code: "+65", flag: "🇸🇬" },
    { label: "VN", code: "+84", flag: "🇻🇳" },
    { label: "IN", code: "+91", flag: "🇮🇳" },
  ] as const;
  const [dialCode, setDialCode] =
    useState<(typeof countries)[number]["code"]>("+1");
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[number]
  >(countries[0]);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    businessName?: string;
    email?: string;
  }>({});

  const allowedPrefixes = ["+1", "+61", "+65", "+84", "+91"]; // US/CA, AU, SG, VN, IN
  const composeE164 = () => {
    const local = phoneLocal.replace(/\D+/g, "");
    return `${dialCode}${local}`;
  };
  const isAllowedPhone = (e164: string) => {
    const trimmed = e164.replace(/\s+/g, "");
    if (!allowedPrefixes.some((p) => trimmed.startsWith(p))) return false;
    return /^\+\d{7,15}$/.test(trimmed);
  };

  // Validation functions
  const validateBusinessName = (name: string): string | undefined => {
    const trimmed = name.trim();
    if (!trimmed) {
      return "Business name is required.";
    }
    if (trimmed.length < 5) {
      return "Business name must be at least 5 characters.";
    }
    if (trimmed.length > 100) {
      return "Business name must be less than 100 characters.";
    }
    // Check for valid characters (letters, numbers, spaces, hyphens, apostrophes, periods)
    if (!/^[a-zA-Z0-9\s\-'.,&()]+$/.test(trimmed)) {
      return "Business name contains invalid characters.";
    }
    // Ensure at least one alphanumeric character is present
    if (!/[a-zA-Z0-9]/.test(trimmed)) {
      return "Business name must contain at least one letter or number.";
    }
    return undefined;
  };

  // const validateEmail = (emailValue: string): string | undefined => {
  //   const trimmed = emailValue.trim();
  //   if (!trimmed) {
  //     return "Email address is required.";
  //   }
  //   // More robust email validation
  //   const emailRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  //   if (!emailRegex.test(trimmed)) {
  //     return "Please enter a valid email address.";
  //   }
  //   if (trimmed.length > 254) {
  //     return "Email address is too long.";
  //   }
  //   return undefined;
  // };

  // const validateEmail = (emailValue: string): string | undefined => {
  //   const trimmed = emailValue.trim();
  //   if (!trimmed) {
  //     return "Email address is required.";
  //   }

  //    const domain = trimmed.split('@')[1];
  //   // JavaScript equivalent of Python's trailing_pattern
  //   const trailingPattern = /\.([a-zA-Z]{2,})(\d+|[^a-zA-Z.-]+)/;
  //   if (trailingPattern.test(domain)) {
  //     return "Invalid email format: appears to have extra characters after domain";
  //   }

  //   // ADD THIS: Check TLD contains only letters
  //   const tld = domain.split('.').pop() || '';
  //   if (!/^[a-zA-Z]+$/.test(tld)) {
  //     return "Invalid email format: top-level domain must contain only letters";
  //   }

  //   // ✅ Enhanced validation matching backend
  //   // Basic format check - backend will do final validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(trimmed)) {
  //     return "Please enter a valid email address (example: name@domain.com).";
  //   }

  //   // Length limits
  //   if (trimmed.length > 254) {
  //     return "Email address is too long.";
  //   }

  //   // Check for common invalid patterns the backend rejects
  //   if (trimmed.includes("..") || trimmed.startsWith(".") || trimmed.endsWith(".")) {
  //     return "Email address contains invalid formatting.";
  //   }

  //   // Local part validation (before @)
  //   const localPart = trimmed.split('@')[0];
  //   if (localPart.length > 64) {
  //     return "Email username is too long.";
  //   }

  //   return undefined;
  // };

  const validateEmail = (emailValue: string): string | undefined => {
    const trimmed = emailValue.trim();
    if (!trimmed) {
      return "Email address is required."; // Keep this separate
    }

    // Basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return "Invalid email format (example: name@domain.com).";
    }

    // Length limits
    if (trimmed.length > 254) {
      return "Invalid email format: email address is too long.";
    }

    const parts = trimmed.split("@");
    if (parts.length !== 2) {
      return "Invalid email format (must contain exactly one @ symbol).";
    }

    const localPart = parts[0];
    const domain = parts[1];

    // Consecutive dots
    if (localPart.includes("..") || domain.includes("..")) {
      return "Invalid email format: consecutive dots not allowed.";
    }

    // Start/end with dots
    if (localPart.startsWith(".") || localPart.endsWith(".")) {
      return "Invalid email format: local part cannot start or end with a dot.";
    }
    if (domain.startsWith(".") || domain.endsWith(".")) {
      return "Invalid email format: domain cannot start or end with a dot.";
    }

    // Local part length
    if (localPart.length > 64) {
      return "Invalid email format: local part is too long.";
    }

    // Trailing junk after TLD
    const trailingPattern = /\.([a-zA-Z]{2,})(\d+|[^a-zA-Z.-]+)/;
    if (trailingPattern.test(domain)) {
      return "Invalid email format: appears to have extra characters after domain.";
    }

    // TLD contains only letters
    const tld = domain.split(".").pop() || "";
    if (!/^[a-zA-Z]+$/.test(tld)) {
      return "Invalid email format: top-level domain must contain only letters.";
    }

    // TLD length
    if (tld.length < 2) {
      return "Invalid email format: top-level domain must be at least 2 characters.";
    }

    // Domain label hyphen rules (ADD THIS SECTION)
    const domainLabels = domain.split(".");
    for (const label of domainLabels) {
      if (label.startsWith("-") || label.endsWith("-")) {
        return "Invalid email format: domain labels cannot start or end with hyphen.";
      }
      if (label.includes("--")) {
        return "Invalid email format: consecutive hyphens not allowed in domain.";
      }
    }

    return undefined;
  };

  // Email notification via Web3Forms (CORS-friendly)
  const sendEmailNotifications = async (fullNumber: string) => {
    const ACCESS_KEY = "5f9a6bfe-1a62-477a-8d68-8b268cb5f597";
    const payload = {
      access_key: ACCESS_KEY,
      subject: "Ressy AI Demo Agent triggered",
      business_name: businessName.trim(),
      type: businessType,
      email: email.trim(),
      number: fullNumber,
      to: "ahanj049@gmail.com",
    };
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).catch(() => {});
  };

  const onSubmit = async () => {
    // Validate all fields
    const businessNameError = validateBusinessName(businessName);
    const emailError = validateEmail(email);

    // if (businessNameError || emailError) {
    //   setErrors({
    //     businessName: businessNameError,
    //     email: emailError,
    //   });
    //   if (businessNameError) {
    //     toast({ title: businessNameError });
    //   } else if (emailError) {
    //     toast({ title: emailError });
    //   }
    //   return;
    // }
    if (businessNameError || emailError) {
      setErrors({
        businessName: businessNameError,
        email: emailError,
      });

      // Show consistent, user-friendly toast for all validation errors
      if (businessNameError) {
        toast({
          title: "Please check your information",
          description: businessNameError, // Shows the detailed error
        });
      } else if (emailError) {
        toast({
          title: "Please check your information",
          description: emailError, // Shows "Please enter a valid email address..."
        });
      }
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    const fullNumber = composeE164();
    if (!isAllowedPhone(fullNumber)) {
      toast({
        title: "Ressy cannot call invalid numbers.",
        description:
          "Use E.164 format and supported regions: US/CA (+1), AU (+61), SG (+65), VN (+84), IN (+91).",
      });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.ressy.ai/api/v1/make-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          business_name: businessName.trim(),
          email: email.trim(),
          number: fullNumber,
          type: businessType,
        }),
      });
      const data = await res.json().catch(() => ({}));
      // if (!res.ok || data?.success === false) {
      //   const errText =
      //     typeof data?.error === "string" ? data.error.toLowerCase() : "";
      //   const looksInvalidNumber =
      //     res.status === 400 ||
      //     errText.includes("not valid") ||
      //     errText.includes("invalid") ||
      //     errText.includes("unable to create record");
      //   toast({
      //     title: looksInvalidNumber
      //       ? "Please enter a valid number."
      //       : "We are unable to call you right now.",
      //     description: looksInvalidNumber
      //       ? "Ressy cannot call invalid numbers."
      //       : "Please try again after some time.",
      //   });
      //   return;
      // }
      if (!res.ok || data?.success === false) {
        // Check for email validation errors specifically
        if (res.status === 422 || res.status === 400) {
          if (
            data?.error?.includes("email") ||
            data?.message?.includes("email")
          ) {
            toast({
              title: "Invalid email address",
              description:
                "Please enter a valid email format like name@company.com",
            });
            return;
          }
        }

        // Default error (keeps existing phone error logic)
        const errText =
          typeof data?.error === "string" ? data.error.toLowerCase() : "";
        const looksInvalidNumber =
          res.status === 400 ||
          errText.includes("not valid") ||
          errText.includes("invalid") ||
          errText.includes("unable to create record");
        toast({
          title: looksInvalidNumber
            ? "Please enter a valid number."
            : "We are unable to call you right now.",
          description: looksInvalidNumber
            ? "Ressy cannot call invalid numbers."
            : "Please try again after some time.",
        });
        return;
      }
      toast({
        title: "Ressy is calling you now.",
        description: data?.message || fullNumber,
      });
      // Send email notifications (do not block UI)
      sendEmailNotifications(fullNumber).catch(() => {});
      setBusinessName("");
      setEmail("");
      setPhoneLocal("");
      setBusinessType("restaurant");
      setDialCode("+1");
      setSelectedCountry(countries[0]);
      setErrors({});
    } catch (err: any) {
      toast({
        title: "We are unable to call you right now.",
        description: "Please try again after some time.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full flex justify-center items-center py-12">
      {/* Phone Mockup Container with floating animation */}
      <div
        className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] 
                      aspect-[500/912] animate-floating"
      >
        {/* Phone Mockup Image */}
        <img
          src={mockupImg}
          alt="Phone mockup"
          className="w-full h-full object-contain drop-shadow-2xl"
        />

        {/* Overlay Form */}
        <div
          className="
            absolute 
            inset-0 flex items-center justify-center
            w-full h-full
            pointer-events-none
            pt-[40%]
          "
        >
          <div
            className="
              w-[65%] sm:w-[70%] max-w-[220px] sm:max-w-[260px]
              flex flex-col justify-center items-stretch 
              p-3 sm:p-4 space-y-2.5 sm:space-y-3
              bg-transparent backdrop-blur-0
              sm:bg-white/70 sm:backdrop-blur-md sm:border sm:border-gray-200 sm:shadow-xl sm:rounded-2xl
              animate-fadeIn pointer-events-auto
            "
          >
            {/* Title */}
            <p className="text-center text-gray-700 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5">
              Call <span className="text-purple-600">Ressy.ai</span>
            </p>

            {/* Business Name */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Business name"
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                  if (errors.businessName) {
                    const error = validateBusinessName(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      businessName: error,
                    }));
                  }
                }}
                onBlur={() => {
                  const error = validateBusinessName(businessName);
                  setErrors((prev) => ({
                    ...prev,
                    businessName: error,
                  }));
                }}
                className={`w-full px-2.5 sm:px-3 py-2 sm:py-2.5 h-9 sm:h-10 rounded-lg sm:rounded-xl border bg-white/90 shadow-sm 
                         focus:ring-2 focus:outline-none text-xs sm:text-sm
                         ${
                           errors.businessName
                             ? "border-red-400 focus:ring-red-500 focus:border-red-500"
                             : "border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                         }`}
              />
              {errors.businessName && (
                <p className="mt-1 text-[10px] sm:text-xs text-red-600 leading-tight">
                  {errors.businessName}
                </p>
              )}
            </div>

            {/* Business Type */}
            <select
              value={businessType}
              onChange={(e) =>
                setBusinessType(
                  e.target.value as "restaurant" | "salon" | "dental_clinic",
                )
              }
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 h-9 sm:h-10 rounded-lg sm:rounded-xl border border-gray-300 shadow-sm 
                       bg-white/90 focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
            >
              <option value="restaurant">Restaurant</option>
              <option value="salon">Salon</option>
              <option value="dental_clinic">Dental Clinic</option>
            </select>

            {/* Phone Input (Country code + local number) */}
            <div className="w-full flex gap-1.5 sm:gap-2 items-stretch min-w-0">
              <div className="relative flex-shrink-0">
                <select
                  value={`${selectedCountry.label}-${selectedCountry.code}`}
                  onChange={(e) => {
                    const [label, code] = e.target.value.split("-");
                    const country =
                      countries.find(
                        (c) => c.label === label && c.code === code,
                      ) || countries[0];
                    setSelectedCountry(country);
                    setDialCode(
                      country.code as (typeof countries)[number]["code"],
                    );
                  }}
                  className="w-[55px] sm:w-[60px] px-1.5 sm:px-2 h-9 sm:h-10 rounded-lg sm:rounded-xl border border-gray-300 bg-white/90 shadow-sm 
                           focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none 
                           text-xs sm:text-sm font-bold cursor-pointer
                           appearance-none pr-4 sm:pr-5
                           hover:border-purple-400 hover:shadow-md transition-all duration-200 text-center"
                  aria-label="Country code"
                >
                  {countries.map((c) => (
                    <option
                      key={`${c.label}-${c.code}`}
                      value={`${c.label}-${c.code}`}
                    >
                      {c.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Phone No"
                value={phoneLocal}
                onChange={(e) =>
                  setPhoneLocal(e.target.value.replace(/\D+/g, ""))
                }
                className="flex-1 min-w-0 px-2.5 sm:px-3 h-9 sm:h-10 rounded-lg sm:rounded-xl border border-gray-300 bg-white/90 shadow-sm 
                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none 
                         text-xs sm:text-sm placeholder:text-gray-400
                         hover:border-purple-400 transition-all duration-200"
                aria-label="Local phone number"
              />
            </div>

            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    const error = validateEmail(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      email: error,
                    }));
                  }
                }}
                onBlur={() => {
                  const error = validateEmail(email);
                  setErrors((prev) => ({
                    ...prev,
                    email: error,
                  }));
                }}
                className={`w-full px-2.5 sm:px-3 py-2 sm:py-2.5 h-9 sm:h-10 rounded-lg sm:rounded-xl border bg-white/90 shadow-sm 
                         focus:ring-2 focus:outline-none text-xs sm:text-sm
                         ${
                           errors.email
                             ? "border-red-400 focus:ring-red-500 focus:border-red-500"
                             : "border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                         }`}
              />
              {errors.email && (
                <p className="mt-1 text-[10px] sm:text-xs text-red-600 leading-tight">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              onClick={onSubmit}
              disabled={submitting}
              className="w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold 
                       shadow-md sm:hover:scale-[1.02] hover:shadow-lg transition text-xs sm:text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Call me"}
            </button>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px) }
          to { opacity: 1; transform: translateY(0) }
        }
        .animate-fadeIn { animation: fadeIn .4s ease-out both }
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-floating {
          animation: floating 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DemoMockup;
