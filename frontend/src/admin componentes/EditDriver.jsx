// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../componentes/BackButton";
import Spinner from "../componentes/Spinner";

const EditDriver = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/driver/${id}`)
      .then((response) => {
        const driverData = response.data;
        setFirstName(driverData.FirstName);
        setLastName(driverData.LastName);
        setRegistrationNumber(driverData.RegistrationNumber);
        setEmail(driverData.Email);
        setPassword(driverData.Password);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("error");
        console.log(error);
      });
  }, [id]); // Dependency array ensures this effect runs when 'id' changes

  const handleEditDriver = () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      RegistrationNumber: registrationNumber,
      Email: email,
      Password: password,
    };

    setLoading(true);
    // Update driver information
    axios
      .put(`http://localhost:5555/driver/${id}`, data)
      .then(() => {
        setLoading(false);
        alert("Driver updated successfully");
        navigate("/dashboradAdmin"); // Navigate back to the drivers list or home page
      })
      .catch((error) => {
        setLoading(false);
        alert("Error updating");
        console.log(error);
      });
  };

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Driver</h1>
      {loading ? <Spinner /> : ""} {/* Show Spinner when loading */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        {/* First Name Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        {/* Last Name Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        {/* Registration Number Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Registration Number
          </label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        {/* Email Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        {/* Password Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditDriver}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditDriver;
