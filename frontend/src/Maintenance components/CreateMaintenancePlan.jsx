/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const CreateMaintenancePlan = () => {
  const [driverName, setDriverName] = useState("");
  const [carId, setCarId] = useState("");
  const [amount, setAmount] = useState("");
  const [breakdownType, setBreakdownType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveMaintenancePlan = () => {
    // Check if any field is empty
    if (!driverName || !carId || !amount || !breakdownType || !startDate) {
      alert("Please fill out this form");
      return; // Exit function to prevent further actions
    }

    const data = {
      driver_name: driverName,
      car_id: parseInt(carId), // Convert carId to integer
      amount: parseFloat(amount), // Ensure amount is treated as a number
      breakdownt_type: breakdownType,
      start_date: new Date(startDate), // Ensure start_date is in a valid Date format
    };
    console.log(data);

    setLoading(true);
    axios
      .post("http://localhost:5555/maintenancePlan", data, {
        headers: {
          "Content-Type": "application/json", // Ensure content type is set correctly
        },
      })
      .then(() => {
        setLoading(false);
        alert("Maintenance plan created successfully");
        navigate("/dashboard"); // Navigate to a relevant page after success
      })
      .catch((error) => {
        setLoading(false);
        alert(
          "Error: " + (error.response ? error.response.data.msg : error.message)
        );
        if (error.response) {
          console.log("Response error:", error.response.data); // Log response data from server for better debugging
          console.log("Status code:", error.response.status); // Log the status code
        } else {
          console.log("Request error:", error.message); // Log error message if no response is received
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#4ECDC4] to-[#1C4F4E] text-white min-h-screen flex items-center justify-center py-12">
      <div className="bg-[#FFFBF0] p-10 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-[#1C4F4E]">
          Create Maintenance Plan
        </h2>
        <p className="text-lg mb-8 text-[#6B8E23]">
          Fill out the form below to create a new maintenance plan for your
          vehicle.
        </p>
        {loading ? <Spinner animation="border" variant="primary" /> : ""}{" "}
        {/* Show Spinner when loading */}
        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-xl text-[#1C4F4E]">Driver Name</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              className="border-2 border-[#4ECDC4] px-4 py-2 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
            />
          </div>
          <div>
            <label className="text-xl text-[#1C4F4E]">Car ID</label>
            <input
              type="Number"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              className="border-2 border-[#4ECDC4] px-4 py-2 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
            />
          </div>
          <div>
            <label className="text-xl text-[#1C4F4E]">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-[#4ECDC4] px-4 py-2 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
            />
          </div>
          <div>
            <label className="text-xl text-[#1C4F4E]">Breakdown Type</label>
            <input
              type="text"
              value={breakdownType}
              onChange={(e) => setBreakdownType(e.target.value)}
              className="border-2 border-[#4ECDC4] px-4 py-2 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
            />
          </div>
          <div>
            <label className="text-xl text-[#1C4F4E]">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border-2 border-[#4ECDC4] px-4 py-2 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
            />
          </div>
          <button
            className="p-2 bg-[#1C4F4E] text-white font-semibold mt-6 rounded-lg hover:bg-[#4ECDC4] transition-all duration-300"
            onClick={handleSaveMaintenancePlan}
          >
            Save Maintenance Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMaintenancePlan;
