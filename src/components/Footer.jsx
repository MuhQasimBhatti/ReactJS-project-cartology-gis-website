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
    <div className="w-full bg-[#161616af] border border-t-2 border-black flex items-start justify-center text-white py-7">
      <div className="w-full md:w-[40%] flex gap-3 items-center">
        <img src="/images/Logo.png" className="h-[120px]" alt="logo" />
        <p className="text-4xl font-semibold">CartoLogic</p>
      </div>
      <div className="w-full md:w-[40%] flex flex-col md:flex-row items-start md:justify-between">
        <div>
          <h className="text-2xl font-semibold">Services</h>
          <ul className="mt-2">
            {services.map((item, index) => (
              <li key={index} className="text-base p-1">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h className="text-2xl font-semibold">Social</h>
          <ul className="gap-2 ">
            {social.map((item, index) => (
              <li key={index}>
                <Link target="_blank" to={item.link} className="flex items-center justify-center">
                <SocialIcon
                  url={item.link}
                  className="w-0.5 h-0.5 rounded-xl cursor-pointer"
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
