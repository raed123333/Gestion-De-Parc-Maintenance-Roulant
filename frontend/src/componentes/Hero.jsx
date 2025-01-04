// eslint-disable-next-line no-unused-vars
import React from "react";
import onas from "../assets/onas.png";

const Hero = () => {
  return (
    <div className="bg-[#8CC3CA] text-white text-center py-16" id="#Hero">
      <img
        src={onas}
        alt=""
        className="mx-auto mb-12 mt-20 w-80 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 "
      />
      <h1 className="text-4xl font-bold">
        Welcome to {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568F9C] to-[#4BA4B8]">
          ONAS Tunisia platform!
        </span>
        ,Efficient wastewater management ,<br /> environmental protection to
        promote public health in Tunisia
      </h1>
      <p className="mt-4 text-lg text-gray-100">
        Ensuring wastewater management and sustainability for a healthier
        Tunisia
      </p>
      <div className="mt-8 space-x-4">
        <a href="https://www.facebook.com/ONASTUNISIE">
          <button
            className="bg-gradient-to-r from-[#568F9C] to-[#4BA4B8] text-white hidden md:inline 
                 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Join us in facebook
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
