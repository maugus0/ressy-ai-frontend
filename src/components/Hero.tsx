import PhonePrototype from "./PhonePrototype";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-scale-in">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Join 1000+ restaurants
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 animate-slide-up">
              The AI phone agent built
              <br />
              <span className="text-muted-foreground">for restaurants</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl lg:max-w-none mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Automate your phone orders with AI that understands your menu, handles complex requests, and never misses a call. Increase revenue while reducing staff workload.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <button className="px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all duration-200 hover:scale-105">
                Try it now
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-200">
                Schedule demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">99.2%</div>
                <div className="text-sm text-muted-foreground">Order accuracy</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">30%</div>
                <div className="text-sm text-muted-foreground">Revenue boost</div>
              </div>
            </div>
          </div>

          {/* Right side - Phone prototype */}
          <div className="flex justify-center">
            <PhonePrototype />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;