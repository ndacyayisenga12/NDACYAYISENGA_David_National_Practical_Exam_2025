import { useState, useEffect } from 'react';
import axios from 'axios';

const Reports = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reports/monthly')
      .then(res => setReport(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center underline">Monthly Employee Payroll Report</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border p-3">First Name</th>
            <th className="border p-3">Last Name</th>
            <th className="border p-3">Position</th>
            <th className="border p-3">Department</th>
            <th className="border p-3">Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {report.map((r, i) => (
            <tr key={i} className="text-center hover:bg-gray-100">
              <td className="border p-3">{r.FirstName}</td>
              <td className="border p-3">{r.LastName}</td>
              <td className="border p-3">{r.Position}</td>
              <td className="border p-3">{r.DepartementName}</td>
              <td className="border p-3 font-bold text-green-700">{r.NetSalary} RWF</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Reports;
