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
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <h1 className="text-5xl font-bold mb-12">
          That <span className="text-gradient">Supercracked</span> <br />
          Frontend Developer.
        </h1>

        <p className="text-lg mb-6">
          I am Udalric Aj Fred A Frontend Web Developer With 3+ years experince.{" "}
          <br />I create amazing programs that drag attention. Creator of
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {["Canvax", "Luro", "Linkify", "Collocate"].map((project) => (
            <Link
              key={project}
              href={`/projects?project=${project.toLowerCase()}`}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              {project}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ))}
        </div>

        <p className="text-lg mb-8">
          Frontend Engineer - Crafting Amazing Websites & Engaging User
          Interfaces, Bringing <br />
          Africa forward in the tech space.
        </p>

        <p className="text-lg mb-12">
          I Belive That great things can come from a small place.
        </p>

        <Link href="https://x.com/iamajfred_">
          <Button variant="outline" className="mb-16">
            My Profile <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>

        <section className="mb-12">
          <h2 className="text-2xl font-medium mt-3">Contact Me.</h2>
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
