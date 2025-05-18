"use client"

import { useState } from "react"
import { useBudgets } from "./BudgetProvider"

export default function BudgetForm() {
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const { addBudget } = useBudgets()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addBudget({ category, amount: +amount, spent: 0 })
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
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Tambahkan Anggaran
      </button>
    </form>
  )
}
