'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, User, Mail } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Works', path: '/works', icon: Briefcase },
    { name: 'About me', path: '/about', icon: User },
    { name: 'Contact me', path: '/contact', icon: Mail },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[120px] bg-black border-r border-neutral-800 flex flex-col items-center py-6">
      <div className="mb-12">
        <Link href="/" className="text-white font-semibold tracking-tighter text-sm">
          Aj Fred
          <span className="block text-xs text-gray-500 mt-1">Product Designer</span>
        </Link>
      </div>
      
      <nav className="flex flex-col items-center space-y-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center w-full px-2 py-2 text-xs ${isActive(item.path) ? 'text-white' : 'text-gray-500 hover:text-gray-300'} transition-colors duration-200`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive(item.path) ? 'text-white' : 'text-gray-500'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-auto">
        <span className="text-xs text-gray-500 rotate-[-90deg] inline-block">Made in Framer</span>
      </div>
    </aside>
  );
}