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
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200">
            About
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200">
            Contact
          </a>
        </div>

        <Button 
          variant="default" 
          size="sm"
          className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-105"
        >
          Schedule a demo
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