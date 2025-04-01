import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      alert('Username and Password are required!');
      return;
    }

    // Save the credentials in session storage
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);

    alert("Signup successful! Now log in.");
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? 
          <span onClick={() => navigate('/login')} className="text-blue-600 cursor-pointer hover:underline"> Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;





