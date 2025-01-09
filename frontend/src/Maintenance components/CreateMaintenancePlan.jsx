/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../componentes/Spinner";

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
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <h1 className="text-3xl my-4">Add new Maintenance Plan</h1>
        {loading ? <Spinner /> : ""} {/* Show Spinner when loading */}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Driver Name</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Car ID</label>
            <input
              type="text"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Breakdown Type</label>
            <input
              type="text"
              value={breakdownType}
              onChange={(e) => setBreakdownType(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <button
            className="p-2 bg-sky-300 m-8"
            onClick={handleSaveMaintenancePlan}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMaintenancePlan;
