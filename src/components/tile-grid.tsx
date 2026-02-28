import type { ReactNode } from "react";

interface TileGridProps {
  children: ReactNode;
  className?: string;
}

export default function TileGrid({ children, className = "" }: TileGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 min-[901px]:grid-cols-3 ${className}`}
    >
      {children}
    </div>
  );
}
