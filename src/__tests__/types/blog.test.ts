import { describe, expect, it } from "vitest";
import { CATEGORY_BADGE, ACCENT_COLORS, getCategoryBadge } from "@/types/blog";

describe("CATEGORY_BADGE", () => {
  it("has entries for all three categories", () => {
    expect(CATEGORY_BADGE.marketing).toBeDefined();
    expect(CATEGORY_BADGE.engineering).toBeDefined();
    expect(CATEGORY_BADGE.sales).toBeDefined();
  });

  it("each badge has label, bg, and text properties", () => {
    for (const badge of Object.values(CATEGORY_BADGE)) {
      expect(badge.label).toBeTruthy();
      expect(badge.bg).toBeTruthy();
      expect(badge.text).toBeTruthy();
    }
  });
});

describe("ACCENT_COLORS", () => {
  it("has entries for all three categories", () => {
    expect(ACCENT_COLORS.marketing).toBeDefined();
    expect(ACCENT_COLORS.engineering).toBeDefined();
    expect(ACCENT_COLORS.sales).toBeDefined();
  });
});

describe("getCategoryBadge", () => {
  it("returns correct badge for marketing", () => {
    const badge = getCategoryBadge("marketing");
    expect(badge.label).toBe("Product");
  });

  it("returns correct badge for engineering", () => {
    const badge = getCategoryBadge("engineering");
    expect(badge.label).toBe("Engineering");
  });

  it("returns correct badge for sales", () => {
    const badge = getCategoryBadge("sales");
    expect(badge.label).toBe("Sales");
  });

  it("returns marketing badge as fallback for unknown category", () => {
    const badge = getCategoryBadge("unknown");
    expect(badge).toEqual(CATEGORY_BADGE.marketing);
  });

  it("returns marketing badge for empty string", () => {
    const badge = getCategoryBadge("");
    expect(badge).toEqual(CATEGORY_BADGE.marketing);
  });
});
