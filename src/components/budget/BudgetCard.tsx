"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function BudgetCard({
  category,
  amount,
  spent,
}: {
  category: string
  amount: number
  spent: number
}) {
  const percentage = Math.min((spent / amount) * 100, 100)

  return (
    <Card className="p-4 shadow-md space-y-2">
      <h2 className="text-lg font-semibold">{category}</h2>
      <p className="text-sm text-gray-500">Anggaran: Rp {amount.toLocaleString()}</p>
      <p className="text-sm text-gray-500">Terpakai: Rp {spent.toLocaleString()}</p>
      <Progress value={percentage} />
      <p className="text-xs text-right">{percentage.toFixed(1)}%</p>
    </Card>
  )
}
