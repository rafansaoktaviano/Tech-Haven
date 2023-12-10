import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import CancelOrderModal from "../CancelOrderModal/CancelOrderModal";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PlaceOrderModal = ({ isOpen }) => {
  const [cancelOrderIsOpen, setCancelOrderIsOpen] = useState(false);
  const navigate = useNavigate();
  const customStyle = {
    content: {
      width: "700px",
      height: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      z: "50",
      paddingRight: "24px",
    },
  };
  return (
    <Modal
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center"
      }
      isOpen={isOpen}
    >
      <div className=" relative h-full w-full">
        <div>
          <h1 className="text-center text-[24px] mb-[24px] font-bold ">
            Payment Approval
          </h1>
        </div>
        <div className="flex justify-between text-[18px] italic">
          <h1>TRANSACTION ID :</h1>
          <h1>08390274098201</h1>
        </div>
        <div className="w-full h-[10px] bg-primaryBlue mb-[72px]"></div>
        <div className="flex justify-between mb-[24px] text-[18px]">
          <h1>Courier</h1>
          <h1 className="">JNE</h1>
        </div>
        <div className="flex justify-between mb-[54px] text-[18px]">
          <h1>Total Price :</h1>
          <h1>Rp. 3.250.000</h1>
        </div>
        <div className="flex justify-between mb-[24px] text-[18px]">
          <h1>Payment Option</h1>
          <h1 className="">BCA</h1>
        </div>
        <div className="flex justify-between mb-[24px] text-[18px]">
          <h1>BCA Number Account</h1>
          <h1 className="font-semibold">898147812732</h1>
        </div>

        <div className="flex justify-normal gap-5 items-center">
          <h1>Screenshot Payment Approval :</h1>
          <input required type="file" className="" />
        </div>
        <div className="flex w-full gap-5 absolute bottom-0">
          <div className="w-[50%]">
            <Button
              btnName="Cancel"
              btnCSS="w-full rounded-[16px] bg-white border-[1px] border-primaryOrange text-primaryOrange"
              onClick={() => setCancelOrderIsOpen(true)}
            />
            <CancelOrderModal
              cancelOrderIsOpen={cancelOrderIsOpen}
              cancel={() => setCancelOrderIsOpen(false)}
            />
          </div>
          <div className="w-[50%]">
            <Button
              btnName="Confirm"
              btnCSS="w-full text-white rounded-[16px] h-[42px]"
              onClick={() => {
                const loading = toast.loading("Loading");
                setTimeout(() => {
                  toast.dismiss(loading);
                  navigate("/success");
                }, 2000);
              }}
            />
          </div>
        </div>
      </div>

    </Modal>
  );
};

export default PlaceOrderModal;
