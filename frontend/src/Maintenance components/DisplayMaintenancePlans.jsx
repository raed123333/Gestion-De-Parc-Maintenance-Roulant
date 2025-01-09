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
        // Ensure maintenancePlans is an array to avoid runtime errors
        console.log(response);
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
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Maintenance Plan List</h1>
        </div>

        {loading ? (
          <Spinner />
        ) : maintenancePlans.length > 0 ? (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">
                  Driver Name
                </th>
                <th className="border border-slate-600 rounded-md">Car ID</th>
                <th className="border border-slate-600 rounded-md">Amount</th>
                <th className="border border-slate-600 rounded-md">
                  Breakdown Type
                </th>
                <th className="border border-slate-600 rounded-md">
                  Start Date
                </th>
                <th className="border border-slate-600 rounded-md">Actions</th>
              </tr>
            </thead>
            <tbody>
              {maintenancePlans.map((plan, index) => (
                <tr key={plan._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {plan.driver_name || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {plan.car_id || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {plan.amount || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {plan.breakdownt_type || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {plan.start_date || "N/A"}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link
                        to={`/maintenancePlans/updateMaintenancePlan/${plan._id}`}
                      >
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link
                        to={`/maintenancePlans/deleteMaintenancePlan/${plan._id}`}
                      >
                        <MdOutlineDelete className="text-2xl text-red-600" />
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
