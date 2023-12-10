import React from "react";
import { getCartAsync } from "./../../redux/Features/order";
import { useDispatch, useSelector } from "react-redux";
const CardOrderSummary = ({ cartData }) => {
  const dispatch = useDispatch()
  return (
    <>
      {cartData.map((value, index) => {
        return (
          <div key={index} className="flex gap-2 items-center mb-[16px] w-full">
            <img
              className="w-[20%] h-[64px]  "
              src={`${
                process.env.REACT_APP_IMAGE_SERVER_URL
              }${value?.product?.products_images[0]?.image?.substring(6)}`}
              alt=""
            />
            <div className="w-[80%]">
              <h1 className="text-[14px] ">{value.product.product_name}</h1>
              <div className="flex gap-2">
                <h1>{`${value.quantity}x`}</h1>
                <h1>{`${Number(value.product.product_price).toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR",
                  }
                )}`}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardOrderSummary;
