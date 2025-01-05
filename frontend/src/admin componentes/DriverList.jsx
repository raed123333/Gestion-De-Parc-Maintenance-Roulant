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
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Driver List</h1>
          <Link to="/dashboradAdmin/createDriver">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? <Spinner /> : <DriverTable drivers={drivers} />}
      </div>
    </div>
  );
};

export default DriverList;
