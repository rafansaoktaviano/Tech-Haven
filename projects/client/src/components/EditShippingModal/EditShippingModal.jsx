import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { PiNumberCircleOneLight } from "react-icons/pi";
import { PiNumberCircleTwo } from "react-icons/pi";
const EditShippingModal = ({
  editModalIsOpen,
  rajaOngkir,
  setEditModalIsOpen,
  value,
  confirmEditAddress,
}) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setProvince(Number(value?.tb_ro_city?.provinces_id - 1));
    setCity(value?.cities_id);
    setAddress(value?.address);
  }, [value?.cities_id, value?.tb_ro_city?.provinces_id, value?.address]);

  const customStyle = {
    content: {
      width: "800px",
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

  return (
    <Modal
      isOpen={editModalIsOpen}
      style={customStyle}
      overlayClassName={
        "fixed w-full h-screen top-0 left-0 z-[900] backdrop-blur-sm flex justify-center items-center"
      }
    >
      <div className="relative h-full">
        <h1 className="text-center font-bold text-[24px] mb-[16px]">
          EDIT SHIPPING ADDRESS
        </h1>
        <div className="flex gap-5 mb-[24px]">
          <form className="flex flex-col w-full">
            <label className="mb-[8px] " htmlFor="address">
              Address:
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="address"
              placeholder="Type Your Address Details"
              className="border-[#E4E7E9] px-[12px] border-[1px] w-full h-[44px] rounded-[4px]"
              required
              value={address}
            />
          </form>
        </div>

        <div className="flex gap-5">
          <div className="w-[50%]">
            <label
              htmlFor="province"
              className=" mb-[8px] text-sm font-medium text-gray-900 dark:text-white flex items-center gap-3"
            >
              Province: <PiNumberCircleOneLight className="text-[24px]" />
            </label>
            <select
              id="province"
              className="border-[#E4E7E9] w-[100%] text-gray-500 rounded-[4px] h-[44px]"
              onChange={(e) => {
                setProvince(e.target.value);
                setCity("");
              }}
              value={province}
            >
              <option value="">Select your Province</option>

              {rajaOngkir.map((value, index) => {
                return (
                  <option key={index} value={index}>
                    {value.province_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-[50%]">
            <label
              htmlFor="city"
              className=" mb-[8px] text-sm font-medium text-gray-900 dark:text-white flex items-center gap-3"
            >
              City: <PiNumberCircleTwo className="text-[24px]" />
            </label>
            <select
              id="city"
              className="border-[#E4E7E9] w-[100%] text-gray-500 rounded-[4px] h-[44px]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option selected value="">
                Select your city
              </option>
              {rajaOngkir[province]?.tb_ro_cities.map((value, index) => {
                return (
                  <option key={index} value={value.city_id}>
                    {value.city_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex w-full gap-5 absolute bottom-0">
          <div className="w-[50%]">
            <Button
              btnName="Cancel"
              btnCSS="w-full rounded-[16px] bg-white border-[1px] border-primaryOrange text-primaryOrange"
              onClick={() => {
                setEditModalIsOpen(false);
              }}
            />
          </div>
          <div className="w-[50%]">
            <Button
              btnName="Confirm"
              btnCSS="w-full text-white rounded-[16px] h-[42px]"
              onClick={() => confirmEditAddress(value.id, address, city)}
            />
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default EditShippingModal;
