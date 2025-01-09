// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../componentes/Spinner";
import DriverTable from "./DriverTable";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/driver")
      .then((response) => {
        setDrivers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching drivers:", error);
        setError("Failed to load drivers. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8CC3CA] to-[#57A0B5] text-white text-center py-16 px-4">
      <div className="p-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-wide">Driver List</h1>
          <Link
            to="/dashboradAdmin/createDriver"
            className="flex items-center gap-2 bg-sky-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-700 transition"
          >
            <MdOutlineAddBox className="text-2xl" />
            <span className="hidden sm:block">Add Driver</span>
          </Link>
        </div>

        {/* Content */}
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="text-red-500 text-xl">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <DriverTable drivers={drivers} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverList;
