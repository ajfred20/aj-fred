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
  Plus,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import ResumeCard from "@/components/ResumeCard";
import ToolsCard from "@/components/ToolsCard";
import emailjs from "@emailjs/browser";

export default function Home() {
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    try {
      toast({
        title: "Subscribed successfully!",
        description: `You'll now receive weekly newsletters at ${email}.`,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your subscription.",
      });
      console.error("Subscription error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-[240px] border-r border-neutral-800 h-screen sticky top-0 p-5 flex flex-col">
        <div className="mb-10">
          <h1 className="text-lg font-semibold tracking-tight">Aj Fred</h1>
          <p className="text-sm text-neutral-400">Fullstack Developer</p>
        </div>

        <nav className="flex-1 space-y-1">
          <Link href="/" className="flex items-center py-2 px-3 rounded-md bg-neutral-900 text-white">
            <HomeIcon className="w-4 h-4 mr-3" />
            <span className="text-sm">Home</span>
          </Link>
          <Link href="/works" className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors">
            <FolderClosed className="w-4 h-4 mr-3" />
            <span className="text-sm">Works</span>
          </Link>
          <Link href="/about" className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors">
            <User className="w-4 h-4 mr-3" />
            <span className="text-sm">About me</span>
          </Link>
          <Link href="/explorations" className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors">
            <Sparkles className="w-4 h-4 mr-3" />
            <span className="text-sm">Explorations</span>
          </Link>
          <Link href="/contact" className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors">
            <ImageIcon className="w-4 h-4 mr-3" />
            <span className="text-sm">Contact me</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5">
          {/* Featured Project - Orange */}
          <div className="col-span-6 row-span-2 relative rounded-xl overflow-hidden group h-[500px]">
            <Image 
              src="/assets/1.png" 
              alt="Featured Project" 
              fill 
              className="object-cover transition-all duration-300 group-hover:brightness-100 brightness-50"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-transparent group-hover:backdrop-blur-none p-6 flex flex-col justify-end">
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-1">About me</h2>
              <p className="text-sm text-neutral-300 tracking-tight font-normal">
                As a fullstack developer, I wield the power of code like Gojo Satoru
                wields his limitless technique. I am the honored one of web development.
              </p>
            </div>
          </div>

          {/* Desert Project */}
          <div className="col-span-3 relative rounded-xl overflow-hidden group h-[240px]">
            <Image 
              src="/assets/2.jpg" 
              alt="Desert Project" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Modred</h3>
              <p className="text-xs text-neutral-300">Saas website</p>
            </div>
          </div>

          {/* Abstract Project */}
          <div className="col-span-3 relative rounded-xl overflow-hidden group h-[240px]">
            <Image 
              src="/assets/3.jpg" 
              alt="Abstract Project" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Modred</h3>
              <p className="text-xs text-neutral-300">Saas website</p>
            </div>
          </div>

         
          <ResumeCard />

          {/* Aerial View Project */}
          <div className="col-span-6 relative rounded-xl overflow-hidden group h-[240px]">
            <Image 
              src="/assets/4.jpg" 
              alt="Aerial View" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Jorgemund</h3>
              <p className="text-xs text-neutral-300">Crypto Launchpad</p>
            </div>
          </div>

          {/* Desert Road Project */}
          <div className="col-span-3 relative rounded-xl overflow-hidden group h-[240px]">
            <Image 
              src="/assets/5.jpg" 
              alt="Desert Road" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-medium tracking-tight">Modred</h3>
              <p className="text-xs text-neutral-300">Saas website</p>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="col-span-6 bg-neutral-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-1">Get access to weekly newsletters on tricks and tips</h3>
              <p className="text-sm text-neutral-400">Get updates and tricks on design</p>
            </div>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-neutral-700 border border-neutral-600 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Tools Card */}
          <ToolsCard />

          {/* Headphones Card */}
          <div className="col-span-3 relative rounded-xl overflow-hidden group h-[240px] bg-neutral-900 cursor-pointer" onClick={() => window.open('https://open.spotify.com/playlist/6O1ZLAZfwV6vO9SD8xP7hx?si=bd9d70af97e04811&pt=2e88b22632fecf78ea85d06187aab6da', '_blank')}>
            <Image 
              src="/assets/headphone.png" 
              alt="Headphones" 
              fill 
              className="object-cover transition-all duration-300 brightness-50 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-transparent group-hover:backdrop-blur-none p-4 flex flex-col justify-end">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-medium tracking-tight text-white">My Playlist</h3>
              <p className="text-xs text-neutral-300">Chill music</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} By The Honoured One </p>
        </div>
      </main>
    </div>
  );
}
