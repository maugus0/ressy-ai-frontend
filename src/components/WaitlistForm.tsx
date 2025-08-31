import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 px-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all duration-200"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Be the first to experience AI-powered restaurant solutions
      </p>
    </div>
  );
};

export default WaitlistForm;