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

  const scrollToTop = useCallback(() => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToBottom = useCallback(() => {
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
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2 sm:gap-3">
      {showTop && (
        <button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="rounded-full bg-black text-white p-3 sm:p-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      {showBottom && (
        <button
          aria-label="Scroll to bottom"
          onClick={scrollToBottom}
          className="rounded-full bg-white text-black border border-gray-300 p-3 sm:p-3.5 shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollControls;
