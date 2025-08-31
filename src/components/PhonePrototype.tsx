import phoneMockup from "@/assets/phone-mockup.png";

const PhonePrototype = () => {
  return (
    <div className="w-full max-w-sm mx-auto animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
      <div className="relative">
        {/* Phone mockup */}
        <img 
          src={phoneMockup} 
          alt="Ressy AI mobile app interface" 
          className="w-full h-auto drop-shadow-2xl"
        />
        
        {/* Floating elements around phone */}
        <div className="absolute -top-4 -left-4 bg-background border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div>
              <p className="text-xs font-medium">Order confirmed!</p>
              <p className="text-xs text-muted-foreground">Ready in 15 min</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <div className="text-center">
            <p className="text-xs font-medium">99.2% accuracy</p>
            <p className="text-xs text-muted-foreground">Order processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePrototype;