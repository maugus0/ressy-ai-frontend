import { Upload, Settings, Phone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Menu",
      description: "Simply upload your menu and pricing. Our AI learns your items, modifications, and pricing structure instantly.",
    },
    {
      icon: Settings,
      number: "02", 
      title: "Configure Settings",
      description: "Set your hours, delivery zones, and preferences. Customize how your AI agent interacts with customers.",
    },
    {
      icon: Phone,
      number: "03",
      title: "Start Taking Calls",
      description: "Forward your phone line to ressyai. We handle orders, answer questions, and send everything to your kitchen.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Simple setup process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Get started in minutes,
            <br />
            <span className="text-muted-foreground">not months</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-12 h-px bg-border transform translate-x-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large">
            Start your free trial
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            No setup fees • Cancel anytime • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;