// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../componentes/Spinner";
import BackButton from "../componentes/BackButton";
const DeleteDriver = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // function handleDeleteBooks for veryfied all steps
  const handleDeleteDriver = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/driver/${id}`)
      .then(() => {
        alert("Driver deleted successfully");
        setLoading(false);
        navigate("/dashboradAdmin");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Driver </h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure You want to delete this Driver?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteDriver}
          >
            Yes,Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDriver;
