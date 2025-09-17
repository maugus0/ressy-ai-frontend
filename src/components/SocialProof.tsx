const SocialProof = () => {
  const testimonials = [
    {
      quote: "RessyAI handles 200+ calls daily with perfect accuracy. Our staff can focus on cooking instead of answering phones.",
      author: "Maria Rodriguez",
      role: "Owner, Bella Vista Pizzeria",
      rating: 5,
    },
    {
      quote: "We've seen a 40% increase in phone orders since implementing RessyAI. It never gets orders wrong.",
      author: "David Chen",
      role: "Manager, Golden Dragon business", 
      rating: 5,
    },
    {
      quote: "The setup was incredibly easy. Within 20 minutes we were taking AI-powered calls. Game changer!",
      author: "Sarah Johnson",
      role: "Owner, Corner Cafe",
      rating: 5,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Trusted by 1000+ businesses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Business owners love
            <br />
            <span className="text-primary">ressy.ai</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-foreground mb-2">1000+</div>
            <div className="text-muted-foreground">Active Businesses</div>
          </div>
          <div>
            <div className="text-3xl font-black text-foreground mb-2">2M+</div>
            <div className="text-muted-foreground">Orders processed</div>
          </div>
          <div>
            <div className="text-3xl font-black text-foreground mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-black text-foreground mb-2">30%</div>
            <div className="text-muted-foreground">Revenue increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;