import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4 font-mono ">
      <div className="flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white font-bold text-2xl">StuFit Flix</div>

        {/* Navbar Links */}
        <div className="space-x-4">
          {/* Login Button with Link */}
          <Link to="/login">
            <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition">
              Login
            </button>
          </Link>

          {/* Register Button with Link */}
          <Link to="/">
            <button className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
