// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-teal-600 to-blue-500 text-white py-8"
      id="Footer"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-8">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-2">
              The National Sanitation Office
            </h3>
            <p className="text-gray-200">
              Ensuring wastewater management and sustainability for a healthier
              Tunisia.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-100 text-center md:text-left">
            &copy; {new Date().getFullYear()} ONAS Tunisia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/ONASTUNISIE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 text-2xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 text-2xl transition-colors duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
