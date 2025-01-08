// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

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
        navigate("/dashboardDriver");
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
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <h1 className="text-3xl my-4">Add new Repair Request</h1>
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
            <label className="text-xl mr-4 text-gray-500">Car</label>
            <input
              type="text"
              value={car}
              onChange={(e) => setCar(e.target.value)}
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
            <label className="text-xl mr-4 text-gray-500">Car Type</label>
            <input
              type="text"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Car Model</label>
            <input
              type="text"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Reclamation</label>
            <input
              type="text"
              value={reclamation}
              onChange={(e) => setReclamation(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveRepair}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRepair;
