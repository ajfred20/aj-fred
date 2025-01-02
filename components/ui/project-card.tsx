import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-sm bg-muted rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={link}
        className="inline-flex items-center text-sm hover:text-blue-600"
      >
        Visit Project <ArrowUpRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}
