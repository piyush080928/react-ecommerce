import React from "react";

function Cart({ cartClose, cartItems, incrementQty, decrementQty, placeOrder, removeFromCart }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl border border-gray-600 bg-red-100 rounded-2xl px-4 py-6 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <button
          onClick={cartClose}
          className="absolute end-4 top-4 transition-colors duration-300 cursor-pointer hover:scale-110 text-red-700"
        >
          <span className="sr-only">Close cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-4 space-y-6 max-h-[70vh] overflow-y-auto">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-sm object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-600">₹ {item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="cursor-pointer text-xl px-1" onClick={() => decrementQty(item.id)}>-</button>
                  <span className="text-sm">{item.quantity}</span>
                  <button className="cursor-pointer text-xl px-1" onClick={() => incrementQty(item.id)}>+</button>
                  <button className="cursor-pointer text-red-700" onClick={() => removeFromCart(item.id)}>❌</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold">
              Total: ₹
              {cartItems.reduce(
                (total, item) => total + (Number(item.price) * item.quantity),
                0
              )}
            </h3>

            <button
              onClick={placeOrder}
              className="w-full bg-black text-white py-2 rounded hover:bg-red-600 transition"
            >
              Place Order
            </button>

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

export default Cart;
