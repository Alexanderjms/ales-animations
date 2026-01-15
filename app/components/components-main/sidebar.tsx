"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const gettingStarted = [
    { href: '#', label: 'Introduction' },
    { href: '#', label: 'Installation' },
    { href: '#', label: 'Usage' },
  ];

  const componentLinks = [
    { href: '/animations/fade-in', label: 'Fade In' },
    { href: '/animations/fade-out', label: 'Fade Out' },
    { href: '/animations/bounces', label: 'Bounces' },
    { href: '/animations/flashes', label: 'Flashes' },
    { href: '/animations/pulses', label: 'Pulses' },
    { href: '/animations/rubber-bands', label: 'Rubber Bands' },
  ];

  return (
    <aside className="w-64 h-full border-r border-gray-300 bg-white p-4 hidden md:block ">
      <nav className="flex flex-col">
        <h2 className="text-base font-bold text-gray-500 mb-3">Getting Started</h2>
        <div className="text-sm font-bold text-gray-700 mb-2 flex flex-col gap-1">
          {gettingStarted.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:bg-gray-200 hover:border-gray-300 border ${pathname === item.href ? 'bg-gray-200 border-gray-300' : 'border-transparent'} p-1 rounded transition-all duration-100`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <h2 className="text-base font-bold text-gray-500 mb-3 mt-4">Components</h2>
        <div className="text-sm font-bold text-gray-700 mb-2 flex flex-col gap-1">
          {componentLinks.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(link.href + '/') || (link.href !== '/' && pathname === link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:bg-gray-200 hover:border-gray-300 border ${active ? 'bg-gray-200 border-gray-300' : 'border-transparent'} p-1 rounded transition-all duration-100`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
