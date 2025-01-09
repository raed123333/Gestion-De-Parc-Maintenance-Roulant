/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../componentes/Spinner";

const UpdateMaintenancePlan = () => {
  // State variables for the maintenance plan form
  const [carId, setCarId] = useState("");
  const [driverName, setDriverName] = useState("");
  const [amount, setAmount] = useState("");
  const [breakdownType, setBreakdownType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Maintenance Plan ID from URL

  useEffect(() => {
    // Check for the ID, if not available, stop fetching data
    if (!id) {
      console.error("Invalid Maintenance Plan ID");
      return;
    }

    setLoading(true);
    axios
      .get(`http://localhost:5555/maintenanceplan/${id}`) // Fetch maintenance plan by ID
      .then((response) => {
        const planData = response.data;
        setCarId(planData.car_id || "");
        setDriverName(planData.driver_name || "");
        setAmount(planData.amount || "");
        setBreakdownType(planData.breakdownt_type || "");
        setStartDate(planData.start_date || "");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching maintenance plan:", error);
        setLoading(false);
      });
  }, [id]);

  const handleUpdateMaintenancePlan = () => {
    const data = {
      car_id: carId,
      driver_name: driverName,
      amount: amount,
      breakdownt_type: breakdownType,
      start_date: startDate,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/maintenanceplan/${id}`, data) // Send PUT request to update maintenance plan
      .then(() => {
        setLoading(false);
        alert("Maintenance Plan updated successfully");
        navigate("/maintenancePlans"); // Redirect to admin dashboard after update
      })
      .catch((error) => {
        console.error("Error updating maintenance plan:", error);
        alert("Failed to update maintenance plan. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#4ECDC4] to-[#1C4F4E] text-white min-h-screen flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto bg-[#FFFBF2] p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-[#FF5C00]">
          Update Maintenance Plan
        </h1>
        {loading && <Spinner />} {/* Show Spinner while loading */}
        <div className="flex flex-col space-y-6 border-2 border-[#FF8A00] rounded-xl p-6">
          <div className="flex flex-col">
            <label className="text-xl mb-2 text-[#FF5C00]">Car ID</label>
            <input
              type="text"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              placeholder="Enter car ID"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full text-black focus:ring-[#FF8A00] focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl mb-2 text-[#FF5C00]">Driver Name</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              placeholder="Enter driver's name"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full text-black focus:ring-[#FF8A00] focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl mb-2 text-[#FF5C00]">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full text-black focus:ring-[#FF8A00] focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl mb-2 text-[#FF5C00]">
              Breakdown Type
            </label>
            <input
              type="text"
              value={breakdownType}
              onChange={(e) => setBreakdownType(e.target.value)}
              placeholder="Enter breakdown type"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full text-black focus:ring-[#FF8A00] focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl mb-2 text-[#FF5C00]">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full text-black focus:ring-[#FF8A00] focus:ring-2"
            />
          </div>

          <button
            className="bg-[#FF8A00] text-white py-2 px-6 rounded-lg text-xl transition-all hover:bg-[#FF5C00]"
            onClick={handleUpdateMaintenancePlan}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMaintenancePlan;
