import { describe, expect, it } from "vitest";
import {
  buildProductionGroups,
  buildDemoGroups,
  getDisplayStatus,
  isUp,
  SERVICE_LABEL_MAP,
  PRODUCTION_EXTRA_SERVICES,
  DEMO_EXTRA_SERVICES,
} from "@/lib/systemStatusHelpers";
import type {
  DemoAgentHealth,
  ProductionHealth,
  ServiceResult,
} from "@/types/system";

describe("isUp", () => {
  it('returns true for "running"', () => expect(isUp("running")).toBe(true));
  it('returns true for "connected"', () =>
    expect(isUp("connected")).toBe(true));
  it('returns false for "disconnected"', () =>
    expect(isUp("disconnected")).toBe(false));
  it('returns false for "down"', () => expect(isUp("down")).toBe(false));
  it("returns false for empty string", () => expect(isUp("")).toBe(false));
});

describe("getDisplayStatus", () => {
  const apiConfig = SERVICE_LABEL_MAP.api;
  const wsConfig = SERVICE_LABEL_MAP.websocket;
  const dgConfig = SERVICE_LABEL_MAP.deepgram;

  it('returns "Unreachable" when error', () => {
    expect(getDisplayStatus(false, true, apiConfig)).toBe("Unreachable");
  });

  it('returns "Degraded" when not healthy and no error', () => {
    expect(getDisplayStatus(false, false, apiConfig)).toBe("Degraded");
  });

  it('returns "Operational" for healthy Services category', () => {
    expect(getDisplayStatus(true, false, apiConfig)).toBe("Operational");
  });

  it('returns "Running" for healthy websocket', () => {
    expect(getDisplayStatus(true, false, wsConfig)).toBe("Running");
  });

  it('returns "Connected" for healthy deepgram', () => {
    expect(getDisplayStatus(true, false, dgConfig)).toBe("Connected");
  });
});

describe("SERVICE_LABEL_MAP", () => {
  it("has entries for api, deepgram, twilio, websocket", () => {
    expect(SERVICE_LABEL_MAP.api).toBeDefined();
    expect(SERVICE_LABEL_MAP.deepgram).toBeDefined();
    expect(SERVICE_LABEL_MAP.twilio).toBeDefined();
    expect(SERVICE_LABEL_MAP.websocket).toBeDefined();
  });

  it("each entry has key, label, and category", () => {
    for (const config of Object.values(SERVICE_LABEL_MAP)) {
      expect(config.key).toBeTruthy();
      expect(config.label).toBeTruthy();
      expect(config.category).toBeTruthy();
    }
  });
});

describe("PRODUCTION_EXTRA_SERVICES", () => {
  it("includes Voice Gateway", () => {
    expect(
      PRODUCTION_EXTRA_SERVICES.find((s) => s.key === "voice-gateway"),
    ).toBeDefined();
  });
});

describe("DEMO_EXTRA_SERVICES", () => {
  it("includes Demo Agent Engine", () => {
    expect(
      DEMO_EXTRA_SERVICES.find((s) => s.key === "demo-engine"),
    ).toBeDefined();
  });
});

describe("buildProductionGroups", () => {
  const healthyResult: ServiceResult<ProductionHealth> = {
    data: { status: "healthy", timestamp: 123 },
    error: false,
    responseTime: 200,
  };

  const errorResult: ServiceResult<ProductionHealth> = {
    data: null,
    error: true,
    responseTime: 0,
  };

  const degradedResult: ServiceResult<ProductionHealth> = {
    data: { status: "unhealthy", timestamp: 123 },
    error: false,
    responseTime: 200,
  };

  it("returns two category groups", () => {
    const groups = buildProductionGroups(healthyResult);
    expect(groups.length).toBe(2);
    expect(groups[0].category).toBe("Services");
    expect(groups[1].category).toBe("Real-time Capabilities");
  });

  it("all services operational when healthy", () => {
    const groups = buildProductionGroups(healthyResult);
    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("operational");
      }
    }
  });

  it("all services down when error", () => {
    const groups = buildProductionGroups(errorResult);
    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("down");
        expect(svc.displayStatus).toBe("Unreachable");
      }
    }
  });

  it("all services degraded when unhealthy", () => {
    const groups = buildProductionGroups(degradedResult);
    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("degraded");
        expect(svc.displayStatus).toBe("Degraded");
      }
    }
  });

  it("includes Voice Gateway in Services", () => {
    const groups = buildProductionGroups(healthyResult);
    const services = groups.find((g) => g.category === "Services");
    expect(services?.services.map((s) => s.label)).toContain("Voice Gateway");
  });

  it("includes correct service labels", () => {
    const groups = buildProductionGroups(healthyResult);
    const allLabels = groups.flatMap((g) => g.services.map((s) => s.label));
    expect(allLabels).toContain("API Server");
    expect(allLabels).toContain("Speech Recognition");
    expect(allLabels).toContain("Telephony Service");
    expect(allLabels).toContain("Realtime Streaming");
    expect(allLabels).toContain("Voice Gateway");
  });
});

describe("buildDemoGroups", () => {
  const allHealthy: ServiceResult<DemoAgentHealth> = {
    data: {
      services: {
        api: "running",
        deepgram: "connected",
        twilio: "connected",
        websocket: "running",
      },
      status: "healthy",
    },
    error: false,
    responseTime: 200,
  };

  const partialDown: ServiceResult<DemoAgentHealth> = {
    data: {
      services: {
        api: "running",
        deepgram: "disconnected",
        twilio: "connected",
        websocket: "running",
      },
      status: "healthy",
    },
    error: false,
    responseTime: 200,
  };

  const errorResult: ServiceResult<DemoAgentHealth> = {
    data: null,
    error: true,
    responseTime: 0,
  };

  it("returns two category groups", () => {
    const groups = buildDemoGroups(allHealthy);
    expect(groups.length).toBe(2);
  });

  it("all services operational when healthy", () => {
    const groups = buildDemoGroups(allHealthy);
    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("operational");
      }
    }
  });

  it("individual services can be down", () => {
    const groups = buildDemoGroups(partialDown);
    const realtime = groups.find(
      (g) => g.category === "Real-time Capabilities",
    );
    const speech = realtime?.services.find(
      (s) => s.label === "Speech Recognition",
    );
    expect(speech?.status).toBe("down");
    expect(speech?.displayStatus).toBe("Down");
  });

  it("all services unreachable on error", () => {
    const groups = buildDemoGroups(errorResult);
    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("down");
        expect(svc.displayStatus).toBe("Unreachable");
      }
    }
  });

  it("websocket shows Running display status", () => {
    const groups = buildDemoGroups(allHealthy);
    const realtime = groups.find(
      (g) => g.category === "Real-time Capabilities",
    );
    const ws = realtime?.services.find((s) => s.label === "Realtime Streaming");
    expect(ws?.displayStatus).toBe("Running");
  });

  it("deepgram shows Connected display status", () => {
    const groups = buildDemoGroups(allHealthy);
    const realtime = groups.find(
      (g) => g.category === "Real-time Capabilities",
    );
    const dg = realtime?.services.find((s) => s.label === "Speech Recognition");
    expect(dg?.displayStatus).toBe("Connected");
  });

  it("includes Demo Agent Engine in Services", () => {
    const groups = buildDemoGroups(allHealthy);
    const services = groups.find((g) => g.category === "Services");
    expect(services?.services.map((s) => s.label)).toContain(
      "Demo Agent Engine",
    );
  });
});
