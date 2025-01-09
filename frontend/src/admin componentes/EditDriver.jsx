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
        alert("An error occurred while fetching driver details.");
        console.error(error);
      });
  }, [id]);

  const handleEditDriver = () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      RegistrationNumber: registrationNumber,
      Email: email,
      Password: password,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/driver/${id}`, data)
      .then(() => {
        setLoading(false);
        alert("Driver updated successfully.");
        navigate("/dashboradAdmin");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error updating driver details.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8CC3CA] to-[#57A0B5] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
        <BackButton />
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Edit Driver
        </h1>
        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-600 text-lg mb-2">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-600 text-lg mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Registration Number */}
            <div>
              <label className="block text-gray-600 text-lg mb-2">
                Registration Number
              </label>
              <input
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 text-lg mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 text-lg mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleEditDriver}
                className="bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-500 focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditDriver;
