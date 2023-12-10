import React from "react";
import banner1 from "./../../assets/widget1.png";
import banner2 from "./../../assets/widget2.png";
import banner3 from "./../../assets/widget3.png";
const Banner2 = () => {
  return (
    <div className="h-[520px] flex gap-5">
      <div className="w-[872px] h-full">
        <img src={banner1} className="h-full w-full" alt="" />
      </div>
      <div className="w-[424px] flex flex-col gap-5">
        <img src={banner2} className="w-full h-[50%]" alt="" />
        <img src={banner3} className="w-full h-[50%]" alt="" />
      </div>
    </div>
  );
};

export default Banner2;
