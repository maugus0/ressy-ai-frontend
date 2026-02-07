import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

// Mock ALL asset imports before importing the component
vi.mock("@/assets/1.png", () => ({ default: "slide1.png" }));
vi.mock("@/assets/2.png", () => ({ default: "slide2.png" }));
vi.mock("@/assets/3.png", () => ({ default: "slide3.png" }));
vi.mock("@/assets/4.png", () => ({ default: "slide4.png" }));
vi.mock("@/assets/5.png", () => ({ default: "slide5.png" }));
vi.mock("@/assets/6.png", () => ({ default: "slide6.png" }));
vi.mock("@/assets/7.png", () => ({ default: "slide7.png" }));
vi.mock("@/assets/8.png", () => ({ default: "slide8.png" }));
vi.mock("@/assets/9.png", () => ({ default: "slide9.png" }));
vi.mock("@/assets/10.png", () => ({ default: "slide10.png" }));
vi.mock("@/assets/11.png", () => ({ default: "slide11.png" }));
vi.mock("@/assets/12.png", () => ({ default: "slide12.png" }));

// Mock embla-carousel-react to avoid DOM measurement issues in jsdom
vi.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => {
    const ref = { current: null };
    return [ref, undefined];
  },
}));

// Mock the Carousel UI component to render children simply
vi.mock("@/components/ui/carousel", () => ({
  Carousel: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    setApi?: unknown;
    opts?: unknown;
    className?: string;
  }) => (
    <div data-testid="carousel" className={props.className}>
      {children}
    </div>
  ),
  CarouselContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel-content">{children}</div>
  ),
  CarouselItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel-item">{children}</div>
  ),
  CarouselPrevious: (props: { "aria-label"?: string; className?: string }) => (
    <button aria-label={props["aria-label"]}>Previous</button>
  ),
  CarouselNext: (props: { "aria-label"?: string; className?: string }) => (
    <button aria-label={props["aria-label"]}>Next</button>
  ),
}));

import Onboarding from "@/pages/Onboarding";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderOnboarding = () =>
  render(
    <MemoryRouter>
      <Onboarding />
    </MemoryRouter>,
  );

describe("Onboarding page", () => {
  it("renders the page title", () => {
    renderOnboarding();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /getting started with ressyai/i,
      }),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderOnboarding();
    expect(document.title).toBe("Getting Started | RessyAI");
  });

  it("renders subtitle", () => {
    renderOnboarding();
    expect(
      screen.getByText(/follow our step-by-step guide/i),
    ).toBeInTheDocument();
  });

  describe("onboarding steps", () => {
    it("renders all 10 step titles", () => {
      renderOnboarding();
      expect(screen.getByText("Admin Setup")).toBeInTheDocument();
      expect(
        screen.getByText("Restaurant Details Configuration"),
      ).toBeInTheDocument();
      expect(screen.getByText("Call Forwarding Setup")).toBeInTheDocument();
      expect(screen.getByText("Menu & FAQ Configuration")).toBeInTheDocument();
      expect(
        screen.getByText("Agent Capabilities Configuration"),
      ).toBeInTheDocument();
      expect(screen.getByText("Client Training")).toBeInTheDocument();
      expect(
        screen.getByText("Order & Reservation Workflow"),
      ).toBeInTheDocument();
      expect(screen.getByText("Escalation Setup")).toBeInTheDocument();
      expect(screen.getByText("Final Pre-Launch Check")).toBeInTheDocument();
      expect(screen.getByText("Go Live")).toBeInTheDocument();
    });

    it("renders step numbers 1-10", () => {
      renderOnboarding();
      for (let i = 1; i <= 10; i++) {
        expect(screen.getByText(String(i))).toBeInTheDocument();
      }
    });

    it("renders bullet points for steps that have them", () => {
      renderOnboarding();
      expect(
        screen.getByText("Creates your restaurant profile"),
      ).toBeInTheDocument();
    });

    it("renders postText for steps that have it", () => {
      renderOnboarding();
      expect(
        screen.getByText("Zero friction on your end."),
      ).toBeInTheDocument();
    });
  });

  describe("slideshow", () => {
    it("renders images with alt text", () => {
      renderOnboarding();
      const images = screen.getAllByRole("img");
      // With mocked carousel, all 12 images should render in DOM
      expect(images.length).toBeGreaterThanOrEqual(1);
      const firstImage = images.find((img) =>
        img.getAttribute("alt")?.includes("RessyAI onboarding step"),
      );
      expect(firstImage).toBeTruthy();
    });

    it("renders previous and next buttons", () => {
      renderOnboarding();
      expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
      expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
    });
  });

  describe("contact CTA", () => {
    it("shows contact email", () => {
      renderOnboarding();
      const emails = screen.getAllByText("info@ressy.ai");
      expect(emails.length).toBeGreaterThan(0);
    });
  });
});
