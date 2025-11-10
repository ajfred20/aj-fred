"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedMarquee = () => {
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const marqueeRows = [
    {
      text: "I AM AWESOME I KNOW",
      bgColor: "bg-white",
      textColor: "text-black",
      speed: 40,
    },
    {
      text: "ADMIRATION IS THE STATE FURTHEST FROM UNDERSTANDING",
      bgColor: "bg-black",
      textColor: "text-white",
      speed: 50,
    },
    {
      text: "THROUGHOUT HEAVEN AND EARTH I ALONE AM THE HONORED ONE",
      bgColor: "bg-white",
      textColor: "text-black",
      speed: 45,
    },
  ];

  useEffect(() => {
    marqueeRefs.current.forEach((marquee, index) => {
      if (marquee) {
        // White backgrounds (index 0 and 2) go left, black background (index 1) goes right
        const direction = index === 1 ? "50%" : "-50%";
        gsap.to(marquee, {
          x: direction,
          duration: marqueeRows[index].speed,
          ease: "none",
          repeat: -1,
        });
      }
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {marqueeRows.map((row, index) => (
        <div
          key={index}
          className={`${row.bgColor} ${row.textColor} py-4 overflow-hidden whitespace-nowrap`}
        >
          <div
            ref={(el) => {
              marqueeRefs.current[index] = el;
            }}
            className="inline-block"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="inline-block px-8 text-4xl font-semibold tracking-tight"
              >
                {row.text} *
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedMarquee;
