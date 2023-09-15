import React from "react";
import TeamResourcesBtn from "./TeamResourcesBtn";

const Footer = () => {
  return (
    <div className="flex-col w-[100%] h-[150px] bg-red-800 flex gap-5 justify-center place-items-center">
      <p className="text-white text-center text-sm md:text-xl">
        SUDIRMAN CENTRAL BUSINESS DISTRICT (SCBD), Lot. 28
      </p>
      <TeamResourcesBtn />
    </div>
  );
};

export default Footer;
