import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Salons from "@/pages/Salons";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Salons />
    </MemoryRouter>,
  );

describe("Salons page", () => {
  it("renders the page heading", () => {
    renderPage();
    expect(
      screen.getByRole("heading", { level: 1, name: /reduces no-shows/i }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("Salons | RessyAI");
  });

  it("renders key content sections", () => {
    renderPage();
    const headings = screen.getAllByRole("heading");
    // Multiple headings: h1 + at least one h2
    expect(headings.length).toBeGreaterThan(1);
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
