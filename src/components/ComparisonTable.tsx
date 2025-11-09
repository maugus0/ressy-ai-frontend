import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Available 24/7",
      ressyAI: "Yes",
      frontDesk: "No (shifts)",
      answeringService: "Limited",
    },
    {
      feature: "Missed calls",
      ressyAI: "0",
      frontDesk: "Medium",
      answeringService: "Low",
    },
    {
      feature: "Takes payments",
      ressyAI: "Yes",
      frontDesk: "Sometimes",
      answeringService: "Rare",
    },
    {
      feature: "POS/Calendar sync",
      ressyAI: "Real-time",
      frontDesk: "Manual",
      answeringService: "Limited",
    },
    {
      feature: "Cost predictability",
      ressyAI: "Transparent",
      frontDesk: "Overtime/turnover",
      answeringService: "Bundles",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-accent/10"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Why Choose Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Why choose Ressy?
          </h2>

          <Card className="bg-white/90 backdrop-blur-sm border border-purple-200 shadow-xl">
            <CardContent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-purple-200/40">
                  <thead>
                    <tr className="border-b-2 border-purple-300/60">
                      <th className="text-left p-6 font-semibold text-slate-700 min-w-48 border-r border-purple-200/40">
                        Feature
                      </th>
                      <th className="text-center p-6 font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 min-w-40 border-r border-purple-200/40">
                        Ressy AI
                      </th>
                      <th className="text-center p-6 font-semibold text-slate-700 min-w-40 border-r border-purple-200/40">
                        Front desk staff
                      </th>
                      <th className="text-center p-6 font-semibold text-slate-700 min-w-40">
                        Answering service
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row, index) => (
                      <tr key={index} className="border-b border-purple-200/40">
                        {/* Feature column */}
                        <td className="p-6 font-medium text-slate-700 border-r border-purple-200/40">
                          {row.feature}
                        </td>

                        {/* Ressy AI column → FULL purple background */}
                        <td className="p-6 text-center font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 border-r border-purple-200/40">
                          {row.ressyAI}
                        </td>

                        {/* Front Desk */}
                        <td className="p-6 text-center text-slate-600 font-medium border-r border-purple-200/40">
                          {row.frontDesk}
                        </td>

                        {/* Answering Service */}
                        <td className="p-6 text-center text-slate-600 font-medium">
                          {row.answeringService}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
