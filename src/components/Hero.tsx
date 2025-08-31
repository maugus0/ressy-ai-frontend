import WaitlistForm from "./WaitlistForm";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-scale-in">
          <span className="w-2 h-2 bg-foreground rounded-full mr-2"></span>
          Now in development
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-foreground mb-6 animate-slide-up">
          The AI solution built
          <br />
          <span className="text-muted-foreground">for restaurants</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          Transform your restaurant operations with intelligent automation. 
          Streamline orders, optimize workflows, and enhance customer experiences 
          with cutting-edge AI technology.
        </p>

        {/* Waitlist form */}
        <WaitlistForm />

        {/* Social proof */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by forward-thinking restaurant owners
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-40">
            <div className="h-8 w-20 bg-muted rounded"></div>
            <div className="h-8 w-24 bg-muted rounded"></div>
            <div className="h-8 w-16 bg-muted rounded"></div>
            <div className="h-8 w-28 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;