import React from "react";
import TabBar from "../../components/TabBar/TabBar";
import PageInfo from "../../components/PageInfo/PageInfo";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoStack } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

const CheckoutSuccessPage = ({ handleGoToDashboard }) => {
  const navigate = useNavigate();

  const handleGoDashboard = () => {
    navigate("/dashboard/orders",  { replace: true });
  };
  return (
    <div className="max-w-[1280px] m-auto mb-[124px]">
      <TabBar />

      <div className="flex items-center flex-col mb-[32px]">
        <AiOutlineCheckCircle className="w-[88px] h-[88px] text-[#2DB224] mb-[24px]" />
        <h1 className="text-[24px] font-semibold mb-[24px]">
          Your order has been successfully placed. Kindly submit the proof of
          payment at your earliest convenience.
        </h1>
        <h1 className="text-center w-[50%]">
          Thank you for choosing our services. If you have any questions or need
          further assistance, please don't hesitate to contact our customer
          support team
        </h1>
      </div>
      <div className="flex gap-5 justify-center ">
        <button
          onClick={handleGoDashboard}
          className="border-[#FFE7D6] cursor-pointer gap-2 w-[215px] h-[48px] border-2 flex justify-center items-center text-primaryOrange text-[14px] font-bold"
        >
          <GoStack className="text-[20px] " /> GO TO DASHBOARD
        </button>

        {/* <button className="border-[#FFE7D6]  gap-2 w-[167px] h-[48px]  flex justify-center items-center text-white bg-primaryOrange text-[14px] font-bold">
          VIEW ORDER <AiOutlineArrowRight className="text-[20px] " />
        </button> */}
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
