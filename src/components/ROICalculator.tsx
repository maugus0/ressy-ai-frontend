import React, { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    callsPerWeek: 150,
    avgOrderValue: 35,
    missedCallPercent: 18,
    aiRecoveryPercent: 70,
    staffWage: 20
  });

  const updateInput = useCallback((field: keyof typeof inputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  }, []);

  // Calculate results
  const missedCalls = Math.round((inputs.callsPerWeek * inputs.missedCallPercent) / 100);
  const recoveredByAI = Math.round((missedCalls * inputs.aiRecoveryPercent) / 100);
  const addedRevenue = recoveredByAI * inputs.avgOrderValue;
  const laborSaved = Math.round(recoveredByAI * 0.5 * inputs.staffWage); // Assuming 30min per call
  const estimatedWeeklyValue = addedRevenue + laborSaved;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-accent/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            ROI Calculator
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estimate weekly value from saved labor + recovered missed calls.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Calls per week */}
                <div className="space-y-2">
                  <Label className="text-slate-700 text-sm font-medium">
                    Calls per week
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={inputs.callsPerWeek}
                      onChange={(e) => updateInput('callsPerWeek', parseInt(e.target.value) || 0)}
                      className="bg-white/50 border-purple-200 text-slate-800 text-2xl font-bold h-14 pr-10 focus:border-purple-400 focus:ring-purple-400"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400">
                      📞
                    </div>
                  </div>
                </div>

                {/* Average order value */}
                <div className="space-y-2">
                  <Label className="text-slate-700 text-sm font-medium">
                    Avg order / booking value ($)
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={inputs.avgOrderValue}
                      onChange={(e) => updateInput('avgOrderValue', parseInt(e.target.value) || 0)}
                      className="bg-white/50 border-purple-200 text-slate-800 text-2xl font-bold h-14 pr-10 focus:border-purple-400 focus:ring-purple-400"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400">
                      💰
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Missed call % */}
                <div className="space-y-2">
                  <Label className="text-slate-700 text-sm font-medium">
                    Missed call %
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={inputs.missedCallPercent}
                      onChange={(e) => updateInput('missedCallPercent', parseInt(e.target.value) || 0)}
                      className="bg-white/50 border-purple-200 text-slate-800 text-2xl font-bold h-14 pr-10 focus:border-purple-400 focus:ring-purple-400"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm">
                      %
                    </div>
                  </div>
                </div>

                {/* Recovery % by AI */}
                <div className="space-y-2">
                  <Label className="text-slate-700 text-sm font-medium">
                    Recovery % by AI
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={inputs.aiRecoveryPercent}
                      onChange={(e) => updateInput('aiRecoveryPercent', parseInt(e.target.value) || 0)}
                      className="bg-white/50 border-purple-200 text-slate-800 text-2xl font-bold h-14 pr-10 focus:border-purple-400 focus:ring-purple-400"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff wage */}
              <div className="space-y-2 max-w-sm">
                <Label className="text-slate-700 text-sm font-medium">
                  Staff wage ($/hr)
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    value={inputs.staffWage}
                    onChange={(e) => updateInput('staffWage', parseInt(e.target.value) || 0)}
                    className="bg-white/50 border-purple-200 text-slate-800 text-2xl font-bold h-14 pr-10 focus:border-purple-400 focus:ring-purple-400"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400">
                    💵
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                {/* Missed calls baseline */}
                <div className="flex justify-between items-center py-3 border-b border-purple-100">
                  <span className="text-slate-600 font-medium">Missed calls (baseline)</span>
                  <span className="text-slate-800 text-xl font-bold">{missedCalls}/wk</span>
                </div>

                {/* Recovered by AI */}
                <div className="flex justify-between items-center py-3 border-b border-purple-100">
                  <span className="text-slate-600 font-medium">Recovered by AI</span>
                  <span className="text-purple-600 text-xl font-bold">{recoveredByAI}/wk</span>
                </div>

                {/* Added revenue */}
                <div className="flex justify-between items-center py-3 border-b border-purple-100">
                  <span className="text-slate-600 font-medium">Added revenue</span>
                  <span className="text-purple-600 text-xl font-bold">${addedRevenue}/wk</span>
                </div>

                {/* Labor saved */}
                <div className="flex justify-between items-center py-3 border-b border-purple-100">
                  <span className="text-slate-600 font-medium">Labor saved</span>
                  <span className="text-purple-600 text-xl font-bold">${laborSaved}/wk</span>
                </div>

                {/* Total weekly value */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-300/50">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 text-lg font-semibold">Estimated weekly value</span>
                    <span className="text-purple-700 text-3xl font-bold">${estimatedWeeklyValue}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Ready to start capturing this value for your business?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;