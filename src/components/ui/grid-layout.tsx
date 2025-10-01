import React from "react";

type GridLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GridLayout({ children, className }: GridLayoutProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}


