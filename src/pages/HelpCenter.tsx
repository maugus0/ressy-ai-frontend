import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/data/helpCenterData";
import { Search, X } from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Help Center | RessyAI";
  }, []);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return faqCategories;

    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query) ||
            item.bulletPoints?.some((bp) => bp.toLowerCase().includes(query)) ||
            item.postText?.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Help Center
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Find answers to common questions about RessyAI.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 sm:mb-10">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-10 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-500 text-center mt-3">
                {totalResults === 0
                  ? "No results found."
                  : `${totalResults} result${totalResults !== 1 ? "s" : ""} found.`}
              </p>
            )}
          </div>

          {/* FAQ Categories */}
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-2">No results found</p>
              <p className="text-gray-400 text-sm">
                Try a different search term or{" "}
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-purple-600 hover:underline"
                >
                  clear your search
                </button>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredCategories.map((category) => (
                <section key={category.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl" role="img" aria-hidden="true">
                      {category.icon}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion
                    type="multiple"
                    className="rounded-xl border border-gray-200 overflow-hidden"
                  >
                    {category.items.map((item, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`${category.title}-${idx}`}
                        className="border-gray-200 px-4 sm:px-6"
                      >
                        <AccordionTrigger className="text-left text-gray-900 hover:no-underline hover:text-purple-600 text-sm sm:text-base font-medium py-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          <p className={item.bulletPoints ? "mb-3" : ""}>
                            {item.answer}
                          </p>
                          {item.bulletPoints && (
                            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 text-gray-600">
                              {item.bulletPoints.map((point, bIdx) => (
                                <li key={bIdx}>{point}</li>
                              ))}
                            </ul>
                          )}
                          {item.postText && (
                            <p className="mt-3 text-gray-600">
                              {item.postText}
                            </p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Still need help?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Email us at{" "}
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

export default HelpCenter;
