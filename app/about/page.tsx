import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  FolderClosed,
  User,
  Sparkles,
  ImageIcon,
} from "lucide-react";

export default function About() {
  return (
    <div className="flex min-h-screen bg-black">
      <aside className="w-[240px] border-r border-neutral-800 h-screen sticky top-0 p-5 flex flex-col">
        <div className="mb-10">
          <h1 className="text-lg font-semibold tracking-tighter">Aj Fred</h1>
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
              12
            </span>
          </Link>
          <Link
            href="/about"
            className="flex items-center py-2 px-3 rounded-md bg-neutral-900 text-white"
          >
            <User className="w-4 h-4 mr-3" />
            <span className="text-sm">About me</span>
          </Link>
          <Link
            href="/explorations"
            className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
          >
            <Sparkles className="w-4 h-4 mr-3" />
            <span className="text-sm">Explorations</span>
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

      <main className="flex-1 flex flex-col items-center px-8 pt-10 pb-6">
        <div className="w-full max-w-xl mx-auto">
          <div className="rounded-xl bg-zinc-900 px-6 py-3 mb-6">
            <h2 className="text-lg font-medium text-white">About me</h2>
          </div>
          <div className="rounded-xl bg-neutral-900 p-8 flex flex-col items-center">
            <Image
              src="/assets/echo.avif"
              alt="Profile picture"
              width={340}
              height={220}
              className="rounded-lg object-cover mb-6 w-full h-[220px]"
            />
            <h1 className="text-2xl font-bold tracking-tighter text-white mb-1 w-full">
              Udalric Aj Fred
            </h1>
            <p className="text-neutral-400 tracking-tight text-base mb-6 w-full">
              Fullstack Developer & Product Designer
            </p>
            <p className="text-neutral-300 text-sm mb-8 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque egestas commodo lectus vitae interdum. Phasellus eget
              quam sit amet purus luctus elementum non a erat. Suspendisse ut
              tempor lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Pellentesque egestas commodo lectus vitae interdum.
              Phasellus eget quam sit amet purus luctus elementum non a erat.
              Suspendisse ut tempor lorem.
            </p>
            <hr className="border-neutral-800 w-full mb-8" />
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-neutral-400 text-base tracking-tight font-medium">
                  Experience
                </h3>
                <Link
                  href="#"
                  className="text-xs text-neutral-400 tracking-tight hover:text-white underline flex items-center gap-1"
                >
                  LinkedIn
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </Link>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-semibold text-lg tracking-tight mb-1">
                  Lead Frontend Developer at Chimly
                </h4>
                <span className="text-xs text-neutral-500 tracking-tight mb-2 block">
                  Feb 2025 - Present
                </span>
                <p className="text-neutral-400 text-sm tracking-tighter text-justify">
                  Led the development of key frontend pages including home,
                  about, projects, and highlights sections with responsive
                  layouts. Architected and implemented the AI interface with
                  real-time interactions, chat functionality, and dynamic
                  content generation. Optimized component reusability across the
                  application and ensured cross-browser compatibility while
                  maintaining a consistent design system throughout the
                  platform.
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-white font-semibold text-lg tracking-tight mb-1">
                  Frontend Mechanic at Bucx
                </h4>
                <span className="text-xs text-neutral-500 tracking-tight mb-2 block">
                  Jan 2025 - Present
                </span>
                <p className="text-neutral-400 text-sm tracking-tighter text-justify">
                  Designed and developed the main landing page with responsive
                  layouts and interactive elements to improve user engagement.
                  Built a comprehensive admin dashboard with data visualization,
                  user management features, and real-time analytics. Implemented
                  role-based access control and optimized dashboard performance
                  for handling large datasets while maintaining a clean,
                  intuitive interface.
                </p>
              </div>
              <hr className="border-neutral-800 w-full my-8" />
              <h3 className="text-neutral-400 text-base tracking-tight font-medium mb-4">
                Awards & Recognitions
              </h3>
              <div className="divide-y divide-neutral-800">
                <div className="flex justify-between items-center py-3">
                  <span className="text-white text-base tracking-tight">
                    React, Site Of The Day
                  </span>
                  <span className="text-neutral-400 text-sm tracking-tight">
                    Nov 2024
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-white text-base tracking-tight">
                    Young Developer of the Year
                  </span>
                  <span className="text-neutral-400 text-sm tracking-tight">
                    Sep 2023
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white text-base tracking-tight">
                    The Honoured One
                  </span>
                  <span className="text-neutral-400 text-sm tracking-tight">
                    Apr 2023
                  </span>
                </div>
              </div>
              <hr className="border-neutral-800 w-full my-8" />
              <div className="rounded-xl bg-zinc-900 p-6 mt-6">
                <h3 className="text-white text-lg font-semibold mb-4 tracking-tight">
                  Tools and Stacks
                </h3>
                <div className="flex gap-4 flex-wrap justify-start">
                  <div className="bg-neutral-800 rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/tools/framer.svg"
                      alt="Framer"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/tools/figma.svg"
                      alt="Figma"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/tools/cursor.png"
                      alt="Cursor"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/tools/photoshop.svg"
                      alt="Photoshop"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
