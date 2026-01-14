import HeaderHome from "../components/components-main/header-home";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 min-h-screen text-slate-900">
      <HeaderHome />
      <main>
        {children}
      </main>
    </div>
  );
}
