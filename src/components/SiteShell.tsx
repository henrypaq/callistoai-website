"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CONTACT_EMAIL } from "@/lib/content";
import { signalNav } from "@/lib/nav-transition";

export function SiteShell({
  children,
  home = false,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const pathname = usePathname();
  const isHome = home || pathname === "/";
  const current = pathname.startsWith("/work")
    ? "work"
    : pathname.startsWith("/notes")
      ? "notes"
      : undefined;

  useEffect(() => {
    signalNav();
  }, [pathname]);

  return (
    <div className={isHome ? "shell shell-home" : "shell"}>
      {!isHome ? (
        <header className="mast">
          <TransitionLink href="/" className="mast-name">
            callisto
          </TransitionLink>
        </header>
      ) : null}
      <div className="shell-body">{children}</div>
      <nav className="dock" aria-label="primary">
        <TransitionLink href="/work" aria-current={current === "work" ? "page" : undefined}>
          work
        </TransitionLink>
        <TransitionLink href="/notes" aria-current={current === "notes" ? "page" : undefined}>
          notes
        </TransitionLink>
        <a href={`mailto:${CONTACT_EMAIL}`}>contact</a>
      </nav>
    </div>
  );
}
