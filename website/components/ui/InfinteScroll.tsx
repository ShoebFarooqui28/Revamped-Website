"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteScroll = ({
  techStack,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const items = Array.from(scrollerRef.current.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current!.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {techStack.map((tech, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center justify-center shrink-0 w-12 h-12"
          >
            <div className="text-3xl">{tech.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
