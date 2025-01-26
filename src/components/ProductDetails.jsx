// import React from "react";
// import { useParams } from "react-router-dom";

// const product = {
//   id: 1,
//   name: "Fresh Apples",
//   price: 120,
//   image: "https://via.placeholder.com/500",
//   description:
//     "Fresh apples sourced from organic farms. Packed with nutrients and perfect for a healthy diet.",
//   category: "Fruits",
//   stock: 20,
// };

// const ProductDetails = () => {
//   const { id } = useParams();

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Product Image */}
//         <div>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//             <p className="text-gray-600 text-lg">
//               Category: {product.category}
//             </p>
//             <p className="text-2xl font-semibold text-green-600 my-3">
//               ৳{product.price}
//             </p>
//             <p className="text-gray-700 mb-4">{product.description}</p>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold">
//               Add to Cart
//             </button>
//             <span className="text-gray-600">Stock: {product.stock} left</span>
//           </div>
//         </div>
//       </div>

//       {/* Additional Information */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Product Details</h2>
//         <ul className="list-disc pl-6 text-gray-700">
//           <li>Freshly sourced from organic farms</li>
//           <li>100% natural and pesticide-free</li>
//           <li>Available for fast delivery</li>
//           <li>Rich in vitamins and minerals</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React from "react";

const products = [
  {
    name: "Fresh Vegetables",
    price: "$56",
    image: "/images/vegetables.png",
    category: "Grocery & Staples",
    rating: "4.5",
  },
  {
    name: "Mix Fruit Jam",
    price: "$46",
    image: "/images/jam.png",
    category: "Grocery & Staples",
    rating: "4.4",
  },
  {
    name: "Onions",
    price: "$16",
    image: "/images/onions.png",
    category: "Grocery & Staples",
    rating: "4.6",
  },
  {
    name: "Radish",
    price: "$60",
    image: "/images/radish.png",
    category: "Grocery & Staples",
    rating: "4.3",
  },
  {
    name: "Sugarcanes",
    price: "$32",
    image: "/images/sugarcane.png",
    category: "Grocery & Staples",
    rating: "4.4",
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Deal of the Day</h1>
        <div className="text-lg font-semibold text-gray-600">
          29 : 15 : 25 : 08
        </div>
      </div>
      <p className="text-gray-500 mb-10">
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore magna
        aliqua.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold text-gray-900">
                {product.price}
              </span>
              <span className="text-sm bg-green-500 text-white px-2 py-1 rounded">
                ⭐ {product.rating}
              </span>
            </div>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
