import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 animate-fade-in">
      <div className="bg-background/20 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-lg font-sherpa font-black tracking-tight text-foreground">
              ressyai
            </h1>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              Use Cases
            </a>
            <a href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              Integrations
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              Pricing
            </a>
            <a href="#careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              Careers
            </a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              Blog
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300">
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 transition-all duration-300 hover:scale-105"
            >
              Schedule a demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden hover:bg-white/10"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;