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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required.";
    if (!lastName) newErrors.lastName = "Last Name is required.";
    if (!registrationNumber)
      newErrors.registrationNumber = "Registration Number is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveDriver = () => {
    if (!validateForm()) return;

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
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setLoading(false);
        alert("Driver created successfully.");
        navigate("/dashboradAdmin");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error creating driver.");
        if (error.response) {
          console.error("Server Error:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8CC3CA] to-[#57A0B5] text-white py-16 px-4">
      <div className="max-w-lg mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Add New Driver
        </h1>
        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-lg text-gray-600">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full px-4 py-2 border-2 rounded-lg ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-lg text-gray-600">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full px-4 py-2 border-2 rounded-lg ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>

            {/* Registration Number */}
            <div>
              <label className="block text-lg text-gray-600">
                Registration Number
              </label>
              <input
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className={`w-full px-4 py-2 border-2 rounded-lg ${
                  errors.registrationNumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.registrationNumber && (
                <p className="text-red-500 text-sm">
                  {errors.registrationNumber}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border-2 rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-lg text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border-2 rounded-lg ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSaveDriver}
              className="w-full bg-sky-500 text-white py-3 rounded-lg shadow-md hover:bg-sky-400 focus:outline-none"
            >
              Save Driver
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateDriver;
