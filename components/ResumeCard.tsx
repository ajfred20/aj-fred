import Link from 'next/link';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function ResumeCard() {
  return (
    <div className="relative rounded-xl group w-[400px] h-[200px] bg-neutral-900 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="absolute inset-0 bg-[url('/assets/resume.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 border-4 border-neutral-700 rounded-full opacity-70"></div>
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-medium tracking-tight">My Resume</h3>
        <p className="text-xs text-neutral-300">Download</p>
        
        <Link 
          href="/resume.pdf" 
          target="_blank"
          className="mt-3 inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </Link>
      </div>
    </div>
  );
}