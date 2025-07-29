import React from "react";

function Liked({ likeClose, likedItems, toggleLike }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-sm border rounded-2xl border-gray-600 bg-red-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <button
          onClick={likeClose}
          className="absolute right-4 top-4 transition-colors duration-300 cursor-pointer hover:text-red-700 scale-110"
        >
          <span className="sr-only">Close liked</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {likedItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-sm object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm text-gray-900">{item.name}</h3>
                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline"> ₹{item.price}</dd>
                    </div>
                  </dl>
                </div>
                <button
                  onClick={() => toggleLike(item)}
                  className="ml-auto text-red-600 hover:text-red-800"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-center">
            <a
              href="#"
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liked;
