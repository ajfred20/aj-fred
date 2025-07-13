import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <Link
          href="/"
          className="px-6 py-2 rounded-full bg-zinc-900 text-white text-xs tracking-widest flex items-center gap-2 border border-zinc-700 hover:bg-zinc-800 transition"
        >
          <span className="text-lg">&#8592;</span> GO BACK HOME
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <span className="select-none text-[18vw] leading-none font-extrabold text-zinc-800 text-center">
          404
        </span>
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2 tracking-tight">
            NOTHING IS HERE
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Please check elsewhere
          </p>
        </div>
      </div>
    </div>
  );
}
