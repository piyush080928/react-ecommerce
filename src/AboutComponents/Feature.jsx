import React from "react";
import model from '../assets/review-1.webp'
import { FaBox } from "react-icons/fa";
import { IoBarChartOutline } from "react-icons/io5";
import { GiBottledBolt } from "react-icons/gi";
import { PiCurrencyInrFill } from "react-icons/pi";

function Feature() {
  return (
    <div>
      <section className="bg-red-100 dark:bg-gray-900 w-full">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-10 mx-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 capitalize dark:text-white">
            explore our <br /> awesome Services
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-16">
              <div className="space-y-3">
                <span className="inline-block p-3 text-white bg-black rounded-xl">
                  <FaBox className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  1.70 Cr boxes bought till now
                </h1>
                <p className="text-gray-500 dark:text-gray-300 hover:text-black hover:underline">
                  We've built a strong fitness community of trust which strives on goals that define "Himmat".
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-white bg-black rounded-xl">
                  <IoBarChartOutline className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Leading the path
                </h1>
                <p className="text-gray-500 dark:text-gray-300 hover:text-black hover:underline">
                  We've built a strong fitness community of trust which strives on goals that define "Himmat".
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-white bg-black rounded-xl">
                  <GiBottledBolt className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Only authentic supplements
                </h1>
                <p className="text-gray-500 dark:text-gray-300 hover:text-black hover:underline">
                  We've built a strong fitness community of trust which strives on goals that define "Himmat".
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-white bg-black rounded-xl">
                  <PiCurrencyInrFill className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Easy & secure payments
                </h1>
                <p className="text-gray-500 dark:text-gray-300 hover:text-black hover:underline">
                  We've built a strong fitness community of trust which strives on goals that define "Himmat".
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-end">
              <img
                src={model}
                alt="model"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[34rem] xl:h-[34rem] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <h1 className="bg-red-200 h-[2vh] text-white">.</h1>
    </div>
  );
}

export default Feature;
