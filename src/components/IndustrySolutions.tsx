import { useState } from "react";
import { ChefHat, Scissors, Home, Shield } from "lucide-react";

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState("restaurants");

  const industries = {
    restaurants: {
      icon: ChefHat,
      label: "Restaurants",
      solutions: [
        { title: "Reservation Management", description: "Handle waitlists, parties, and special requests—all automated and logged." },
        { title: "Menu & Hours", description: "Share specials, dietary info, and holiday hours—always up to date." },
        { title: "Table Management", description: "Sync with your reservation system for real-time table availability." }
      ],
      additionalTools: [
        { title: "Order Taking", features: ["Instant replies", "Menu recommendations", "Special requests"] },
        { title: "Customer Support", features: ["24/7 availability", "Multi-language", "Issue resolution"] },
        { title: "Analytics & Reports", features: ["Call transcripts", "Peak hours analysis", "Revenue tracking"] }
      ]
    },
    salons: {
      icon: Scissors,
      label: "Salons & Spas",
      solutions: [
        { title: "Appointment Booking", description: "Schedule services, manage cancellations, and handle rebooking automatically." },
        { title: "Service Information", description: "Provide pricing, duration, and stylist availability instantly." },
        { title: "Client Management", description: "Track preferences, appointment history, and special requests." }
      ],
      additionalTools: [
        { title: "Reminder System", features: ["Appointment confirmations", "Follow-up calls", "Rescheduling options"] },
        { title: "Package Sales", features: ["Service bundles", "Membership offers", "Loyalty programs"] },
        { title: "Staff Coordination", features: ["Stylist scheduling", "Break management", "Skill matching"] }
      ]
    },
    realestate: {
      icon: Home,
      label: "Real Estate",
      solutions: [
        { title: "Property Inquiries", description: "Qualify leads, schedule showings, and provide property details instantly." },
        { title: "Listing Information", description: "Share photos, prices, neighborhood info, and availability status." },
        { title: "Agent Coordination", description: "Route calls to available agents based on expertise and location." }
      ],
      additionalTools: [
        { title: "Lead Qualification", features: ["Budget screening", "Timeline assessment", "Preference matching"] },
        { title: "Market Updates", features: ["Price changes", "New listings", "Market trends"] },
        { title: "Virtual Tours", features: ["Booking assistance", "Technical support", "Follow-up scheduling"] }
      ]
    },
    insurance: {
      icon: Shield,
      label: "Insurance",
      solutions: [
        { title: "Claims Processing", description: "Guide clients through claims, collect information, and provide status updates." },
        { title: "Policy Information", description: "Answer coverage questions, explain benefits, and process renewals." },
        { title: "Emergency Support", description: "24/7 availability for urgent claims and emergency assistance." }
      ],
      additionalTools: [
        { title: "Quote Generation", features: ["Instant estimates", "Coverage comparisons", "Discount applications"] },
        { title: "Document Collection", features: ["Photo uploads", "Form completion", "Signature requests"] },
        { title: "Compliance Support", features: ["Regulatory updates", "Policy explanations", "Legal guidance"] }
      ]
    }
  };

  const tabs = [
    { key: "restaurants", ...industries.restaurants },
    { key: "salons", ...industries.salons },
    { key: "realestate", ...industries.realestate },
    { key: "insurance", ...industries.insurance }
  ];

  const currentIndustry = industries[activeTab as keyof typeof industries];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Background Effects (matching light theme) */}
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

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300
                  ${activeTab === tab.key 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'bg-white/70 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:text-purple-700'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {currentIndustry.solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            More tools to grow
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentIndustry.additionalTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {tool.title}
                </h4>
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get started with your industry
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;