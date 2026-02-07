import { describe, expect, it, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

describe("useDocumentTitle", () => {
  afterEach(() => {
    document.title = "";
  });

  it("sets document title with RessyAI suffix", () => {
    renderHook(() => useDocumentTitle("Blog"));
    expect(document.title).toBe("Blog | RessyAI");
  });

  it("updates title when value changes", () => {
    const { rerender } = renderHook(({ title }) => useDocumentTitle(title), {
      initialProps: { title: "Blog" },
    });
    expect(document.title).toBe("Blog | RessyAI");

    rerender({ title: "Help Center" });
    expect(document.title).toBe("Help Center | RessyAI");
  });
});
