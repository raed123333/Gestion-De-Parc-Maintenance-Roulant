// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const NavBarAdmin = () => {
  return (
    <nav className="bg-[#568F9C] text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-50">
      <div className="container py-2 flex justify-center md:justify-between items-center  ">
        <div className="text-2xl font-bold hidden md:inline ">Admin Panel</div>
        <div className=" space-x-6 text-white  ">
          <Link to="/" className="text-white no-underline ">
            Home
          </Link>
          <Link to="/Repair" className="text-white no-underline ">
            Repair
          </Link>
          <Link
            to="/dashboradAdmin/adminTable"
            className=" text-white no-underline "
          >
            Admin List
          </Link>

          <Link to="/login" className="text-white no-underline">
            Driver
          </Link>
          <Link to="/maintenancePlans" className="text-white no-underline ">
            Maintenance
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
