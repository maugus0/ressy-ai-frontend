import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    callsPerWeek: 150,
    avgOrderValue: 35,
    missedCallPercent: 18,
    aiRecoveryPercent: 70,
    staffWage: 20,
  });

  const updateInput = useCallback(
    (field: keyof typeof inputs, value: number) => {
      setInputs((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  // Calculations
  const missedCalls = Math.round(
    (inputs.callsPerWeek * inputs.missedCallPercent) / 100
  );
  const recoveredByAI = Math.round(
    (missedCalls * inputs.aiRecoveryPercent) / 100
  );
  const addedRevenue = recoveredByAI * inputs.avgOrderValue;
  const laborSaved = Math.round(recoveredByAI * 0.5 * inputs.staffWage); // 30min per call
  const estimatedWeeklyValue = addedRevenue + laborSaved;

  // Animated counters
  const [animated, setAnimated] = useState({
    missed: 0,
    recovered: 0,
    revenue: 0,
    labor: 0,
    total: 0,
  });

  useEffect(() => {
    const animateValue = (key: keyof typeof animated, target: number) => {
      let start = 0;
      const duration = 800;
      const step = target / 30;
      let count = 0;
      const interval = setInterval(() => {
        count++;
        start += step;
        if (count >= 30) {
          clearInterval(interval);
          setAnimated((prev) => ({ ...prev, [key]: target }));
        } else {
          setAnimated((prev) => ({ ...prev, [key]: Math.round(start) }));
        }
      }, duration / 30);
    };

    animateValue("missed", missedCalls);
    animateValue("recovered", recoveredByAI);
    animateValue("revenue", addedRevenue);
    animateValue("labor", laborSaved);
    animateValue("total", estimatedWeeklyValue);
  }, [missedCalls, recoveredByAI, addedRevenue, laborSaved, estimatedWeeklyValue]);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background unchanged */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-accent/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            ROI Calculator
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-200">
            Estimate weekly value from saved labor + recovered missed calls.
          </p>
        </div>

        {/* Input + Results */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <Card className="bg-white/80 backdrop-blur-md border border-purple-200 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <CardContent className="p-8 space-y-6 animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                {/* Calls per week */}
                <div className="space-y-2 hover:scale-[1.02] transition-transform duration-300">
                  <Label className="text-slate-700 text-sm font-medium">
                    Calls per week
                  </Label>
                  <Input
                    type="number"
                    value={inputs.callsPerWeek}
                    onChange={(e) =>
                      updateInput("callsPerWeek", parseInt(e.target.value) || 0)
                    }
                    className="bg-white/70 border-purple-200 text-slate-800 text-2xl font-bold h-14 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                {/* Avg Order Value */}
                <div className="space-y-2 hover:scale-[1.02] transition-transform duration-300">
                  <Label className="text-slate-700 text-sm font-medium">
                    Avg order value ($)
                  </Label>
                  <Input
                    type="number"
                    value={inputs.avgOrderValue}
                    onChange={(e) =>
                      updateInput("avgOrderValue", parseInt(e.target.value) || 0)
                    }
                    className="bg-white/70 border-purple-200 text-slate-800 text-2xl font-bold h-14 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Missed % */}
                <div className="space-y-2 hover:scale-[1.02] transition-transform duration-300">
                  <Label className="text-slate-700 text-sm font-medium">
                    Missed call %
                  </Label>
                  <Input
                    type="number"
                    value={inputs.missedCallPercent}
                    onChange={(e) =>
                      updateInput(
                        "missedCallPercent",
                        parseInt(e.target.value) || 0
                      )
                    }
                    className="bg-white/70 border-purple-200 text-slate-800 text-2xl font-bold h-14 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                {/* AI Recovery */}
                <div className="space-y-2 hover:scale-[1.02] transition-transform duration-300">
                  <Label className="text-slate-700 text-sm font-medium">
                    Recovery % by AI
                  </Label>
                  <Input
                    type="number"
                    value={inputs.aiRecoveryPercent}
                    onChange={(e) =>
                      updateInput(
                        "aiRecoveryPercent",
                        parseInt(e.target.value) || 0
                      )
                    }
                    className="bg-white/70 border-purple-200 text-slate-800 text-2xl font-bold h-14 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Staff Wage */}
              <div className="space-y-2 hover:scale-[1.02] transition-transform duration-300">
                <Label className="text-slate-700 text-sm font-medium">
                  Staff wage ($/hr)
                </Label>
                <Input
                  type="number"
                  value={inputs.staffWage}
                  onChange={(e) =>
                    updateInput("staffWage", parseInt(e.target.value) || 0)
                  }
                  className="bg-white/70 border-purple-200 text-slate-800 text-2xl font-bold h-14 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white/80 backdrop-blur-md border border-purple-200 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <CardContent className="p-8 space-y-6 animate-fade-in delay-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-purple-100 hover:bg-purple-50/40 rounded-lg px-3 transition">
                  <span className="text-slate-600 font-medium">Missed calls</span>
                  <span className="text-slate-800 text-xl font-bold">
                    {animated.missed}/wk
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-purple-100 hover:bg-purple-50/40 rounded-lg px-3 transition">
                  <span className="text-slate-600 font-medium">Recovered by AI</span>
                  <span className="text-purple-600 text-xl font-bold">
                    {animated.recovered}/wk
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-purple-100 hover:bg-purple-50/40 rounded-lg px-3 transition">
                  <span className="text-slate-600 font-medium">Added revenue</span>
                  <span className="text-purple-600 text-xl font-bold">
                    ${animated.revenue}/wk
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-purple-100 hover:bg-purple-50/40 rounded-lg px-3 transition">
                  <span className="text-slate-600 font-medium">Labor saved</span>
                  <span className="text-purple-600 text-xl font-bold">
                    ${animated.labor}/wk
                  </span>
                </div>

                {/* Total */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-300/50 shadow-inner animate-pulse">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 text-lg font-semibold">
                      Estimated weekly value
                    </span>
                    <span className="text-purple-700 text-3xl font-bold">
                      ${animated.total}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in delay-500">
          <p className="text-slate-600 mb-6 text-lg">
            Ready to start capturing this value for your business?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default ROICalculator;