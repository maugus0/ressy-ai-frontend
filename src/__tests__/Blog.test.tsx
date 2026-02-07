import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Blog from "@/pages/Blog";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderBlog = () =>
  render(
    <MemoryRouter initialEntries={["/blog"]}>
      <Blog />
    </MemoryRouter>,
  );

describe("Blog listing page", () => {
  it("renders the page title", () => {
    renderBlog();
    expect(
      screen.getByRole("heading", { level: 1, name: /blog/i }),
    ).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    renderBlog();
    expect(
      screen.getByText(/insights, updates, and stories/i),
    ).toBeInTheDocument();
  });

  it("sets document title", () => {
    renderBlog();
    expect(document.title).toBe("Blog | RessyAI");
  });

  describe("filter tabs", () => {
    it("renders all four filter tabs", () => {
      renderBlog();
      expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Product" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Engineering" }),
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Sales" })).toBeInTheDocument();
    });

    it("All tab is pressed by default", () => {
      renderBlog();
      const allTab = screen.getByRole("button", { name: "All" });
      expect(allTab).toHaveAttribute("aria-pressed", "true");
    });

    it("shows all 3 posts by default", () => {
      renderBlog();
      const cards = screen.getAllByRole("heading", { level: 2 });
      expect(cards.length).toBe(3);
    });

    it("filters to Product posts only", async () => {
      const user = userEvent.setup();
      renderBlog();

      await user.click(screen.getByRole("button", { name: "Product" }));

      expect(screen.getByRole("button", { name: "Product" })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
      expect(screen.getByRole("button", { name: "All" })).toHaveAttribute(
        "aria-pressed",
        "false",
      );

      const cards = screen.getAllByRole("heading", { level: 2 });
      expect(cards.length).toBe(1);
      expect(cards[0]).toHaveTextContent(/missed calls/i);
    });

    it("filters to Engineering posts only", async () => {
      const user = userEvent.setup();
      renderBlog();

      await user.click(screen.getByRole("button", { name: "Engineering" }));

      const cards = screen.getAllByRole("heading", { level: 2 });
      expect(cards.length).toBe(1);
      expect(cards[0]).toHaveTextContent(/why we built/i);
    });

    it("filters to Sales posts only", async () => {
      const user = userEvent.setup();
      renderBlog();

      await user.click(screen.getByRole("button", { name: "Sales" }));

      const cards = screen.getAllByRole("heading", { level: 2 });
      expect(cards.length).toBe(1);
      expect(cards[0]).toHaveTextContent(/don't sell/i);
    });

    it("returns to all posts when All is clicked after filtering", async () => {
      const user = userEvent.setup();
      renderBlog();

      await user.click(screen.getByRole("button", { name: "Engineering" }));
      expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(1);

      await user.click(screen.getByRole("button", { name: "All" }));
      expect(screen.getAllByRole("heading", { level: 2 }).length).toBe(3);
    });
  });

  describe("blog cards", () => {
    it("shows post titles", () => {
      renderBlog();
      expect(
        screen.getByText(/missed calls cost canadian/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/why we built ressyai/i)).toBeInTheDocument();
      expect(
        screen.getByText(/don't sell ressyai to everyone/i),
      ).toBeInTheDocument();
    });

    it("shows post excerpts", () => {
      renderBlog();
      expect(
        screen.getByText(/every day, canadian businesses lose/i),
      ).toBeInTheDocument();
    });

    it("shows display dates and read times", () => {
      renderBlog();
      expect(screen.getByText("January 15, 2026")).toBeInTheDocument();
      expect(screen.getByText("18 min read")).toBeInTheDocument();
    });

    it("renders cards as links to the correct slugs", () => {
      renderBlog();
      const links = screen.getAllByRole("link");
      const blogLinks = links.filter((link) =>
        link.getAttribute("href")?.startsWith("/blog/"),
      );
      expect(blogLinks.length).toBe(3);
    });

    it("posts are sorted newest first", () => {
      renderBlog();
      const headings = screen.getAllByRole("heading", { level: 2 });
      // Jan 29 > Jan 22 > Jan 15
      expect(headings[0]).toHaveTextContent(/don't sell/i);
      expect(headings[1]).toHaveTextContent(/why we built/i);
      expect(headings[2]).toHaveTextContent(/missed calls/i);
    });
  });
});
