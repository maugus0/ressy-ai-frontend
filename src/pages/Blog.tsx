import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { FileText } from "lucide-react";

const placeholderCards = [
  { category: "Marketing", color: "bg-pink-100" },
  { category: "Sales", color: "bg-purple-100" },
  { category: "Engineering", color: "bg-indigo-100" },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | RessyAI";
  }, []);

  if (blogPosts.length > 0) {
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

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-5">
                    <span className="inline-block text-xs font-medium text-purple-600 bg-purple-50 rounded-full px-3 py-1 mb-3 capitalize">
                      {post.category}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Coming Soon state
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

          {/* Coming Soon */}
          <div className="text-center py-12 sm:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-10 text-sm sm:text-base leading-relaxed">
              We're working on our first posts. Check back soon for updates from
              our Marketing, Sales, and Engineering teams.
            </p>
          </div>

          {/* Teaser Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {placeholderCards.map((card) => (
              <div
                key={card.category}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <div className={`h-32 ${card.color}`} />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-16 bg-gray-200 rounded-full" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded-full" />
                  <div className="h-3 w-full bg-gray-100 rounded-full" />
                  <div className="h-3 w-2/3 bg-gray-100 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Want to be notified? Reach out at{" "}
              <a
                href="mailto:info@ressy.ai"
                className="text-purple-600 hover:underline font-medium"
              >
                info@ressy.ai
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
