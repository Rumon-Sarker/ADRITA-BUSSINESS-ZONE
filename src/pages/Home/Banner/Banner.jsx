import React from "react";
import Slider from "react-slick";
import banenr1 from "../../../assets/Img/Banner/banner.png"
import banenr2 from "../../../assets/Img/Banner/banner2.png"

const CarouselBanner = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Loop the carousel
        speed: 500, // Speed of the transition
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Time between slides
    };

    return (
        <div className="w-full py-12 pt-16">
            <Slider {...settings}>
                {/* Banner 1 */}
                <div className="relative">
                    <img
                        src={banenr1}
                        alt="Banner 1"
                        className="object-cover w-full "
                    />
                    {/* <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <h2 className="text-4xl font-semibold">Welcome to Our Website</h2>
                        <p className="mt-4 text-xl">Find the best services with us!</p>
                    </div> */}
                </div>

                {/* Banner 2 */}
                <div className="relative">
                    <img
                        src={banenr2}
                        className="object-cover w-full "
                    />
                    {/* <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <h2 className="text-4xl font-semibold">Explore Amazing Offers</h2>
                        <p className="mt-4 text-xl">Grab the best deals now!</p>
                    </div> */}
                </div>
            </Slider >
        </div >
    );
};

export default CarouselBanner;
