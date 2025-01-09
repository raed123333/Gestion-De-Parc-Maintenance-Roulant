// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";

const EditRepair = () => {
  // Initialize all state variables with empty strings to prevent uncontrolled-to-controlled warnings
  const [driverName, setDriverName] = useState("");
  const [car, setCar] = useState("");
  const [carId, setCarId] = useState("");
  const [carType, setCarType] = useState("");
  const [carModel, setCarModel] = useState("");
  const [reclamation, setReclamation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Check for the repair ID, if not available, stop fetching
    if (!id) {
      console.error("Invalid repair ID");
      return;
    }

    setLoading(true);
    axios
      .get(`http://localhost:5555/requestrepair/${id}`)
      .then((response) => {
        const repairData = response.data;
        setDriverName(repairData.DriverName); // Ensure no undefined values
        setCar(repairData.car); // Use snake_case as per backend
        setCarId(repairData.car_id); // Use snake_case
        setCarType(repairData.car_type); // Use snake_case
        setCarModel(repairData.car_model); // Use snake_case
        setReclamation(repairData.reclamation); // Use snake_case
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repair data:", error);
        setLoading(false);
      });
  }, [id]);

  const handleEditRepair = () => {
    const data = {
      DriverName: driverName,
      car: car, // field name matches the backend ('car')
      car_id: carId, // field name matches the backend ('car_id')
      car_type: carType, // field name matches the backend ('car_type')
      car_model: carModel, // field name matches the backend ('car_model')
      reclamation: reclamation,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/requestrepair/${id}`, data)
      .then(() => {
        setLoading(false);
        alert("Repair updated successfully");
        navigate("/Repair");
      })
      .catch((error) => {
        console.error("Error updating repair:", error);
        alert("Failed to update repair. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <h1 className="text-3xl my-4">Edit Repair Request</h1>
        {loading && <Spinner />} {/* Show Spinner when loading */}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Driver Name</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              placeholder="Enter driver's name"
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Car</label>
            <input
              type="text"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              placeholder="Enter car details"
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Car ID</label>
            <input
              type="text"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              placeholder="Enter car ID"
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Car Type</label>
            <input
              type="text"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              placeholder="Enter car type"
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Car Model</label>
            <input
              type="text"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="Enter car model"
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Reclamation</label>
            <input
              type="text"
              value={reclamation}
              onChange={(e) => setReclamation(e.target.value)}
              placeholder="Enter reclamation details"
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <button
            className="p-2 bg-sky-300 text-white m-8"
            onClick={handleEditRepair}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRepair;
