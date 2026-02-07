import { useState, useEffect, useCallback, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoAgentHealth {
  services: {
    api: string;
    deepgram: string;
    twilio: string;
    websocket: string;
  };
  status: string;
}

interface ProductionHealth {
  status: string;
  timestamp: number;
}

interface ServiceResult<T> {
  data: T | null;
  error: boolean;
  responseTime: number;
}

type OverallStatus = "operational" | "partial" | "major" | "loading";

const SUB_SERVICES: {
  key: keyof DemoAgentHealth["services"];
  label: string;
}[] = [
  { key: "api", label: "API Server" },
  { key: "deepgram", label: "Deepgram (Voice AI)" },
  { key: "twilio", label: "Twilio (Telephony)" },
  { key: "websocket", label: "WebSocket" },
];

const REFRESH_INTERVAL = 60_000;

const StatusDot = ({
  status,
  pulse,
}: {
  status: "up" | "down" | "loading";
  pulse?: boolean;
}) => {
  if (status === "loading") {
    return (
      <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse" />
    );
  }
  if (status === "up") {
    return (
      <span className="relative inline-flex h-3 w-3">
        {pulse && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
    );
  }
  return <span className="inline-block w-3 h-3 rounded-full bg-red-500" />;
};

const OverallBanner = ({ status }: { status: OverallStatus }) => {
  if (status === "loading") {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
        <Skeleton className="h-6 w-48 mx-auto mb-2" />
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>
    );
  }

  const config = {
    operational: {
      bg: "bg-green-50 border-green-200",
      dot: "bg-green-500",
      title: "All Systems Operational",
      subtitle: "All RessyAI services are running normally.",
    },
    partial: {
      bg: "bg-yellow-50 border-yellow-200",
      dot: "bg-yellow-500",
      title: "Partial Outage",
      subtitle: "Some services are experiencing issues.",
    },
    major: {
      bg: "bg-red-50 border-red-200",
      dot: "bg-red-500",
      title: "Major Outage",
      subtitle: "Multiple services are currently unavailable.",
    },
  }[status];

  return (
    <div className={`rounded-xl border p-6 text-center ${config.bg}`}>
      <div className="flex items-center justify-center gap-3 mb-1">
        <span
          className={`inline-block w-3.5 h-3.5 rounded-full ${config.dot}`}
        />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {config.title}
        </h2>
      </div>
      <p className="text-gray-600 text-sm sm:text-base">{config.subtitle}</p>
    </div>
  );
};

const SystemStatus = () => {
  const [production, setProduction] =
    useState<ServiceResult<ProductionHealth> | null>(null);
  const [demoAgent, setDemoAgent] =
    useState<ServiceResult<DemoAgentHealth> | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const fetchHealth = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setIsRefreshing(true);

    const fetchService = async <T,>(url: string): Promise<ServiceResult<T>> => {
      const start = performance.now();
      try {
        const res = await fetch(url, { signal: controller.signal });
        const elapsed = performance.now() - start;
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as T;
        return { data, error: false, responseTime: Math.round(elapsed) };
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          return { data: null, error: false, responseTime: 0 };
        }
        const elapsed = performance.now() - start;
        return { data: null, error: true, responseTime: Math.round(elapsed) };
      }
    };

    const [prodResult, demoResult] = await Promise.all([
      fetchService<ProductionHealth>("https://voice.ressy.ai/health"),
      fetchService<DemoAgentHealth>("https://api.ressy.ai/health"),
    ]);

    if (!controller.signal.aborted) {
      setProduction(prodResult);
      setDemoAgent(demoResult);
      setLastChecked(new Date());
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    document.title = "System Status | RessyAI";
    fetchHealth();
    const interval = setInterval(fetchHealth, REFRESH_INTERVAL);
    return () => {
      clearInterval(interval);
      abortRef.current?.abort();
    };
  }, [fetchHealth]);

  const getOverallStatus = (): OverallStatus => {
    if (!production || !demoAgent) return "loading";
    const prodUp = !production.error && production.data?.status === "healthy";
    const demoUp = !demoAgent.error && demoAgent.data?.status === "healthy";
    if (prodUp && demoUp) return "operational";
    if (prodUp || demoUp) return "partial";
    return "major";
  };

  const isSubServiceUp = (value: string) =>
    value === "running" || value === "connected";

  const formatLastChecked = () => {
    if (!lastChecked) return "Checking...";
    const seconds = Math.round((Date.now() - lastChecked.getTime()) / 1000);
    if (seconds < 5) return "Just now";
    if (seconds < 60) return `${seconds} seconds ago`;
    return `${Math.floor(seconds / 60)} minute${Math.floor(seconds / 60) > 1 ? "s" : ""} ago`;
  };

  const [, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 5000);
    return () => clearInterval(t);
  }, []);

  const overallStatus = getOverallStatus();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              System Status
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Real-time operational status for RessyAI services.
            </p>
          </div>

          {/* Overall Banner */}
          <div className="mb-8">
            <OverallBanner status={overallStatus} />
          </div>

          {/* Meta row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
            <p className="text-sm text-gray-500">
              Last checked: {formatLastChecked()}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchHealth}
              disabled={isRefreshing}
              className="gap-2"
            >
              <RefreshCw
                className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Production Backend */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    RessyAI Production
                  </h3>
                  {!production ? (
                    <Skeleton className="h-5 w-20" />
                  ) : production.error ? (
                    <span className="flex items-center gap-2 text-sm font-medium text-red-600">
                      <StatusDot status="down" /> Down
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                      <StatusDot status="up" pulse /> Operational
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-4">voice.ressy.ai</p>

                {!production ? (
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ) : production.error ? (
                  <p className="text-sm text-red-600">
                    Unable to reach service
                  </p>
                ) : (
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Status</span>
                      <span className="font-medium capitalize">
                        {production.data?.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="font-medium">
                        {production.responseTime}ms
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Agent */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    RessyAI Demo Agent
                  </h3>
                  {!demoAgent ? (
                    <Skeleton className="h-5 w-20" />
                  ) : demoAgent.error ? (
                    <span className="flex items-center gap-2 text-sm font-medium text-red-600">
                      <StatusDot status="down" /> Down
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                      <StatusDot status="up" pulse /> Operational
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-4">api.ressy.ai</p>

                {!demoAgent ? (
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ) : demoAgent.error ? (
                  <p className="text-sm text-red-600">
                    Unable to reach service
                  </p>
                ) : (
                  <div className="space-y-2 text-sm text-gray-600">
                    {SUB_SERVICES.map(({ key, label }) => {
                      const value = demoAgent.data?.services[key] ?? "unknown";
                      const up = isSubServiceUp(value);
                      return (
                        <div
                          key={key}
                          className="flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <StatusDot status={up ? "up" : "down"} />
                            {label}
                          </span>
                          <span className="font-medium capitalize">
                            {value}
                          </span>
                        </div>
                      );
                    })}
                    <div className="flex justify-between pt-2 border-t border-gray-100 mt-2">
                      <span>Response Time</span>
                      <span className="font-medium">
                        {demoAgent.responseTime}ms
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Experiencing issues? Reach out to us at{" "}
              <a
                href="mailto:info@ressy.ai"
                className="text-purple-600 hover:underline font-medium"
              >
                info@ressy.ai
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SystemStatus;
