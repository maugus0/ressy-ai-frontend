import phoneMockup from "@/assets/phone-mockup-enhanced.png";

const PhonePrototype = () => {
  return (
    <div className="relative w-full max-w-md mx-auto animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
      <div className="relative">
        {/* Phone mockup */}
        <img 
          src={phoneMockup} 
          alt="Ressy AI mobile app interface showcasing restaurant ordering system" 
          className="w-full h-auto shadow-large rounded-3xl"
        />
        
        {/* Enhanced floating elements */}
        <div className="absolute -top-6 -left-8 bg-background/95 backdrop-blur-sm border border-border rounded-2xl px-4 py-3 shadow-medium animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground text-sm font-bold">AI</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Order confirmed!</p>
              <p className="text-xs text-muted-foreground">Pizza Margherita × 2</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-8 bg-background/95 backdrop-blur-sm border border-border rounded-2xl px-4 py-3 shadow-medium animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">99.9% accuracy</p>
            <p className="text-xs text-muted-foreground">Order processing</p>
          </div>
        </div>

        <div className="absolute top-1/2 -left-12 bg-background/95 backdrop-blur-sm border border-border rounded-2xl px-4 py-3 shadow-medium animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-medium text-foreground">Live call active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePrototype;