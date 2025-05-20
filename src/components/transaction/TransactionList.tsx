"use client"

import useSWR from "swr"
import { fetcher } from "@/lib/api"

export default function TransactionList() {
  const { data, error, isLoading } = useSWR("/transactions", fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Gagal memuat data</div>

  return (
    <ul className="space-y-2">
      {data.map((tx: any) => (
        <li key={tx.id} className="p-2 border rounded-lg shadow-sm">
          <div className="font-semibold">{tx.description}</div>
          <div className="text-sm text-gray-600">{tx.date}</div>
          <div className="text-green-600 font-medium">Rp{tx.amount}</div>
        </li>
      ))}
    </ul>
  )
}
