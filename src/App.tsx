import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ScheduleDemo from "./pages/ScheduleDemo";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import HelpCenter from "./pages/HelpCenter";
import SystemStatus from "./pages/SystemStatus";
import Blog from "./pages/Blog";
import Onboarding from "./pages/Onboarding";
import Restaurant from "./pages/Restaurant";
import Salons from "./pages/Salons";
import Dental from "./pages/Dental";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToBottom from "./components/ScrollToBottom";
import ScrollControls from "./components/ScrollControls";

const isTestEnv =
  (typeof process !== "undefined" && process.env.VITEST) ||
  import.meta.env.MODE === "test";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = "RessyAI | Magic Receptionist";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!isTestEnv && <Toaster />}
        {!isTestEnv && <Sonner />}
        <BrowserRouter>
          <ScrollToTop />
          <ScrollToBottom enabled={false} />
          <ScrollControls />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/dental" element={<Dental />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/system-status" element={<SystemStatus />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
