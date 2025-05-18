import BudgetForm from "@/components/budget/BudgetForm"
import BudgetList from "@/components/budget/BudgetList"
import { BudgetProvider } from "@/components/budget/BudgetProvider"

export default function BudgetPage() {
  return (
    <BudgetProvider>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">Anggaran Bulanan</h1>
        <BudgetForm />
        <BudgetList />
      </div>
    </BudgetProvider>
  )
}
