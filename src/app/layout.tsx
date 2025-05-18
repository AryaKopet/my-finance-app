import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Finansiku",
  description: "Aplikasi manajemen keuangan modern",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="flex bg-gray-100 min-h-screen antialiased">
        <Sidebar />
        <div className="ml-64 w-full">
          <Header />
          <main className="pt-20 px-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
