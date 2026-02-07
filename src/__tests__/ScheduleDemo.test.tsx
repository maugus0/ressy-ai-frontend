import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ScheduleDemo from "@/pages/ScheduleDemo";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <ScheduleDemo />
    </MemoryRouter>,
  );

describe("ScheduleDemo page", () => {
  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText(/instant live demo/i)).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("Schedule Demo | RessyAI");
  });

  it("renders the demo form elements", () => {
    renderPage();
    // The DemoMockup component should render
    expect(screen.getByText(/ressy calls you/i)).toBeInTheDocument();
  });
});
