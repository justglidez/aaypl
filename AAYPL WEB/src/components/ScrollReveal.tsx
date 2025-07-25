import React, { useEffect, useRef } from "react";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.classList.add("opacity-0");
      setTimeout(() => el.classList.remove("opacity-0"), 400);
    }
  }, []);

  return <div ref={ref} className="transition-opacity duration-700">{children}</div>;
}