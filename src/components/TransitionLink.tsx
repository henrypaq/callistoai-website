"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  beginViewTransition,
  endViewTransition,
  waitForNav,
} from "@/lib/nav-transition";

export function TransitionLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  "aria-current"?: "page";
}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }
        if (typeof document.startViewTransition !== "function") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        event.preventDefault();
        beginViewTransition();
        document
          .startViewTransition(async () => {
            const settled = waitForNav();
            router.push(href);
            await settled;
          })
          .finished.finally(endViewTransition);
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
