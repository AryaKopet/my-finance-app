"use client"

import { useState } from "react"

const TransactionForm = () => {
  const [kategori, setKategori] = useState("")
  const [judul, setJudul] = useState("")
  const [jumlah, setJumlah] = useState("")
  const [tanggal, setTanggal] = useState("")
  const [tipe, setTipe] = useState("pemasukan")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const type = tipe === "pemasukan" ? "income" : "expense"

    const newTransaction = {
      title: judul,
      amount: parseInt(jumlah),
      category: kategori,
      type: type,
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      })

      if (!res.ok) {
        const errData = await res.json()
        console.error("Respon error:", errData)
        throw new Error("Gagal menambahkan transaksi")
      }

      alert("Transaksi berhasil ditambahkan!")

      // 🔁 Reset form
      setJudul("")
      setKategori("")
      setJumlah("")
      setTanggal("")
      setTipe("pemasukan")

    } catch (error) {
      console.error("Kesalahan saat mengirim:", error)
      alert("Terjadi kesalahan saat mengirim data")
    }
  }

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
        placeholder="Judul Transaksi (cth: beli kopi)"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        placeholder="Kategori (cth: Makanan)"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="number"
        placeholder="total (cth: 50000)"
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
      />

      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
        Simpan Transaksi
      </button>
    </form>
  )
}

export default TransactionForm
