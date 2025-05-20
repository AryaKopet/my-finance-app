"use client"

import { useState } from "react"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const TransactionTable = () => {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transactions`, fetcher)

  const [filterDate, setFilterDate] = useState("")

  if (isLoading) return <p>Memuat data...</p>
  if (error) return <p>Gagal memuat data transaksi</p>

  // Filter hanya berdasarkan satu tanggal (yyyy-mm-dd)
  const filteredData = data?.filter((tx: any) => {
    if (!filterDate) return true
    const txDate = new Date(tx.createdAt).toISOString().split("T")[0]
    return txDate === filterDate
  })

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Riwayat Transaksi</h2>

      {/* Filter Tanggal */}
      <div className="mb-4">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border rounded-md p-2"
        />
      </div>

      {/* Tabel Transaksi */}
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-2">Tanggal</th>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Jumlah</th>
            <th>Tipe</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.length > 0 ? (
            filteredData.map((tx: any) => (
              <tr key={tx.id} className="border-b last:border-none">
                <td className="py-2">
                  {new Date(tx.createdAt).toLocaleDateString("id-ID")}
                </td>
                <td>{tx.title}</td>
                <td>{tx.category}</td>
                <td className={tx.type === "expense" ? "text-red-500" : "text-green-600"}>
                  {tx.type === "expense" ? "-" : "+"} Rp{tx.amount.toLocaleString("id-ID")}
                </td>
                <td className="capitalize">{tx.type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-400">
                Tidak ada transaksi pada tanggal ini.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable
