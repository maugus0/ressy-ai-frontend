import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HelpCenter from "@/pages/HelpCenter";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderHelpCenter = () =>
  render(
    <MemoryRouter>
      <HelpCenter />
    </MemoryRouter>,
  );

describe("HelpCenter page", () => {
  it("renders the page title", () => {
    renderHelpCenter();
    expect(
      screen.getByRole("heading", { level: 1, name: /help center/i }),
    ).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    renderHelpCenter();
    expect(
      screen.getByText(/find answers to common questions/i),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderHelpCenter();
    expect(document.title).toBe("Help Center | RessyAI");
  });

  it("renders the contact CTA", () => {
    renderHelpCenter();
    expect(screen.getByText(/still need help/i)).toBeInTheDocument();
    const emails = screen.getAllByText("info@ressy.ai");
    expect(emails.length).toBeGreaterThan(0);
  });

  describe("search", () => {
    it("has a search input with label", () => {
      renderHelpCenter();
      const input = screen.getByLabelText(/search help center questions/i);
      expect(input).toBeInTheDocument();
    });

    it("filters FAQ items based on search query", async () => {
      const user = userEvent.setup();
      renderHelpCenter();

      const input = screen.getByPlaceholderText(/search questions/i);
      await user.type(input, "call forwarding");

      // Should show results that match "call forwarding"
      expect(screen.getByText(/result/i)).toBeInTheDocument();
    });

    it("shows no results message for non-matching query", async () => {
      const user = userEvent.setup();
      renderHelpCenter();

      const input = screen.getByPlaceholderText(/search questions/i);
      await user.type(input, "xyznonexistentquery123");

      const noResults = screen.getAllByText(/no results found/i);
      expect(noResults.length).toBeGreaterThan(0);
    });

    it("clears search when X button is clicked", async () => {
      const user = userEvent.setup();
      renderHelpCenter();

      const input = screen.getByPlaceholderText(/search questions/i);
      await user.type(input, "call forwarding");

      const clearBtn = screen.getByLabelText(/clear search/i);
      await user.click(clearBtn);

      expect(input).toHaveValue("");
    });

    it("search is case insensitive", async () => {
      const user = userEvent.setup();
      renderHelpCenter();

      const input = screen.getByPlaceholderText(/search questions/i);
      await user.type(input, "WHAT IS RESSYAI");

      // Should still find results
      expect(screen.queryByText(/no results found/i)).not.toBeInTheDocument();
    });
  });

  describe("FAQ categories", () => {
    it("renders category headings", () => {
      renderHelpCenter();
      expect(screen.getByText(/Getting Started/)).toBeInTheDocument();
      expect(screen.getByText(/Setup & Onboarding/)).toBeInTheDocument();
    });

    it("renders FAQ questions", () => {
      renderHelpCenter();
      expect(screen.getByText("What is RessyAI?")).toBeInTheDocument();
      expect(screen.getByText("How does RessyAI work?")).toBeInTheDocument();
    });
  });
});
