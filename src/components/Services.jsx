import React from "react";

const services = [
  {
    title: "Reliable Grocery Supply",
    icon: "\ud83c\udf7d\ufe0f",
    description:
      "Providing fresh, high-quality groceries to homes, businesses, and food service providers.",
  },
  {
    title: "Vendor & Supplier Partnerships",
    icon: "\ud83c\udf1f",
    description:
      "Partnering with trusted suppliers and local farms to ensure the best quality products.",
  },
  {
    title: "Efficient Processing & Handling",
    icon: "\ud83d\udc69\u200d\ud83c\udf73",
    description:
      "Processing groceries with meticulous care before direct delivery to customers.",
  },
  {
    title: "Fast & Timely Deliveries",
    icon: "\ud83d\ude9a",
    description:
      "Ensuring groceries reach customers on time with a seamless delivery process.",
  },
  {
    title: "Customer-Centric Approach",
    icon: "\ud83d\udc65",
    description:
      "Prioritizing customer satisfaction with exceptional service and support.",
  },
];

export default function UserServices() {
  return (
    <div id="services" className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-lg border border-gray-200 rounded-2xl p-6 bg-white transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center mb-4 text-4xl">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-700">
              {service.title}
            </h2>
            <p className="text-gray-500 text-center mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
