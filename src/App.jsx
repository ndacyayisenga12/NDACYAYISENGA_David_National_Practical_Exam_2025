import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import EmployeeForm from './pages/EmployeeForm';
import SalaryCRUD from './pages/SalaryCRUD';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees" element={<EmployeeForm />} />
          <Route path="/salary" element={<SalaryCRUD />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
