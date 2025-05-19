import { ReportProvider } from "@/components/report/ReportProvider"
import ReportSummary from "@/components/report/ReportSummary"
import ReportChart from "@/components/report/ReportChart"

export default function LaporanPage() {
  return (
    <ReportProvider>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Laporan Keuangan</h1>
        <ReportSummary />
        <ReportChart />
      </div>
    </ReportProvider>
  )
}
