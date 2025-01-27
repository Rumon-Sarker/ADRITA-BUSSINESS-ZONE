import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner2 from "../../../assets/Img/Banner/banner.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const AboutUs = () => {
  return (
    <div id="home" className=" overflow-hidden bg-slate-200">
      <div className="w-full py-12 pt-16">
        <Slider {...settings}>
          {/* Banner 1 */}
          <div className="relative">
            <img
              src={
                "https://aicdn.picsart.com/55cf2ab0-9486-46d1-95e3-beec7bff8845.png"
              }
              alt="Banner1"
              className=" xl:h-[700px] lg:h-[500px] md:h-[400px] h-[350px] w-full"
            />
            <div className="absolute lg:left-28 left-10 top-1/2 text-center transform -translate-y-1/2 text-white">
              <h2 className="xl:text-7xl lg:text-4xl text-3xl md:font-extrabold ">
                Welcome to Our Website
              </h2>
              <p className="mt-4 lg:text-3xl text-xl">
                Find the best services with us!
              </p>
              <a href="#products">
                <button className="mt-4 bg-blue-500 hover:bg-blue-800 hover:scale-105 text-white px-6 py-2 rounded-lg">
                  Shop Now
                </button>
              </a>
            </div>
          </div>
          {/* Banner 2 */}
          <div className="relative">
            <img
              src={banner2}
              alt="Banner 2"
              className=" xl:h-[700px] lg:h-[500px] md:h-[400px] h-[350px] w-full"
            />
            {/* <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white">
              <h2 className="text-4xl font-semibold">Explore Amazing Offers</h2>
              <p className="mt-4 text-xl">Grab the best deals now!</p>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">
                Shop Now
              </button>
            </div> */}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
