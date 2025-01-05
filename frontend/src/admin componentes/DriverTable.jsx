/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const DriverTable = ({ drivers }) => {
  let content;

  try {
    content = (
      <tbody>
        {drivers.map((driver, index) => (
          <tr key={driver._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {driver.FirstName || "N/A"}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {driver.LastName || "N/A"}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {driver.RegistrationNumber || "N/A"}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {driver.Email || "N/A"}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {driver.Password || "N/A"}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/drivers/details/${driver._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/drivers/edit/${driver._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/drivers/delete/${driver._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
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
          <td colSpan="6" className="text-center text-red-600">
            An error occurred while loading drivers. Please try again later.
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">First Name</th>
          <th className="border border-slate-600 rounded-md">Last Name</th>
          <th className="border border-slate-600 rounded-md">
            Registration Number
          </th>
          <th className="border border-slate-600 rounded-md">Email</th>
          <th className="border border-slate-600 rounded-md">Password</th>
          <th className="border border-slate-600 rounded-md">Actions</th>
        </tr>
      </thead>
      {content}
    </table>
  );
};

export default DriverTable;
