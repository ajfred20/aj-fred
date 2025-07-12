import Link from "next/link";
import {
  HomeIcon,
  FolderClosed,
  User,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import ProjectCard from "../../components/ui/project-card";

const projects = [
  {
    title: "Chimly",
    subtitle: "AI-powered PM",
    image: "/assets/green.png",
    featured: true,
  },
  {
    title: "Hustle",
    subtitle: "Web3 Freelance Platform",
    image: "/assets/ultravibe.png",
  },
  {
    title: "Maison",
    subtitle: "Furniture E-commerce Template",
    image: "/assets/star.jpg",
  },
  {
    title: "Bucx",
    subtitle: "Stablecoin Wallet Platform",
    image: "/assets/purple.png",
  },
  {
    title: "Echo",
    subtitle: "Saas website",
    image: "/assets/echo.avif",
  },
];

export default function WorksPage() {
  return (
    <div className="flex min-h-screen bg-black">
      <aside className="w-[240px] border-r border-neutral-800 h-screen sticky top-0 p-5 flex flex-col">
        <div className="mb-10">
          <h1 className="text-lg font-semibold tracking-tight">Aj Fred</h1>
          <p className="text-sm text-neutral-400">Fullstack Developer</p>
        </div>

        <nav className="flex-1 space-y-1">
          <Link
            href="/"
            className="flex items-center py-2 px-3 rounded-md bg-neutral-900 text-white"
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
            className="flex items-center py-2 px-3 rounded-md text-neutral-400 hover:text-white transition-colors"
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
      <main className="flex-1 flex flex-col items-center px-8 pt-10 pb-6 ml-[120px]">
        <div className="w-full max-w-3xl">
          <div className="rounded-xl bg-zinc-900 px-6 py-3 mb-6">
            <h2 className="text-xl font-medium text-white">My works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <ProjectCard
                image={projects[0].image}
                title={projects[0].title}
                subtitle={projects[0].subtitle}
                large
              >
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                    <span className="sr-only">Previous</span>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                    <span className="sr-only">Next</span>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </ProjectCard>
            </div>
            {projects.slice(1).map((project) => (
              <ProjectCard
                key={project.title}
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
              />
            ))}
          </div>
        </div>
        <footer className="mt-auto w-full flex justify-center py-6">
          <span className="text-neutral-400 text-sm">
            Made by The Honoured One
          </span>
        </footer>
      </main>
    </div>
  );
}
