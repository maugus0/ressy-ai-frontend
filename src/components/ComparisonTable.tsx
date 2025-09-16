import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Available 24/7",
      ressyAI: "Yes",
      frontDesk: "No (shifts)",
      answeringService: "Limited",
      ressyHighlight: true
    },
    {
      feature: "Missed calls",
      ressyAI: "Near 0",
      frontDesk: "Medium",
      answeringService: "Low",
      ressyHighlight: true
    },
    {
      feature: "Takes payments",
      ressyAI: "Yes",
      frontDesk: "Sometimes",
      answeringService: "Rare",
      ressyHighlight: true
    },
    {
      feature: "POS/Calendar sync",
      ressyAI: "Real-time",
      frontDesk: "Manual",
      answeringService: "Limited",
      ressyHighlight: true
    },
    {
      feature: "Cost predictability",
      ressyAI: "Transparent",
      frontDesk: "Overtime/turnover",
      answeringService: "Bundles",
      ressyHighlight: true
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.06),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Why Choose Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Why choose Ressy?
          </h2>

          <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl">
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-200">
                      <th className="text-left p-6 font-semibold text-slate-700 min-w-48">Feature</th>
                      <th className="text-center p-6 font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 min-w-40">
                        Ressy AI
                      </th>
                      <th className="text-center p-6 font-semibold text-slate-700 min-w-40">Front desk staff</th>
                      <th className="text-center p-6 font-semibold text-slate-700 min-w-40">Answering service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row, index) => (
                      <tr key={index} className="border-b border-purple-100 hover:bg-purple-50/50 transition-colors">
                        <td className="p-6 font-medium text-slate-700">{row.feature}</td>
                        <td className="p-6 text-center">
                          {row.ressyHighlight ? (
                            <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 font-semibold px-4 py-2">
                              {row.ressyAI}
                            </Badge>
                          ) : (
                            <span className="text-slate-600 font-medium">{row.ressyAI}</span>
                          )}
                        </td>
                        <td className="p-6 text-center text-slate-600 font-medium">{row.frontDesk}</td>
                        <td className="p-6 text-center text-slate-600 font-medium">{row.answeringService}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* See the Impact Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              See the impact
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Live-like charts from your analytics dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Answered Calls Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-8">
                  <h3 className="text-xl font-semibold text-slate-700">Answered calls</h3>
                  <div className="text-green-500">↗</div>
                </div>
                
                <div className="flex items-end gap-2 h-48">
                  {[30, 35, 28, 45, 52, 48, 60, 65, 70, 75, 80, 85].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-purple-400 to-purple-600 rounded-t-lg flex-1 animate-fade-in"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recovered Revenue Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-700 mb-8">Recovered revenue</h3>
                
                <div className="relative h-48">
                  <svg className="w-full h-full" viewBox="0 0 300 150">
                    <defs>
                      <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 120 Q 80 100 150 80 Q 220 60 280 40"
                      stroke="url(#revenueGradient)"
                      strokeWidth="4"
                      fill="none"
                      className="animate-draw-line"
                      strokeLinecap="round"
                    />
                    <circle cx="280" cy="40" r="4" fill="#8b5cf6" className="animate-pulse" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes draw-line {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ComparisonTable;