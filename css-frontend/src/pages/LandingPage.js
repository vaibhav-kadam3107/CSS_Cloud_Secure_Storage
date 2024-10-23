import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <div className="text-2xl font-bold">SecureImage</div>
        <div>
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg mr-4">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded-lg">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center min-h-[80vh]">
        <h1 className="text-5xl font-extrabold mb-6">
          Secure Your Memories, <span className="text-blue-500">Securely.</span>
        </h1>
        <p className="text-lg max-w-2xl mb-10">
          Safely store and manage your personal photos with industry-leading encryption. With our
          cloud-based platform, your memories are protected, private, and accessible only to you.
        </p>
        <div>
          <Link to="/signup">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-xl rounded-lg mr-4">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-xl rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SecureImage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
