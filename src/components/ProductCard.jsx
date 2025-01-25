import { FaClock } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { image, datePosted, address, location, details, price } = product;

    return (
        <div
            className="pb-4 overflow-hidden bg-white border border-gray-600 rounded-md shadow-md"
        >
            {/* Top Image */}
            <img
                src={image}
                alt="Property Image"
                className="w-full h-[100px] object-cover"
            />

            {/* Content Section */}
            <div className="p-2">
                {/* Date */}
                <p className="flex items-center gap-2 mb-1 text-xs text-gray-500"><FaClock /> {datePosted}</p>

                {/* Address */}
                <h2 className="text-sm font-semibold text-blue-900">
                    {address}
                </h2>
                <p className="text-xs text-black">
                    {location}
                </p>

                {/* Room Details */}
                <p className="mt-2 text-xs text-gray-800">
                    {details} | {price}
                </p>

            </div>
            {/* Buttons Section */}
            <div className="flex justify-between w-full px-2">
                <button
                    className=" bg-[#507FA9] text-white text-xs px-2 py-1 rounded "

                >
                    Email Inquiry
                </button>
                <button
                    className="px-2 py-1 text-xs text-black border-2 border-gray-600 rounded "

                >
                    Get Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;