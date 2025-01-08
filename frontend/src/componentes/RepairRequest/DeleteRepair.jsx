// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner";
import BackButton from "../BackButton";

const DeleteRepair = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Function to handle deletion of a repair
  const handleDeleteRepair = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/requestrepair/${id}`) // Update the URL to use the "repair" endpoint
      .then(() => {
        alert("Repair deleted successfully");
        setLoading(false);
        navigate("/dashboradDriver"); // Navigate to the admin dashboard after deletion
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error occurred while deleting the repair", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Repair</h1>
        {loading ? <Spinner /> : ""} {/* Show Spinner when loading */}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure you want to delete this repair request?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteRepair}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRepair;
