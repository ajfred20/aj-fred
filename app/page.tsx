"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  HomeIcon,
  User,
  FolderClosed,
  ImageIcon,
  ChevronDown,
  Sparkles,
  EyeIcon,
} from "lucide-react";
import { useState } from "react";
import BlurMenu from "../components/BlurMenu";

import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="hidden lg:flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hover:opacity-80"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/fred.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-medium">Aj Fred</h2>
              <p className="text-sm text-muted-foreground">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <Link href="/twitter">
            <Twitter />
          </Link>
          <Link href="/instagram">
            <Linkedin />
          </Link>
          <Link href="" className="hover:opacity-80">
            <Github />
          </Link>
          <Link
            href="/contact"
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:opacity-90"
          >
            Book a Call
          </Link>
        </nav>
      </header>

      <BlurMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around items-center z-10">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/about"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <User className="w-5 h-5" />
          <span className="text-xs">About</span>
        </Link>
        <Link
          href="/projects"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <FolderClosed className="w-5 h-5" />
          <span className="text-xs">Projects</span>
        </Link>
        <Link
          href="/highlights"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <ImageIcon className="w-5 h-5" />
          <span className="text-xs">Highlights</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pt-20 pb-24 md:pb-0">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/fred.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mb-8"
          />

          <h1 className="text-5xl font-bold mb-4 tracking-[-0.02em]">
            Hey, I&apos;m Aj Fred.
            <br />
            <span className="text-gradient">Dreamer</span>, Developer &{" "}
            <Image
              src="/figma.svg"
              alt="Figma"
              width={52}
              height={52}
              className="inline-flex rounded-lg mx-1"
            />{" "}
            Designer
          </h1>

          <p className="text-gray-600 mb-8 max-w-xl">
            Crafting seamless experiences and bold visuals. High school student
            by day, creative thinker, and aspiring innovator by 🌙 night.
          </p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90"
            >
              Book a Call
            </Link>
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-6 py-3 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new project
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-12">
          <h1 className="text-5xl font-bold mb-4 tracking-[-0.02em] flex items-center justify-center gap-2">
            Some of My <span className="font-fancy">Works</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-xl">
            Check out some of my passion projects born with the energy from my
            Heart🩷, Brain🧠 & Spirit🌀
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {[
              {
                src: "/assets/1.1.png",
                alt: "Collocate",
                caption: "Collocate",
                livePreview: "https://collocate.vercel.app",
                github: "https://github.com/user/project1",
              },
              {
                src: "/assets/1.jpg",
                alt: "Me and Ameen At FTF24",
                caption: "Me and Ameen At FTF24",
                livePreview: "https://example.com/demo2",
                github: "https://github.com/user/project2",
              },
              {
                src: "/assets/2.jpg",
                alt: "My Cofounder & I with Renzo of Swiftyhost",
                caption: "My Cofounder & I with Renzo of Swiftyhost",
                livePreview: "https://example.com/demo3",
                github: "https://github.com/user/project3",
              },
              {
                src: "/assets/3.jpg",
                alt: "Coding Session",
                caption: "👀",
                livePreview: "https://example.com/demo4",
                github: "https://github.com/user/project4",
              },
              {
                src: "/assets/4.jpg",
                alt: "Award Ceremony",
                caption: "Do Not View",
                livePreview: "https://example.com/demo5",
                github: "https://github.com/user/project5",
              },
              {
                src: "/assets/5.jpg",
                alt: "New Project",
                caption: "New Project",
                livePreview: "https://example.com/demo6",
                github: "https://github.com/user/project6",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative h-[300px] overflow-hidden rounded-2xl bg-gray-100 w-full"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                  <p className="text-white text-lg font-medium">
                    {project.caption}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                    >
                      <EyeIcon className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors border border-white"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
