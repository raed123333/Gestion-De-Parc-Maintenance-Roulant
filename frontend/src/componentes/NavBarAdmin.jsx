// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const NavBarAdmin = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-600 to-green-500 text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="container py-3 flex justify-center md:justify-between items-center">
        {/* Admin Panel Title */}
        <div className="text-2xl font-bold hidden md:inline">Admin Panel</div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/Repair"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Repair
          </Link>
          <Link
            to="/login"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Driver
          </Link>
          <Link
            to="/maintenancePlans"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Maintenance
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
