export type BlogCategory = "marketing" | "engineering" | "sales";

export interface CategoryBadgeConfig {
  label: string;
  bg: string;
  text: string;
}

export const CATEGORY_BADGE: Record<BlogCategory, CategoryBadgeConfig> = {
  marketing: {
    label: "Product",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  engineering: {
    label: "Engineering",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  sales: {
    label: "Sales",
    bg: "bg-orange-50",
    text: "text-orange-700",
  },
};

export const ACCENT_COLORS: Record<BlogCategory, string> = {
  marketing: "bg-blue-400",
  engineering: "bg-emerald-400",
  sales: "bg-orange-400",
};

export const getCategoryBadge = (category: string): CategoryBadgeConfig => {
  return CATEGORY_BADGE[category as BlogCategory] ?? CATEGORY_BADGE.marketing;
};
