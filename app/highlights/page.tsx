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
  Music,
  ImageIcon,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import HighlightCard from "@/components/ui/highlight-card";
import { useState } from "react";
import { useEffect } from "react";

export default function Highlights() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside
        className={`${
          isMobile
            ? sidebarOpen
              ? "fixed inset-y-0 left-0 z-40"
              : "hidden"
            : "w-[240px]"
        } border-r border-neutral-800 h-screen sticky top-0 p-5 flex flex-col bg-black`}
      >
        <div className="mb-10">
          <h1 className="text-lg font-semibold tracking-tight">Aj Fred</h1>
          <p className="text-sm text-neutral-400">Fullstack Developer</p>
        </div>

        <nav className="flex-1 space-y-1">
          <Link
            href="/"
            className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <HomeIcon className="w-4 h-4 mr-3" />
            <span className="text-sm">Home</span>
          </Link>
          <Link
            href="/works"
            className="flex items-center justify-between py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <div className="flex items-center">
              <FolderClosed className="w-4 h-4 mr-3" />
              <span className="text-sm">Works</span>
            </div>
            <span className="bg-neutral-800 text-xs px-2 py-0.5 rounded-full">
              6
            </span>
          </Link>
          <Link
            href="/about"
            className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <User className="w-4 h-4 mr-3" />
            <span className="text-sm">About me</span>
          </Link>
          <Link
            href="/highlights"
            className="flex items-center py-2 px-3 rounded-md bg-neutral-900 text-white transition-colors"
          >
            <Sparkles className="w-4 h-4 mr-3" />
            <span className="text-sm">Highlights</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <ImageIcon className="w-4 h-4 mr-3" />
            <span className="text-sm">Contact me</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 py-6 sm:py-10 mb-20 md:mb-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold tracking-tighter text-center mb-4">
            My{" "}
            <span className="text-gradient font-fancy tracking-[-0.08em]">
              2024
            </span>{" "}
            in style{" "}
          </h1>

          <p className="text-center text-muted-foreground mb-12">
            Celebrating milestones, achievements, and major accomplishments.
          </p>

          <div className="space-y-12">
            {/* Academic Milestones */}
            <section>
              <h2 className="text-2xl font-medium mb-4">My Milestones</h2>
              <p className="mb-4">
                Got over a 100 students @{" "}
                <Link
                  href="https://www.waitlist-rydon.vercel.app"
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                >
                  Rydon's Code Craftmania Bootcamp{" "}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </p>
              <p className="text-muted-foreground">
                Got students that learnt courses in web development.
              </p>
            </section>

            {/* My Year in Pictures */}
            <section>
              <h2 className="text-2xl font-medium">My Year in Pictures</h2>
              <p className="text-muted-foreground mb-6">
                Some placeswhere i show face sha😂.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 z-0">
                {[
                  {
                    src: "/assets/6.jpg?height=400&width=400",
                    alt: "Fusion Tech Fest 2024",
                    caption: "Fusion Tech Fest 2024",
                  },
                  {
                    src: "/assets/1.jpg?height=400&width=400",
                    alt: "Me and Ameen At FTF24",
                    caption: "Me and Ameen At FTF24",
                  },
                  {
                    src: "/assets/2.jpg?height=400&width=400",
                    alt: "My Cofounder & I with Renzo of Swiftyhost",
                    caption: "My Cofounder & I with Renzo of Swiftyhost",
                  },
                  {
                    src: "/assets/3.jpg?height=400&width=400",
                    alt: "Coding Session",
                    caption: "👀",
                  },
                ].map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                    <p className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <div className="mb-8">
              <h2 className="text-4xl text-center tracking-tight font-medium text-white mb-4">
                Some of My Templates
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                <HighlightCard
                  image="/assets/green.png"
                  title="Chimly"
                  price="$299"
                  description="AI Powered Product Manager and Intelligent Task Handler"
                  tags={["Top Pick", "Fully Working"]}
                  buttonText="Get Now"
                />
                <HighlightCard
                  image="/assets/echo.avif"
                  title="Maison"
                  price="$199"
                  description="Furniture E-commerce Store for luxury homes, hotels and offices."
                  tags={["Top Pick", "Fully Working"]}
                  buttonText="Get Now"
                />
              </div>
            </div>

            {/* Favorite Spotify Playlists */}
            <section>
              <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
                <Music className="w-6 h-6" />
                My Favorite Playlists
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Main Playlist */}
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe
                    className="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/6O1ZLAZfwV6vO9SD8xP7hx?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                {/* Coding Playlist */}
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe
                    className="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTLSN7iG21yC?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Music that keeps me coding and creating. Feel free to follow
                these playlists!
              </p>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-2xl font-medium mb-4">Testimonials</h2>
              <div className="space-y-6">
                <blockquote className="border-l-4 pl-4 italic">
                  "Aj's works have always been clean and mindblowingly amazing
                  right from when i knew him."
                  <footer className="mt-2 text-sm text-muted-foreground">
                    — Elochukwu
                  </footer>
                </blockquote>

                <blockquote className="border-l-4 pl-4 italic">
                  "He consistently ships{" "}
                  <span className="text-gradient tracking-tight">
                    high-quality
                  </span>{" "}
                  products quickly. He is a very reliable asset to any team!"{" "}
                  <footer className="mt-2 text-sm text-muted-foreground">
                    — Founder, Cubicle
                  </footer>
                </blockquote>
              </div>
              <p className="mt-4 text-muted-foreground">...and many more.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
