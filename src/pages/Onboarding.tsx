import { useEffect, useState, useCallback, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { onboardingSteps } from "@/data/onboardingSteps";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import slide1 from "@/assets/1.png";
import slide2 from "@/assets/2.png";
import slide3 from "@/assets/3.png";
import slide4 from "@/assets/4.png";
import slide5 from "@/assets/5.png";
import slide6 from "@/assets/6.png";
import slide7 from "@/assets/7.png";
import slide8 from "@/assets/8.png";
import slide9 from "@/assets/9.png";
import slide10 from "@/assets/10.png";
import slide11 from "@/assets/11.png";
import slide12 from "@/assets/12.png";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
];

const AUTO_ADVANCE_MS = 5000;

const Onboarding = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isPaused = useRef(false);

  useEffect(() => {
    document.title = "Getting Started | RessyAI";
  }, []);

  // Track slide changes
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-advance (pause on hover)
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!isPaused.current) {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [api]);

  const handleMouseEnter = useCallback(() => {
    isPaused.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPaused.current = false;
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Getting Started with RessyAI
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Follow our step-by-step guide to get your AI agent live and
              handling calls.
            </p>
          </div>

          {/* Image Slideshow */}
          <section className="mb-12 sm:mb-16">
            <div
              className="relative mx-auto max-w-3xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                className="rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <CarouselContent>
                  {slides.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={src}
                        alt={`RessyAI onboarding step ${index + 1}`}
                        className="w-full h-auto object-contain"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-2 sm:left-3 h-9 w-9 bg-white/80 hover:bg-white border-gray-200 shadow-sm"
                  aria-label="Previous slide"
                />
                <CarouselNext
                  className="right-2 sm:right-3 h-9 w-9 bg-white/80 hover:bg-white border-gray-200 shadow-sm"
                  aria-label="Next slide"
                />
              </Carousel>

              {/* Dot indicators */}
              {count > 0 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-200",
                        current === index
                          ? "bg-purple-600 scale-110"
                          : "bg-gray-300 hover:bg-gray-400",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Onboarding Steps */}
          <section>
            <div className="space-y-5">
              {onboardingSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex gap-4 items-start rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold text-sm">
                    {step.stepNumber}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {step.title}
                    </h3>
                    <p
                      className={`text-gray-600 text-sm leading-relaxed mt-1${step.bulletPoints ? " mb-2" : ""}`}
                    >
                      {step.description}
                    </p>
                    {step.bulletPoints && (
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 text-gray-600 text-sm leading-relaxed">
                        {step.bulletPoints.map((point, bIdx) => (
                          <li key={bIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {step.postText && (
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                        {step.postText}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Need help getting started? Email us at{" "}
              <a
                href="mailto:info@ressy.ai"
                className="text-purple-600 hover:underline font-medium"
              >
                info@ressy.ai
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
