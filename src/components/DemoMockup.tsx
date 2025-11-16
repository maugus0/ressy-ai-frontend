import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import mockupImg from "@/assets/mockup.png";

const DemoMockup = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState<
    "restaurant" | "salon" | "dental_clinic"
  >("restaurant");
  const [phoneLocal, setPhoneLocal] = useState("");
  const countries = [
    { label: "US / Canada", code: "+1" },
    { label: "Australia", code: "+61" },
    { label: "Singapore", code: "+65" },
    { label: "Vietnam", code: "+84" },
    { label: "India", code: "+91" },
  ] as const;
  const [dialCode, setDialCode] =
    useState<(typeof countries)[number]["code"]>("+1");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

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
    if (!businessName.trim()) {
      toast({ title: "Please enter your business name." });
      return;
    }
    const fullNumber = composeE164();
    if (!isAllowedPhone(fullNumber)) {
      toast({
        title: "Ressy cannot call invalid numbers.",
        description:
          "Use E.164 format and supported regions: US/CA (+1), AU (+61), SG (+65), VN (+84), IN (+91).",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email address." });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.ressy.ai/api/make-call", {
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
      if (!res.ok || data?.success === false) {
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
            left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2
            w-[70%] sm:w-[75%] max-w-[280px]
            flex flex-col justify-center items-stretch 
            p-3 sm:p-4 space-y-2.5
            bg-transparent backdrop-blur-0 overflow-visible
            sm:bg-white/70 sm:backdrop-blur-md sm:border sm:border-gray-200 sm:shadow-xl sm:rounded-2xl sm:overflow-hidden
            animate-fadeIn
          "
        >
          {/* Title */}
          <h2 className="text-sm sm:text-base font-bold text-gray-900 text-center">
            Try it!
          </h2>
          <p className="text-center text-gray-700 font-medium text-xs sm:text-sm">
            Call <span className="text-purple-600">Ressy.ai</span>
          </p>

          {/* Business Name */}
          <input
            type="text"
            placeholder="Business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full px-3 py-2 h-10 rounded-xl border border-gray-300 bg-white/90 shadow-sm 
                       focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
          />

          {/* Business Type */}
          <select
            value={businessType}
            onChange={(e) =>
              setBusinessType(
                e.target.value as "restaurant" | "salon" | "dental_clinic",
              )
            }
            className="w-full px-3 py-2 h-10 rounded-xl border border-gray-300 shadow-sm 
                       bg-white/90 focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
          >
            <option value="restaurant">Restaurant</option>
            <option value="salon">Salon</option>
            <option value="dental_clinic">Dental Clinic</option>
          </select>

          {/* Phone Input (Country code + local number) */}
          <div className="w-full grid grid-cols-[minmax(92px,1fr)_minmax(0,2fr)] gap-2 items-stretch">
            <select
              value={dialCode}
              onChange={(e) =>
                setDialCode(
                  e.target.value as (typeof countries)[number]["code"],
                )
              }
              className="px-2 h-10 rounded-xl border border-gray-300 bg-white/90 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
              aria-label="Country code"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label} ({c.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Phone number"
              value={phoneLocal}
              onChange={(e) =>
                setPhoneLocal(e.target.value.replace(/\D+/g, ""))
              }
              className="px-3 h-10 rounded-xl border border-gray-300 bg-white/90 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
              aria-label="Local phone number"
            />
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 h-10 rounded-xl border border-gray-300 bg-white/90 shadow-sm 
                       focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs sm:text-sm"
          />

          {/* Button */}
          <button
            onClick={onSubmit}
            disabled={submitting}
            className="w-full py-2 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold 
                       shadow-md sm:hover:scale-[1.02] hover:shadow-lg transition text-xs sm:text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Call me"}
          </button>
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
