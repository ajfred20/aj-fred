import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  website?: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  link,
  website,
}: ProjectCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          {website && (
            <Link 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 backdrop-blur-sm p-1.5 rounded-full hover:bg-black/70 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold tracking-tighter text-white">{title}</h3>
        <p className="text-sm font-normal tracking-tight text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
}
