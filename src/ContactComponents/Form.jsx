import React from "react";

function Form() {
  return (
    <div className="bg-red-100 dark:bg-gray-900">
      <section className="min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
            {/* Left Form Section */}
            <div className="lg:w-1/2">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                Let’s talk
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ask us everything and we would love to hear from you
              </p>

              <form className="mt-12 w-full">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex-1 mb-4 md:mb-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="w-full h-32 md:h-56 px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50">
                  Get in touch
                </button>
              </form>
            </div>

            {/* Right Image + Info Section */}
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex flex-col items-center">
              <img
                className="object-cover rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="contact"
              />

              <div className="mt-6 space-y-6 w-full px-2 md:px-0">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-black dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-400">Gurgaon, Haryana</span>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-black dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-400">(257) 563-7401</span>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-black dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-400">BTB@Beast.com</span>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 w-full max-w-xs">
                <h3 className="text-gray-600 dark:text-gray-300 mb-4">Follow us</h3>
                <div className="flex space-x-4">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="bg-red-200 text-white h-[2vh]">.</h1>
    </div>
  );
}

export default Form;
