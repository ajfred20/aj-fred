"use client";
import { useState, useEffect } from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Dribbble,
  Sparkles,
  Link as LinkIcon,
  ImageIcon,
  HomeIcon,
  User,
  FolderClosed,
  Check,
  Copy,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ajfred2008@gmail.com");
      // Show visual feedback instead of toast
      setCopySuccess(true);
      // Reset after 2 seconds
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);

      // Make toast more visible with higher z-index and longer duration
      toast.success("Email copied to clipboard!", {
        position: "top-center",
        duration: 3000,
        style: {
          zIndex: 9999,
          background: "#333",
          color: "white",
          border: "1px solid #555",
        },
      });
    } catch (error) {
      console.error("Failed to copy email:", error);
      toast.error("Failed to copy email", {
        position: "top-center",
        duration: 3000,
        style: {
          zIndex: 9999,
          background: "#333",
          color: "white",
          border: "1px solid #555",
        },
      });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Toast container with higher z-index */}
      <div
        id="sonner-toast-container"
        className="fixed top-4 right-4 z-[9999]"
      />

      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-neutral-800 p-2 rounded-md"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      )}

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
            className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <Sparkles className="w-4 h-4 mr-3" />
            <span className="text-sm">Highlights</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center py-2 px-3 rounded-md bg-neutral-900 text-white"
          >
            <ImageIcon className="w-4 h-4 mr-3" />
            <span className="text-sm">Contact me</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col items-center justify-start pt-8">
        <div className="w-full max-w-xl">
          <div className="rounded-xl bg-neutral-900 px-6 py-3 mb-8 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Contact me</h2>
            <div className="flex gap-3 text-neutral-400">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-white" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-white" />
              </a>
              <a href="#" aria-label="Dribbble">
                <Dribbble className="w-5 h-5 hover:text-white" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-neutral-900/80 px-8 py-12 flex flex-col items-center shadow-lg">
            <span className="text-neutral-400 text-base mb-4">
              Send me an email
            </span>
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Would you like to hire me?
              <br />
              send me an email
            </h3>
            <div className="bg-black rounded-lg px-6 py-4 flex items-center justify-center">
              <span className="text-2xl font-semibold tracking-tighter text-white select-all">
                ajfred2008@gmail.com
              </span>
              <button
                className="ml-3 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors relative"
                title="Copy email"
                onClick={handleCopyEmail}
              >
                {copySuccess ? (
                  <Check className="w-6 h-6 text-green-500" />
                ) : (
                  <Copy className="w-6 h-6" />
                )}
                {copySuccess && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral-800 tracking-tighter text-white text-xs py-1 px-2 rounded">
                    Copied!
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
