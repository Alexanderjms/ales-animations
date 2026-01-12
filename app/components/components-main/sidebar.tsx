import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full border-r bg-gray-200 p-4 hidden md:block ">
      <nav className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Menu</h2>
        <Link href="/" className="p-2 hover:bg-gray-100 rounded-md">Home</Link>
        <Link href="/fide-in" className="p-2 hover:bg-gray-100 rounded-md">Fide In Animation</Link>
        <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Animations</Link>
        <Link href="#" className="p-2 hover:bg-gray-100 rounded-md">Documentation</Link>
      </nav>
    </aside>
  );
}
