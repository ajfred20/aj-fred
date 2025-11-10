"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { StickyCard_001 } from "@/components/ui/skiper-ui/skiper16";
import AnimatedMarquee from "@/components/ui/AnimatedMarquee";

const projects = [
  {
    title: "Chimly",
    src: "/assets/green.png",
  },
  {
    title: "Hustle",
    src: "/assets/ultravibe.png",
  },
  {
    title: "Maison",
    src: "/assets/star.jpg",
  },
  {
    title: "Bucx",
    src: "/assets/purple.png",
  },
  {
    title: "Echo",
    src: "/assets/echo.avif",
  },
];

export default function WorksPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <Link
          href="/"
          className="text-xs sm:text-sm font-medium tracking-tight"
        >
          HABIBI.
        </Link>
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          <Link
            href="/about"
            className="text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            ABOUT
          </Link>
          <Link
            href="/works"
            className="text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            BANKAI
          </Link>
          <a
            href="mailto:ajfred2008@gmail.com"
            className="hidden md:inline text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            AJFRED2008@GMAIL.COM
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4">
          BANKAI
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 tracking-wide">
          割れた開発者の領域 - Wareta kaihatsusha no ryōiki
        </p>
      </div>

      {/* Sticky Cards */}
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center py-[1vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>

      {/* Animated Marquee */}
      <AnimatedMarquee />

      {/* Footer */}
      <footer className="bg-white px-4 sm:px-6 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="https://github.com/ajfred20"
              className="hover:opacity-60 transition-opacity"
            >
              Github
            </Link>
            <Link
              href="https://bluesky.app"
              className="hover:opacity-60 transition-opacity"
            >
              Bluesky
            </Link>
            <Link
              href="https://x.com/ajwgmi"
              className="hover:opacity-60 transition-opacity"
            >
              Twitter
            </Link>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-60 transition-opacity">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
