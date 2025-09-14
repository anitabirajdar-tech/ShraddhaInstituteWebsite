import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component should only scroll to the top on route change.
// If your app is scrolling to the bottom, make sure you do NOT have any code like:
// window.scrollTo(0, document.body.scrollHeight);
// window.scrollTo(0, document.body.offsetHeight);
// window.scrollTo(0, document.documentElement.scrollHeight);
// in this file or anywhere else in your codebase.

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Only scroll to top, not bottom
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
