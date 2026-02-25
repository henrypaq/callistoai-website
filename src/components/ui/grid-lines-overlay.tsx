import React from "react";

// Fixed, full-page vertical grid lines overlay.
// Matches the page grid container: max-w-7xl, px-8, 5 evenly spaced lines.
// Use on specific pages to extend guide lines behind the global header.
export default function GridLinesOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="h-full max-w-7xl mx-auto px-8">
        <div className="relative h-full flex justify-between">
            {Array.from({ length: 5 }).map((_, i) => {
              const isOuter = i === 0 || i === 4;
              const base = "h-full opacity-30"; // subtle over black background
              return (
                <div
                  key={i}
                  className={`w-0 border-l ${isOuter ? "border-solid" : "border-dashed"} border-gray-400 ${base}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}


