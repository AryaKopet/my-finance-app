// src/app/transaksi/page.tsx

import TransactionForm from "../../components/transaction/TransactionForm";
import TransactionTable from "../../components/transaction/TransactionTable";
import RecentTransactions from "../../components/transaction/RecentTrancastions";
// import TransactionList from "../../components/transaction/TransactionList";

export default function TransaksiPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto py-8">
      <TransactionForm />
      <TransactionTable />
      <RecentTransactions />
      {/* <TransactionList /> */}
    </div>
  );
}
