// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DriverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/driver/login", {
        Email: email,
        Password: password,
      })
      .then((res) => {
        if (res.data.Login) {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboardDriver");
          console.log("Navigated to driver dashboard");
        } else {
          navigate("/");
          console.log("Navigated to home");
        }
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-[#16C47F] text-white min-h-screen flex items-center justify-center">
      <div className="bg-[#79D7BE] p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome Back, Driver!</h2>
        <p className="text-lg mb-8">
          Login to access the driver dashboard and manage your tasks.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 text-left"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8CC3CA]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8CC3CA]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#16C47F] text-white font-semibold py-3 rounded-lg hover:bg-[#6AA9B5] transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-sm text-gray-300">
          Having trouble logging in? Contact support.
        </p>
      </div>
    </div>
  );
};

export default DriverLogin;
