import { /* ArrowRight, */ Sparkles } from "lucide-react";
import { useState } from "react";
import {} from /* useNavigate */ "react-router-dom";
import ScheduleDemoModal from "./ScheduleDemoModal";

const FinalCTA = () => {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);
  //   // Here you would typically send the email to your backend
  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-scale-in">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to transform your business?
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 animate-slide-up">
          Try RessyAI Today
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            No Risk, All Reward
          </span>
        </h2>

        <p
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          Join 1000+ businesses already using AI to handle their calls. Start
          your 7-day free trial today – no credit card required.
        </p>

        {/* Email signup form */}

        {/* Main CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large text-lg"
          >
            Start 7-Day Free Trial
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-soft text-lg"
          >
            Schedule Demo Call
          </button>
        </div>

        {/* Trust indicators */}
        {/* Trust indicators */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <div>
            <div className="text-2xl font-black text-foreground mb-1">
              7-Day
            </div>
            <div className="text-sm text-muted-foreground">Free Trial</div>
          </div>
          <div>
            <div className="text-2xl font-black text-foreground mb-1">No</div>
            <div className="text-sm text-muted-foreground">Credit Card</div>
          </div>
          <div>
            <div className="text-2xl font-black text-foreground mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
        {/* Small print */}
        <p
          className="text-sm text-muted-foreground mt-8 animate-fade-in"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          Join businesses increasing revenue by 30% with AI. Cancel anytime, no
          questions asked.
        </p>
      </div>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FinalCTA;
