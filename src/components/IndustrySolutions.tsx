import { useState, useEffect, useRef } from "react";
import { ChefHat, Scissors, Home } from "lucide-react";

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState("businesss");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px" },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const industries = {
    businesss: {
      icon: ChefHat,
      label: "Restaurants",
      solutions: [
        {
          title: "Reservation Triage",
          description:
            "Waitlist, parties, special requests—handled and logged.",
        },
        {
          title: "Menu & Hours",
          description: "Specials, dietary info, holiday hours—always right.",
        },
        {
          title: "Table Management",
          description:
            "Syncs with your reservation tool for live availability.",
        },
      ],
      additionalTools: [
        {
          title: "Order Taking",
          features: [
            "Instant replies",
            "Menu recommendations",
            "Special requests",
          ],
        },
        {
          title: "Customer Support",
          features: ["24/7 availability", "Multi-language", "Issue resolution"],
        },
        {
          title: "Analytics & Reports",
          features: [
            "Call transcripts",
            "Peak hours analysis",
            "Revenue tracking",
          ],
        },
      ],
    },
    salons: {
      icon: Scissors,
      label: "Salons",
      solutions: [
        {
          title: "Service matching",
          description: "Recommend the right slot and pro.",
        },
        {
          title: "Deposits & policies",
          description: "Cut last-minute cancels with clear policies.",
        },
        {
          title: "Retail upsell",
          description: "Suggest add-ons and retail at booking.",
        },
      ],
      additionalTools: [
        {
          title: "Reminder System",
          features: [
            "Appointment confirmations",
            "Follow-up calls",
            "Rescheduling options",
          ],
        },
        {
          title: "Package Sales",
          features: [
            "Service bundles",
            "Membership offers",
            "Loyalty programs",
          ],
        },
        {
          title: "Staff Coordination",
          features: [
            "Stylist scheduling",
            "Break management",
            "Skill matching",
          ],
        },
      ],
    },
    realestate: {
      icon: Home,
      label: "Dental",
      solutions: [
        {
          title: "Appointment Booking",
          description:
            "Schedule cleanings, treatments, and emergencies instantly.",
        },
        {
          title: "Insurance verification",
          description:
            "Collect and verify patient insurance details during booking.",
        },
        {
          title: "Reminders & follow-ups",
          description: "Reduce no-shows with automated reminders and recalls.",
        },
      ],
      additionalTools: [
        {
          title: "Lead Qualification",
          features: [
            "Budget screening",
            "Timeline assessment",
            "Preference matching",
          ],
        },
        {
          title: "Market Updates",
          features: ["Price changes", "New listings", "Market trends"],
        },
        {
          title: "Virtual Tours",
          features: [
            "Booking assistance",
            "Technical support",
            "Follow-up scheduling",
          ],
        },
      ],
    },
  };

  const tabs = [
    { key: "businesss", ...industries.businesss },
    { key: "salons", ...industries.salons },
    { key: "realestate", ...industries.realestate },
  ];

  const currentIndustry = industries[activeTab as keyof typeof industries];

  return (
    <section
      id="usecases"
      ref={sectionRef}
      className={`w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative overflow-hidden scroll-mt-28 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/40 to-cyan-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.03)_25%,rgba(139,92,246,0.03)_50%,transparent_50%)] bg-[length:60px_60px]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 px-2">
            Tailored solutions by industry
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Choose a playbook. Go live fast.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.key
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white/70 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solutions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {currentIndustry.solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10 lg:mb-12 px-2">
            More tools to grow
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {currentIndustry.additionalTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg transform ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  {tool.title}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm sm:text-base text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <a
            href="tel:+16049082605"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Connect with the team
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
