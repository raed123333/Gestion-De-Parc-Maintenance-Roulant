// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";

const DeleteRepair = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Function to handle deletion of a repair
  const handleDeleteRepair = () => {
    if (
      !window.confirm("Are you sure you want to delete this repair request?")
    ) {
      return;
    }
    setLoading(true);
    axios
      .delete(`http://localhost:5555/requestrepair/${id}`)
      .then(() => {
        alert("Repair deleted successfully");
        setLoading(false);
        navigate("/dashboradDriver"); // Navigate to the admin dashboard after deletion
      })
      .catch((error) => {
        console.error("Error occurred while deleting the repair:", error);
        setLoading(false);
        alert("Error occurred while deleting the repair. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Back Button */}

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Delete Repair Request
        </h1>
        {loading && (
          <div className="flex justify-center mb-4">
            <Spinner />
          </div>
        )}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Are you sure you want to delete this repair request? This action
            cannot be undone.
          </p>
          <button
            onClick={handleDeleteRepair}
            className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-all"
          >
            Yes, Delete it
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full mt-4 bg-gray-300 text-gray-700 py-3 rounded-lg text-lg font-medium hover:bg-gray-400 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRepair;
