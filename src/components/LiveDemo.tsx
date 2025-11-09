"use client";
import { Phone, Play } from "lucide-react";
import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

const LiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDialing, setIsDialing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const demoSteps = [
    "📞 Incoming call detected...",
    "AI: Hello! Thanks for calling. How can I help you today?",
    "Caller: I'd like to book a table for 4 people tonight.",
    "AI: Sure! What time would you prefer?",
    "Caller: Around 7 PM would be perfect.",
    "AI: Great! Reservation confirmed for 4 people at 7 PM. 🎉",
    "AI: We'll send you a confirmation SMS shortly.",
  ];

  const startDemo = () => {
    setIsDialing(true);
    setCurrentStep(0);

    setTimeout(() => {
      setIsDialing(false);
      setIsPlaying(true);

      demoSteps.forEach((_, index) => {
        setTimeout(() => {
          setCurrentStep(index);

          if (transcriptRef.current) {
            transcriptRef.current.scrollTo({
              top: transcriptRef.current.scrollHeight,
              behavior: "smooth",
            });
          }

          if (index === demoSteps.length - 1) {
            setTimeout(() => {
              setIsPlaying(false);
              setCurrentStep(0);
            }, 4000);
          }
        }, index * 2500);
      });
    }, 2000);
  };

  const stopDemo = () => {
    setIsDialing(false);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-28 overflow-hidden bg-black">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6 shadow">
            <Phone className="w-4 h-4 mr-2" />
            Live Interactive Demo
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Experience AI,
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              in a live conversation
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Click below to start a simulated call and watch our AI assistant
            handle the conversation in real-time.
          </p>
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Spline animation */}
          <div className="flex justify-center">
            <div className="relative w-full h-[520px] rounded-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/x3okye81K2RXqZ60/scene.splinecode" />
              {/* Overlay to hide watermark */}
              <div className="absolute bottom-0 left-0 w-full h-10 bg-black pointer-events-none" />
            </div>
          </div>

          {/* Right side - Transcript */}
          <div className="flex flex-col h-[520px]">
            <h3 className="text-2xl font-bold text-white mb-6">
              Live Transcript
            </h3>
            <div
              ref={transcriptRef}
              className="flex-1 space-y-3 overflow-y-auto pr-3 custom-scroll"
            >
              {demoSteps.map((step, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-2xl max-w-[85%] transition-all duration-500 ${
                    index <= currentStep && isPlaying
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${
                    step.startsWith("AI:")
                      ? "bg-purple-100 text-purple-800 self-start shadow"
                      : step.startsWith("Caller:")
                        ? "bg-gray-200 text-gray-800 self-end shadow"
                        : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center font-semibold mx-auto"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={isPlaying || isDialing ? stopDemo : startDemo}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>
                  {isDialing
                    ? "Dialing..."
                    : isPlaying
                      ? "Stop Demo"
                      : "Start Demo Call"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Animations */}
      <style>{`
        @keyframes wave {
          0%,100% { height: 6px; }
          50% { height: 28px; }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.4);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default LiveDemo;
