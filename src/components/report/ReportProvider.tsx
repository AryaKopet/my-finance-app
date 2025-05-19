"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type ReportContextType = {
  income: number
  expense: number
  chartData: { name: string; value: number }[]
}

const ReportContext = createContext<ReportContextType | undefined>(undefined)

export const useReport = () => {
  const context = useContext(ReportContext)
  if (!context) throw new Error("useReport must be used within ReportProvider")
  return context
}

export const ReportProvider = ({ children }: { children: ReactNode }) => {
  // Dummy state dinamis
  const [income] = useState(5000000)
  const [expense] = useState(2750000)
  const [chartData] = useState([
    { name: "Makanan", value: 1200000 },
    { name: "Transportasi", value: 800000 },
    { name: "Hiburan", value: 750000 },
  ])

  return (
    <ReportContext.Provider value={{ income, expense, chartData }}>
      {children}
    </ReportContext.Provider>
  )
}
