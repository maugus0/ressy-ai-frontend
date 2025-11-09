import "@testing-library/jest-dom";
import { vi } from "vitest";

if (!("matchMedia" in window)) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

if (typeof window.IntersectionObserver === "undefined") {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = "0px";
    readonly thresholds: ReadonlyArray<number> = [];

    constructor(
      private callback: IntersectionObserverCallback,
      private _options?: IntersectionObserverInit,
    ) {}

    disconnect() {
      // no-op
    }

    observe(target: Element) {
      const entry = {
        isIntersecting: true,
        target,
        intersectionRatio: 1,
        time: Date.now(),
        boundingClientRect: target.getBoundingClientRect(),
        intersectionRect: target.getBoundingClientRect(),
        rootBounds: target.getBoundingClientRect(),
      } as IntersectionObserverEntry;

      this.callback([entry], this);
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }

    unobserve() {
      // no-op
    }
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}
