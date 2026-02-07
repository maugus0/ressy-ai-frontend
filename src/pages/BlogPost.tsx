import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, type BlogContentBlock } from "@/data/blogPosts";
import { ArrowLeft, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORY_BADGE: Record<
  string,
  { label: string; bg: string; text: string }
> = {
  marketing: { label: "Product", bg: "bg-blue-50", text: "text-blue-700" },
  engineering: {
    label: "Engineering",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  sales: { label: "Sales", bg: "bg-orange-50", text: "text-orange-700" },
};

const ContentBlockRenderer = ({ block }: { block: BlogContentBlock }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-8 mb-3">
          {block.text}
        </h3>
      );

    case "bullets":
      return (
        <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 text-base lg:text-lg leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "callout":
      if (block.calloutStyle === "phone") {
        const lines = block.text?.split("\n") ?? [];
        // Extract phone number from text
        const phoneMatch = block.text?.match(/\+1\s*\(\d{3}\)\s*\d{3}-\d{4}/);
        const phoneNumber = phoneMatch?.[0];
        const phoneHref = phoneNumber
          ? `tel:${phoneNumber.replace(/[\s()-]/g, "")}`
          : undefined;

        return (
          <div className="my-8 rounded-xl border border-purple-200 bg-purple-50/50 p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Phone className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                {lines[0]?.replace("📞 ", "").replace("📞", "") ?? ""}
              </span>
            </div>
            {lines.slice(1).map((line, i) => {
              const trimmed = line.replace(/^.*—\s*/, "");
              const nameMatch = line.match(/^(.*?)—/);
              const name = nameMatch?.[1]?.trim();
              if (phoneHref && trimmed.match(/\+1/)) {
                return (
                  <div key={i}>
                    {name && (
                      <p className="text-lg font-bold text-gray-900 mb-2">
                        {name}
                      </p>
                    )}
                    <a
                      href={phoneHref}
                      className="text-2xl sm:text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      {trimmed.trim()}
                    </a>
                  </div>
                );
              }
              return (
                <p key={i} className="text-lg font-bold text-gray-900 mb-2">
                  {line.trim()}
                </p>
              );
            })}
          </div>
        );
      }

      if (block.calloutStyle === "cta") {
        return (
          <div className="my-8 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-6 sm:px-8 sm:py-7">
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              {block.text}
            </p>
          </div>
        );
      }

      // highlight (default)
      return (
        <blockquote className="my-6 border-l-4 border-purple-400 bg-purple-50/50 px-5 sm:px-6 py-4 rounded-r-lg">
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed italic">
            {block.text}
          </p>
        </blockquote>
      );

    case "divider":
      return <hr className="my-8 border-gray-200" />;

    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | RessyAI`;
    } else {
      document.title = "Post Not Found | RessyAI";
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-20 sm:pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Post not found
            </h1>
            <p className="text-gray-600 mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const badge = CATEGORY_BADGE[post.category];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back link and category badge */}
          <div className="flex flex-col gap-4 mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm font-medium transition-colors w-fit"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span
              className={cn(
                "inline-block w-fit text-xs font-semibold rounded-full px-3 py-1",
                badge.bg,
                badge.text,
              )}
            >
              {badge.label}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm lg:text-base text-gray-500 mb-8">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.displayDate}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <hr className="border-gray-200 mb-8" />

          {/* Content */}
          <div>
            {post.content.map((block, idx) => (
              <ContentBlockRenderer key={idx} block={block} />
            ))}
          </div>

          <hr className="border-gray-200 mt-8 mb-8" />

          {/* Bottom back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
