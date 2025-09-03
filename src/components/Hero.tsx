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
              Your AI Receptionist for
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Business Calls</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl lg:max-w-none mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Ressy AI answers calls, books appointments, and supports your customers 24/7. Never miss another opportunity.
            </p>

            {/* Email signup */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large whitespace-nowrap">
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <button className="px-8 py-4 border border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-soft">
                Watch Demo
              </button>
              <button className="px-6 py-4 text-primary hover:text-primary/80 transition-all duration-300 font-semibold">
                Learn More →
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