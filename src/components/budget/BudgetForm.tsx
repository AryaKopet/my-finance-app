"use client"
import { useState } from "react"

export default function BudgetForm() {
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Nanti: kirim ke state global atau API
    console.log("Anggaran Baru:", category, amount)
    setCategory("")
    setAmount("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Kategori (cth: Makanan)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Jumlah Anggaran (Rp)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Tambahkan Anggaran
      </button>
    </form>
  )
}
