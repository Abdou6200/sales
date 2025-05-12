import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <img
          src="Logo1BG.png"
          alt="Admin"
          className="rounded-full w-16 h-16"
        />
      </div>

      <nav className="space-y-4">
        <Link to="/users" className="block p-2 hover:bg-gray-700 rounded">
          Users Table
        </Link>
        <Link to="/partners" className="block p-2 hover:bg-gray-700 rounded">
          Partners Table
        </Link>
        <Link to="/codes" className="block p-2 hover:bg-gray-700 rounded">
          Codes Promo Table
        </Link>
        <Link to="/bonreduction" className="block p-2 hover:bg-gray-700 rounded">
          Bons Reductions Table
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
