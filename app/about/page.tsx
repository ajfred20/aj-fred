"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { CharacterV3 } from "@/components/ui/skiper-ui/skiper31";

const ToolsScrollSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const techIcons = [
    "/mac/Discord.png",
    "/mac/figma.png",
    "/mac/Framer.png",
    "/mac/Github.png",
    "/mac/Monog.png",
    "/mac/notion.png",
    "/mac/Pieces.png",
    "/mac/Postman.png",
    "/mac/vsCode.png",
  ];
  const iconCenterIndex = Math.floor(techIcons.length / 2);

  return (
    <div
      ref={targetRef}
      className="relative box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw] mb-16 rounded-lg"
    >
      <p className="text-xs text-gray-500 tracking-wider uppercase">
        TOOLS & TECHNOLOGIES I USE
      </p>
      <div
        className="w-full max-w-4xl text-center"
        style={{
          perspective: "500px",
        }}
      >
        {techIcons.map((icon, index) => (
          <CharacterV3
            key={index}
            char={icon}
            index={index}
            centerIndex={iconCenterIndex}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
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
            href="/"
            className="text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            HOME
          </Link>
          <Link
            href="/works"
            className="text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            PLAYGROUND
          </Link>
          <a
            href="mailto:ajfred2008@gmail.com"
            className="hidden md:inline text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            AJFRED2008@GMAIL.COM
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            FULLSTACK DEVELOPER
            <br />& PRODUCT DESIGNER
          </h1>
          <p className="text-sm text-gray-600 max-w-md">
            I am Habibi or Aj, a 16-year-old fullstack developer from Nigeria.
            <br />
            I write clean code, build scalable systems, and craft beautiful
            <br />
            user experiences.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mb-16">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/assets/1.png"
              alt="Profile"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="mb-16 space-y-6">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed ">
            ABOUT ME
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
            I'm a fullstack developer and designer from Nigeria, passionate
            about building things that live on the internet. My journey started
            at 12 when I built my first website, and I haven't stopped creating
            since then.
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
            I'm a generalist who loves to design in Figma, write clean code in
            React, build robust backends with Node.js, and create seamless user
            experiences. My approach blends technical expertise with creative
            problem-solving to build products that users actually enjoy using.
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
            In my free time, I work on side projects, contribute to open source,
            and explore new technologies. I'm currently obsessed with Next.js,
            TypeScript, and modern design systems—constantly learning and
            pushing the boundaries of what's possible on the web.
          </p>
        </div>

        {/* Companies/Tools - Animated Scroll */}
        <ToolsScrollSection />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16">
          <div>
            <p className="text-4xl sm:text-7xl font-bold tracking-tighter mb-2">
              4+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Years of experience
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-7xl font-bold tracking-tighter mb-2">
              20+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Projects delivered
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-7xl font-bold tracking-tighter mb-2">
              30+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Satsified clients
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-7xl font-bold tracking-tighter mb-2">
              $20k
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Startup revenue generated
            </p>
          </div>
        </div>

        {/* Skills List */}
        <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20">
          <div className="max-w-full w-full mx-auto">
            <div className="space-y-0">
              {/* Skill 1 */}
              <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                  FRONTEND DEVELOPMENT
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">
                  *
                </span>
              </div>

              {/* Skill 2 */}
              <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                  BACKEND DEVELOPMENT
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">
                  *
                </span>
              </div>

              {/* Skill 3 */}
              <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                  UI/UX DESIGN
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">
                  *
                </span>
              </div>

              {/* Skill 4 */}
              <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                  API DEVELOPMENT
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">
                  *
                </span>
              </div>

              {/* Skill 5 */}
              <div className="flex items-center justify-between py-4 sm:py-6 border-t border-b border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                  PRODUCT DESIGN
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">
                  *
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-16">
          <p className="text-sm text-gray-600 mb-6">
            Got great ideas and want to bring them to life?
          </p>
          <a
            href="mailto:ajfred2008@gmail.com"
            className="inline-block border-2 border-black px-8 py-4 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            LET&apos;S WORK TOGETHER
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white px-4 sm:px-6 md:px-8 py-8 ">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
            <Link href="/works" className="hover:opacity-60 transition-opacity">
              Playground
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
