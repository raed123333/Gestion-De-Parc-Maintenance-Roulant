// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../componentes/BackButton";
import Spinner from "../componentes/Spinner";
const ShowDriver = () => {
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Getting the driver id from the URL params

  useEffect(() => {
    setLoading(true);
    // Fetch driver data by id
    axios
      .get(`http://localhost:5555/driver/${id}`)
      .then((response) => {
        setDriver(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Fetch data when the id changes

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <BackButton />
      <h1 className="text-3xl my-4">Show Driver</h1>
      {loading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Driver ID</span>
            <span>{driver._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">First Name</span>
            <span>{driver.FirstName}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Name</span>
            <span>{driver.LastName}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">
              Registration Number
            </span>
            <span>{driver.RegistrationNumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{driver.Email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Password</span>
            <span>{driver.Password}</span>{" "}
            {/* You may want to hide this for security reasons */}
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(driver.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(driver.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDriver;
