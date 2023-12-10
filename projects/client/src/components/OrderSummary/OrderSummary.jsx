import React from "react";
import CardOrderSummary from "../CardOrderSummary/CardOrderSummary";
import Button from "../Button/Button";
import PlaceOrderModal from "../../components/PlaceOrderModal/PlaceOrderModal";
import { getCartAsync } from "./../../redux/Features/order";
import { useDispatch, useSelector } from "react-redux";
const OrderSummary = ({
  cartData,
  shippingPrice,
  setPlaceOrderIsOpen,
  placeOrderIsOpen,
  handlePlaceOrder,
  setTotalPrice,
}) => {
  const subTotal = cartData.reduce((item, current) => {
    return Number(item) + Number(current.total);
  }, 0);
  const dispatch = useDispatch();

  const tax = (subTotal + Number(shippingPrice)) * 0.05;
  const total = subTotal + Number(shippingPrice) + tax;

  setTotalPrice(Math.ceil(total));
  return (
    <div className=" right-side xl:w-[30%] md:w-[50%] h-full  px-[24px] rounded-[4px] border-[#E4E7E9] py-[20px] border-[1px] ">
      <h1 className="text-[18px] font-medium mb-[20px]">Order Summary</h1>
      <div className="overflow-auto h-[150px]">
        <CardOrderSummary cartData={cartData} />
      </div>
      <div className="flex justify-between items-center text-[14px] mb-[12px]">
        <h1 className="text-[#5F6C72]">Sub-total</h1>
        <h1 className="text-[#191C1F] font-semibold">{`${Number(
          subTotal
        ).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}`}</h1>
      </div>
      <div className="flex justify-between items-center text-[14px] mb-[12px] ">
        <h1 className="text-[#5F6C72]">Shipping</h1>
        <h1 className="text-[#191C1F] font-semibold">{`${Number(
          shippingPrice ? shippingPrice : 0
        ).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}`}</h1>
      </div>
      <div className="flex justify-between items-center text-[14px] mb-[12px]">
        <h1 className="text-[#5F6C72]">Tax(5%)</h1>
        <h1 className="text-[#191C1F] font-semibold">{`${Number(
          shippingPrice ? tax : 0
        ).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}`}</h1>
      </div>
      <div className="flex justify-between font-bold   border-t-2 text-[14px] pt-[20px] mb-[32px]">
        <h1 className="text-[#191C1F] text-[16px]">Total</h1>
        <h1
          value={Math.ceil(subTotal + Number(shippingPrice) + tax)}
          onChange={(e) => setTotalPrice(e.target.value)}
          className="text-[#191C1F]  text-[16px]"
        >{`${Number(
          tax ? Math.ceil(subTotal + Number(shippingPrice) + tax) : 0
        ).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}`}</h1>
      </div>
      <div className="w-full h-[56px]">
        <Button
          btnName="PLACE ORDER"
          btnCSS="w-full h-full text-[16px] text-white rounded-[3px]"
          onClick={() => {
            dispatch(getCartAsync());
            handlePlaceOrder();
          }}
        />
        <PlaceOrderModal
          isOpen={placeOrderIsOpen}
          closePlaceOrderModal={() => setPlaceOrderIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
