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
      { threshold: 0.2 }
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
        { title: "Reservation Triage", description: "Waitlist, parties, special requests—handled and logged." },
        { title: "Menu & Hours", description: "Specials, dietary info, holiday hours—always right." },
        { title: "Table Management", description: "Syncs with your reservation tool for live availability." }
      ],
      additionalTools: [
        { title: "Order Taking", features: ["Instant replies", "Menu recommendations", "Special requests"] },
        { title: "Customer Support", features: ["24/7 availability", "Multi-language", "Issue resolution"] },
        { title: "Analytics & Reports", features: ["Call transcripts", "Peak hours analysis", "Revenue tracking"] }
      ]
    },
    salons: {
      icon: Scissors,
      label: "Salons",
      solutions: [
        { title: "Service matching", description: "Recommend the right slot and pro." },
        { title: "Deposits & policies", description: "Cut last-minute cancels with clear policies." },
        { title: "Retail upsell", description: "Suggest add-ons and retail at booking." }
      ],
      additionalTools: [
        { title: "Reminder System", features: ["Appointment confirmations", "Follow-up calls", "Rescheduling options"] },
        { title: "Package Sales", features: ["Service bundles", "Membership offers", "Loyalty programs"] },
        { title: "Staff Coordination", features: ["Stylist scheduling", "Break management", "Skill matching"] }
      ]
    },
    realestate: {
      icon: Home,
      label: "Dental",
      solutions: [
        { title: "Appointment Booking", description: "Schedule cleanings, treatments, and emergencies instantly." },
        { title: "Insurance verification", description: "Collect and verify patient insurance details during booking." },
        { title: "Reminders & follow-ups", description: "Reduce no-shows with automated reminders and recalls." }
      ],
      additionalTools: [
        { title: "Lead Qualification", features: ["Budget screening", "Timeline assessment", "Preference matching"] },
        { title: "Market Updates", features: ["Price changes", "New listings", "Market trends"] },
        { title: "Virtual Tours", features: ["Booking assistance", "Technical support", "Follow-up scheduling"] }
      ]
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
      ref={sectionRef}
      className={`w-full px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/40 to-cyan-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.03)_25%,rgba(139,92,246,0.03)_50%,transparent_50%)] bg-[length:60px_60px]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tailored solutions by industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a playbook. Go live fast.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white/70 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solutions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {currentIndustry.solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-700 hover:shadow-lg transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            More tools to grow
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {currentIndustry.additionalTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-700 hover:shadow-lg transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{tool.title}</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Connect with the team
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;