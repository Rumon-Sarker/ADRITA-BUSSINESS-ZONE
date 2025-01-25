import navLogo1 from "../../assets/Logo/MiddaleLogo.png";

const Navbar = () => {
    const navItems = (
        <>
            <li className="hover:text-blue-600"><a href="#home">Home</a></li>
            <li className="hover:text-blue-600"><a href="#services">Services</a></li>
            <li className="hover:text-blue-600"><a href="#products">Our Product</a></li>
            <li className="hover:text-blue-600"><a href="#about">About Us</a></li>
            <li className="hover:text-blue-600"><a href="#contact">Contact Us</a></li>
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
                            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navItems}
                        </ul>

                    </div>

                    {/* Logo */}
                    <a href="#home" className="flex items-center justify-end space-x-2 text-xl font-semibold normal-case btn btn-ghost">
                        <img className="w-10 h-10 rounded-full" src={navLogo1} alt="Logo" />
                        <span>ADRITA <span className="text-green-600">BUSINESS</span> ZONE</span>
                    </a>
                </div>

                {/* Center: Navigation Menu */}
                <div className="hidden lg:flex navbar-center">
                    <ul className="space-x-2 text-lg font-medium text-black xl:space-x-4 lg:space-x-2 md:space-x-3 menu menu-horizontal">
                        {navItems}
                    </ul>
                </div>

                {/* Right: Register/Login Button */}
                <div className="navbar-end">
                    <a
                        href="#register"
                        className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-lg btn hover:bg-blue-300"
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
