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
    // The headline text is split across multiple elements (text nodes and a span),
    // so we use a function matcher to find text that spans elements
    const headlines = screen.getAllByText((content, element) => {
      // Check if the element is an h1 and contains the expected text
      const hasText =
        element?.textContent?.includes("Meet Ressy") &&
        element?.textContent?.includes("all-in-one AI receptionist") &&
        element?.textContent?.includes("that books, answers, and follows up");
      return hasText || false;
    });
    expect(headlines.length).toBeGreaterThan(0);
    expect(headlines[0]).toBeInTheDocument();
  });
});
