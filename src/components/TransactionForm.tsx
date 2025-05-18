"use client";

import { useState } from "react";

const TransactionForm = () => {
  const [tipe, setTipe] = useState("pemasukan");
  const [kategori, setKategori] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ tipe, kategori, jumlah, tanggal });
    // nanti kita simpan ke local state atau storage/database
    alert("Transaksi berhasil ditambahkan (sementara console dulu)");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Tambah Transaksi</h2>

      <div className="flex items-center gap-4">
        <label>
          <input
            type="radio"
            name="tipe"
            value="pemasukan"
            checked={tipe === "pemasukan"}
            onChange={() => setTipe("pemasukan")}
          />
          <span className="ml-2">Pemasukan</span>
        </label>
        <label>
          <input
            type="radio"
            name="tipe"
            value="pengeluaran"
            checked={tipe === "pengeluaran"}
            onChange={() => setTipe("pengeluaran")}
          />
          <span className="ml-2">Pengeluaran</span>
        </label>
      </div>

      <input
        type="text"
        placeholder="Kategori (misal: Makan, Gaji)"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="number"
        placeholder="Jumlah"
        value={jumlah}
        onChange={(e) => setJumlah(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="date"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />

      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
        Simpan Transaksi
      </button>
    </form>
  );
};

export default TransactionForm;
