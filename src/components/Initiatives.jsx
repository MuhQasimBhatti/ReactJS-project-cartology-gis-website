import React, { useState } from "react";
import { Link } from "react-router-dom";
const Initiatives = () => {
    const [hovered, setHovered] = useState(false);

  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center ">
      <img src="/images/initiativeBg.jpg" className="md:w-[50%] object-cover" />
      <div className="text-center md:w-[50%] m-5 flex flex-col items-center justify-center gap-5 ">
        <h2 className="text-5xl font-semibold my-3 text-white">Helping solve the world's most complex problems</h2>
        <p className="text-lg text-white">
          Business and government leaders around the world apply Esri's
          technology to understand and address important challenges such as
          climate change, supply chain resilience, public health, and social
          equity. Our customers' work is the inspiration for everything we do.{" "}
        </p>
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
              <span className={`flex-1`}>Learn about our Initiative <span></span></span>
            </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Initiatives;
