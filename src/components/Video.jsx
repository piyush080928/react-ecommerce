import React from "react";
import Vid from "../assets/Rage + Testosterone  Gym Motivation - Gym 24h (720p, h264).mp4";

function Video() {
  return (
    <div className="bg-red-100 px-4 sm:px-6 md:px-10">
      <h1 className="text-red-700 underline text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        #ULTIMATE WORKOUT
      </h1>

      <div className="flex justify-center">
        <video
          src={Vid}
          muted
          autoPlay
          loop
          playsInline
          controls
          className="rounded-2xl w-full max-w-[1000px] h-auto"
        ></video>
      </div>

      <h1 className="bg-red-200 text-white h-[2vh] mt-5">.</h1>
    </div>
  );
}

export default Video;
