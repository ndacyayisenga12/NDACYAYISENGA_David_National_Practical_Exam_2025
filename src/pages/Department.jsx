import { useState } from 'react';
import axios from 'axios';

const Department = () => {
  const [dept, setDept] = useState({ 
    DepartementCode: '', 
    DepartementName: '', 
    GrossSalary: '',
    TotalDeduction: '' 
  });

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // API call to your Node.js backend
      await axios.post('http://localhost:5000/api/departments', dept);
      alert('Department recorded successfully!');
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert('Error saving department. Ensure backend is running.');
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b pb-2">Department Management</h2>
      <form onSubmit={handleSave} className="bg-white p-6 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Department Code (e.g., CW, MC)</label>
            <input type="text" className="mt-1 w-full border p-2 rounded focus:ring-blue-500" 
              onChange={(e) => setDept({...dept, DepartementCode: e.target.value})} required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Department Name</label>
            <input type="text" className="mt-1 w-full border p-2 rounded" 
              onChange={(e) => setDept({...dept, DepartementName: e.target.value})} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gross Salary (RWF)</label>
            <input type="number" className="mt-1 w-full border p-2 rounded" 
              onChange={(e) => setDept({...dept, GrossSalary: e.target.value})} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Total Deduction (RWF)</label>
            <input type="number" className="mt-1 w-full border p-2 rounded" 
              onChange={(e) => setDept({...dept, TotalDeduction: e.target.value})} required />
          </div>

          <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded font-bold hover:bg-blue-800 transition">
            Save Department Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Department;
