import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App from "@/App";

// Mock window.scrollTo
beforeEach(() => {
  window.scrollTo = vi.fn();
});

// Mock HTMLMediaElement.prototype.load
beforeEach(() => {
  HTMLMediaElement.prototype.load = vi.fn();
});

afterEach(() => {
  cleanup();
});

describe("Main page", () => {
  it("renders the hero headline", () => {
    render(<App />);
    // There are two instances (desktop and mobile), so use getAllByText
    const headlines = screen.getAllByText(/Your all-in-one AI receptionist/i);
    expect(headlines.length).toBeGreaterThan(0);
    expect(headlines[0]).toBeInTheDocument();
  });
});
