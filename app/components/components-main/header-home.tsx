"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="w-full p-4 border-b border-gray-300/50 bg-white">
      <nav className="flex items-center">
        <Image src="/alesAnimations.svg" alt="Ales Animations Logo" width={50} height={50} />
        <h1 className="text-xl font-bold"><span className="text-blue-500">Ales</span><span className="text-indigo-500">Animations</span></h1>
        
        <h1 className="text-lg font-semibold ml-4 cursor-pointer group">
          <span className="transition-colors duration-200 group-hover:text-blue-500 text-gray-900">Compo</span>
          <span className="transition-colors duration-200 group-hover:text-indigo-500 text-gray-900">nents</span>
        </h1>

        <h1 className="text-lg font-semibold ml-4 cursor-pointer group">
          <span className="transition-colors duration-200 group-hover:text-blue-500 text-gray-900">Show</span>
          <span className="transition-colors duration-200 group-hover:text-indigo-500 text-gray-900">case</span>
        </h1>

        <div className="ml-auto flex items-center gap-4">
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
