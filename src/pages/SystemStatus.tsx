import { useState, useEffect, useCallback, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Types ---

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

// --- Vendor-agnostic label mapping ---

interface SubServiceConfig {
  label: string;
  category: "Services" | "Real-time Capabilities";
}

const SERVICE_LABEL_MAP: Record<
  keyof DemoAgentHealth["services"],
  SubServiceConfig
> = {
  api: { label: "API Server", category: "Services" },
  deepgram: {
    label: "Speech Recognition",
    category: "Real-time Capabilities",
  },
  twilio: {
    label: "Telephony Service",
    category: "Real-time Capabilities",
  },
  websocket: {
    label: "Realtime Streaming",
    category: "Real-time Capabilities",
  },
} as const;

const PRODUCTION_EXTRA_SERVICES: SubServiceConfig[] = [
  { label: "Voice Gateway", category: "Services" },
];

const DEMO_EXTRA_SERVICES: SubServiceConfig[] = [
  { label: "Demo Agent Engine", category: "Services" },
];

// --- Helpers ---

const isUp = (value: string) => value === "running" || value === "connected";

const statusColor = (up: boolean) => (up ? "text-green-600" : "text-red-600");

const REFRESH_INTERVAL = 60_000;

// --- Components ---

const StatusDot = ({
  status,
  pulse,
}: {
  status: "up" | "down" | "degraded" | "loading";
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
  if (status === "degraded") {
    return <span className="inline-block w-3 h-3 rounded-full bg-yellow-500" />;
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
      title: "Partial Service Disruption",
      subtitle: "Some services are experiencing issues.",
    },
    major: {
      bg: "bg-red-50 border-red-200",
      dot: "bg-red-500",
      title: "Service Disruption",
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

interface SubServiceRowProps {
  label: string;
  up: boolean;
  displayStatus: string;
}

const SubServiceRow = ({ label, up, displayStatus }: SubServiceRowProps) => (
  <div className="flex items-center justify-between">
    <span className="flex items-center gap-2">
      <StatusDot status={up ? "up" : "down"} />
      <span className="text-gray-700">{label}</span>
    </span>
    <span className={`font-medium ${statusColor(up)}`}>{displayStatus}</span>
  </div>
);

interface ServiceCardSkeletonProps {
  title: string;
  hostname: string;
}

const ServiceCardSkeleton = ({ title, hostname }: ServiceCardSkeletonProps) => (
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Skeleton className="h-5 w-24" />
      </div>
      <p className="text-xs text-gray-500 mb-5">{hostname}</p>
      <div className="space-y-4">
        <Skeleton className="h-4 w-20" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-4 w-28 mt-2" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  </div>
);

// --- Grouped sub-service rendering ---

interface GroupedService {
  label: string;
  up: boolean;
  displayStatus: string;
}

interface CategoryGroup {
  category: string;
  services: GroupedService[];
}

const renderGroupedServices = (groups: CategoryGroup[]) => (
  <div className="space-y-5">
    {groups.map((group) => (
      <div key={group.category}>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          {group.category}
        </p>
        <div className="space-y-2 text-sm">
          {group.services.map((svc) => (
            <SubServiceRow
              key={svc.label}
              label={svc.label}
              up={svc.up}
              displayStatus={svc.displayStatus}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

// --- Build groups from API responses ---

function buildProductionGroups(
  result: ServiceResult<ProductionHealth>,
): CategoryGroup[] {
  const healthy = !result.error && result.data?.status === "healthy";

  // API-mapped services
  const mapped: GroupedService[] = Object.entries(SERVICE_LABEL_MAP).map(
    ([, config]) => ({
      label: config.label,
      up: healthy,
      displayStatus: healthy
        ? config.category === "Services"
          ? "Operational"
          : config.label === "Realtime Streaming"
            ? "Running"
            : "Connected"
        : result.error
          ? "Unreachable"
          : "Degraded",
    }),
  );

  // Extra production-only services
  const extras: GroupedService[] = PRODUCTION_EXTRA_SERVICES.map((extra) => ({
    label: extra.label,
    up: healthy,
    displayStatus: healthy
      ? "Operational"
      : result.error
        ? "Unreachable"
        : "Degraded",
  }));

  const all = [...mapped, ...extras];

  const services = all.filter(
    (s) =>
      [...Object.values(SERVICE_LABEL_MAP), ...PRODUCTION_EXTRA_SERVICES].find(
        (c) => c.label === s.label,
      )?.category === "Services",
  );
  const realtime = all.filter(
    (s) =>
      [...Object.values(SERVICE_LABEL_MAP), ...PRODUCTION_EXTRA_SERVICES].find(
        (c) => c.label === s.label,
      )?.category === "Real-time Capabilities",
  );

  return [
    { category: "Services", services },
    { category: "Real-time Capabilities", services: realtime },
  ];
}

function buildDemoGroups(
  result: ServiceResult<DemoAgentHealth>,
): CategoryGroup[] {
  const apiServices = result.data?.services;

  // API-mapped services
  const mapped: GroupedService[] = Object.entries(SERVICE_LABEL_MAP).map(
    ([key, config]) => {
      const value = apiServices
        ? apiServices[key as keyof DemoAgentHealth["services"]]
        : undefined;
      const up = value ? isUp(value) : false;
      return {
        label: config.label,
        up,
        displayStatus: result.error
          ? "Unreachable"
          : up
            ? config.category === "Services"
              ? "Operational"
              : value === "running"
                ? "Running"
                : "Connected"
            : "Down",
      };
    },
  );

  // Extra demo-only services (inferred from overall status)
  const overallHealthy = !result.error && result.data?.status === "healthy";
  const extras: GroupedService[] = DEMO_EXTRA_SERVICES.map((extra) => ({
    label: extra.label,
    up: overallHealthy,
    displayStatus: result.error
      ? "Unreachable"
      : overallHealthy
        ? "Operational"
        : "Down",
  }));

  const all = [...mapped, ...extras];

  const services = all.filter(
    (s) =>
      [...Object.values(SERVICE_LABEL_MAP), ...DEMO_EXTRA_SERVICES].find(
        (c) => c.label === s.label,
      )?.category === "Services",
  );
  const realtime = all.filter(
    (s) =>
      [...Object.values(SERVICE_LABEL_MAP), ...DEMO_EXTRA_SERVICES].find(
        (c) => c.label === s.label,
      )?.category === "Real-time Capabilities",
  );

  return [
    { category: "Services", services },
    { category: "Real-time Capabilities", services: realtime },
  ];
}

// --- Main Component ---

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

  // Tick every second to keep "Last checked" display fresh
  const [, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const getOverallStatus = (): OverallStatus => {
    if (!production || !demoAgent) return "loading";
    const prodUp = !production.error && production.data?.status === "healthy";
    const demoUp = !demoAgent.error && demoAgent.data?.status === "healthy";
    if (prodUp && demoUp) return "operational";
    if (prodUp || demoUp) return "partial";
    return "major";
  };

  const formatLastChecked = () => {
    if (!lastChecked) return "Checking...";
    const seconds = Math.round((Date.now() - lastChecked.getTime()) / 1000);
    if (seconds < 5) return "Just now";
    if (seconds < 60) return `${seconds} seconds ago`;
    const mins = Math.floor(seconds / 60);
    return `${mins} minute${mins > 1 ? "s" : ""} ago`;
  };

  const overallStatus = getOverallStatus();

  const getServiceOverallLabel = (
    result: ServiceResult<ProductionHealth | DemoAgentHealth> | null,
  ): {
    label: string;
    dot: "up" | "down" | "degraded" | "loading";
    color: string;
  } => {
    if (!result)
      return { label: "Checking", dot: "loading", color: "text-gray-500" };
    if (result.error)
      return { label: "Down", dot: "down", color: "text-red-600" };
    const healthy = result.data?.status === "healthy";
    if (healthy)
      return { label: "Operational", dot: "up", color: "text-green-600" };
    return {
      label: "Degraded Performance",
      dot: "degraded",
      color: "text-yellow-600",
    };
  };

  const prodStatus = getServiceOverallLabel(production);
  const demoStatus = getServiceOverallLabel(demoAgent);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              System Status
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Real-time operational status for RessyAI.
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
            {/* RessyAI Production */}
            {!production ? (
              <ServiceCardSkeleton
                title="RessyAI Production"
                hostname="voice.ressy.ai"
              />
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      RessyAI Production
                    </h3>
                    <span
                      className={`flex items-center gap-2 text-sm font-medium ${prodStatus.color}`}
                    >
                      <StatusDot
                        status={prodStatus.dot}
                        pulse={prodStatus.dot === "up"}
                      />
                      {prodStatus.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-5">voice.ressy.ai</p>

                  {production.error ? (
                    <p className="text-sm text-red-600">
                      Unable to reach service
                    </p>
                  ) : (
                    <div className="flex flex-col flex-1">
                      <div className="flex-1">
                        {renderGroupedServices(
                          buildProductionGroups(production),
                        )}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 pt-4 border-t border-gray-100 mt-4">
                        <span>Response Time</span>
                        <span className="font-medium">
                          {production.responseTime} ms
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* RessyAI Demo Agent */}
            {!demoAgent ? (
              <ServiceCardSkeleton
                title="RessyAI Demo Agent"
                hostname="api.ressy.ai"
              />
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      RessyAI Demo Agent
                    </h3>
                    <span
                      className={`flex items-center gap-2 text-sm font-medium ${demoStatus.color}`}
                    >
                      <StatusDot
                        status={demoStatus.dot}
                        pulse={demoStatus.dot === "up"}
                      />
                      {demoStatus.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-5">api.ressy.ai</p>

                  {demoAgent.error ? (
                    <p className="text-sm text-red-600">
                      Unable to reach service
                    </p>
                  ) : (
                    <div className="flex flex-col flex-1">
                      <div className="flex-1">
                        {renderGroupedServices(buildDemoGroups(demoAgent))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 pt-4 border-t border-gray-100 mt-4">
                        <span>Response Time</span>
                        <span className="font-medium">
                          {demoAgent.responseTime} ms
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
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
