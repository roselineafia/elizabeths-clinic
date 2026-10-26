"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="fixed bottom-4 left-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink shadow-md hover:border-brand hover:text-brand"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
