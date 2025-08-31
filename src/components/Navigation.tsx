import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-6 animate-fade-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-sherpa font-black tracking-tight text-foreground">
            ressyai
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
            How it works
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
            Contact
          </a>
        </div>

        <Button 
          variant="default" 
          size="sm"
          className="hidden md:inline-flex bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
        >
          Start free trial
        </Button>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
        >
          Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;