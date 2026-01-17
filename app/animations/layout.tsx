import Header from "../components/components-main/header";
import Sidebar from "../components/components-main/sidebar";

export default function AnimationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-200 text-slate-900 h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 overflow-auto main-scroll">
          <div className="bg-white shadow-sm p-3 min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
