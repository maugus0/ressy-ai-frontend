import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 animate-fade-in">
      <div className="bg-background/10 backdrop-blur-2xl border border-white/5 rounded-2xl px-8 py-4 shadow-glow">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-sherpa font-black tracking-tight bg-gradient-accent bg-clip-text text-transparent">
              ressyai
            </h1>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent">
              Use Cases
            </a>
            <a href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent">
              Integrations
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent">
              Pricing
            </a>
            <a href="#careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent">
              Careers
            </a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent">
              Blog
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300 px-6 py-2">
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-primary text-white hover:shadow-glow rounded-xl px-6 py-2 transition-all duration-300 hover:scale-105 border-0"
            >
              Schedule a demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden hover:bg-white/5"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;