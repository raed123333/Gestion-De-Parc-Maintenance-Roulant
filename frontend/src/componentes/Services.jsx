// eslint-disable-next-line no-unused-vars
import React from "react";
const services = [
  {
    id: 1,
    title: "Wastewater Management ",
    description: "Creating visually appealing and User-friendly web designs.",
  },
  {
    id: 2,
    title: "Liquid Waste Disposal ",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Treatment Plant Maintenance",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-stack development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Designer",
    description: "Crafting impactful visuals and brand identities.",
  },
  {
    id: 6,
    title: "Video Editor",
    description:
      "Building compelling visuals and seamless visual montages to elevate brand identity.",
  },
];
const Services = () => {
  return (
    <div className="bg-[#8CC3CA] text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#568F9C] px-6 pb-6 rounded-lg hover:shadow-lg transform 
               transition-transform duration-300 hover:scale-105  "
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text
                       bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
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
