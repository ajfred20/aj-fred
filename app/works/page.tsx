"use client";

import Link from "next/link";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white text flex flex-col items-center justify-center relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <Link
          href="/"
          className="px-6 py-2 rounded-full bg-white text-black text-base tracking-tight flex items-center gap-2 border font-fancy border-zinc-700 hover:bg-zinc-800 hover:text-white transition"
        >
          GO BACK HOME
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <span className="select-none text-[18vw] leading-none font-zaslia text-zinc-800 text-center">
          404
        </span>
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-fancy text-gray-700 mb-2 tracking-tight">
            NOTHING IS HERE YET....😔
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm">
            Still cooking so please come back later
          </p>
        </div>
      </div>
    </div>
  );
}
