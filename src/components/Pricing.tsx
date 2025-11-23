import { Check, Zap, Building, Crown } from "lucide-react";
import { useState } from "react";
import ScheduleDemoModal from "./ScheduleDemoModal";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 100 calls/month",
        "Basic AI responses",
        "Call forwarding",
        "Email notifications",
        "Basic analytics",
        "Standard support",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Business",
      icon: Building,
      description: "Best for growing companies",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Up to 1,000 calls/month",
        "Advanced AI responses",
        "Smart call routing",
        "CRM integration",
        "Advanced analytics",
        "Priority support",
        "Custom voice training",
        "API access",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large organizations",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        "Unlimited calls",
        "Custom AI training",
        "Multi-language support",
        "Advanced integrations",
        "White-label solution",
        "Dedicated support",
        "SLA guarantee",
        "Custom deployment",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-gradient-subtle scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-scale-in">
            Simple pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 animate-slide-up">
            Choose your plan
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Start free, scale as you grow
            </span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            All plans include 7-day free trial. No setup fees. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div
            className="flex items-center justify-center space-x-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <span
              className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly",
                )
              }
              className="relative w-12 h-6 bg-muted rounded-full transition-all duration-300 hover:scale-110"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-primary rounded-full transition-all duration-300 ${
                  billingCycle === "yearly" ? "left-7" : "left-1"
                }`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
              Save 20%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-black text-foreground">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : Math.floor(plan.yearlyPrice / 12)}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Billed yearly (${plan.yearlyPrice})
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.cta === "Start Free Trial") {
                    setIsModalOpen(true);
                  } else if (plan.cta === "Contact Sales") {
                    window.location.href = "tel:+16049082605";
                  }
                }}
                aria-haspopup={
                  plan.cta === "Start Free Trial" ? "dialog" : undefined
                }
                aria-label={
                  plan.cta === "Start Free Trial"
                    ? "Start free trial"
                    : plan.cta
                }
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-primary text-primary-foreground shadow-medium hover:shadow-large"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We've got you covered.
          </p>
          <a
            href="tel:+16049082605"
            className="inline-block px-6 py-3 border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-soft"
          >
            Contact Sales Team
          </a>
        </div>
      </div>

      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="trial"
      />
    </section>
  );
};

export default Pricing;
