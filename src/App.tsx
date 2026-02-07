import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index";
import ScheduleDemo from "./pages/ScheduleDemo";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Restaurant from "./pages/Restaurant";
import Salons from "./pages/Salons";
import Dental from "./pages/Dental";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToBottom from "./components/ScrollToBottom";
import ScrollControls from "./components/ScrollControls";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const SystemStatus = lazy(() => import("./pages/SystemStatus"));

const isTestEnv =
  (typeof process !== "undefined" && process.env.VITEST) ||
  import.meta.env.MODE === "test";

const queryClient = new QueryClient();

const LazyFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    Loading...
  </div>
);

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
          <Suspense fallback={<LazyFallback />}>
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
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/system-status" element={<SystemStatus />} />
              {/* Backward-compatible redirects for old routes */}
              <Route
                path="/status"
                element={<Navigate to="/system-status" replace />}
              />
              <Route
                path="/docs"
                element={<Navigate to="/help-center" replace />}
              />
              <Route
                path="/api-reference"
                element={<Navigate to="/help-center" replace />}
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
