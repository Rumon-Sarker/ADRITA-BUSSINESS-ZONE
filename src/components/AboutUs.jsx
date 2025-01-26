import React from "react";

import Integrity from "../assets/icon/Integrity.png";
import Sustainability from "../assets/icon/Sustainability.png";
import Quality from "../assets/icon/Quality.png";

const AboutUs = () => {
  return (
    <div id="about" className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 text-lg mt-2">
          Learn more about our mission, vision, and values.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 text-xl mt-4">
            {/* We are a dedicated grocery supply company committed to providing
            high-quality, fresh products to our customers. Our goal is to ensure
            a seamless shopping experience with sustainable and responsible
            sourcing. */}
            ABZ is a trusted grocery supply company dedicated to providing
            fresh, high-quality products to homes, businesses, and food service
            providers. We partner with reliable suppliers and local farms &
            vendors to offer a wide range of groceries, from everyday essentials
            to specialty items. Our mission is to make grocery supply simple,
            affordable, and efficient, with a focus on timely delivery and
            exceptional customer service. Whether you're replenishing your
            inventory or overseeing business operations, ABZ consistently
            delivers reliable, premium supplies. With a strong commitment to
            sustainability and customer satisfaction, ABZ is dedicated to
            providing your kitchen or business with the freshest ingredients and
            unparalleled service.
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/delivery-woman-with-food-package_23-2148869401.jpg?ga=GA1.1.457083067.1736578215&semt=ais_hybrid"
            alt="About Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            To deliver fresh, high-quality groceries with exceptional customer
            service while maintaining sustainability in our sourcing and
            delivery practices.
          </p>
        </div>
        <div className="p-6 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-700 mt-4">
            To become a leading grocery supplier known for reliability,
            affordability, and commitment to environmental sustainability.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center text-center">
          <div className="p-6 bg-gray-100 hover:bg-blue-100 transition-transform transform hover:scale-105 flex flex-col items-center justify-center rounded-lg shadow-md text-center">
            <img className="w-20 mb-4" src={Quality} alt="" />
            <h3 className="text-xl font-semibold text-gray-800">Quality</h3>
            <p className="text-gray-700 mt-2 text-center">
              We prioritize high-quality products to meet customer needs.
            </p>
          </div>
          <div className="p-6 bg-gray-100 hover:bg-blue-100 transition-transform transform hover:scale-105 flex flex-col items-center justify-center rounded-lg shadow-md text-center">
            <img className="w-20 mb-4" src={Integrity} alt="Integrity" />
            <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
            <p className="text-gray-700 mt-2 text-center">
              Honesty and transparency guide our business practices.
            </p>
          </div>
          <div className="p-6 bg-gray-100 hover:bg-blue-100 transition-transform transform hover:scale-105 flex flex-col items-center justify-center rounded-lg shadow-md text-center">
            <img
              className="w-20 mb-4"
              src={Sustainability}
              alt="Sustainability"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Sustainability
            </h3>
            <p className="text-gray-700 mt-2 text-center">
              We focus on eco-friendly and responsible sourcing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
