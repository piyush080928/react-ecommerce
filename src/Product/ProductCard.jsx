import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ products, addTocart, toggleLike, handleProtectedAction }) {
  return (
    <div>
      <h1 className="text-black bg-red-100 text-center underline text-3xl font-bold">PRODUCTS FOR YOU</h1>
      <div className="flex flex-wrap bg-red-100 gap-6 justify-center">
        {products.map((product) => (
          <div key={product.id} className="mt-[14px] w-[250px]">
            <div className="group relative overflow-hidden rounded-2xl block">
              <button
                type="button"
                onClick={() => handleProtectedAction(() => toggleLike(product))}
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition-all duration-300 cursor-pointer focus:bg-red-300 hover:bg-red-500 hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
                <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                className="w-[250px] cursor-pointer object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              </Link>

              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700 underline ">
                  ₹{product.price}
                  <span className="text-red-400 ml-[10px]">{product.category}</span>
                </p>

                <h3 className="mt-1.5 text-lg underline font-bold text-gray-900">{product.name}</h3>

                <p className="mt-1.5 line-clamp-3 text-gray-700">
                  {product.description}
                </p>

                <div className="mt-4 flex gap-4">
                  <button
                    type="button" // ✅ prevent reload
                    onClick={() => handleProtectedAction(() => addTocart(product))}
                    className="block w-[150px] rounded-sm bg-black text-white p-3.5 transition-all duration-300 cursor-pointer focus:bg-red-300 hover:bg-red-600 hover:scale-105"
                  >
                    Add to Cart
                  </button>

                  <Link to={`/product/${product.id}`}>
                    <button
                      type="button"
                      className="block w-[150px] rounded-sm bg-black p-3 text-white transition-all duration-300 cursor-pointer focus:bg-red-300 hover:bg-red-600 hover:scale-105"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="bg-red-200 text-white mt-[15px] h-[2vh]">.</h1>
    </div>
  );
}

export default ProductCard;
