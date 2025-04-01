import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Retrieve stored credentials
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      sessionStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate('/');
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? 
          <span onClick={() => navigate('/signup')} className="text-indigo-600 cursor-pointer hover:underline"> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;





