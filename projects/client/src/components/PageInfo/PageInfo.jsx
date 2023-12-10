import React from "react";

//icons
import { AiOutlineHome } from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

const PageInfo = () => {
  return (
    <>
      <div className=" mb-[24px] mt-[16px] h-[72px] flex w-full items-center text-[14px] text-gray bg-[#F2F4F5]">
        <div className="flex px-5 items-center mr-[20px]">
          <AiOutlineHome className="text-[20px] mr-[8px]" />
          <Link to={"/"}>
            <h1 className="text-[#5F6C72]">Home</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <TbMathGreater className="text-[15px] mr-[10px]" />
          <h1 className="text-[#5F6C72]">Shop</h1>
        </div>
      </div>
    </>
  );
};

export default PageInfo;
