import React from "react";
// ICONS
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const TabBar = () => {
  return (
    <div className=" m-auto h-auto mt-[124px] mb-[24px]">
      <div className="flex h-full items-center text-[#5F6C72] ">
        <div className="track-order flex items-center mr-[20px]">
          <TiLocationOutline className="text-[20px] mr-[6px]" />
          <h1 className="text-[14px]">Track Order</h1>
        </div>
        <div className="customer-support flex items-center mr-[20px]">
          <RiCustomerServiceLine className="text-[20px] mr-[6px]" />
          <h1 className="text-[14px]">Customer Support</h1>
        </div>
        <div className="customer-support flex items-center mr-[20px]">
          <BsInfoCircle className="text-[20px] mr-[6px]" />
          <h1 className="text-[14px]">Need Help</h1>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
