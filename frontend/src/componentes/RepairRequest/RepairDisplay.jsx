/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a8b8b] text-white text-center py-16 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#2a8b8b] mb-6">
            Repair List
          </h1>
        </div>

        {loading ? (
          <Spinner />
        ) : repairs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-[#F9FAFB] rounded-xl shadow-md border-collapse">
              <thead className="bg-[#2a8b8b] text-white">
                <tr>
                  <th className="p-4 text-left">No</th>
                  <th className="p-4 text-left">Driver Name</th>
                  <th className="p-4 text-left">Car</th>
                  <th className="p-4 text-left">Car ID</th>
                  <th className="p-4 text-left">Car Type</th>
                  <th className="p-4 text-left">State</th>
                  <th className="p-4 text-left">Reclamation</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {repairs.map((repair, index) => (
                  <tr key={repair._id} className="h-12 hover:bg-[#F0F9F9]">
                    <td className="p-4 text-center border text-black border-slate-700">
                      {index + 1}
                    </td>
                    <td className="p-4 text-center border text-black border-slate-700">
                      {repair.DriverName || "N/A"}
                    </td>
                    <td className="p-4 text-center border text-black border-slate-700">
                      {repair.car || "N/A"}
                    </td>
                    <td className="p-4 text-center border text-black border-slate-700">
                      {repair.car_id || "N/A"}
                    </td>
                    <td className="p-4 text-center border text-black border-slate-700">
                      {repair.car_type || "N/A"}
                    </td>
                    <td className="p-4 text-center border text-black border-slate-700">
                      {repair.car_model || "N/A"}
                    </td>
                    <td className="p-4 text-center border text-black border-slate-700">
                      {repair.reclamation || "N/A"}
                    </td>
                    <td className="p-4 text-center border border-slate-700">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/editRepair/${repair._id}`}>
                          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400 transition-all" />
                        </Link>
                        <Link to={`/deleteRepair/${repair._id}`}>
                          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400 transition-all" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-xl text-center mt-4">No repairs found.</p>
        )}
      </div>
    </div>
  );
};

export default RepairDisplay;
