export type ServiceStatus = "operational" | "degraded" | "down";

export interface DemoAgentHealth {
  services: {
    api: string;
    deepgram: string;
    twilio: string;
    websocket: string;
  };
  status: string;
}

export interface ProductionHealth {
  status: string;
  timestamp: number;
}

export interface ServiceResult<T> {
  data: T | null;
  error: boolean;
  responseTime: number;
}

export type OverallStatus = "operational" | "partial" | "major" | "loading";

export type ServiceDotStatus = "up" | "down" | "degraded" | "loading";

export interface SubServiceConfig {
  key: string;
  label: string;
  category: "Services" | "Real-time Capabilities";
}

export interface GroupedService {
  label: string;
  status: ServiceStatus;
  displayStatus: string;
}

export interface CategoryGroup {
  category: string;
  services: GroupedService[];
}
