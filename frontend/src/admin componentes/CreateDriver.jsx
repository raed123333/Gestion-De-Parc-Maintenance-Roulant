// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Spinner from "../componentes/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDriver = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveDriver = () => {
    // Check if any field is empty
    if (!firstName || !lastName || !registrationNumber || !email || !password) {
      alert("Please fill out this form");
      return; // Exit function to prevent further actions
    }

    const data = {
      FirstName: firstName,
      LastName: lastName,
      RegistrationNumber: registrationNumber,
      Email: email,
      Password: password,
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/driver", data, {
        headers: {
          "Content-Type": "application/json", // Ensure content type is set correctly
        },
      })
      .then(() => {
        setLoading(false);
        alert("Driver created successfully");
        navigate("/dashboradAdmin");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error creating driver");
        if (error.response) {
          console.log(error.response.data); // Log response data from server for better debugging
          console.log(error.response.status); // Log the status code
        } else {
          console.log(error.message); // Log error message if no response is received
        }
      });
  };

  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16">
      <div className="p-4">
        <h1 className="text-3xl my-4">Add new Driver</h1>
        {loading ? <Spinner /> : ""} {/* Show Spinner when loading */}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Registration Number
            </label>
            <input
              type="text" // Keeping it text for flexibility
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Email</label>
            <input
              type="email" // Changed to 'email' type for validation
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Password</label>
            <input
              type="password" // Changed to 'password' type for better security
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full text-black"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveDriver}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDriver;
