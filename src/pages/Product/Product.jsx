import React, { useState } from "react";

import fish from "../../assets/Product/Fish.png";
import Eggs from "../../assets/Product/Eggs.png";
import mite from "../../assets/Product/Mite.png";
import Vasitable from "../../assets/Product/Vasitable.png";
import honey from "../../assets/Product/honey.png";
import RuchiOrangeJam from "../../assets/Product/RuchiOrangeJam.png";
import Rice from "../../assets/Product/Rice.png";
import Oil from "../../assets/Product/oil.png";

const products = [
  {
    id: 1,
    name: "Chicken Breast",
    price: 250,
    image: Vasitable,
  },
  {
    id: 2,
    name: "Eggs",
    price: 80,
    image: Eggs,
  },
  {
    id: 3,
    name: "Brown Bread",
    price: 50,
    image: mite,
  },

  {
    id: 4,
    name: "Fresh Fish",
    price: 120,
    image: fish,
  },
  {
    id: 5,
    name: "Dabur Honey",
    price: 120,
    image: honey,
  },
  {
    id: 6,
    name: "Ruchi Orange Jam",
    price: 120,
    image: RuchiOrangeJam,
  },
  {
    id: 7,
    name: "ACI Pure Chinigura Rice",
    price: 120,
    image: Rice,
  },
  {
    id: 8,
    name: "Fresh Soyabean Oil",
    price: 120,
    image: Oil,
  },
];

const ProductListing = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div id="products" className="container mx-auto p-4 py-20">
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold mb-8 ">
        Our Products
      </h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-md"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded-md"
        >
          <option value="default">Sort by Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-lg transition-transform  transform hover:scale-105 group p-4 border border-gray-200 rounded-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full  h-52 object-cover rounded-md"
            />
            <div className="pt-3">
              <div className="flex justify-center bg-blue-100 group-hover:bg-blue-300 py-2 ">
                <h3 className="text-lg text-center font-semibold">
                  {product.name}
                </h3>
                {/* <p className="p-1 rounded bg-gray-700 text-white ">
                  ${product.price}
                </p> */}
              </div>
              {/* <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
