import { PageFade } from "@/components/PageFade";
import { SiteShell } from "@/components/SiteShell";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteShell>
      <PageFade>{children}</PageFade>
    </SiteShell>
  );
}
