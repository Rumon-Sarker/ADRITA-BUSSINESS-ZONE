import React from "react";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div id="contact" className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-800">
          Contact Width Us
        </h1>
        <p className="text-gray-500 mt-2">
          We’d love to hear from you! Reach out to us anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full flex items-center  justify-center gap-4 px-12 p-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-full group">
              Send Message
              <span className="transform transition-transform duration-300 group-hover:translate-x-4">
                <FaArrowRightLong />
              </span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="p-8 bg-gray-100 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Contact Information
          </h2>
          <p className="text-gray-700 py-12">
            Reach out through any of the channels below.
          </p>
          <div className="space-y-7">
            <p className="flex items-center text-gray-700 lg:text-xl text-base hover:text-blue-500 transition">
              📍{" "}
              <span className="ml-3">
                Shapla Housing,H # 202 (3rd Floor), West Agargaon, Dhaka-1207,
                Bangladesh.
              </span>
            </p>
            <p className="flex items-center text-gray-700 lg:text-xl text-base hover:text-blue-500 transition">
              📞 <span className="ml-3">+88018-98805081</span>
            </p>
            <p className="flex items-center text-gray-700 lg:text-xl text-base hover:text-blue-500 transition">
              ✉️ <span className="ml-3">adritabusinesszone@gmail.com</span>
            </p>
          </div>
          <div className="flex text-2xl space-x-4 pt-28">
            <p className="text-blue-500 transition-transform transform hover:scale-110">
              <FaFacebook />
            </p>
            <p className="transition-transform transform hover:scale-110 text-red-600">
              <FaYoutube />
            </p>
            <p className="text-blue-500 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </p>
            <p>
              <FaTiktok />
            </p>
          </div>

          {/* Map (Optional)
          <div className="mt-6">
            <iframe
              className="w-full h-60 rounded-lg"
              src="https://maps.google.com/maps?q=Dhaka,Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
