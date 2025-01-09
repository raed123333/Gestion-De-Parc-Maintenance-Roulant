// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const NavBarDriver = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-lg">
      <div className="container py-3 flex justify-center md:justify-between items-center">
        {/* Logo/Title */}
        <div className="text-2xl font-bold hidden md:inline tracking-wide">
          Driver Panel
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-white text-lg">
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors duration-300 no-underline text-white"
          >
            Home
          </Link>
          <Link
            to="/createRepair"
            className="hover:text-blue-300 transition-colors duration-300 no-underline text-white"
          >
            Create Repair
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarDriver;
