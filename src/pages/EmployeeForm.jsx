import { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [emp, setEmp] = useState({
    employeeNumber: '', FirstName: '', LastName: '', Position: '', 
    Address: '', Telephone: '', Gender: 'Male', hiredDate: '', deptCode: 'CW'
  });

  const saveEmployee = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/employees', emp);
    alert('Employee Saved!');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Employee Registration</h2>
      <form onSubmit={saveEmployee} className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow">
        <input placeholder="Employee Number" className="border p-2" onChange={(e) => setEmp({...emp, employeeNumber: e.target.value})} />
        <input placeholder="First Name" className="border p-2" onChange={(e) => setEmp({...emp, FirstName: e.target.value})} />
        <input placeholder="Last Name" className="border p-2" onChange={(e) => setEmp({...emp, LastName: e.target.value})} />
        <select className="border p-2" onChange={(e) => setEmp({...emp, Gender: e.target.value})}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input placeholder="Position" className="border p-2" onChange={(e) => setEmp({...emp, Position: e.target.value})} />
        <input placeholder="Telephone" className="border p-2" onChange={(e) => setEmp({...emp, Telephone: e.target.value})} />
        <input type="date" className="border p-2" onChange={(e) => setEmp({...emp, hiredDate: e.target.value})} />
        <input placeholder="Address" className="border p-2" onChange={(e) => setEmp({...emp, Address: e.target.value})} />
        <button className="col-span-2 bg-blue-700 text-white py-2 rounded">Save Employee</button>
      </form>
    </div>
  );
};
export default EmployeeForm;
