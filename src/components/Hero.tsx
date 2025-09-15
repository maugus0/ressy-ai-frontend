// 📂 Make sure your image is at src/assets/bg.jpg
import bgImage from "../assets/bg.jpg"; // 1. Import the image
import DemoMockup from "./DemoMockup";
import PhonePrototype from "./DemoMockup";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      {/* 🖼️ Full Background Image & Overlay */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />
      </div>

      {/* 🌟 Content */}
      {/* 👇 Halved the padding values again for a significant shift up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 sm:pt-6 sm:pb-24 lg:pt-8 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/60 text-secondary-foreground text-sm font-medium mb-4 backdrop-blur-sm animate-fade-in">
              <span className="relative flex w-2 h-2 mr-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Join 1000+ businesses using AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground mb-6 leading-[1.05] animate-slide-up">
              Your AI receptionist that books, answers, and follows up.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up delay-200">
              Pick up every call, book in real-time, and text back instantly. No
              scripts to memorize. No hold music. Just more revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in delay-300">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300">
                Start free trial
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Play demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in delay-500">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  Call accuracy
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Availability
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  50%
                </div>
                <div className="text-sm text-muted-foreground">
                  More bookings
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <DemoMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;