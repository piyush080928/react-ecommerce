import React from "react";
import Jeet from '../assets/model-3.png';
import Sulek from '../assets/model-6.png';
import Piyush from '../assets/review-1.webp'

function Testimonials() {
  return(
    <div>
        <h1 className="text-black bg-red-100 text-center underline text-3xl font-bold ">TESTIMONIALS</h1>
        <div>
            <section className="text-gray-600 bg-red-100 body-font">
  <div className="container  px-5 py-24 mx-auto">
    <div className="flex  flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full bg-red-200 rounded-2xl  text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Piyush} />
          <p className="leading-relaxed text-black hover:text-gray-500">With BTB, The bestest supplements i ever seen i tried so many supplements and they gave me bestest results of all time</p>
          <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 className="text-black hover:text-gray-500 font-medium title-font tracking-wider text-sm">Piyush</h2>
          <p className="text-black hover:text-gray-500">Creator Of BTB</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full bg-red-200 rounded-2xl text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Sulek}/>
          <p className="leading-relaxed text-black hover:text-gray-500">As a Fitness Influencer , With BTB i got the best result . and specially the pre is very powerfull for my ultimate workout.</p>
          <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 className="text-black hover:text-gray-600 font-medium title-font tracking-wider text-sm">SAM SULEK</h2>
          <p className="text-black hover:text-gray-600">Fitness Influencer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full bg-red-200 rounded-2xl text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Jeet}/>
          <p className="leading-relaxed text-black hover:text-gray-500">As a Couch , With BTB i got the best supplements for my athletes. This are the bestest supplment i ever seen . THANK YOU BTB.</p>
          <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
          <h2 className="text-black hover:text-gray-500 font-medium title-font tracking-wider text-sm">JEET SALAL</h2>
          <p className="text-black hover:text-gray-500">CO-Founder of Natural body building</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        <h1 className="bg-red-200 text-white h-[2vh]">.</h1>
    </div>
       
  )
}

export default Testimonials;