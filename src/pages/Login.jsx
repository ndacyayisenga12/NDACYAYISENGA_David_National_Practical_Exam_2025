import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === '1234') {
      localStorage.setItem('auth', 'true');
      navigate('/employees');
    } else { alert('Wrong credentials!'); }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-purple-200">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">SmartPark Login</h2>
        <input type="text" placeholder="Username" className="w-full border p-2 mb-4 rounded" 
          onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
        <input type="password" placeholder="Password" className="w-full border p-2 mb-6 rounded" 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
        <button className="w-full bg-blue-700 text-white py-2 rounded font-bold">Login</button>
      </form>
    </div>
  );
};
export default Login;
