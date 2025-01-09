// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const CreateRepair = () => {
  const [driverName, setDriverName] = useState("");
  const [car, setCar] = useState("");
  const [carId, setCarId] = useState("");
  const [carType, setCarType] = useState("");
  const [carModel, setCarModel] = useState("");
  const [reclamation, setReclamation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveRepair = () => {
    // Check if any field is empty
    if (
      !driverName ||
      !car ||
      !carId ||
      !carType ||
      !carModel ||
      !reclamation
    ) {
      alert("Please fill out this form");
      return; // Exit function to prevent further actions
    }

    const data = {
      DriverName: driverName,
      car: car,
      car_id: carId,
      car_type: carType,
      car_model: carModel,
      reclamation: reclamation,
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/requestrepair", data, {
        headers: {
          "Content-Type": "application/json", // Ensure content type is set correctly
        },
      })
      .then(() => {
        setLoading(false);
        alert("Repair request created successfully");
        navigate("/dashboradDriver");
      })
      .catch((error) => {
        setLoading(false);
        alert(
          "Error: " +
            (error.response ? error.response.data.message : error.message)
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
    <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a8b8b] text-white text-center py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-[#2a8b8b] mb-6">
          Add New Repair Request
        </h1>
        {loading ? <Spinner /> : ""} {/* Show Spinner while loading */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-[#F9FAFB] rounded-xl shadow-md border-collapse">
            <thead className="bg-[#2a8b8b] text-white">
              <tr>
                <th className="p-4 text-left">Driver Name</th>
                <th className="p-4 text-left">Car</th>
                <th className="p-4 text-left">Car ID</th>
                <th className="p-4 text-left">Car Type</th>
                <th className="p-4 text-left">State</th>
                <th className="p-4 text-left">Reclamation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">
                  <input
                    type="text"
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-lg w-full text-black"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-lg w-full text-black"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="Number"
                    value={carId}
                    onChange={(e) => setCarId(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-lg w-full text-black"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-lg w-full text-black"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-lg w-full text-black"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    value={reclamation}
                    onChange={(e) => setReclamation(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-lg w-full text-black"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <button
            className="p-4 bg-[#2a8b8b] text-white w-full rounded-lg hover:bg-[#1e6f6f] transition-all"
            onClick={handleSaveRepair}
          >
            Save Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRepair;
