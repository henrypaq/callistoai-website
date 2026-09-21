"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isViewTransitioning, signalNav } from "@/lib/nav-transition";

export function PageFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [node, setNode] = useState(children);
  const [mode, setMode] = useState<"in" | "out" | "idle">("in");
  const pathRef = useRef(pathname);

  useEffect(() => {
    signalNav();
  }, [pathname]);

  useEffect(() => {
    if (pathRef.current === pathname) {
      setNode(children);
      return;
    }

    pathRef.current = pathname;

    if (isViewTransitioning()) {
      setNode(children);
      setMode("idle");
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setNode(children);
      setMode("idle");
      return;
    }

    setMode("out");
    const swap = window.setTimeout(() => {
      setNode(children);
      setMode("in");
    }, 200);
    return () => window.clearTimeout(swap);
  }, [pathname, children]);

  const className =
    mode === "out"
      ? "page-swap is-leaving"
      : mode === "in"
        ? "page-swap is-entering"
        : "page-swap";

  return <div className={className}>{node}</div>;
}
