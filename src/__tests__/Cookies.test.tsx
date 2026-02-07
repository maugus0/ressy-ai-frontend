import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Cookies from "@/pages/Cookies";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Cookies />
    </MemoryRouter>,
  );

describe("Cookies page", () => {
  it("renders the page heading", () => {
    renderPage();
    expect(
      screen.getByRole("heading", { level: 1, name: /cookie policy/i }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("Cookie Policy | RessyAI");
  });

  it("renders main content", () => {
    renderPage();
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(1);
  });
});
