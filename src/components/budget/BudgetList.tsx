import BudgetCard from "./BudgetCard"

const dummyBudgets = [
  { category: "Makanan", amount: 1000000, spent: 650000 },
  { category: "Transportasi", amount: 500000, spent: 200000 },
  { category: "Hiburan", amount: 300000, spent: 150000 },
]

export default function BudgetList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dummyBudgets.map((budget, idx) => (
        <BudgetCard key={idx} {...budget} />
      ))}
    </div>
  )
}
