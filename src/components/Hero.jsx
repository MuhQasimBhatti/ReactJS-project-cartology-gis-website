import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="h-screen">
      <video
        className="absolute inset-0 w-screen h-screen object-cover"
        muted
        autoPlay
        loop
      >
        <source src="/images/hero21.mp4" type="video/mp4" />
      </video>
      {/* <img src="/images/wallpaperflare.com_wallpaper.jpg" className="absolute"></img> */}

      <div className="absolute inset-0 flex items-center justify-start w-[40%] ml-[10%]">
        <div className="flex flex-col gap-3">
          <div className="flex">
            <h1 className="text-white text-4xl md:text-6xl font-bold ">
              Exploring Boundless Horizons:
              <br />{" "}
              <span className="text-5xl">
                Navigate Your World with CartoLogic
              </span>
            </h1>
          </div>
          <div
            className={`w-fit rounded-3xl p-0.5 bg-gradient-to-tr from-[#2ABDFF] via-[#9B39FC] to-[#2ABDFF] btn-shadow`}
          >
            <Link>
            <button
              type="button"
              className={`bg-white bg-opacity-80 ${
                hovered
                  ? "bg-gradient-to-r from-[#2abcff33] to-[#9a39fc33] transition duration-700 ease-in-out"
                  : ""
              } py-2 md:text-sm text-[10px] font-semibold md:px-6 px-3 rounded-full`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className={`flex-1`}>Say Hi to us!</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
