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
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    };

    try {
      const result = await emailjs.send(
        "service_6jzme7g", // Your service ID
        "template_s9qz4eo", // Your template ID
        templateParams,
        "PzeejNvHRD0SfQ0JE" // Your public key
      );

      if (result.text === "OK") {
        toast({
          title: "Message sent successfully!🫶🏽🩷",
          description: `Thanks for reaching out, ${templateParams.from_name}. I'll get back to you soon.💖`,
        });
        form.reset();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message.",
      });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="hidden lg:flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hover:opacity-80"
          >
            <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/fred.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
            />
            <div>
              <h2 className="font-medium text-sm lg:text-base">Aj Fred</h2>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4 lg:gap-6">
          <Link href="https://x.com/iamajfred_">
            <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/fred-aj/">
            <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link href="https://github.com/ajfred20" className="hover:opacity-80">
            <Github className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link
            href="#contact"
            className="bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:opacity-90 scroll-smooth text-sm lg:text-base"
          >
            Book a Call
          </Link>
        </nav>
      </header>

      <BlurMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around items-center z-20">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <HomeIcon className="w-4 h-4" />
          <span className="text-[10px]">Home</span>
        </Link>
        <Link
          href="/about"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <User className="w-4 h-4" />
          <span className="text-[10px]">About</span>
        </Link>
        <Link
          href="/projects"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <FolderClosed className="w-4 h-4" />
          <span className="text-[10px]">Projects</span>
        </Link>
        <Link
          href="/highlights"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <ImageIcon className="w-4 h-4" />
          <span className="text-[10px]">Highlights</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pt-16 lg:pt-20 pb-24 md:pb-0">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/fred.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mb-6 lg:mb-8 w-24 h-24 lg:w-32 lg:h-32"
          />

          <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-[-0.02em]">
            Hey, I&apos;m Aj Fred.
            <br />
            <span className="text-gradient font-fancy">Dreamer </span>,
            Developer &{" "}
            <Image
              src="/figma.svg"
              alt="Figma"
              width={52}
              height={52}
              className="inline-flex rounded-lg mx-1 w-8 h-8 lg:w-12 lg:h-12"
            />{" "}
            Designer
          </h1>

          <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 max-w-xl">
            Crafting seamless experiences and bold visuals. High school student
            by day, creative thinker, and aspiring innovator by 🌙 night.
          </p>

          <div className="flex gap-3 lg:gap-4">
            <Link
              href="#contact"
              className="bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:opacity-90 scroll-smooth text-sm lg:text-base"
            >
              Book a Call
            </Link>
            <div className="flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new project
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-[-0.02em] flex items-center justify-center gap-2">
            Some of My <span className="font-fancy">Works</span>
          </h1>

          <p className="text-sm lg:text-base text-gray-600 mb-8 max-w-xl">
            Check out some of my passion projects born with the energy from my
            Heart🩷, Brain🧠 & Spirit🌀
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full max-w-5xl mx-auto">
            {[
              {
                src: "/assets/1.1.png",
                alt: "Collocate",
                caption: "Collocate",
                livePreview: "https://collocate.vercel.app",
                github: "https://github.com/ajfred20/collocate",
              },
              {
                src: "/assets/1.2.png",
                alt: "Canvax",
                caption: "Canvax",
                livePreview: "https://aj-canvax.vercel.app",
                github: "https://github.com/ajfred20/canvax",
              },
              {
                src: "/assets/1.3.png",
                alt: "Linkify",
                caption: "Linkify",
                livePreview: "https://linkify-io.vercel.app",
                github: "#",
              },
              {
                src: "/assets/1.4.png",
                alt: "Luro",
                caption: "Luro",
                livePreview: "https://luro-ai.vercel.app",
                github: "#",
              },
              {
                src: "/assets/1.5.png",
                alt: "Brainwave",
                caption: "Brainwave",
                livePreview: "https://brainwave-9ja.vercel.app/",
                github: "#",
              },
              {
                src: "/assets/1.6.png",
                alt: "Rewrap",
                caption: "Rewrap",
                livePreview: "https://rewrap.vercel.app/",
                github: "https://github.com/ajfred20/rewrap",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative h-[200px] lg:h-[300px] overflow-hidden rounded-2xl bg-gray-100 w-full"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-3 lg:gap-4">
                  <p className="text-white text-base lg:text-lg font-medium">
                    {project.caption}
                  </p>
                  <div className="flex gap-3 lg:gap-4">
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-black px-4 py-1.5 lg:px-6 lg:py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-opacity-90 transition-colors"
                    >
                      <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-black text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-opacity-90 transition-colors border border-white"
                    >
                      <Github className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-20 lg:mt-32 relative">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-[-0.02em] flex items-center justify-center gap-2">
            What People{" "}
            <span className="font-fancy text-2xl lg:text-4xl">Say</span>
          </h1>
          <p className="text-gray-600 -mb-3 max-w-xl font-fancy text-xl lg:text-2xl">
            My clients trust me
          </p>

          <div className="relative w-full max-w-3xl mx-auto h-[300px] lg:h-[400px]">
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-2xl lg:text-4xl font-bold max-w-xl">
                Because i know how important it is to{" "}
                <span className="text-gradient font-fancy">Connect</span> with
                people you care
              </h2>
            </div>

            {/* Floating avatars with chat bubbles */}
            <div className="absolute top-16 right-20 z-10">
              <Image
                src="/assets/2.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full mb-2 w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>

            <div className="absolute bottom-20 left-10 z-10">
              <Image
                src="/assets/3.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>

            <div className="absolute right-1/4 bottom-24 z-10">
              <Image
                src="/assets/4.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>

            <div className="absolute left-1/3 top-1/4 z-10">
              <Image
                src="/assets/1.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="flex flex-col items-center text-center mt-16 lg:mt-20 mb-16 lg:mb-20"
        >
          <h1 className="text-3xl lg:text-5xl font-bold tracking-[-0.02em] flex items-center justify-center gap-2">
            Get in touch
          </h1>

          <p className="text-sm lg:text-base text-gray-600 mt-4 mb-6 lg:mb-8 max-w-xl">
            I'm always interested in exploring new opportunities, collaborating,
            or exchanging ideas with like-minded individuals. Feel free to book
            a call or email me if you'd like to see my portfolio deck or to
            discuss a potential project.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto space-y-4 lg:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your Message"
              rows={6}
              className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <footer className="bg-white text-black py-12 lg:py-16 mt-16 lg:mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border-t border-gray-400 w-full mt-8 lg:mt-12 pt-6 lg:pt-8 group">
              <p className="text-gray-400 text-xs lg:text-sm">
                © {new Date().getFullYear()} by{" "}
                <a
                  href="https://x.com/iamajfred_"
                  className="hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text hover:animate-gradient transition-all duration-300"
                >
                  Aj Fred
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
