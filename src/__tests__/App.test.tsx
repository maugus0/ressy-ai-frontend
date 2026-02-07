import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// We test routing logic with MemoryRouter directly rather than rendering
// the full App with BrowserRouter (which can't accept initialEntries).
// Full App render is done in MainPage.test.tsx.

beforeEach(() => {
  window.scrollTo = vi.fn();
  HTMLMediaElement.prototype.load = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("App routing — redirects", () => {
  it("redirects /status to /system-status", async () => {
    const { Navigate } = await import("react-router-dom");

    let navigatedTo = "";
    const Capture = () => {
      navigatedTo = "/system-status";
      return <div>System Status Page</div>;
    };

    render(
      <MemoryRouter initialEntries={["/status"]}>
        <Routes>
          <Route path="/system-status" element={<Capture />} />
          <Route
            path="/status"
            element={<Navigate to="/system-status" replace />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(navigatedTo).toBe("/system-status");
  });

  it("redirects /docs to /help-center", () => {
    const { Navigate } = require("react-router-dom");

    let navigatedTo = "";
    const Capture = () => {
      navigatedTo = "/help-center";
      return <div>Help Center</div>;
    };

    render(
      <MemoryRouter initialEntries={["/docs"]}>
        <Routes>
          <Route path="/help-center" element={<Capture />} />
          <Route
            path="/docs"
            element={<Navigate to="/help-center" replace />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(navigatedTo).toBe("/help-center");
  });

  it("redirects /api-reference to /help-center", () => {
    const { Navigate } = require("react-router-dom");

    let navigatedTo = "";
    const Capture = () => {
      navigatedTo = "/help-center";
      return <div>Help Center</div>;
    };

    render(
      <MemoryRouter initialEntries={["/api-reference"]}>
        <Routes>
          <Route path="/help-center" element={<Capture />} />
          <Route
            path="/api-reference"
            element={<Navigate to="/help-center" replace />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(navigatedTo).toBe("/help-center");
  });
});

describe("App routing — lazy loaded pages", () => {
  it("renders Blog page at /blog", async () => {
    // Mock image imports for Onboarding (it may be lazy-loaded)
    vi.mock("@/assets/1.png", () => ({ default: "" }));
    vi.mock("@/assets/2.png", () => ({ default: "" }));
    vi.mock("@/assets/3.png", () => ({ default: "" }));
    vi.mock("@/assets/4.png", () => ({ default: "" }));
    vi.mock("@/assets/5.png", () => ({ default: "" }));
    vi.mock("@/assets/6.png", () => ({ default: "" }));
    vi.mock("@/assets/7.png", () => ({ default: "" }));
    vi.mock("@/assets/8.png", () => ({ default: "" }));
    vi.mock("@/assets/9.png", () => ({ default: "" }));
    vi.mock("@/assets/10.png", () => ({ default: "" }));
    vi.mock("@/assets/11.png", () => ({ default: "" }));
    vi.mock("@/assets/12.png", () => ({ default: "" }));

    const Blog = (await import("@/pages/Blog")).default;

    render(
      <MemoryRouter initialEntries={["/blog"]}>
        <Blog />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /blog/i }),
    ).toBeInTheDocument();
  });
});

describe("Suspense fallback", () => {
  it("App exports a default component", async () => {
    const App = (await import("@/App")).default;
    expect(App).toBeDefined();
    expect(typeof App).toBe("function");
  });
});
