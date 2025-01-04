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

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/about.svg"
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
        <h1 className="text-5xl font-bold text-center mb-4">Udalric Aj Fred</h1>

        <p className="text-center mb-12">
          Founder @{" "}
          <Link
            href="https://waitlist-rydon.vercel.app"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center"
          >
            Rydon Africa <ArrowUpRight className="w-4 h-4" />
          </Link>
        </p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-12 mb-12">
          <div>
            <Image
              src="/assets/about.svg"
              alt="Aj Fred"
              width={600}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <p>
              I am a 15 year old Frontend Developer with over 3+ years of
              experience, i am into web development with a focus on user
              interface designs and frontend engineering.
            </p>

            <p>
              I also build fullstack applications (Web Apps, PWAs). I craft
              fast, seamless and scalable user interfaces.
            </p>

            <p>
              I am focused on creative detail and functionality. My goal is to
              help others learn from and use the programs I create. I've built
              web apps, webpages and programs. You can find all my projects on
              GitHub,{" "}
              <Link
                href="https://github.com/ajfred20"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Github - @ajfred20 <ArrowUpRight className="w-4 h-4" />
              </Link>
            </p>

            <p>In my free time, I am a Graphics designer👀😂.</p>
            <Link href="/projects">
              <Button variant="outline" className="mt-4">
                Projects <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
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
