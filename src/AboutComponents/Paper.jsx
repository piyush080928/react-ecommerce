import React from "react";
import Wall from '../assets/5th inteerface.png';
import Creatine from '../assets/combo creatine.jpg';
import run from '../assets/3rd interface.png';

function Paper() {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <section className="bg-red-100 flex flex-col-reverse md:flex-row items-center overflow-hidden dark:bg-gray-900">
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline text-gray-900 dark:text-white">
            OUR STORY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400">
            The journey of becoming India's leading Sports Nutrition Brand . BTB is a leading global specialty retailer of health and wellness products that takes pride to be the world's largest company of its kind devoted exclusively to help its customers improve the quality of their lives.
          </p>
        </div>
        <img src={Wall} alt="Story" className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-t-xl md:rounded-none md:rounded-ss-[60px]" />
      </section>

      {/* Section 2 */}
      <section className="bg-red-100 flex flex-col md:flex-row items-center overflow-hidden dark:bg-gray-900">
        <img src={Creatine} alt="Innovation" className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-t-xl md:rounded-none md:rounded-ss-[60px]" />
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline text-gray-900 dark:text-white">
            Industry-First Innovations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400">
            Understanding and acting upon the consumer pulse have always driven BE THE BEAST® to provide industry-first solutions...
            
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-red-100 flex flex-col-reverse md:flex-row items-center overflow-hidden dark:bg-gray-900">
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline text-gray-900 dark:text-white">
            High-Quality Ingredients & Processes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400">
            Our passion for bringing international-grade fitness supplements has made us look around the world...
            
          </p>
        </div>
        <img src={run} alt="Process" className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-t-xl md:rounded-none md:rounded-ss-[60px]" />
      </section>

      {/* Spacer */}
      <div className="h-[20px] bg-red-200"></div>
    </div>
  );
}

export default Paper;
