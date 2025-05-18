import BudgetForm from "@/components/budget/BudgetForm"
import BudgetList from "@/components/budget/BudgetList"

export default function BudgetPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Anggaran Bulanan</h1>
      <BudgetForm />
      <BudgetList />
    </div>
  )
}
