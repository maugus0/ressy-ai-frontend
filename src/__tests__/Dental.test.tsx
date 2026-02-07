import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Dental from "@/pages/Dental";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderPage = () =>
  render(
    <MemoryRouter>
      <Dental />
    </MemoryRouter>,
  );

describe("Dental page", () => {
  it("renders the page heading", () => {
    renderPage();
    expect(
      screen.getByRole("heading", { level: 1, name: /chairs full/i }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderPage();
    expect(document.title).toBe("Dental | RessyAI");
  });

  it("renders key content", () => {
    renderPage();
    expect(screen.getByText(/cleanings/i)).toBeInTheDocument();
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
