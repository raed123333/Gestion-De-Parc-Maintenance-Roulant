// eslint-disable-next-line no-unused-vars
import React from "react";

const services = [
  {
    id: 1,
    title: "Wastewater Management",
    description:
      "Treatment and purification of wastewater to protect the environment and public health.",
  },
  {
    id: 2,
    title: "Liquid Waste Disposal",
    description: "Safe and sustainable treatment and disposal of liquid waste.",
  },
  {
    id: 3,
    title: "Treatment Plant Maintenance",
    description:
      "Maintenance and upgrades of wastewater treatment plants to ensure optimal performance.",
  },
  {
    id: 4,
    title: "Water Quality Monitoring",
    description: "Regular testing of water quality in various ecosystems.",
  },
  {
    id: 5,
    title: "Environmental Awareness",
    description:
      "Public awareness campaigns to educate the community on the importance of water.",
  },
  {
    id: 6,
    title: "Sustainable Development",
    description:
      "Implementation of projects to improve wastewater infrastructure.",
  },
];

const Services = () => {
  return (
    <div
      className="bg-gradient-to-r from-teal-600 to-blue-500 text-white py-20"
      id="services"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white text-gray-800 px-6 pb-6 rounded-lg shadow-lg hover:shadow-xl transform 
                         transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text
                           bg-gradient-to-r from-green-500 to-teal-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-teal-700">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-teal-500 font-medium"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
