import type { Pegawai } from "../types/pegawai";

interface Props {
  data: Pegawai[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function PegawaiTable({ data, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-3 py-2">Nama</th>
            <th className="border px-3 py-2">NIP</th>
            <th className="border px-3 py-2">Divisi</th>
            <th className="border px-3 py-2">Index Score</th>
            <th className="border px-3 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4">
                Belum ada data
              </td>
            </tr>
          ) : (
            data.map((p, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{p.nama}</td>
                <td className="border px-3 py-2">{p.nip}</td>
                <td className="border px-3 py-2">{p.divisi}</td>
                <td className="border px-3 py-2">{p.indexScore}</td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="bg-yellow-600 hover:bg-yellow-700 px-3 py-2 rounded text-white text-semibold"
                  > 
                  Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-white text-semibold"
                  >
                  Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
