import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import type { Pegawai } from "./types/pegawai";

function App() {
  const [pegawai, setPegawai] = useState<Pegawai[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (data: Pegawai) => {
    if (editIndex !== null) {
      const updated = [...pegawai];
      updated[editIndex] = data;
      setPegawai(updated);
      setEditIndex(null);
    } else {
      setPegawai([...pegawai, data]);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setPegawai(pegawai.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full items-center justify-items-center p-6 text-center">
      <div className="bg-white p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Master Data Pegawai
        </h1>

        <Form
          onSubmit={handleSubmit}
          editData={editIndex !== null ? pegawai[editIndex] : null}
        />

        <Table
          data={pegawai}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>

  );
}

export default App;
