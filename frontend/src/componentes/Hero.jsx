// eslint-disable-next-line no-unused-vars
import React from "react";
import onas from "../assets/onas.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white text-center py-16">
      {/* Image Section */}
      <img
        src={onas}
        alt="ONAS Tunisia"
        className="mx-auto mb-12 mt-20 w-80 rounded-full object-cover transform 
                   transition-transform duration-300 hover:scale-105 shadow-lg"
      />

      {/* Title Section */}
      <h1 className="text-4xl font-bold">
        Welcome to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
          ONAS Tunisia Platform!
        </span>
      </h1>
      <h2 className="mt-2 text-xl font-light">
        Efficient wastewater management, environmental protection to promote
        public health in Tunisia
      </h2>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-gray-100">
        Ensuring wastewater management and sustainability for a healthier
        Tunisia.
      </p>

      {/* Call-to-Action Button */}
      <div className="mt-8 space-x-4">
        <a
          href="https://www.facebook.com/ONASTUNISIE"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-teal-700 text-white px-6 py-3 rounded-full shadow-md 
                       transform transition-transform duration-300 hover:scale-105 hover:bg-teal-800 hidden md:inline-block"
          >
            Join Us on Facebook
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
