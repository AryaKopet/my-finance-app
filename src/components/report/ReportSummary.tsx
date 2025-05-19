"use client"
import ReportCard from "./ReportCard"
import { useReport } from "./ReportProvider"

export default function ReportSummary() {
  const { income, expense } = useReport()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <ReportCard title="Total Pemasukan" amount={income} />
      <ReportCard title="Total Pengeluaran" amount={expense} />
    </div>
  )
}
