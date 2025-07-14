import Image from "next/image";
import React from "react";

interface HighlightCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  tags?: string[];
  buttonText?: string;
}

export default function HighlightCard({
  image,
  title,
  price,
  description,
  tags = [],
  buttonText = "Add to Cart",
}: HighlightCardProps) {
  return (
    <div className="bg-neutral-900 rounded-3xl shadow-xl overflow-hidden flex flex-col w-full max-w-sm mx-auto">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-3xl"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          <span className="w-2 h-1 rounded-full bg-white/80" />
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="w-1 h-1 rounded-full bg-white/40" />
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-bold tracking-tighter mb-0">
            {title}
          </h3>
          <span className="bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {price}
          </span>
        </div>
        <p className="text-neutral-300 text-sm tracking-tight mb-1">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-neutral-800 text-neutral-200 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full mt-2 bg-[#1f383f] hover:bg-[#203a3f] text-white text-base font-semibold py-3 rounded-2xl transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
