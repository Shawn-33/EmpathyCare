"use client";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export function CardDemo({ text, description, img1, img2 }) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Preload images to ensure they are ready for hover effects
    const i1 = new window.Image();
    const i2 = new window.Image();
    i1.src = img1;
    i2.src = img2;
  }, [img1, img2]);

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-2xl mx-auto flex flex-col justify-end p-4 border-4 border-gray-50 dark:border-gray-50 transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${hover ? img2 : img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Overlay on hover */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 z-10",
            hover ? "bg-black bg-opacity-50" : ""
          )}
        />
        <div className="text relative z-20">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {text}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
