import type {
  DemoAgentHealth,
  ProductionHealth,
  ServiceResult,
  SubServiceConfig,
  GroupedService,
  CategoryGroup,
  ServiceStatus,
} from "@/types/system";

// --- Vendor-agnostic label mapping ---

export const SERVICE_LABEL_MAP: Record<
  keyof DemoAgentHealth["services"],
  SubServiceConfig
> = {
  api: { key: "api", label: "API Server", category: "Services" },
  deepgram: {
    key: "deepgram",
    label: "Speech Recognition",
    category: "Real-time Capabilities",
  },
  twilio: {
    key: "twilio",
    label: "Telephony Service",
    category: "Real-time Capabilities",
  },
  websocket: {
    key: "websocket",
    label: "Realtime Streaming",
    category: "Real-time Capabilities",
  },
} as const;

export const PRODUCTION_EXTRA_SERVICES: SubServiceConfig[] = [
  { key: "voice-gateway", label: "Voice Gateway", category: "Services" },
];

export const DEMO_EXTRA_SERVICES: SubServiceConfig[] = [
  { key: "demo-engine", label: "Demo Agent Engine", category: "Services" },
];

// --- Helpers ---

export const isUp = (value: string) =>
  value === "running" || value === "connected";

export function getDisplayStatus(
  healthy: boolean,
  isError: boolean,
  config: SubServiceConfig,
): string {
  if (isError) return "Unreachable";
  if (!healthy) return "Degraded";
  if (config.category === "Services") return "Operational";
  return config.key === "websocket" ? "Running" : "Connected";
}

function groupByCategory(
  all: GroupedService[],
  allConfigs: SubServiceConfig[],
): CategoryGroup[] {
  const services = all.filter(
    (s) => allConfigs.find((c) => c.label === s.label)?.category === "Services",
  );
  const realtime = all.filter(
    (s) =>
      allConfigs.find((c) => c.label === s.label)?.category ===
      "Real-time Capabilities",
  );
  return [
    { category: "Services", services },
    { category: "Real-time Capabilities", services: realtime },
  ];
}

export function buildProductionGroups(
  result: ServiceResult<ProductionHealth>,
): CategoryGroup[] {
  const healthy = !result.error && result.data?.status === "healthy";
  const svcStatus: ServiceStatus = result.error
    ? "down"
    : healthy
      ? "operational"
      : "degraded";

  const mapped: GroupedService[] = Object.values(SERVICE_LABEL_MAP).map(
    (config) => ({
      label: config.label,
      status: svcStatus,
      displayStatus: getDisplayStatus(healthy, result.error, config),
    }),
  );

  const extras: GroupedService[] = PRODUCTION_EXTRA_SERVICES.map((extra) => ({
    label: extra.label,
    status: svcStatus,
    displayStatus: result.error
      ? "Unreachable"
      : healthy
        ? "Operational"
        : "Degraded",
  }));

  const allConfigs = [
    ...Object.values(SERVICE_LABEL_MAP),
    ...PRODUCTION_EXTRA_SERVICES,
  ];
  return groupByCategory([...mapped, ...extras], allConfigs);
}

export function buildDemoGroups(
  result: ServiceResult<DemoAgentHealth>,
): CategoryGroup[] {
  const apiServices = result.data?.services;

  const mapped: GroupedService[] = Object.entries(SERVICE_LABEL_MAP).map(
    ([key, config]) => {
      const value = apiServices
        ? apiServices[key as keyof DemoAgentHealth["services"]]
        : undefined;
      const up = value ? isUp(value) : false;
      const status: ServiceStatus = result.error
        ? "down"
        : up
          ? "operational"
          : "down";
      return {
        label: config.label,
        status,
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

  const overallHealthy = !result.error && result.data?.status === "healthy";
  const extras: GroupedService[] = DEMO_EXTRA_SERVICES.map((extra) => ({
    label: extra.label,
    status: result.error ? "down" : overallHealthy ? "operational" : "down",
    displayStatus: result.error
      ? "Unreachable"
      : overallHealthy
        ? "Operational"
        : "Down",
  }));

  const allConfigs = [
    ...Object.values(SERVICE_LABEL_MAP),
    ...DEMO_EXTRA_SERVICES,
  ];
  return groupByCategory([...mapped, ...extras], allConfigs);
}
