import { useState } from 'react';

const SalaryCRUD = () => {
  const [salaries, setSalaries] = useState([]);
  const [form, setForm] = useState({ empNo: '', gross: 0, deduction: 0 });

  const addSalary = (e) => {
    e.preventDefault();
    const net = form.gross - form.deduction;
    const newEntry = { ...form, net, id: Date.now() }; // Unique ID using timestamp
    setSalaries([...salaries, newEntry]);
    setForm({ empNo: '', gross: 0, deduction: 0 });
  };

  const deleteItem = (id) => {
    setSalaries(salaries.filter(item => item.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Salary CRUD</h2>
      <form onSubmit={addSalary} className="flex gap-2 mb-8 bg-gray-50 p-4 border rounded">
        <input placeholder="Emp No" value={form.empNo} className="border p-2" 
          onChange={(e) => setForm({...form, empNo: e.target.value})} />
        <input type="number" placeholder="Gross" value={form.gross} className="border p-2" 
          onChange={(e) => setForm({...form, gross: Number(e.target.value)})} />
        <input type="number" placeholder="Deduction" value={form.deduction} className="border p-2" 
          onChange={(e) => setForm({...form, deduction: Number(e.target.value)})} />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Calculate & Add</button>
      </form>

      <table className="w-full bg-white border shadow">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2 border">Emp No</th>
            <th className="p-2 border">Net Salary</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map(s => (
            <tr key={s.id} className="text-center">
              <td className="p-2 border">{s.empNo}</td>
              <td className="p-2 border font-bold text-green-700">{s.net} RWF</td>
              <td className="p-2 border">
                <button onClick={() => deleteItem(s.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryCRUD;
