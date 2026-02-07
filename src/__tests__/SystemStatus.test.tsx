import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SystemStatus from "@/pages/SystemStatus";
import {
  buildProductionGroups,
  buildDemoGroups,
} from "@/lib/systemStatusHelpers";
import type {
  DemoAgentHealth,
  ProductionHealth,
  ServiceResult,
} from "@/types/system";

beforeEach(() => {
  window.scrollTo = vi.fn();
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

const healthyProdResponse = { status: "healthy", timestamp: 12345 };
const healthyDemoResponse = {
  services: {
    api: "running",
    deepgram: "connected",
    twilio: "connected",
    websocket: "running",
  },
  status: "healthy",
};

const mockFetchBothHealthy = () => {
  global.fetch = vi.fn((url: string | URL | Request) => {
    const urlStr = typeof url === "string" ? url : url.toString();
    const data = urlStr.includes("voice.ressy.ai")
      ? healthyProdResponse
      : healthyDemoResponse;
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    } as Response);
  }) as unknown as typeof fetch;
};

const mockFetchProdDown = () => {
  global.fetch = vi.fn((url: string | URL | Request) => {
    const urlStr = typeof url === "string" ? url : url.toString();
    if (urlStr.includes("voice.ressy.ai")) {
      return Promise.reject(new Error("Network error"));
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(healthyDemoResponse),
    } as Response);
  }) as unknown as typeof fetch;
};

const mockFetchBothDown = () => {
  global.fetch = vi.fn(() =>
    Promise.reject(new Error("Network error")),
  ) as unknown as typeof fetch;
};

const renderSystemStatus = () =>
  render(
    <MemoryRouter>
      <SystemStatus />
    </MemoryRouter>,
  );

describe("SystemStatus page", () => {
  it("renders the page title", async () => {
    mockFetchBothHealthy();
    renderSystemStatus();

    expect(
      screen.getByRole("heading", { level: 1, name: /system status/i }),
    ).toBeInTheDocument();
  });

  it("sets document title", async () => {
    mockFetchBothHealthy();
    renderSystemStatus();

    expect(document.title).toBe("System Status | RessyAI");
  });

  it("fetches health data on mount", async () => {
    mockFetchBothHealthy();
    renderSystemStatus();

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });
  });

  describe("all systems operational", () => {
    it("shows operational banner", async () => {
      mockFetchBothHealthy();
      renderSystemStatus();

      await waitFor(() => {
        expect(screen.getByText("All Systems Operational")).toBeInTheDocument();
      });
    });

    it("shows Operational status for both services", async () => {
      mockFetchBothHealthy();
      renderSystemStatus();

      await waitFor(() => {
        const operationalLabels = screen.getAllByText("Operational");
        expect(operationalLabels.length).toBeGreaterThan(0);
      });
    });

    it("shows response time", async () => {
      mockFetchBothHealthy();
      renderSystemStatus();

      await waitFor(() => {
        const responseTimes = screen.getAllByText(/\d+ ms/);
        expect(responseTimes.length).toBe(2);
      });
    });
  });

  describe("partial outage", () => {
    it("shows partial disruption when one service is down", async () => {
      mockFetchProdDown();
      renderSystemStatus();

      await waitFor(() => {
        expect(
          screen.getByText("Partial Service Disruption"),
        ).toBeInTheDocument();
      });
    });

    it("shows Down status for the failed service", async () => {
      mockFetchProdDown();
      renderSystemStatus();

      await waitFor(() => {
        expect(screen.getByText("Down")).toBeInTheDocument();
      });
    });

    it("shows unable to reach for the failed service", async () => {
      mockFetchProdDown();
      renderSystemStatus();

      await waitFor(() => {
        expect(screen.getByText("Unable to reach service")).toBeInTheDocument();
      });
    });
  });

  describe("major outage", () => {
    it("shows service disruption when both are down", async () => {
      mockFetchBothDown();
      renderSystemStatus();

      await waitFor(() => {
        expect(screen.getByText("Service Disruption")).toBeInTheDocument();
      });
    });
  });

  describe("refresh", () => {
    it("renders refresh button", async () => {
      mockFetchBothHealthy();
      renderSystemStatus();

      expect(
        screen.getByRole("button", { name: /refresh/i }),
      ).toBeInTheDocument();
    });

    it("manual refresh triggers new fetch", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      mockFetchBothHealthy();
      renderSystemStatus();

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(2);
      });

      await user.click(screen.getByRole("button", { name: /refresh/i }));

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(4);
      });
    });
  });

  describe("last checked display", () => {
    it("shows checking initially then timestamp", async () => {
      mockFetchBothHealthy();
      renderSystemStatus();

      // After fetch resolves it should say "Just now"
      await waitFor(() => {
        expect(screen.getByText(/just now/i)).toBeInTheDocument();
      });
    });
  });

  describe("contact CTA", () => {
    it("shows contact email", () => {
      mockFetchBothHealthy();
      renderSystemStatus();

      const emails = screen.getAllByText("info@ressy.ai");
      expect(emails.length).toBeGreaterThan(0);
    });
  });
});

describe("buildProductionGroups", () => {
  it("returns operational status when healthy", () => {
    const result: ServiceResult<ProductionHealth> = {
      data: { status: "healthy", timestamp: 123 },
      error: false,
      responseTime: 200,
    };
    const groups = buildProductionGroups(result);

    expect(groups.length).toBe(2);
    expect(groups[0].category).toBe("Services");
    expect(groups[1].category).toBe("Real-time Capabilities");

    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("operational");
      }
    }
  });

  it("returns down status when error", () => {
    const result: ServiceResult<ProductionHealth> = {
      data: null,
      error: true,
      responseTime: 0,
    };
    const groups = buildProductionGroups(result);

    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("down");
        expect(svc.displayStatus).toBe("Unreachable");
      }
    }
  });

  it("returns degraded status when unhealthy but reachable", () => {
    const result: ServiceResult<ProductionHealth> = {
      data: { status: "unhealthy", timestamp: 123 },
      error: false,
      responseTime: 200,
    };
    const groups = buildProductionGroups(result);

    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("degraded");
        expect(svc.displayStatus).toBe("Degraded");
      }
    }
  });

  it("includes Voice Gateway in Services category", () => {
    const result: ServiceResult<ProductionHealth> = {
      data: { status: "healthy", timestamp: 123 },
      error: false,
      responseTime: 200,
    };
    const groups = buildProductionGroups(result);
    const services = groups.find((g) => g.category === "Services");
    const labels = services?.services.map((s) => s.label) ?? [];
    expect(labels).toContain("Voice Gateway");
  });
});

describe("buildDemoGroups", () => {
  it("returns operational status when all services healthy", () => {
    const result: ServiceResult<DemoAgentHealth> = {
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
    const groups = buildDemoGroups(result);

    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("operational");
      }
    }
  });

  it("returns down for individual failing services", () => {
    const result: ServiceResult<DemoAgentHealth> = {
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
    const groups = buildDemoGroups(result);
    const realtime = groups.find(
      (g) => g.category === "Real-time Capabilities",
    );
    const speechRecog = realtime?.services.find(
      (s) => s.label === "Speech Recognition",
    );
    expect(speechRecog?.status).toBe("down");
    expect(speechRecog?.displayStatus).toBe("Down");
  });

  it("returns unreachable when error", () => {
    const result: ServiceResult<DemoAgentHealth> = {
      data: null,
      error: true,
      responseTime: 0,
    };
    const groups = buildDemoGroups(result);

    for (const group of groups) {
      for (const svc of group.services) {
        expect(svc.status).toBe("down");
        expect(svc.displayStatus).toBe("Unreachable");
      }
    }
  });

  it("includes Demo Agent Engine in Services category", () => {
    const result: ServiceResult<DemoAgentHealth> = {
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
    const groups = buildDemoGroups(result);
    const services = groups.find((g) => g.category === "Services");
    const labels = services?.services.map((s) => s.label) ?? [];
    expect(labels).toContain("Demo Agent Engine");
  });

  it("shows correct display status for websocket (Running)", () => {
    const result: ServiceResult<DemoAgentHealth> = {
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
    const groups = buildDemoGroups(result);
    const realtime = groups.find(
      (g) => g.category === "Real-time Capabilities",
    );
    const streaming = realtime?.services.find(
      (s) => s.label === "Realtime Streaming",
    );
    expect(streaming?.displayStatus).toBe("Running");
  });

  it("shows Connected for deepgram and twilio when healthy", () => {
    const result: ServiceResult<DemoAgentHealth> = {
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
    const groups = buildDemoGroups(result);
    const realtime = groups.find(
      (g) => g.category === "Real-time Capabilities",
    );
    const speech = realtime?.services.find(
      (s) => s.label === "Speech Recognition",
    );
    const telephony = realtime?.services.find(
      (s) => s.label === "Telephony Service",
    );
    expect(speech?.displayStatus).toBe("Connected");
    expect(telephony?.displayStatus).toBe("Connected");
  });
});
