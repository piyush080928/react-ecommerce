import React from "react";
import logo3 from '../assets/logo3.png';
import { MdCancel } from "react-icons/md";
import ProductCard from "../Product/ProductCard";

function Search({ searchClose, products, searchQuery, setSearchQuery }) {
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="relative w-[90%] sm:w-[600px] md:w-[750px] lg:w-[900px] h-[90vh] bg-red-100 rounded-3xl overflow-y-auto p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <img src={logo3} className="w-24 sm:w-28" alt="Logo" />
          <MdCancel
            onClick={searchClose}
            className="text-[28px] sm:text-[32px] cursor-pointer hover:text-red-700"
          />
        </div>

        {/* Search Input */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search your fav products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-black w-full p-3 rounded-md placeholder:text-black"
          />
        </div>

        {/* Results */}
        <div className="mt-6">
          {searchQuery.trim() === "" ? (
            <p className="text-center text-gray-500 text-lg font-medium">
              🔍 Search your fav products...
            </p>
          ) : filtered.length > 0 ? (
            <ProductCard products={filtered} />
          ) : (
            <p className="text-center text-red-500 text-lg font-medium">
              ❌ No matching products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
