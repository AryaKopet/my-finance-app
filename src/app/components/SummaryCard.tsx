type CardProps = {
  title: string;
  amount: string;
  icon: React.ReactNode;
  bg: string;
};

const Card = ({ title, amount, icon, bg }: CardProps) => (
  <div className={`p-4 rounded-2xl shadow-sm text-white ${bg} flex items-center justify-between`}>
    <div>
      <h3 className="text-sm opacity-80">{title}</h3>
      <p className="text-2xl font-semibold">{amount}</p>
    </div>
    <div className="text-3xl">{icon}</div>
  </div>
);

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card
        title="Saldo Sekarang"
        amount="Rp5.200.000"
        icon={<span>💰</span>}
        bg="bg-teal-600"
      />
      <Card
        title="Total Pemasukan"
        amount="Rp8.000.000"
        icon={<span>📈</span>}
        bg="bg-green-600"
      />
      <Card
        title="Total Pengeluaran"
        amount="Rp2.800.000"
        icon={<span>📉</span>}
        bg="bg-red-500"
      />
    </div>
  );
};

export default SummaryCards;
