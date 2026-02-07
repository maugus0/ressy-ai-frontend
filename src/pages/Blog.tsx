import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

type FilterTab = "all" | "marketing" | "engineering" | "sales";

const TABS: { label: string; value: FilterTab }[] = [
  { label: "All", value: "all" },
  { label: "Product", value: "marketing" },
  { label: "Engineering", value: "engineering" },
  { label: "Sales", value: "sales" },
];

const CATEGORY_BADGE: Record<
  string,
  { label: string; bg: string; text: string }
> = {
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

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  useEffect(() => {
    document.title = "Blog | RessyAI";
  }, []);

  const sortedPosts = useMemo(
    () => [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  const filteredPosts = useMemo(
    () =>
      activeFilter === "all"
        ? sortedPosts
        : sortedPosts.filter((p) => p.category === activeFilter),
    [activeFilter, sortedPosts],
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Blog
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Insights, updates, and stories from the RessyAI team.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-10">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeFilter === tab.value
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No posts in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const badge = CATEGORY_BADGE[post.category];
                return (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {/* Accent strip */}
                    <div
                      className={cn(
                        "h-2",
                        post.category === "marketing" && "bg-blue-400",
                        post.category === "engineering" && "bg-emerald-400",
                        post.category === "sales" && "bg-orange-400",
                      )}
                    />
                    <div className="p-5 sm:p-6">
                      <span
                        className={cn(
                          "inline-block text-xs font-semibold rounded-full px-3 py-1 mb-3",
                          badge.bg,
                          badge.text,
                        )}
                      >
                        {badge.label}
                      </span>
                      <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{post.displayDate}</span>
                        <span className="mx-2">·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
