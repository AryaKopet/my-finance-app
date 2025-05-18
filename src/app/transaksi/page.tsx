import TransactionForm from "../../components/TransactionForm";
import TransactionTable from "../../components/TransactionTable";

export default function TransaksiPage() {
  return (
    <div className="space-y-8">
      <TransactionForm />
      <TransactionTable />
    </div>
  );
}
