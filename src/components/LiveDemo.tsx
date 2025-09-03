import { Phone, Play } from "lucide-react";
import { useState } from "react";

const LiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    "Incoming call detected...",
    "AI: Hello! Thank you for calling. How can I help you today?",
    "Caller: I'd like to make a reservation for 4 people tonight.",
    "AI: I'd be happy to help! What time works best for you?",
    "Caller: Around 7 PM would be perfect.",
    "AI: Perfect! I have availability at 7 PM. Can I get your name and phone number?",
    "Reservation confirmed! ✓"
  ];

  const handleDemo = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentStep(0);
      return;
    }

    setIsPlaying(true);
    setCurrentStep(0);
    
    demoSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (index === demoSteps.length - 1) {
          setTimeout(() => {
            setIsPlaying(false);
            setCurrentStep(0);
          }, 2000);
        }
      }, index * 2000);
    });
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-scale-in">
            <Phone className="w-4 h-4 mr-2" />
            Interactive Demo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 animate-slide-up">
            See AI in action
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Try a live demo call</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Experience how our AI handles real customer interactions. Click the phone to start a simulated call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 shadow-medium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Phone mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-background rounded-[3rem] shadow-large border-8 border-muted relative overflow-hidden">
                    {/* Phone screen */}
                    <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[2rem] flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center p-4 text-xs text-muted-foreground">
                        <span>9:41</span>
                        <span>●●●</span>
                      </div>
                      
                      {/* Call interface */}
                      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-foreground mb-1">
                            {isPlaying ? "AI Assistant" : "Demo Call"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {isPlaying ? "Connected" : "Ready to start"}
                          </div>
                        </div>
                        
                        {/* Call button */}
                        <button
                          onClick={handleDemo}
                          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isPlaying 
                              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                              : 'bg-green-500 hover:bg-green-600 hover:scale-110'
                          }`}
                        >
                          {isPlaying ? (
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          ) : (
                            <Phone className="w-6 h-6 text-white" />
                          )}
                        </button>
                        
                        {/* Waveform animation */}
                        {isPlaying && (
                          <div className="flex items-center space-x-1">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-primary rounded-full animate-pulse"
                                style={{
                                  height: `${Math.random() * 20 + 10}px`,
                                  animationDelay: `${i * 0.1}s`
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow effect when active */}
                  {isPlaying && (
                    <div className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-xl animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Demo conversation */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6">Live Conversation</h3>
                <div className="space-y-3 h-80 overflow-hidden">
                  {demoSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg transition-all duration-500 ${
                        index <= currentStep && isPlaying
                          ? 'opacity-100 translate-y-0'
                          : index === currentStep + 1 && isPlaying
                          ? 'opacity-50 translate-y-2'
                          : 'opacity-0 translate-y-4'
                      } ${
                        step.startsWith('AI:') 
                          ? 'bg-primary/10 text-primary ml-4' 
                          : step.startsWith('Caller:')
                          ? 'bg-secondary text-secondary-foreground mr-4'
                          : 'bg-gradient-primary text-primary-foreground text-center'
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button
                    onClick={handleDemo}
                    className="w-full px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>{isPlaying ? 'Stop Demo' : 'Start Demo Call'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;