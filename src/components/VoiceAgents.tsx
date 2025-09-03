import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

const VoiceAgents = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const voiceAgents = [
    {
      id: 1,
      title: "Virtual Receptionist",
      industry: "Solar industry",
      avatar: "👩🏻‍💼",
      duration: "0:32"
    },
    {
      id: 2,
      title: "Lead qualification",
      industry: "Insurance",
      avatar: "👩🏾‍💼",
      duration: "0:28"
    },
    {
      id: 3,
      title: "Appointment booking",
      industry: "Roofing",
      avatar: "👨🏻‍💼",
      duration: "0:45"
    },
    {
      id: 4,
      title: "Customer Support",
      industry: "Real Estate",
      avatar: "👩🏼‍💼",
      duration: "0:38"
    },
    {
      id: 5,
      title: "Call Forwarding",
      industry: "Automotive",
      avatar: "👨🏿‍💼",
      duration: "0:41"
    },
    {
      id: 6,
      title: "Call Routing",
      industry: "Consulting",
      avatar: "👨🏼‍💼",
      duration: "0:36"
    },
    {
      id: 7,
      title: "Order Taking",
      industry: "Healthcare",
      avatar: "👩🏻‍⚕️",
      duration: "0:29"
    },
    {
      id: 8,
      title: "Tech Support",
      industry: "Legal",
      avatar: "👨🏽‍💼",
      duration: "0:52"
    },
    {
      id: 9,
      title: "Reservation System",
      industry: "Hospitality",
      avatar: "👩🏽‍💼",
      duration: "0:44"
    }
  ];

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-scale-in">
            <Volume2 className="w-4 h-4 mr-2" />
            Hear AI Voice Agents in action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 animate-slide-up">
            Real conversations,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">across every industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Listen to how our AI agents handle real customer interactions with natural, professional responses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {voiceAgents.map((agent, index) => (
            <div 
              key={agent.id}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-lg">
                    {agent.avatar}
                  </div>
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 -right-1 animate-pulse"></div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                  {agent.duration}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{agent.title}</h3>
              <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                {agent.industry}
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => handlePlay(agent.id)}
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
                
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-primary transition-all duration-300 ${
                      playingId === agent.id ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      width: playingId === agent.id ? '100%' : '0%',
                      transition: playingId === agent.id ? 'width 3s linear' : 'width 0.3s ease'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceAgents;