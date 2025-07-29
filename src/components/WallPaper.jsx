import React from "react";
import first from '../assets/1st interface .jpg';
import second from '../assets/2nd interface.png';
import third from '../assets/3rd interface.png';
import firth from '../assets/4rth interface.png';
import fifth from '../assets/5th inteerface.png';

function WallPaper() {
  return (
    <div className="w-full overflow-hidden">
      {/* Custom animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-marquee">
        {/* Repeat images twice for smooth infinite scroll */}
        {[1, 2].map((group) => (
          <div className="flex" key={group}>
            <img
              src={first}
              className="w-full sm:w-[100vw] h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] object-cover"
              alt="wallpaper"
            />
            <img
              src={second}
              className="w-full sm:w-[100vw] h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] object-cover"
              alt="wallpaper"
            />
            <img
              src={third}
              className="w-full sm:w-[100vw] h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] object-cover"
              alt="wallpaper"
            />
            <img
              src={firth}
              className="w-full sm:w-[100vw] h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] object-cover"
              alt="wallpaper"
            />
            <img
              src={fifth}
              className="w-full sm:w-[100vw] h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] object-cover"
              alt="wallpaper"
            />
          </div>
        ))}
      </div>

      <h1 className="bg-red-200 text-white h-[2vh]">.</h1>
    </div>
  );
}

export default WallPaper;
