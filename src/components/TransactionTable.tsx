const dataDummy = [
  { id: 1, tipe: "pemasukan", kategori: "Gaji", jumlah: 5000000, tanggal: "2025-05-10" },
  { id: 2, tipe: "pengeluaran", kategori: "Makan", jumlah: 75000, tanggal: "2025-05-11" },
];

const TransactionTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Riwayat Transaksi</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-2">Tanggal</th>
            <th>Kategori</th>
            <th>Jumlah</th>
            <th>Tipe</th>
          </tr>
        </thead>
        <tbody>
          {dataDummy.map((tx) => (
            <tr key={tx.id} className="border-b last:border-none">
              <td className="py-2">{tx.tanggal}</td>
              <td>{tx.kategori}</td>
              <td className={tx.tipe === "pengeluaran" ? "text-red-500" : "text-green-600"}>
                {tx.tipe === "pengeluaran" ? "-" : "+"}Rp{tx.jumlah.toLocaleString()}
              </td>
              <td className="capitalize">{tx.tipe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
