import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Restaurant from "@/pages/Restaurant";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Restaurant />
    </MemoryRouter>,
  );

describe("Restaurant page", () => {
  it("renders the page heading", () => {
    renderPage();
    expect(
      screen.getByRole("heading", { level: 1, name: /seats more guests/i }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("Restaurants | RessyAI");
  });

  it("renders key content", () => {
    renderPage();
    // Text may be split across multiple elements
    expect(screen.getByText(/handle calls/i)).toBeInTheDocument();
  });

  it("renders schedule demo CTA", () => {
    renderPage();
    const links = screen.getAllByRole("link");
    const demoLinks = links.filter(
      (link) => link.getAttribute("href") === "/schedule-demo",
    );
    expect(demoLinks.length).toBeGreaterThan(0);
  });
});
