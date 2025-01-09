// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../componentes/Spinner";
import BackButton from "../componentes/BackButton";

const DeleteDriver = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Function to handle driver deletion
  const handleDeleteDriver = () => {
    if (window.confirm("Are you sure you want to delete this driver?")) {
      setLoading(true);
      axios
        .delete(`http://localhost:5555/driver/${id}`)
        .then(() => {
          alert("Driver deleted successfully.");
          setLoading(false);
          navigate("/dashboradAdmin");
        })
        .catch((error) => {
          console.error("Error deleting driver:", error);
          setLoading(false);
          alert("An error occurred while deleting the driver.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8CC3CA] to-[#57A0B5] text-white py-16 px-4">
      <div className="max-w-md mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
        <BackButton />
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Delete Driver
        </h1>
        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Are you sure you want to delete this driver? This action cannot be
              undone.
            </p>
            <button
              className="w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-500 focus:outline-none"
              onClick={handleDeleteDriver}
            >
              Yes, Delete it
            </button>
            <button
              className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg shadow-md mt-4 hover:bg-gray-400 focus:outline-none"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteDriver;
