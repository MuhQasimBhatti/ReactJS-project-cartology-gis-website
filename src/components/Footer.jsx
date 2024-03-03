import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  const social = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61556896353017&mibextid=ZbWKwL",
      icon: "",
    },
    { name: "Instagram", link: "", icon: "" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abdullah-asim-730686282/",
      icon: "",
    },
  ];
  const services = [
    "3d Mapping",
    "Cadestrial Mapping",
    "Spatial Data Analysis",
    "Decision Support",
    "Data Visualization",
  ];
  return (
    <div className="w-full h-full bg-[#161616af] border border-t-2 border-black flex flex-col md:flex-row items-center justify-around text-white py-7">
      <div className="w-full h-full md:w-[40%] flex gap-3 items-center justify-center md:justify-start">
        <img src="/images/Logo.png" className="h-[80px] md:h-[120px]" alt="logo" />
        <p className="text-4xl font-semibold">CartoLogic</p>
      </div>
      <div className="my-5 mx-1 w-full md:w-[40%] flex items-start justify-around md:justify-between">
        <div>
          <h className="text-xl md:text-2xl font-semibold">Services</h>
          <ul className="mt-2 ">
            {services.map((item, index) => (
              <li key={index} className="text-sm md:text-base p-1">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h className="text-xl md:text-2xl font-semibold">Social</h>
          <ul className="gap-2 ">
            {social.map((item, index) => (
              <li key={index}>
                <Link target="_blank" to={item.link} className="text-sm md:text-base flex items-center justify-center">
                <SocialIcon
                  url={item.link}
                  className="rounded-xl cursor-pointer"
                  target="_blank"
                  bgColor="transparent"
                />
                <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
