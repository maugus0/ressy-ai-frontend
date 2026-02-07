import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogPost from "@/pages/BlogPost";
import { ContentBlockRenderer } from "@/pages/BlogPost";
import type { BlogContentBlock } from "@/data/blogPosts";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  cleanup();
});

const renderBlogPost = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/blog/${slug}`]}>
      <Routes>
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>,
  );

describe("BlogPost detail page", () => {
  describe("valid slug", () => {
    it("renders the correct post title", () => {
      renderBlogPost("why-we-built-ressyai");
      expect(
        screen.getByRole("heading", {
          level: 1,
          name: /why we built ressyai/i,
        }),
      ).toBeInTheDocument();
    });

    it("sets document title to the post title", () => {
      renderBlogPost("why-we-built-ressyai");
      expect(document.title).toContain("Why We Built RessyAI");
      expect(document.title).toContain("RessyAI");
    });

    it("displays the category badge", () => {
      renderBlogPost("why-we-built-ressyai");
      expect(screen.getByText("Engineering")).toBeInTheDocument();
    });

    it("displays author and date", () => {
      renderBlogPost("why-we-built-ressyai");
      expect(screen.getByText("RessyAI Engineering Team")).toBeInTheDocument();
      expect(screen.getByText("January 22, 2026")).toBeInTheDocument();
      expect(screen.getByText("6 min read")).toBeInTheDocument();
    });

    it("renders back to blog links", () => {
      renderBlogPost("why-we-built-ressyai");
      const backLinks = screen.getAllByText("Back to Blog");
      expect(backLinks.length).toBe(2); // top and bottom
    });

    it("renders content blocks", () => {
      renderBlogPost("why-we-built-ressyai");
      // Check for a paragraph from the engineering post
      expect(
        screen.getByText(/we didn't start with a question like/i),
      ).toBeInTheDocument();
    });
  });

  describe("invalid slug", () => {
    it("shows not found message", () => {
      renderBlogPost("non-existent-slug");
      expect(
        screen.getByRole("heading", { name: /post not found/i }),
      ).toBeInTheDocument();
    });

    it("sets document title to not found", () => {
      renderBlogPost("non-existent-slug");
      expect(document.title).toBe("Post Not Found | RessyAI");
    });

    it("has a link back to the blog", () => {
      renderBlogPost("non-existent-slug");
      expect(screen.getByText("Back to Blog")).toBeInTheDocument();
    });
  });

  describe("sales post", () => {
    it("renders with Sales badge", () => {
      renderBlogPost("why-we-dont-sell-to-everyone");
      expect(screen.getByText("Sales")).toBeInTheDocument();
    });
  });

  describe("product post", () => {
    it("renders with Product badge", () => {
      renderBlogPost("missed-calls-cost-canadian-businesses");
      expect(screen.getByText("Product")).toBeInTheDocument();
    });
  });
});

describe("ContentBlockRenderer", () => {
  const renderBlock = (block: BlogContentBlock) =>
    render(<ContentBlockRenderer block={block} />);

  it("renders a paragraph", () => {
    renderBlock({ type: "paragraph", text: "Test paragraph text" });
    expect(screen.getByText("Test paragraph text")).toBeInTheDocument();
  });

  it("renders a heading", () => {
    renderBlock({ type: "heading", text: "Test Heading" });
    expect(
      screen.getByRole("heading", { level: 2, name: "Test Heading" }),
    ).toBeInTheDocument();
  });

  it("renders a subheading", () => {
    renderBlock({ type: "subheading", text: "Test Subheading" });
    expect(
      screen.getByRole("heading", { level: 3, name: "Test Subheading" }),
    ).toBeInTheDocument();
  });

  it("renders bullet items", () => {
    renderBlock({
      type: "bullets",
      items: ["Item one", "Item two", "Item three"],
    });
    expect(screen.getByText("Item one")).toBeInTheDocument();
    expect(screen.getByText("Item two")).toBeInTheDocument();
    expect(screen.getByText("Item three")).toBeInTheDocument();
  });

  it("renders highlight callout as blockquote", () => {
    renderBlock({
      type: "callout",
      calloutStyle: "highlight",
      text: "Highlight text",
    });
    expect(screen.getByText("Highlight text")).toBeInTheDocument();
  });

  it("renders CTA callout", () => {
    renderBlock({
      type: "callout",
      calloutStyle: "cta",
      text: "CTA text content",
    });
    expect(screen.getByText("CTA text content")).toBeInTheDocument();
  });

  it("renders phone callout with phone link", () => {
    renderBlock({
      type: "callout",
      calloutStyle: "phone",
      text: "Call our live test restaurant:\nRessy Diner — +1 (236) 304-0873",
    });
    const phoneLink = screen.getByRole("link");
    expect(phoneLink).toHaveAttribute("href", "tel:+12363040873");
  });

  it("renders divider as hr", () => {
    const { container } = renderBlock({ type: "divider" });
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("returns null for unknown type", () => {
    const { container } = renderBlock({
      type: "unknown" as BlogContentBlock["type"],
    });
    expect(container.innerHTML).toBe("");
  });
});
