import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//Components
import Button from "../Button/Button";
import EditAddressModal from "../EditAddressModal/EditAddressModal";

import { AiFillCloseCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import AddShippingModal from "../AddShippingModal/AddShippingModal";
import axiosInstance from "../../config/api";
import toast, { Toaster } from "react-hot-toast";
import EditShippingModal from "../EditShippingModal/EditShippingModal";

const AddressModal = ({
  isOpen,
  onRequestClose,
  handleConfirmChangeAddress,
  closeModal,
  addresses,
  setAddress,
  setOnClick,
  onClick,
  userData,
  rajaOngkir,
  setRajaOngkir,
  getAddress,
  setModalIsOpen,
  setShippingOptions,
}) => {

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const customStyle = {
    content: {
      width: "500px",
      height: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      z: "50",
    },
  };

  const changeColor = (id, value) => {
    setOnClick(id);
    setValue(value);
  };

  const confirmAddAddress = async (province, address, city) => {
    try {
      const addAddress = await axiosInstance.post("/order/add-address", {
        address: address,
        province: province,
        city: city,
      });
      toast.success(addAddress.data.message);
      setIsAddOpen(false);
      getAddress();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
    }
  };

  const confirmEditAddress = async (id, address, city) => {
    try {
      const editAddress = await axiosInstance.post("/order/edit-address", {
        idAddress: id,
        address: address,
        city: city,
      });

      toast.success(editAddress.data.message);
      setEditModalIsOpen(false);
      getAddress();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Modal
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[900] backdrop-blur-sm flex justify-center items-center"
      }
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
    >
      <div className=" h-full   relative">
        <div className="flex justify-between items-top">
          <h1 className="text-[18px] font-semibold mb-[24px]">
            Shipping Address
          </h1>
          <AiFillCloseCircle
            className="text-[24px] cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="flex justify-center mb-[24px]">
          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-cyan-500 px-[32px] rounded-xl flex items-center justify-center gap-3  text-white py-[8px]"
          >
            <FaPlus /> Add Shipping Address
          </button>
          <AddShippingModal
            isOpen={isAddOpen}
            setIsAddOpen={setIsAddOpen}
            rajaOngkir={rajaOngkir}
            setRajaOngkir={setRajaOngkir}
            confirmAddAddress={confirmAddAddress}
          />
        </div>
        <div className=" h-[380px] overflow-auto ">
          {addresses.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => changeColor(value.id, value)}
                className={`w-full hover:border-primaryOrange   ${
                  onClick === value.id ? "border-primaryOrange" : ""
                }  h-auto border-[1px] rounded-[12px] px-[12px] py-[10px] mb-[24px] `}
              >
                {value.is_primary === true ? (
                  <h1 className="text-[16px]  text-primaryOrange font-semibold">
                    Primary
                  </h1>
                ) : (
                  <div></div>
                )}
                <div className="flex items-center gap-2 ">
                  <h1 className="text-[16px] font-semibold">Address :</h1>
                  <h1 className="text-[14px]">{value.address}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[16px] font-semibold">Province :</h1>
                  <h1 className="text-[14px]">
                    {value.tb_ro_city.tb_ro_province.province_name}
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[16px] font-semibold">City :</h1>
                  <h1 className="text-[14px]">{value.tb_ro_city.city_name}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full gap-5 absolute bottom-0">
          <div className="w-[50%]">
            <Button
              btnName="Edit"
              btnCSS="w-full rounded-[16px] bg-white border-[1px] border-primaryOrange text-primaryOrange"
              onClick={() => {
                if (!value) return toast.error("Choose an Address");
                setEditModalIsOpen(true);
              }}
            />
            <EditShippingModal
              editModalIsOpen={editModalIsOpen}
              rajaOngkir={rajaOngkir}
              setEditModalIsOpen={setEditModalIsOpen}
              value={value}
              confirmEditAddress={confirmEditAddress}
            />
          </div>
          <div className="w-[50%]">
            <Button
              btnName="Confirm"
              btnCSS="w-full text-white rounded-[16px] h-[42px]"
              onClick={() => {
                try {
                  if (typeof handleConfirmChangeAddress === 'function') {
                    handleConfirmChangeAddress(value);
                  }
            
                  if (typeof setShippingOptions === 'function') {
                    setShippingOptions([]);
                  }
                } catch (error) {
                  console.error('Error in onClick:', error);
                }
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddressModal;
