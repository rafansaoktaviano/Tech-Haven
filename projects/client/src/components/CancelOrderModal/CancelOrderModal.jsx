import React from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const CancelOrderModal = ({ cancelOrderIsOpen, cancel }) => {
  const navigate = useNavigate();
  const customStyle = {
    content: {
      width: "700px",
      height: "200px",
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

  const handleYesButton = () => {
    toast.success("Cancel Order Success");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <Modal
        style={customStyle}
        overlayClassName={
          "fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center"
        }
        isOpen={cancelOrderIsOpen}
      >

        <div className="h-full relative">
          <h1 className="text-[32px] font-bold">Are you sure ?</h1>
          <h1 className="text-[18px]">
            The Order will be cancel if you click Yes
          </h1>
          <div className="    flex gap-5    absolute bottom-0 right-0">
            <Button
              btnName="Cancel"
              btnCSS=" px-[32px] rounded-xl bg-white border-[1px] border-black text-black"
              onClick={cancel}
            />
            <button
              onClick={handleYesButton}
              className="px-[32px] text-white bg-black rounded-xl h-[42px]"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CancelOrderModal;
