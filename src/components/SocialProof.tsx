const SocialProof = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Coming soon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Business owners love
            <br />
            <span className="text-primary">ressy.ai</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We’re about to launch our pilot and many businesses across Canada
            are already on our waitlist. Join them today to be among the first
            to experience AI-powered reception that books, answers, and follows
            up.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10 text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Pilot cohorts fill up quickly. Secure your spot and we’ll reach out
            with next steps.
          </p>
          <a
            href="/schedule-demo"
            className="inline-flex items-center justify-center rounded-full bg-black text-white text-base font-semibold px-6 py-3 hover:shadow-md hover:scale-[1.02] transition"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
