// import navLogo1 from "../../assets/Logo/MiddaleLogo.png";
// import { ShoppingCart, CreditCard, X } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The best grocery supplier I have ever used. High-quality products and timely delivery!",
    image: "https://i.ibb.co.com/bHBKTn8/profile2.webp",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Fantastic customer service and fresh produce every time. Highly recommended!",
    image: "https://i.ibb.co.com/tsXkmX9/profile4.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "Reliable and affordable grocery supply. I’m extremely satisfied with their service!",
    image: "https://i.ibb.co.com/GCVZYMh/download.png",
  },
  {
    id: 4,
    name: "Sahin Borma",
    review:
      "Reliable and affordable grocery supply. I’m extremely satisfied with their service!",
    image: "https://i.ibb.co.com/GCVZYMh/download.png",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container overflow-hidden mx-auto p-6 text-center xl:py-32 lg:py-28 py-20">
      <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-800 mb-6">
        What Our Customers Say
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        We value our customers' feedback and strive to provide the best service
        possible.
      </p>
      <Slider {...settings} className="gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-blue-200 rounded-lg shadow-lg"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-700 italic">“{testimonial?.review}”</p>
            <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
