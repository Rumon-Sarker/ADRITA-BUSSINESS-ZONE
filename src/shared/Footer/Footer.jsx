import { FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../../assets/Logo/MiddaleLogo.png";

const Footer = () => {
    return (
        <div className="bg-blue-200 ">


            <footer className="container p-10 mx-auto footer text-base-content">
                {/* Logo and Intro */}
                <aside>


                    <img className="rounded-full w-28 h-28" src={logo} alt="logo" />
                    <p>
                        ADRITA BUSINESS ZONE
                        <br />
                        Empowering businesses with innovation since 2000
                    </p>
                </aside>

                {/* Services Section */}
                <nav>
                    <h6 className="text-black footer-title">Services</h6>
                    <a className="link link-hover hover:text-white">Consulting</a>
                    <a className="link link-hover hover:text-white">Business Solutions</a>
                    <a className="link link-hover hover:text-white">IT Infrastructure</a>
                    <a className="link link-hover hover:text-white">Custom Software Development</a>
                </nav>

                {/* Company Section */}
                <nav>
                    <h6 className="text-black footer-title">Company</h6>
                    <a className="link link-hover hover:text-white">Our Mission</a>
                    <a className="link link-hover hover:text-white">Leadership</a>
                    <a className="link link-hover hover:text-white">Careers</a>
                    <a className="link link-hover hover:text-white">Media Kit</a>
                </nav>

                {/* Legal Section */}
                <nav>
                    <h6 className="text-black footer-title">Legal</h6>
                    <a className="link link-hover hover:text-white">Terms of Service</a>
                    <a className="link link-hover hover:text-white">Privacy Policy</a>
                    <a className="link link-hover hover:text-white">Cookie Policy</a>
                </nav>
            </footer>
        </div>


    );
};

export default Footer;
