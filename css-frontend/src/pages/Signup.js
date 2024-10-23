import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup process (you can replace this with actual signup logic)
    console.log('User signed up:', { name, email, password });

    // Set the authentication flag (replace this with actual auth logic)
    // localStorage.setItem('isAuthenticated', true); // Example for future use
    navigate('/dashboard'); // Redirect to dashboard after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSignup} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 rounded hover:bg-green-400"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
