import { useEffect, RefObject } from "react";

/**
 * Custom hook for handling smooth scrolling on table of contents links.
 * Only handles clicks within the specified TOC container to avoid interfering
 * with other navigation components.
 *
 * @param tocContainerRef - Ref to the table of contents container element
 * @param navOffset - Offset in pixels to account for fixed navigation (default: 100)
 */
export const useTableOfContentsScroll = (
  tocContainerRef: RefObject<HTMLElement>,
  navOffset: number = 100,
) => {
  useEffect(() => {
    const handleTOCClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='#']") as HTMLAnchorElement;
      if (!link) return;

      // Only handle clicks within the table of contents container
      if (!tocContainerRef.current?.contains(link)) return;

      const hash = link.getAttribute("href");
      if (!hash || !hash.startsWith("#")) return;

      e.preventDefault();
      const targetElement = document.querySelector(hash) as HTMLElement;
      if (!targetElement) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targetY =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navOffset;

      if (prefersReduced) {
        window.scrollTo(0, targetY);
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleTOCClick);
    return () => document.removeEventListener("click", handleTOCClick);
  }, [tocContainerRef, navOffset]);
};
