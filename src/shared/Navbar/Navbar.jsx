import { FaHome, FaProductHunt, FaShoppingCart } from "react-icons/fa";
import navLogo1 from "../../assets/Logo/MiddaleLogo.png";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdRoundaboutRight } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <li className="hover:text-blue-600">
        <a href="#home">Home</a>
      </li>
      <li className="hover:text-blue-600">
        <a href="#products">Our Product</a>
      </li>
      <li className="hover:text-blue-600">
        <a href="#services">Services</a>
      </li>
      <li className="hover:text-blue-600">
        <a href="#about">About Us</a>
      </li>
      <li className="hover:text-blue-600">
        <a href="#contact">Contact Us</a>
      </li>
    </>
  );

  return (
    <div className="fixed z-50 w-full bg-blue-200 shadow-md navbar">
      {/* Navbar Container */}
      <div className="container flex items-center justify-between px-4 mx-auto lg:px-8">
        {/* Left: Logo and Dropdown (Mobile) */}
        <div className="flex items-center navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-3  bg-blue-200 text-black rounded z-[1] mt-1 w-52 p-4 uppercase shadow-2xl"
            >
              <li className="hover:text-blue-600">
                <a href="#home">
                  <FaHome /> Home
                </a>
              </li>
              <li className="hover:text-blue-600">
                <a href="#products">
                  <AiOutlineProduct /> Our Product
                </a>
              </li>
              <li className="hover:text-blue-600">
                <a href="#services">
                  <TbTruckDelivery /> Services
                </a>
              </li>
              <li className="hover:text-blue-600">
                <a href="#about">
                  <MdRoundaboutRight /> About Us
                </a>
              </li>
              <li className="hover:text-blue-600">
                <a href="#contact">
                  <RiContactsBook3Fill /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center justify-end text-xl font-bold normal-case px-2 rounded hover:bg-blue-300"
          >
            <img
              className="lg:w-20 lg:h-20 md:w-16 md:h-16  w-12 h-12 rounded-full"
              src={navLogo1}
              alt="Logo"
            />
            <span className=" md:block hidden">
              ADRITA <span className="text-green-600">BUSINESS</span> ZONE
            </span>
          </a>
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden lg:flex navbar-center">
          <ul className="space-x-2 text-lg font-medium text-black xl:space-x-4 lg:space-x-2 md:space-x-3 menu menu-horizontal">
            {navItems}
          </ul>
        </div>

        {/* Right: Cart & Card Icon & Register/Login Button */}
        <div className="navbar-end flex items-center space-x-6">
          {/* <button onClick={() => setIsOpen(true)}>
            <a href="#cart" className="relative flex items-center">
              <FaShoppingCart className="w-8 h-8 text-black hover:text-blue-600 transition-transform transform hover:scale-110" />
              <span className="absolute -top-2  -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                +0
              </span>
            </a>
          </button> */}

          <a
            href="#register"
            className="px-6 py-2 text-black bg-blue-200 hover:text-white rounded-lg shadow-lg btn hover:bg-blue-400"
          >
            Login
          </a>
        </div>

        {/*cart modal  */}
        <div
          className={`fixed top-0 right-0 h-full w-96 z-30 bg-white shadow-xl transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-xl"
          >
            ✖
          </button>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
            <p className="text-gray-500">
              Your selected items will appear here.
            </p>
            {/* Cart Modal with Static Products */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <img
                    src="http://localhost:5173/src/assets/Product/Eggs.png"
                    alt="Fresh Apples"
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-gray-800">Fresh Eggs</span>
                  <span className="font-bold text-gray-900">$10</span>
                  <button className="text-red-500 hover:text-red-700">X</button>
                </div>
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <img
                    src="http://localhost:5173/src/assets/Product/Vasitable.png"
                    alt="Organic Milk"
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-gray-800">Organic Vasitable</span>
                  <span className="font-bold text-gray-900">$5</span>
                  <button className="text-red-500 hover:text-red-700">X</button>
                </div>
              </div>
              <div className="border-t space-y-4 border-gray-300 mt-4 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Delivery Cost:</span>
                  <span>$05</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Product Price:</span>
                  <span>$15</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Discount Price:</span>
                  <span>$00</span>
                </div>
                <div className="border-b-4 py-2"></div>
                <div className="flex justify-between text-xl font-bold mt-2">
                  <span>Subtotal:</span>
                  <span>$20</span>
                </div>
              </div>
            </div>
            <button className="w-full flex items-center justify-between px-12 p-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-full group">
              Pay Now
              <span className="transform transition-transform duration-300 group-hover:translate-x-4">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
