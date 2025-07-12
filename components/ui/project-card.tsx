import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  large?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function ProjectCard({
  image,
  title,
  subtitle,
  large = false,
  onClick,
  children,
}: ProjectCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-neutral-800 shadow-md ${
        large ? "h-64" : "h-48"
      } w-full group cursor-pointer`}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {large ? (
        <div className="absolute bottom-0 left-0 w-full flex items-end justify-between p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div>
            <h3 className="text-white text-xl font-semibold mb-1 drop-shadow-lg">
              {title}
            </h3>
            <p className="text-neutral-200 text-sm drop-shadow-lg">
              {subtitle}
            </p>
          </div>
          {children && <div className="flex gap-2 items-end">{children}</div>}
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white text-lg font-semibold mb-1 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-neutral-300 text-xs drop-shadow-lg">{subtitle}</p>
        </div>
      )}
    </div>
  );
}
