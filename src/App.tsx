import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ScheduleDemo from "./pages/ScheduleDemo";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import HelpCenter from "./pages/HelpCenter";
import Documentation from "./pages/Documentation";
import ApiReference from "./pages/ApiReference";
import SystemStatus from "./pages/SystemStatus";
import Restaurant from "./pages/Restaurant";
import Salons from "./pages/Salons";
import Dental from "./pages/Dental";

const isTestEnv =
  (typeof process !== "undefined" && process.env.VITEST) ||
  import.meta.env.MODE === "test";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title =
      "RessyAI | AI Receptionist for Phone Calls, Reservations & Scheduling";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!isTestEnv && <Toaster />}
        {!isTestEnv && <Sonner />}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions/restaurant" element={<Restaurant />} />
            <Route path="/solutions/salons" element={<Salons />} />
            <Route path="/solutions/dental" element={<Dental />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/status" element={<SystemStatus />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
