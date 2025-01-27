import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../../assets/Logo/MiddaleLogo.png";

const Footer = () => {
  return (
    <div className="bg-blue-200 ">
      <footer className="container p-10 mx-auto footer text-base-content">
        {/* Logo and Intro */}
        <aside>
          <a href="#home">
            {" "}
            <img
              className="rounded-full md:w-28 md:h-28 lg:w-32 lg:h-32 w-20 h-20"
              src={logo}
              alt="logo"
            />
          </a>
          <p>
            ADRITA BUSINESS ZONE
            <br />
            Empowering businesses with innovation since 2000
          </p>
          <div className="flex text-2xl space-x-3">
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
              <FaTiktok className=" transition-transform transform hover:scale-110" />
            </p>
          </div>
        </aside>

        {/* Services Section */}
        <nav>
          <h6 className="text-black footer-title">Services</h6>
          <a className="link link-hover hover:text-white">Wholesale Supply</a>
          <a className="link link-hover hover:text-white">Farm Sourcing</a>
          <a href="#contact" className="link link-hover hover:text-white">
            Custom Orders
          </a>
          <a className="link link-hover hover:text-white">
            Nationwide Delivery
          </a>
          <a className="link link-hover hover:text-white">Eco Packaging</a>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="text-black footer-title">Company</h6>
          <a href="#home" className="link link-hover hover:text-white">
            Home
          </a>
          <a href="#products" className="link link-hover hover:text-white">
            Our Products
          </a>
          <a href="#mission" className="link link-hover hover:text-white">
            Our Mission
          </a>
          <a className="link link-hover hover:text-white">Leadership</a>
          <a className="link link-hover hover:text-white">Careers</a>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="text-black footer-title">Legal</h6>
          <a className="link link-hover hover:text-white">Terms of Service</a>
          <a className="link link-hover hover:text-white">Privacy Policy</a>
          <a className="link link-hover hover:text-white">Cookie Policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-blue-200 py-2 text-base-content">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            <a rel="stylesheet" href="#home">
              <span className="text-blue-500 hover:text-white font-bold">
                {" "}
                ABZ
              </span>
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
