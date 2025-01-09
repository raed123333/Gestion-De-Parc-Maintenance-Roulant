/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import Spinner from "../componentes/Spinner";

const DisplayMaintenancePlans = () => {
  const [maintenancePlans, setMaintenancePlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMaintenancePlans = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5555/maintenanceplan"
        );
        setMaintenancePlans(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching maintenance plans:", {
          message: error.message,
          response: error.response,
          config: error.config,
        });
        setMaintenancePlans([]); // Fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchMaintenancePlans();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#4ECDC4] to-[#1C4F4E] text-white min-h-screen flex items-center justify-center py-12">
      <div className="bg-[#FFDAB9] w-full max-w-5xl p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-extrabold mb-6 text-[#1C4F4E]">
          Maintenance Plan List
        </h1>
        <Link
          to="/maintenancePlans/createMaintenancePlan"
          className="text-[#1C4F4E] bg-[#FF6347] px-6 py-3 rounded-lg text-xl mb-6 inline-block hover:bg-[#FF7F50] transition-all"
        >
          Create Maintenance Plan
        </Link>

        {loading ? (
          <Spinner />
        ) : maintenancePlans.length > 0 ? (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-[#FF6347] rounded-md text-[#1C4F4E] text-xl py-2 px-4">
                  No
                </th>
                <th className="border border-[#FF6347] rounded-md text-[#1C4F4E] text-xl py-2 px-4">
                  Driver Name
                </th>
                <th className="border border-[#FF6347] rounded-md text-[#1C4F4E] text-xl py-2 px-4">
                  Car ID
                </th>
                <th className="border border-[#FF6347] rounded-md text-[#1C4F4E] text-xl py-2 px-4">
                  Amount
                </th>
                <th className="border border-[#FF6347] rounded-md text-[#1C4F4E] text-xl py-2 px-4">
                  Breakdown Type
                </th>
                <th className="border border-[#FF6347] rounded-md text-[#1C4F4E] text-xl py-2 px-4">
                  Start Date
                </th>
                <th className="border border-[#FF6347] rounded-md  text-[#1C4F4E] text-xl py-2 px-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {maintenancePlans.map((plan, index) => (
                <tr key={plan._id} className="hover:bg-[#FF7F50]">
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    {index + 1}
                  </td>
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    {plan.driver_name || "N/A"}
                  </td>
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    {plan.car_id || "N/A"}
                  </td>
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    {plan.amount || "N/A"}
                  </td>
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    {plan.breakdownt_type || "N/A"}
                  </td>
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    {plan.start_date || "N/A"}
                  </td>
                  <td className="border border-[#FF6347] rounded-md text-center py-2 px-4">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        to={`/maintenancePlans/updateMaintenancePlan/${plan._id}`}
                        className="text-yellow-600 hover:text-yellow-500 transition-all"
                      >
                        <AiOutlineEdit className="text-2xl" />
                      </Link>
                      <Link
                        to={`/maintenancePlans/deleteMaintenancePlan/${plan._id}`}
                        className="text-red-600 hover:text-red-500 transition-all"
                      >
                        <MdOutlineDelete className="text-2xl" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-xl text-center mt-4">
            No maintenance plans found.
          </p>
        )}
      </div>
    </div>
  );
};

export default DisplayMaintenancePlans;
