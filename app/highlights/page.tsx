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
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Highlights() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
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
            <p className="text-sm text-muted-foreground">Frontend Developer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/highlights"
            className="text-muted-foreground hover:text-foreground"
          >
            Highlights
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/iamajfred_"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/ajfred20"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fred-aj/"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </header>

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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 mb-20 md:mb-0">
        <h1 className="text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">2024</span> in style{" "}
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
                {
                  src: "/assets/4.jpg?height=400&width=400",
                  alt: "Award Ceremony",
                  caption: "Do Not View",
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
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6?utm_source=generator"
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
              Music that keeps me coding and creating. Feel free to follow these
              playlists!
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
                <span className="text-gradient">high-quality</span> products
                quickly. He is a very reliable asset to any team!"{" "}
                <footer className="mt-2 text-sm text-muted-foreground">
                  — Founder, Cubicle
                </footer>
              </blockquote>
            </div>
            <p className="mt-4 text-muted-foreground">...and many more.</p>
          </section>
        </div>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-medium mt-6">Contact Me.</h2>
          <p className="text-muted-foreground mb-4">
            Reach out to me{" "}
            <Link
              href="mailto:ajfred2008@gmail.com"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              ajfred2008@gmail.com <ArrowUpRight className="w-4 h-4" />
            </Link>
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/ajfred20"
              className="text-foreground hover:text-blue-600"
            >
              Github <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fred-aj/"
              className="text-foreground hover:text-blue-600"
            >
              Linkedin <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
            <Link
              href="https://x.com/iamajfred_"
              className="text-foreground hover:text-blue-600"
            >
              Twitter <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
