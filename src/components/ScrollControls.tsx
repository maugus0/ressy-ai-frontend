import { useCallback, useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const ScrollControls = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;
      const docH =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        ) || document.body.scrollHeight;
      const atTop = scrollY <= 2;
      const atBottom = scrollY + viewportH >= docH - 2;
      setShowTop(!atTop);
      setShowBottom(!atBottom);
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  // Get all scrollable sections on the page
  const getSections = useCallback((): HTMLElement[] => {
    // Get all section elements
    const sections = Array.from(document.querySelectorAll("section"));

    // Also get elements with IDs that are likely sections
    const sectionIds = [
      "voice-agents",
      "roi",
      "pricing",
      "usecases",
      "faq",
      "dashboard",
      "integrations",
    ];

    const idElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Combine and deduplicate
    const allSections = [...sections, ...idElements];
    const uniqueSections = Array.from(
      new Map(allSections.map((el) => [el, el])).values(),
    );

    // Sort by position on page
    return uniqueSections.sort((a, b) => {
      const aTop = a.getBoundingClientRect().top + window.pageYOffset;
      const bTop = b.getBoundingClientRect().top + window.pageYOffset;
      return aTop - bTop;
    });
  }, []);

  // Find the current section based on scroll position
  const getCurrentSection = useCallback((): {
    index: number;
    section: HTMLElement | null;
  } => {
    const sections = getSections();
    if (sections.length === 0) {
      return { index: -1, section: null };
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    const docH =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      ) || document.body.scrollHeight;
    const navOffset = 80; // approximate fixed navbar height

    // Handle edge cases: at top or bottom of page
    const atTop = scrollY <= 2;
    const atBottom = scrollY + viewportH >= docH - 2;

    if (atTop && sections.length > 0) {
      return { index: 0, section: sections[0] };
    }

    if (atBottom && sections.length > 0) {
      return {
        index: sections.length - 1,
        section: sections[sections.length - 1],
      };
    }

    // Find the section that is currently most visible in the viewport
    let bestIndex = 0;
    let maxVisibleRatio = 0;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionBottom = sectionTop + rect.height;

      // Check if section is in viewport
      const viewportTop = scrollY + navOffset;
      const viewportBottom = scrollY + viewportH;

      // Calculate visible portion
      const visibleTop = Math.max(sectionTop, viewportTop);
      const visibleBottom = Math.min(sectionBottom, viewportBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;

      // Track the section with the most visible area
      if (visibleRatio > maxVisibleRatio) {
        maxVisibleRatio = visibleRatio;
        bestIndex = i;
      }
    }

    // If we found a section with significant visibility, use it
    if (maxVisibleRatio > 0.1) {
      return { index: bestIndex, section: sections[bestIndex] };
    }

    // If no section is clearly in view, find the closest one above the viewport
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const viewportCenter = scrollY + navOffset + viewportH / 2;
      const distance = Math.abs(sectionTop - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    return { index: closestIndex, section: sections[closestIndex] };
  }, [getSections]);

  const scrollToNextSection = useCallback(() => {
    const sections = getSections();
    if (sections.length === 0) {
      // If no sections found, scroll to bottom
      const height =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        ) || document.body.scrollHeight;
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top: height, behavior: "smooth" });
      } else {
        window.scrollTo(0, height);
      }
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const atTop = scrollY <= 2;

    // If at the very top, scroll to bottom (like the old behavior)
    if (atTop) {
      const height =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        ) || document.body.scrollHeight;
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top: height, behavior: "smooth" });
      } else {
        window.scrollTo(0, height);
      }
      return;
    }

    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    const navOffset = 80;
    const viewportBottom = scrollY + viewportH;

    // Check if we're in the FinalCTA section ("Try RessyAI Today" section) - if so, scroll to bottom
    const { index: currentIndex, section: currentSection } =
      getCurrentSection();
    if (currentSection) {
      const sectionText = currentSection.textContent || "";
      if (
        sectionText.includes("Try RessyAI Today") ||
        sectionText.includes("No Risk, All Reward")
      ) {
        // We're in the FinalCTA section, scroll to bottom
        const height =
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
          ) || document.body.scrollHeight;
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({ top: height, behavior: "smooth" });
        } else {
          window.scrollTo(0, height);
        }
        return;
      }
    }

    // Check if we're in the second last section - if so, scroll to bottom
    if (currentIndex >= 0 && currentIndex === sections.length - 2) {
      // We're in the second last section, scroll to bottom
      const height =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        ) || document.body.scrollHeight;
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top: height, behavior: "smooth" });
      } else {
        window.scrollTo(0, height);
      }
      return;
    }

    // Find the next section that is below the current viewport
    let nextSection: HTMLElement | null = null;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;

      // If section is below the viewport (with some threshold), it's our next target
      if (sectionTop > viewportBottom - navOffset + 50) {
        nextSection = section;
        break;
      }
    }

    // If no next section found below, check if we're at the last section
    if (!nextSection) {
      if (currentIndex >= 0 && currentIndex < sections.length - 1) {
        // We're in a section but there's a next one - use it
        nextSection = sections[currentIndex + 1];
      } else if (currentIndex >= sections.length - 1) {
        // We're at the last section, scroll to bottom
        const height =
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
          ) || document.body.scrollHeight;
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({ top: height, behavior: "smooth" });
        } else {
          window.scrollTo(0, height);
        }
        return;
      }
    }

    if (!nextSection) {
      // Fallback: try to get next section by index
      if (currentIndex >= 0 && currentIndex < sections.length - 1) {
        nextSection = sections[currentIndex + 1];
      }
    }

    if (!nextSection) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetY =
      nextSection.getBoundingClientRect().top + window.pageYOffset - navOffset;

    if (prefersReduced) {
      window.scrollTo(0, targetY);
    } else if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      // Fallback JS animation
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const duration = 800;
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [getSections, getCurrentSection]);

  const scrollToPreviousSection = useCallback(() => {
    const sections = getSections();
    if (sections.length === 0) {
      // If no sections found, scroll to top
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    const { index } = getCurrentSection();

    // If we're at the first section, scroll to the very top (Hero area)
    if (index <= 0) {
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    const prevIndex = index - 1;
    const targetSection = sections[prevIndex];

    if (!targetSection) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navOffset = 80;
    const targetY =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      navOffset;

    if (prefersReduced) {
      window.scrollTo(0, targetY);
    } else if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      // Fallback JS animation
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const duration = 800;
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [getSections, getCurrentSection]);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2 sm:gap-3">
      {showTop && (
        <button
          aria-label="Scroll to previous section"
          onClick={scrollToPreviousSection}
          className="rounded-full bg-black text-white p-3 sm:p-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      {showBottom && (
        <button
          aria-label="Scroll to next section"
          onClick={scrollToNextSection}
          className="rounded-full bg-white text-black border border-gray-300 p-3 sm:p-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollControls;
