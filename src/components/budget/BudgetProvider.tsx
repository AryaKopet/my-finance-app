"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Budget = {
  category: string
  amount: number
  spent: number
}

type BudgetContextType = {
  budgets: Budget[]
  addBudget: (budget: Budget) => void
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined)

export function useBudgets() {
  const context = useContext(BudgetContext)
  if (!context) throw new Error("useBudgets must be used within BudgetProvider")
  return context
}

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budgets, setBudgets] = useState<Budget[]>([
    { category: "Makanan", amount: 1000000, spent: 650000 },
    { category: "Transportasi", amount: 500000, spent: 200000 },
    { category: "Hiburan", amount: 300000, spent: 150000 },
  ])

  const addBudget = (budget: Budget) => {
    setBudgets((prev) => [...prev, budget])
  }

  return (
    <BudgetContext.Provider value={{ budgets, addBudget }}>
      {children}
    </BudgetContext.Provider>
  )
}
