import SummaryCards from "./components/SummaryCard";
import FinanceChart from "./components/FinanceChart";
import RecentTransactions from "./components/RecentTrancastions";

export default function Home() {
  return (
    <div className="space-y-8">
      <SummaryCards />
      <FinanceChart />
      <RecentTransactions />
      <br />
    </div>
  );
}
