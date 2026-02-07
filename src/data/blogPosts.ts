export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: "marketing" | "sales" | "engineering";
  slug: string;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [];
