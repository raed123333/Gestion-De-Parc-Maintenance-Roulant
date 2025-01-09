/* eslint-disable-next-line no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../componentes/Spinner";
import BackButton from "../componentes/BackButton";

const DeleteMaintenancePlan = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the maintenance plan ID from the URL

  // Function to handle deleting the maintenance plan
  const handleDeleteMaintenancePlan = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/maintenancePlan/${id}`) // Replace with your backend endpoint
      .then(() => {
        alert("Maintenance Plan deleted successfully");
        setLoading(false);
        navigate("/maintenancePlans"); // Redirect to dashboard or list page after successful deletion
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data.msg}`);
        } else {
          alert(
            "Error: Something went wrong while deleting the maintenance plan"
          );
        }
        console.error(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white text-center py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-[#FFFBF2] p-8 rounded-xl shadow-lg">
        <BackButton />
        <h1 className="text-4xl font-bold text-[#FF5C00] mb-6">
          Delete Maintenance Plan
        </h1>
        {loading && <Spinner />} {/* Show Spinner while loading */}
        <div className="flex flex-col items-center space-y-6 border-2 border-[#FF8A00] rounded-xl p-8">
          <h3 className="text-2xl text-[#FF5C00]">
            Are you sure you want to delete this maintenance plan?
          </h3>
          <div className="space-x-4">
            <button
              className="p-4 bg-red-600 text-white rounded-lg transition-all hover:bg-red-500 disabled:bg-gray-400"
              onClick={handleDeleteMaintenancePlan}
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Deleting..." : "Yes, Delete it"}
            </button>
            <button
              className="p-4 bg-gray-300 text-black rounded-lg transition-all hover:bg-gray-400"
              onClick={() => navigate("/maintenancePlans")} // Cancel the delete
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMaintenancePlan;
