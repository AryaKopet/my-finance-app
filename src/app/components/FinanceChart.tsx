"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", pemasukan: 5000000, pengeluaran: 2500000 },
  { name: "Feb", pemasukan: 4000000, pengeluaran: 1800000 },
  { name: "Mar", pemasukan: 3000000, pengeluaran: 2200000 },
  { name: "Apr", pemasukan: 7000000, pengeluaran: 3000000 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Grafik Keuangan Bulanan</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(v) => `Rp${v / 1000000}jt`} />
          <Tooltip formatter={(value: number) => `Rp${value.toLocaleString()}`} />
          <Line type="monotone" dataKey="pemasukan" stroke="#16a34a" strokeWidth={2} />
          <Line type="monotone" dataKey="pengeluaran" stroke="#dc2626" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
