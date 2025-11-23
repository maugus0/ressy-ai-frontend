import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ressyRestaurantAudio from "@/assets/audio/ressy_restaurant_audio.mp3";
import ressySalonAudio from "@/assets/audio/ressy_salon_audio.mp3";
import ressyDentalAudio from "@/assets/audio/ressy_dental_audio.mp3";

const VoiceAgents = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [durations, setDurations] = useState<Record<number, string>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const voiceAgents = [
    {
      id: 1,
      title: "Restaurant Receptionist",
      industry: "Ressy Restaurant",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      audio: ressyRestaurantAudio,
    },
    {
      id: 2,
      title: "Salon Receptionist",
      industry: "Ressy Hair Salon",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      audio: ressySalonAudio,
    },
    {
      id: 3,
      title: "Dental Receptionist",
      industry: "Ressy Dental Clinic",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      audio: ressyDentalAudio,
    },
  ];

  // Format seconds to MM:SS
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Load audio durations
  useEffect(() => {
    const loadDurations = async () => {
      const durationMap: Record<number, string> = {};

      const audioSources = [
        { id: 1, audio: ressyRestaurantAudio },
        { id: 2, audio: ressySalonAudio },
        { id: 3, audio: ressyDentalAudio },
      ];

      for (const { id, audio } of audioSources) {
        try {
          const audioElement = new Audio(audio);
          await new Promise<void>((resolve, reject) => {
            audioElement.addEventListener("loadedmetadata", () => {
              durationMap[id] = formatDuration(audioElement.duration);
              resolve();
            });
            audioElement.addEventListener("error", reject);
            audioElement.load();
          });
        } catch (error) {
          console.error(`Failed to load duration for agent ${id}:`, error);
          durationMap[id] = "0:00";
        }
      }

      setDurations(durationMap);
    };

    loadDurations();
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (agent: (typeof voiceAgents)[number]) => {
    if (playingId === agent.id) {
      audioRef.current?.pause();
      setPlayingId(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    } else {
      audioRef.current = new Audio();
      audioRef.current.addEventListener("ended", () => setPlayingId(null));
    }

    audioRef.current.src = agent.audio;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => setPlayingId(null));
    setPlayingId(agent.id);
  };

  // IntersectionObserver for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="voice-agents"
      ref={sectionRef}
      className={`relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 overflow-hidden scroll-mt-28 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-20 transition-all duration-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-purple-100 text-purple-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Hear AI Voice Agents in action
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-5 lg:mb-6 leading-tight px-2">
            Real conversations,
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              across every industry
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Listen to our AI agents handling customer calls with
            professionalism, speed, and clarity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {voiceAgents.map((agent, index) => (
            <div
              key={agent.id}
              className={`bg-white/90 backdrop-blur-xl border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 transform ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Header */}
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={agent.avatar}
                    alt={agent.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="ml-2.5 sm:ml-3 min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                    {agent.title}
                  </h3>
                  <span className="inline-block mt-0.5 sm:mt-1 px-2 py-0.5 text-[10px] sm:text-xs bg-purple-100 text-purple-600 rounded-full">
                    {agent.industry}
                  </span>
                </div>
              </div>

              {/* Audio Player */}
              <div className="bg-gray-50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center space-x-2 sm:space-x-3 border border-gray-100">
                <button
                  onClick={() => handlePlay(agent)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md hover:scale-110 active:scale-95 transition-all flex-shrink-0"
                  aria-label={playingId === agent.id ? "Pause" : "Play"}
                >
                  {playingId === agent.id ? (
                    <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
                  )}
                </button>

                {/* Waveform */}
                <div className="flex-1 flex items-center space-x-0.5 sm:space-x-1 h-5 sm:h-6 min-w-0">
                  {[...Array(20)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-1 sm:w-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                        playingId === agent.id
                          ? "animate-wave bg-gradient-to-b from-purple-500 to-purple-600"
                          : "h-1 bg-gray-300"
                      }`}
                      style={{
                        animationDelay: `${i * 0.05}s`,
                        height:
                          playingId === agent.id
                            ? `${4 + (i % 5) * 4}px`
                            : "4px",
                      }}
                    />
                  ))}
                </div>

                {/* Duration */}
                <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0 font-medium">
                  {durations[agent.id] || "0:00"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 18px; }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VoiceAgents;
