import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-sherpa font-black tracking-tight text-foreground">
              ressyai
            </h1>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Use Cases
            </a>
            <a href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Integrations
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Pricing
            </a>
            <a href="#careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Careers
            </a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Blog
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
            >
              Schedule a demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;