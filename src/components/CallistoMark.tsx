"use client";

import { useEffect, useState } from "react";
import { ThinkingOrb } from "thinking-orbs";
import { Particles } from "@/components/ui/particles";

const COUNT = 8;
const CX = 72;
const CY = 70;
const RADIUS = 48;
const START = (100 * Math.PI) / 180;
const END = (260 * Math.PI) / 180;

const NODES = Array.from({ length: COUNT }, (_, i) => {
  const t = i / (COUNT - 1);
  const angle = START + (END - START) * t;
  return {
    x: CX - RADIUS * Math.cos(angle),
    y: CY + RADIUS * Math.sin(angle),
    opacity: 0.38 + 0.62 * Math.sin(t * Math.PI),
  };
});

export function CallistoMark({
  label = "callisto",
}: {
  label?: string;
}) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div className="mark" role="img" aria-label={label}>
      {reduceMotion ? null : (
        <Particles
          className="mark-particles"
          quantity={16}
          staticity={140}
          ease={90}
          size={0.3}
          color="#b8b8c0"
          interactive={false}
        />
      )}
      {NODES.map((node, i) => (
        <span
          key={i}
          className="mark-node"
          style={{
            left: node.x - 10,
            top: node.y - 10,
            opacity: node.opacity,
          }}
        >
          <ThinkingOrb
            state="working"
            size={20}
            theme="dark"
            speed={0.45 + i * 0.04}
            paused={reduceMotion}
          />
        </span>
      ))}
    </div>
  );
}
