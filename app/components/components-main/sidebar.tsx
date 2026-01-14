import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full border-r border-gray-300 bg-white p-4 hidden md:block ">
      <nav className="flex flex-col">
        <h2 className="text-base font-bold text-gray-500 mb-3">Getting Started</h2>
        <div className="text-sm font-bold text-gray-700 mb-2 flex flex-col gap-1">
          <Link href="#" className="hover:bg-gray-200 hover:border-gray-300 border border-transparent p-1 rounded transition-all duration-100">Introduction</Link>
          <Link href="#" className="hover:bg-gray-200 hover:border-gray-300 border border-transparent p-1 rounded transition-all duration-100">Installation</Link>
          <Link href="#" className="hover:bg-gray-200 hover:border-gray-300 border border-transparent p-1 rounded transition-all duration-100">Usage</Link>
        </div>

        <h2 className="text-base font-bold text-gray-500 mb-3 mt-4">Components</h2>
        <div className="text-sm font-bold text-gray-700 mb-2 flex flex-col gap-1">
          <Link href="/animations/fide-in" className="hover:bg-gray-200 hover:border-gray-300 border border-transparent p-1 rounded transition-all duration-100">Fade In</Link>
          <Link href="/animations/fide-out" className="hover:bg-gray-200 hover:border-gray-300 border border-transparent p-1 rounded transition-all duration-100">Fade Out</Link>
        </div>
        


        
      </nav>
    </aside>
  );
}
