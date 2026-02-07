import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";

beforeEach(() => {
  window.scrollTo = vi.fn();
  HTMLMediaElement.prototype.load = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );

describe("Index page", () => {
  it("renders the hero section with heading", () => {
    renderPage();
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("RessyAI | Magic Receptionist");
  });

  it("renders the schedule a demo link", () => {
    renderPage();
    const links = screen.getAllByRole("link");
    const demoLinks = links.filter(
      (link) => link.getAttribute("href") === "/schedule-demo",
    );
    expect(demoLinks.length).toBeGreaterThan(0);
  });
});
