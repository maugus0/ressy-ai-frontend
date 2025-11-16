import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToBottomProps = {
  enabled?: boolean;
};

const ScrollToBottom = ({ enabled = false }: ScrollToBottomProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;
    window.scrollTo({ top: document.body.scrollHeight, behavior: "auto" });
  }, [pathname, enabled]);

  return null;
};

export default ScrollToBottom;
