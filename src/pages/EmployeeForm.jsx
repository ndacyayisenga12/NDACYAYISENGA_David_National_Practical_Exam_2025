import { useState } from 'react';

const EmployeeForm = () => {
  const [employees, setEmployees] = useState([]); // Array to store employees locally
  const [formData, setFormData] = useState({
    employeeNumber: '', FirstName: '', LastName: '', Position: '', Gender: 'Male'
  });

  const handleAdd = (e) => {
    e.preventDefault();
    // Adding the new employee to our local list
    setEmployees([...employees, formData]);
    // Reset form
    setFormData({ employeeNumber: '', FirstName: '', LastName: '', Position: '', Gender: 'Male' });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Local Employee Entry</h2>
      
      {/* INPUT FORM */}
      <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow mb-10">
        <input placeholder="ID Number" value={formData.employeeNumber} className="border p-2" 
          onChange={(e) => setFormData({...formData, employeeNumber: e.target.value})} required />
        <input placeholder="First Name" value={formData.FirstName} className="border p-2" 
          onChange={(e) => setFormData({...formData, FirstName: e.target.value})} required />
        <input placeholder="Last Name" value={formData.LastName} className="border p-2" 
          onChange={(e) => setFormData({...formData, LastName: e.target.value})} required />
        <input placeholder="Position" value={formData.Position} className="border p-2" 
          onChange={(e) => setFormData({...formData, Position: e.target.value})} />
        <button className="col-span-2 bg-blue-700 text-white py-2 rounded font-bold">Add to List</button>
      </form>

      {/* DISPLAY TABLE */}
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold mb-4">Employee List (In-Memory)</h3>
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td className="p-2 border">{emp.employeeNumber}</td>
                <td className="p-2 border">{emp.FirstName} {emp.LastName}</td>
                <td className="p-2 border">{emp.Position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeForm;
