"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  FolderClosed,
  HomeIcon,
  User,
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "../../components/ui/project-card";

const FILTERS = ["All", "Webpage", "React", "Web App", "Vue"];

const PROJECTS = [
  {
    title: "Linkify",
    description:
      "Effortlessly streamline your link management with Linkify. Shorten, track, and organize all your links in one place. ",
    tags: ["TypeScript", "React"],
    type: "Webpage",
    link: "https://linkify-io.vercel.app/",
  },
  {
    title: "Luro",
    description:
      "Your ultimate social media marketing tool used to Elevate your social media presense with AI-powered content creation and scheduling.",
    tags: ["TypeScript", "Tailwind", "React"],
    type: "Web App",
    link: "https://luro-ai.vercel.app/",
  },
  {
    title: "Collocate",
    description: "Collocate is a file organization and project management app.",
    tags: ["Vue", "Nuxt"],
    type: "Vue",
    link: "https://ajfred.vercel.app",
  },
  {
    title: "Canvax",
    description:
      "Build stunning websites with Canvax's intuitive drag-and-drop builder and powerful AI assistant",
    tags: ["TypeScript", "Next JS", "React"],
    type: "React",
    link: "https://aj-canvax.vercel.app",
  },
  {
    title: "Brainwave",
    description:
      "Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.",
    tags: ["TypeScript", "Next JS"],
    type: "Webpage",
    link: "https://brainwave-9ja.vercel.app/",
  },
  {
    title: "9jasushi",
    description: "Japanese food ordering service built for practice purpose.",
    tags: ["HTML", "CSS", "Javascript"],
    type: "Webpage",
    link: "https://9jasushi.vercel.app/",
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || project.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <h1 className="text-5xl font-bold text-center mb-4">My Projects</h1>

        <p className="text-center text-muted-foreground mb-12">
          "It&apos;s not about how you fail but how good you are at failing." —{" "}
          <span className="text-foreground">Aj Fred</span>
        </p>

        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {FILTERS.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

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
