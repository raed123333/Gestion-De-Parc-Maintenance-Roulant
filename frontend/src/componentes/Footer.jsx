// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#8CC3CA] text-white y-8" id="Footer">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              The National Sanitation Office
            </h3>
            <h4 className="text-[#568F9C]">
              Ensuring wastewater management and sustainability for a healthier
              Tunisia
            </h4>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-raw">
          <p className="text-black">
            &copy;{new Date().getFullYear()} ONAS Tunisia . All rigths reserved
          </p>
          <div className="flex space-x-4 my-4 md:my-0 ">
            <a
              href="https://www.facebook.com/ONASTUNISIE"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaFacebook />
            </a>
            <a href="" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>

            <a href="" className="text-gray-400 hover:text-white text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </footer>
  );
};

export default Footer;
