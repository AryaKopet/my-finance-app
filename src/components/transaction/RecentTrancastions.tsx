const transaksi = [
  { id: 1, kategori: "Makan", jumlah: -50000, tanggal: "2025-05-15" },
  { id: 2, kategori: "Gaji", jumlah: 5000000, tanggal: "2025-05-10" },
  { id: 3, kategori: "Belanja", jumlah: -200000, tanggal: "2025-05-09" },
  { id: 4, kategori: "Freelance", jumlah: 1200000, tanggal: "2025-05-08" },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Transaksi Terbaru</h3>
      <ul className="divide-y divide-gray-200">
        {transaksi.map((tx) => (
          <li key={tx.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-800">{tx.kategori}</p>
              <p className="text-xs text-gray-500">{tx.tanggal}</p>
            </div>
            <span className={`font-semibold ${tx.jumlah > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {tx.jumlah > 0 ? '+' : '-'}Rp{Math.abs(tx.jumlah).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
