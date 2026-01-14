import Header from "../components/components-main/header";
import Sidebar from "../components/components-main/sidebar";

export default function AnimationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-200 text-slate-900 min-h-screen">
      <Header />
      <div className="flex h-[calc(100vh-65px)]">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="bg-white shadow-sm p-3 min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
