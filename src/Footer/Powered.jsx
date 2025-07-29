import React from "react";
import Myprotein from '../assets/myprotein-seeklogo.svg';
import Muscleblaze from '../assets/muscleblaze.png';
import Gnc from '../assets/256px-GNC_Logo.svg.png';

function Powered() {
  return (
    <div>
      <section className="bg-red-100 dark:bg-gray-900">
        <div className="px-4 py-16 mx-auto text-center max-w-7xl">
          <div className="max-w-lg mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              SEND US YOUR REVIEW
            </h1>
            <p className="mt-6 text-black dark:text-gray-300">
              Send us your Feedback, Tell us what you like about our Products.
            </p>

            <div className="w-full max-w-md mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700">
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-black placeholder:text-black bg-transparent border-none dark:text-white focus:outline-none"
                />
                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white bg-black rounded-md hover:bg-red-500 transition"
                >
                  SEND US
                </button>
              </form>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-black underline cursor-pointer text-2xl sm:text-3xl font-bold">
              POWERED BY
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center mt-10">
              <a
                href="https://www.guardian.in/"
                className="flex justify-center"
              >
                <img src={Gnc} className="w-32 sm:w-40 md:w-48 lg:w-52" />
              </a>
              <a
                href="https://www.muscleblaze.com/"
                className="flex justify-center"
              >
                <img src={Muscleblaze} className="w-32 sm:w-40 md:w-48 lg:w-52" />
              </a>
              <a
                href="https://www.myprotein.co.in/"
                className="flex justify-center col-span-2 sm:col-span-1"
              >
                <img src={Myprotein} className="w-32 sm:w-40 md:w-48 lg:w-52" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-red-200 h-[2vh]"></div>
    </div>
  );
}

export default Powered;
