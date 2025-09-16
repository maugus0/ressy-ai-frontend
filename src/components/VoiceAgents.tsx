import { Play, Pause, Volume2 } from "lucide-react";
import { useState } from "react";

const VoiceAgents = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const voiceAgents = [
    {
      id: 1,
      title: "Virtual Receptionist",
      industry: "Restaurant Industry",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      duration: "0:32",
    },
    {
      id: 2,
      title: "Appointment Scheduler",
      industry: "Salons",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      duration: "0:28",
    },
    {
      id: 3,
      title: "Dental Office Assistant",
      industry: "Dental",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      duration: "0:45",
    },
    
  ];

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6 shadow-sm">
            <Volume2 className="w-4 h-4 mr-2" />
            Hear AI Voice Agents in action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Real conversations,
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              across every industry
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to our AI agents handling customer calls with professionalism,
            speed, and clarity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voiceAgents.map((agent, index) => (
            <div
              key={agent.id}
              className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="relative">
                  <img
                    src={agent.avatar}
                    alt={agent.title}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {agent.title}
                  </h3>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-purple-100 text-purple-600 rounded-full">
                    {agent.industry}
                  </span>
                </div>
              </div>

              {/* Audio Player */}
              <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center space-x-3 border border-gray-100">
                <button
                  onClick={() => handlePlay(agent.id)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md hover:scale-110 transition-all"
                >
                  {playingId === agent.id ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>

                {/* Waveform */}
                <div className="flex-1 flex items-center space-x-1 h-6">
                  {[...Array(20)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-0.5 rounded-full transition-all duration-300 ${
                        playingId === agent.id
                          ? "animate-wave bg-gradient-to-b from-purple-500 to-purple-600"
                          : "h-1 bg-gray-300"
                      }`}
                      style={{
                        animationDelay: `${i * 0.05}s`,
                        height:
                          playingId === agent.id
                            ? `${6 + (i % 5) * 6}px`
                            : "4px",
                      }}
                    />
                  ))}
                </div>

                {/* Duration */}
                <span className="text-xs text-gray-500">{agent.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style >{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
        }
        @keyframes wave {
          0%,
          100% {
            height: 4px;
          }
          50% {
            height: 18px;
          }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VoiceAgents;