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
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Maintenance Plan</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure you want to delete this maintenance plan?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteMaintenancePlan}
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Deleting..." : "Yes, Delete it"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMaintenancePlan;
