import React, { useState } from "react";
import products from "../Data/data";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

function ProductDetails() {
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <h2 className="text-2xl text-red-600 font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="p-4 bg-red-100 md:p-10">
      <Link to="/" className="flex items-center gap-2 text-black text-lg mb-4">
        <IoArrowBackCircle className="text-2xl" />
        Back to Home
      </Link>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-xl shadow-md object-contain"
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-sm md:text-base">{product.description}</p>
          <p className="text-lg font-semibold text-green-600">₹{product.price}</p>

          {/* Quantity Counter */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
              className="px-4 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-medium">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-4 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-black cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="border border-black cursor-pointer text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
