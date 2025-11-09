import {
  Phone,
  Clock,
  TrendingUp,
  Shield,
  Headphones,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "Smart Call Handling",
      description:
        "AI answers every call instantly, understands complex orders, and handles multiple languages fluently.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Never miss another order. Your AI agent works around the clock, even during peak hours and holidays.",
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description:
        "Capture 30% more orders with faster service, upselling capabilities, and zero missed calls.",
    },
    {
      icon: Shield,
      title: "99.9% Accuracy",
      description:
        "Advanced NLP ensures perfect order capture every time, with automatic verification and confirmation.",
    },
    {
      icon: Headphones,
      title: "Seamless Integration",
      description:
        "Works with your existing POS system, kitchen displays, and payment processing - no disruption.",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description:
        "Get up and running in under 30 minutes. Upload your menu and start taking AI-powered calls today.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why choose ressyai
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Transform your phone orders
            <br />
            <span className="text-muted-foreground">
              with intelligent automation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop losing orders to busy signals and overwhelmed staff. Our AI
            handles it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
