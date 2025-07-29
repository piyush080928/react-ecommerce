import React from "react";
import { Link } from 'react-router-dom';


function Foot() {
 return(
   <div className="footer bg-red-100 text-gray-700 w-full">
  <div className="max-w-[1200px] mx-auto px-4 py-12">
    
    {/* Newsletter */}
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
        Want us to email you with the latest blockbuster news?
      </h2>
      <form className="mt-6">
        <div className="relative">
          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium sm:text-base"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black px-5 py-3 text-xs sm:text-sm font-medium text-white hover:bg-red-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    {/* Grid Section */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
      {/* Social */}
      <div className="text-center sm:text-left col-span-1">
        <p className="text-gray-600 font-semibold text-lg">LET'S GET SOCIAL.</p>
        <p className="mt-2 text-sm">Follow us on every platform to get every deal on time.</p>
        <div className="mt-6 flex justify-center sm:justify-start space-x-5">
          <a className="text-black hover:text-red-500 transition" href="#"><svg className="w-6 h-6"  /></a>
          <a className="text-black hover:text-red-500 transition" href="#"><svg className="w-6 h-6"  /></a>
          <a className="text-black hover:text-red-500 transition" href="#"><svg className="w-6 h-6"  /></a>
          <a className="text-black hover:text-red-500 transition" href="#"><svg className="w-6 h-6"  /></a>
        </div>
      </div>

      {/* Services */}
      <div className="text-center sm:text-left">
        <p className="font-semibold">Services</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a className="hover:underline" href="/">Best Products</a></li>
          <li><a className="hover:underline" href="#">Ultimate Workout</a></li>
          <li><a className="hover:underline" href="#">Membership</a></li>
        </ul>
      </div>

      {/* About */}
      <div className="text-center sm:text-left">
        <p className="font-semibold">About</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a className="hover:underline" href="/about">Explore</a></li>
          <li><a className="hover:underline" href="#">History</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="text-center sm:text-left">
        <p className="font-semibold">Support</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a className="hover:underline" href="/contact">FAQs</a></li>
          <li><a className="hover:underline" href="/contact">Contact</a></li>
          <li><a className="hover:underline" href="/contact">Send us email</a></li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
      © Company 2025. All rights reserved. <br />
      Created by <a className="underline hover:text-black" href="#">@Piyush</a>
    </div>

  </div>
</div>

 )
}

export default Foot