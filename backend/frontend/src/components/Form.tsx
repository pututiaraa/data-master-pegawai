import { useState } from "react";
import type { Pegawai } from "../types/pegawai";

interface Props {
  onSubmit: (data: Pegawai) => void;
  editData: Pegawai | null;
}

export default function PegawaiForm({ onSubmit, editData }: Props) {
  const [form, setForm] = useState<Pegawai>({
    nama: "",
    nip: "",
    divisi: "",
    indexScore: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "indexScore" ? Number(value) : value,
    });
  };

  const handleSubmit = () => {
    if (!form.nama || !form.nip) return;
    onSubmit(form);
    setForm({ nama: "", nip: "", divisi: "", indexScore: 0 });
  };

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-5 gap-3">
      <input
        name="nama"
        placeholder="Nama"
        value={form.nama}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="nip"
        placeholder="NIP"
        value={form.nip}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="divisi"
        placeholder="Divisi"
        value={form.divisi}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="indexScore"
        type="number"
        placeholder="Index Score"
        value={form.indexScore}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white font-semibold rounded px-1 py-2 hover:bg-blue-700"
      >
        {editData ? "Update" : "Tambah"}
      </button>
    </div>
  );
}
