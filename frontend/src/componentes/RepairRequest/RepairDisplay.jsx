/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import Spinner from "../Spinner";

const RepairDisplay = () => {
  const [repairs, setRepairs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepairs = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5555/requestrepair");
        // Ensure repairs is an array to avoid runtime errors
        console.log(response);
        setRepairs(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (error) {
        console.error("Error fetching repairs:", {
          message: error.message,
          response: error.response,
          config: error.config,
        });
        setRepairs([]); // Fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchRepairs();
  }, []);

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Repair List</h1>
          <Link to="/createRepair">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>

        {loading ? (
          <Spinner />
        ) : repairs.length > 0 ? (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">
                  Driver Name
                </th>
                <th className="border border-slate-600 rounded-md">Car</th>
                <th className="border border-slate-600 rounded-md">Car ID</th>
                <th className="border border-slate-600 rounded-md">Car Type</th>
                <th className="border border-slate-600 rounded-md">
                  Car Model
                </th>
                <th className="border border-slate-600 rounded-md">
                  Reclamation
                </th>
                <th className="border border-slate-600 rounded-md">Actions</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((repair, index) => (
                <tr key={repair._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {repair.DriverName || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {repair.car || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {repair.car_id || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {repair.car_type || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {repair.car_model || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {repair.reclamation || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/dashboardAdmin/editRepair/${repair._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/deleteRepair/${repair._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-xl text-center mt-4">No repairs found.</p>
        )}
      </div>
    </div>
  );
};

export default RepairDisplay;
