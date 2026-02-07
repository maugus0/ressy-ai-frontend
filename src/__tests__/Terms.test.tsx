import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Terms from "@/pages/Terms";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Terms />
    </MemoryRouter>,
  );

describe("Terms page", () => {
  it("renders the page heading", () => {
    renderPage();
    expect(
      screen.getByRole("heading", { level: 1, name: /terms of service/i }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("Terms of Service | RessyAI");
  });

  it("renders main content", () => {
    renderPage();
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(1);
  });
});
