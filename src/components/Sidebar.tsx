import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 fixed top-0 left-0 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">💰 Finansiku</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:text-teal-400 transition">Dashboard</Link>
        <Link href="/transaksi" className="hover:text-teal-400 transition">Transaksi</Link>
        <Link href="/anggaran" className="hover:text-teal-400 transition">Anggaran</Link>
        <Link href="/laporan" className="hover:text-teal-400 transition">Laporan</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
