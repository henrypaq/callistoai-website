import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/content";

type SiteShellProps = {
  children: React.ReactNode;
  home?: boolean;
  current?: "work" | "notes";
};

export function SiteShell({ children, home = false, current }: SiteShellProps) {
  return (
    <div className={home ? "shell shell-home" : "shell"}>
      {!home ? (
        <header className="mast">
          <Link href="/" className="mast-name">
            callisto
          </Link>
        </header>
      ) : null}
      <div className="shell-body">{children}</div>
      <nav className="dock" aria-label="primary">
        <Link href="/work" aria-current={current === "work" ? "page" : undefined}>
          work
        </Link>
        <Link href="/notes" aria-current={current === "notes" ? "page" : undefined}>
          notes
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>contact</a>
      </nav>
    </div>
  );
}
