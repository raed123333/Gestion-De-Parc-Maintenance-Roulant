/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const DriverTable = ({ drivers }) => {
  let content;

  try {
    content = (
      <tbody>
        {drivers.map((driver, index) => (
          <tr key={driver._id} className="hover:bg-gray-100">
            <td className="border border-slate-700 py-2 text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 py-2 text-center">
              {driver.FirstName || "N/A"}
            </td>
            <td className="border border-slate-700 py-2 text-center hidden md:table-cell">
              {driver.LastName || "N/A"}
            </td>
            <td className="border border-slate-700 py-2 text-center hidden md:table-cell">
              {driver.RegistrationNumber || "N/A"}
            </td>
            <td className="border border-slate-700 py-2 text-center hidden lg:table-cell">
              {driver.Email || "N/A"}
            </td>
            <td className="border border-slate-700 py-2 text-center hidden lg:table-cell">
              {driver.Password || "N/A"}
            </td>
            <td className="border border-slate-700 py-2 text-center">
              <div className="flex justify-center gap-4">
                <Link
                  to={`/dashboradAdmin/editDriver/${driver._id}`}
                  className="text-yellow-600 hover:scale-110 transition-transform"
                >
                  <AiOutlineEdit className="text-2xl" />
                </Link>
                <Link
                  to={`/dashboradAdmin/deleteDriver/${driver._id}`}
                  className="text-red-600 hover:scale-110 transition-transform"
                >
                  <MdOutlineDelete className="text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  } catch (error) {
    console.error("Error rendering DriverTable:", error);
    content = (
      <tbody>
        <tr>
          <td colSpan="7" className="text-center text-red-600 py-4">
            An error occurred while loading drivers. Please try again later.
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <div className="p-4 bg-[#8CC3CA] text-white">
      <h1 className="text-3xl text-center my-4">Drivers List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-sky-300">
            <tr>
              <th className="border border-slate-600 py-2">No</th>
              <th className="border border-slate-600 py-2">First Name</th>
              <th className="border border-slate-600 py-2 hidden md:table-cell">
                Last Name
              </th>
              <th className="border border-slate-600 py-2 hidden md:table-cell">
                Registration Number
              </th>
              <th className="border border-slate-600 py-2 hidden lg:table-cell">
                Email
              </th>
              <th className="border border-slate-600 py-2 hidden lg:table-cell">
                Password
              </th>
              <th className="border border-slate-600 py-2">Actions</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </div>
  );
};

export default DriverTable;
