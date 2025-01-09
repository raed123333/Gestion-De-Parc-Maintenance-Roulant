// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-600 to-green-500 text-white px-8 sm:px-16 md:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="container py-3 flex justify-center md:justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold hidden md:inline">ONAS</div>

        {/* Navigation Links */}
        <div className="space-x-6 text-white">
          <a
            href="#"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#Footer"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            About Us
          </a>
          <Link
            to="/login"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Driver
          </Link>
          <Link
            to="/loginAdmin"
            className="text-white no-underline hover:text-gray-200 transition-colors duration-300"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
