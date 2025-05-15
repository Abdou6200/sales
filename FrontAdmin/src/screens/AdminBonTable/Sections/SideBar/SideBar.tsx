import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="bg-cover bg-center text-white w-64 min-h-screen p-4"
      style={{ backgroundImage: 'url("bgred.jpg")' }}
    >
      {/* Logo with larger size */}
      <div className="flex items-center justify-center mb-8">
        <img
          src="/Logo1BG.png" // Update with the correct path if needed
          alt="Admin"
          className="rounded-full w-32 h-32 border-4 border-white"  // Wider logo with a white border
        />
      </div>

      <nav className="space-y-4">
        <Link to="/users" className="block p-2 hover:bg-gray-700 rounded transition ease-in-out duration-200">
          Users Table
        </Link>
        <Link to="/partners" className="block p-2 hover:bg-gray-700 rounded transition ease-in-out duration-200">
          Partners Table
        </Link>
        <Link to="/codes" className="block p-2 hover:bg-gray-700 rounded transition ease-in-out duration-200">
          Codes Promo Table
        </Link>
        <Link to="/bonreduction" className="block p-2 hover:bg-gray-700 rounded transition ease-in-out duration-200">
          Bons Reductions Table
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
