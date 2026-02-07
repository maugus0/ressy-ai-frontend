import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NotFound from "@/pages/NotFound";

beforeEach(() => {
  window.scrollTo = vi.fn();
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

const renderNotFound = () =>
  render(
    <MemoryRouter initialEntries={["/some-bad-route"]}>
      <NotFound />
    </MemoryRouter>,
  );

describe("NotFound page", () => {
  it("renders the 404 heading", () => {
    renderNotFound();
    expect(
      screen.getByRole("heading", { level: 1, name: "404" }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderNotFound();
    expect(document.title).toBe("Page Not Found | RessyAI");
  });

  it("shows description text", () => {
    renderNotFound();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it("has a link to return home", () => {
    renderNotFound();
    const link = screen.getByRole("link", { name: /return to home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
