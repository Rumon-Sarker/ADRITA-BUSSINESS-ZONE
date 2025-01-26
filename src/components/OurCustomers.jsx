import React from "react";
import customer1 from "../assets/customers/customer1.png";
import customer2 from "../assets/customers/customer2.png";
import customer3 from "../assets/customers/customer3.png";
import chaldal from "../assets/customers/chaldal.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customers = [
  {
    id: 1,
    image: customer1,
  },
  {
    id: 2,
    image: customer2,
  },
  {
    id: 3,
    image: customer3,
  },
  {
    id: 4,
    image: chaldal,
  },
];

const OurCustomers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container overflow-hidden mx-auto xl:py-12 lg:py-10 md:py-8 py-6 ">
      <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold xl:py-12 lg:py-10 md:py-8 py-6">
        Our Customers
      </h1>
      <Slider {...settings}>
        {customers.map((customer) => (
          <div key={customer.id} className="flex mx-auto justify-center">
            <img
              className="rounded-full flex justify-center mx-auto transition-transform transform hover:scale-105 xl:w-56 xl:h-56 lg:w-44 lg:h-44 w-32 h-32"
              src={customer.image}
              alt="Customer Logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurCustomers;
