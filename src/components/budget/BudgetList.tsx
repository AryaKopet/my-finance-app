"use client"

import { useBudgets } from "./BudgetProvider"
import BudgetCard from "./BudgetCard"

export default function BudgetList() {
  const { budgets } = useBudgets()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {budgets.map((budget, idx) => (
        <BudgetCard key={idx} {...budget} />
      ))}
    </div>
  )
}
