import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeForm from './pages/EmployeeForm';
import SalaryCRUD from './pages/SalaryCRUD';
import Reports from './pages/Reports';

function App() {
  // Shared state for the whole app
  const [employees, setEmployees] = useState([]);
  const [salaries, setSalaries] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/employees" element={
          <EmployeeForm employees={employees} setEmployees={setEmployees} />
        } />
        <Route path="/salary" element={
          <SalaryCRUD salaries={salaries} setSalaries={setSalaries} />
        } />
        <Route path="/reports" element={
          <Reports employees={employees} salaries={salaries} />
        } />
      </Routes>
    </Router>
  );
}
export default App;
