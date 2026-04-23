import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">SmartPark EPMS</h1>
      <div className="flex gap-6 items-center">
        <Link to="/employees" className="hover:text-blue-200">Employee</Link>
        <Link to="/departments" className="hover:text-blue-200">Department</Link>
        <Link to="/salary" className="hover:text-blue-200">Salary</Link>
        <Link to="/reports" className="hover:text-blue-200">Reports</Link>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">Logout</button>
      </div>
    </nav>
  );
};
export default Navbar;
