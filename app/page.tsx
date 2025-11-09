"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-white/90 backdrop-blur-sm">
        <div className="text-xs sm:text-sm font-medium tracking-tight">HABIBI.</div>
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
            PLAYGROUND
          </Link>
          <a
            href="mailto:habibi@gmail.com"
            className="hidden md:inline text-xs sm:text-sm hover:opacity-60 transition-opacity"
          >
            AJFRED2008@GMAIL.COM
          </a>
        </div>
      </nav>

      {/* Top Right Image */}
      <div className="absolute top-14 sm:top-16 right-4 sm:right-6 z-40 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <div className="relative w-full h-full">
          <Image
            src="/assets/1.png"
            alt="Portfolio preview"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>

      {/* Hero Section */}
      <main className="flex items-end justify-start min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 pb-12 sm:pb-16">
        <div className="max-w-5xl">
          <h1 className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter">
            YO, I&apos;M
            <br />
            HABIBI
            <br />
            <span className="inline-block text-gray-400">(FOLIO&apos;25)</span>
          </h1>
        </div>
      </main>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-6 text-[10px] sm:text-xs tracking-wider">
        [ SCROLL DOWN ]
      </div>

      {/* About Section */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20">
        <div className="max-w-4xl text-center">
          <p className="text-xs sm:text-sm tracking-wider mb-6 sm:mb-8 text-gray-500">
            (FULLSTACK DEVELOPER)
          </p>
          <h2 className="text-[8vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] font-bold leading-[1.1] tracking-tighter mb-8 sm:mb-12 px-2">
            OBSESSED WITH BUILDING
            <br />
            SEAMLESS EXPERIENCES
            <br />
            THAT BLEND FRONTEND -
            <br />
            BACKEND AND PURE
            <br />
            INNOVATION.
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 px-2">
            I&apos;m a fullstack developer from Nigeria. I enjoy working
            <br className="hidden sm:block" />
            on web applications, building scalable systems, crafting APIs,
            no-code
            <br className="hidden sm:block" />
            solutions using modern frameworks and cutting-edge technologies.
          </p>
          <p className="text-[10px] sm:text-xs tracking-wider text-gray-400">
            [ POWERED BY CAFFEINE ]
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20">
        <div className="max-w-full w-full mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-tighter font-medium mb-8 sm:mb-12 max-w-4xl">
            Over the past few years, I&apos;ve been deeply involved in building
            web applications and digital solutions. Whether it&apos;s been
            working with startups, tech companies, or creative agencies,
            I&apos;ve been fully immersed in this world.
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/assets/1.png"
              alt="Profile"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Skills/Services Section */}
      <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20">
        <div className="max-w-full w-full mx-auto">
          <div className="space-y-0">
            {/* Skill 1 */}
            <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                FRONTEND DEVELOPMENT
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">*</span>
            </div>

            {/* Skill 2 */}
            <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                BACKEND DEVELOPMENT
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">*</span>
            </div>

            {/* Skill 3 */}
            <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                UI/UX DESIGN
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">*</span>
            </div>

            {/* Skill 4 */}
            <div className="flex items-center justify-between py-4 sm:py-6 border-t border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                API DEVELOPMENT
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">*</span>
            </div>

            {/* Skill 5 */}
            <div className="flex items-center justify-between py-4 sm:py-6 border-t border-b border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight px-2 sm:px-4">
                PRODUCT DESIGN
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4">*</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter mb-4 sm:mb-6 px-2">
            WANNA TEST OUT
            <br />
            MY SKILLS?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 sm:mb-8 px-4">
            Got a great idea you need to work on or get brought to life? <br className="hidden sm:block" />{" "}
            Send me an email and let&apos;s chat!
          </p>
          <a
            href="mailto:ajfred2008@gmail.com"
            className="inline-block border-2 border-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            AJFRED2008@GMAIL.COM
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8">
        <div className="max-w-full w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
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
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <Link href="/about" className="hover:opacity-60 transition-opacity">
              About
            </Link>
            <Link href="/works" className="hover:opacity-60 transition-opacity">
              Back to top
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
