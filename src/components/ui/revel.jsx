"use client";

import { useEffect, useRef, useState } from "react";
 // Assuming cn is some utility function for classnames
 import {cn} from "../../lib/utils";

export function RevealText({
  text,
  className,
  speed = "medium",
  splitBy = "word",
  threshold = 0.1,
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Split text into words or lines
  const textParts =
    splitBy === "word"
      ? text.split(" ").map((word) => word + " ")
      : text.split(". ").map((line) => line.trim() + ". ");

  // Define animation delay based on speed
  const getDelay = (index) => {
    const baseDelay =
      speed === "slow"
        ? 0.1
        : speed === "medium"
        ? 0.05
        : 0.02;
    return baseDelay * index;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div className="flex flex-wrap">
        {textParts.map((part, index) => (
          <span
            key={index}
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{
              transitionDelay: `${getDelay(index)}s`,
            }}
          >
            {part}
          </span>
        ))}
      </div>
    </div>
  );
}
