"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="w-full p-4 border-b border-gray-300 bg-white">
      <nav className="flex items-center">
        <Image src="/alesAnimations.svg" alt="Ales Animations Logo" width={50} height={50} />
        <h1 className="text-xl font-bold"><span className="text-blue-500">Ales</span><span className="text-indigo-500">Animations</span></h1>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search animations" 
              className="border border-gray-300 rounded-md pl-2 pr-9 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
            />
            <Image 
              src="/InputAnimatedIcon.svg" 
              alt="Search Icon" 
              width={20} 
              height={20} 
              className="absolute right-2 pointer-events-none" 
            />
          </div>
            <div className="w-px h-6 bg-gray-300" />

          {isDarkMode ? (
            <Image 
                src="/Sun.svg" 
                alt="Sun Logo" 
                width={24} 
                height={24} 
                className="cursor-pointer hover:opacity-80"
                onClick={() => setIsDarkMode(false)}
              />
            ) : (
              <Image 
                src="/Moon.svg" 
                alt="Moon Logo" 
                width={24} 
                height={24} 
                className="cursor-pointer hover:opacity-80"
                onClick={() => setIsDarkMode(true)}
              />
            )}
            <div className="w-px h-6 bg-gray-300" />
            <Image src="/github.svg" alt="GitHub Logo" width={24} height={24} className="cursor-pointer hover:opacity-80" />
        </div>
      </nav>
    </header>
  );
}
