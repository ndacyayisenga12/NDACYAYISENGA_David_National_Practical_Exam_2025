import { useState, useEffect } from 'react';
import axios from 'axios';

const SalaryCRUD = () => {
  const [salaries, setSalaries] = useState([]);
  const [form, setForm] = useState({ id: null, empNo: '', gross: 0, deduction: 0, month: '' });

  const fetchSalaries = async () => {
    const res = await axios.get('http://localhost:5000/api/salary');
    setSalaries(res.data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const net = form.gross - form.deduction;
    if (form.id) {
      await axios.put(`http://localhost:5000/api/salary/${form.id}`, { ...form, net });
    } else {
      await axios.post('http://localhost:5000/api/salary', { ...form, net });
    }
    setForm({ id: null, empNo: '', gross: 0, deduction: 0, month: '' });
    fetchSalaries();
  };

  const deleteSalary = async (id) => {
    await axios.delete(`http://localhost:5000/api/salary/${id}`);
    fetchSalaries();
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchSalaries(); }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Payroll (CRUD)</h2>
      <form onSubmit={handleSave} className="flex gap-2 mb-8 bg-gray-50 p-4 border">
        <input placeholder="Emp No" value={form.empNo} className="border p-2 w-24" onChange={(e) => setForm({...form, empNo: e.target.value})} />
        <input type="number" placeholder="Gross" value={form.gross} className="border p-2" onChange={(e) => setForm({...form, gross: e.target.value})} />
        <input type="number" placeholder="Deduction" value={form.deduction} className="border p-2" onChange={(e) => setForm({...form, deduction: e.target.value})} />
        <input placeholder="Month" value={form.month} className="border p-2" onChange={(e) => setForm({...form, month: e.target.value})} />
        <button className="bg-green-600 text-white px-4 py-2 rounded">{form.id ? 'Update' : 'Add'}</button>
      </form>

      <table className="w-full bg-white border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Emp No</th>
            <th className="p-2 border">Net Salary</th>
            <th className="p-2 border">Month</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map(s => (
            <tr key={s.id} className="text-center">
              <td className="p-2 border">{s.empNo}</td>
              <td className="p-2 border font-bold">{s.net} RWF</td>
              <td className="p-2 border">{s.month}</td>
              <td className="p-2 border">
                <button onClick={() => setForm(s)} className="text-blue-600 mr-4">Edit</button>
                <button onClick={() => deleteSalary(s.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SalaryCRUD;
