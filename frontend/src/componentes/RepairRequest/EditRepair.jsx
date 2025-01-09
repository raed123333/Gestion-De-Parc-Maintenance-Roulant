// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";

const EditRepair = () => {
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
    if (!id) {
      console.error("Invalid repair ID");
      return;
    }

    setLoading(true);
    axios
      .get(`http://localhost:5555/requestrepair/${id}`)
      .then((response) => {
        const repairData = response.data;
        setDriverName(repairData.DriverName || "");
        setCar(repairData.car || "");
        setCarId(repairData.car_id || "");
        setCarType(repairData.car_type || "");
        setCarModel(repairData.car_model || "");
        setReclamation(repairData.reclamation || "");
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
      car,
      car_id: carId,
      car_type: carType,
      car_model: carModel,
      reclamation,
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
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] to-[#2a8b8b] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-[#1e3c72] mb-8">
          Edit Repair Request
        </h1>
        {loading && <Spinner />} {/* Display spinner while loading */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditRepair();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Driver Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Driver Name
              </label>
              <input
                type="text"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                placeholder="Enter driver's name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
              />
            </div>
            {/* Car */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Car
              </label>
              <input
                type="text"
                value={car}
                onChange={(e) => setCar(e.target.value)}
                placeholder="Enter car details"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
              />
            </div>
            {/* Car ID */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Car ID
              </label>
              <input
                type="text"
                value={carId}
                onChange={(e) => setCarId(e.target.value)}
                placeholder="Enter car ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
              />
            </div>
            {/* Car Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Car Type
              </label>
              <input
                type="text"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                placeholder="Enter car type"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
              />
            </div>
            {/* Car Model */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Car Model
              </label>
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                placeholder="Enter car model"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
              />
            </div>
            {/* Reclamation */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Reclamation
              </label>
              <input
                type="text"
                value={reclamation}
                onChange={(e) => setReclamation(e.target.value)}
                placeholder="Enter reclamation details"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#1e3c72] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#2a8b8b] transition-all shadow-lg"
          >
            Save Changes
          </button>
        </form>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Navigate back to the last page
          className="w-full mt-4 bg-gray-300 text-gray-700 py-3 rounded-lg text-lg font-medium hover:bg-gray-400 transition-all shadow-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default EditRepair;
