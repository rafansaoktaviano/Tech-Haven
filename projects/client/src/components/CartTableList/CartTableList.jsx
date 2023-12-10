import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import "./carttable.css";

const CartTableList = ({
  cartDatas,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleDeleteCart,
}) => {
  return (
    <div className="table-responsive">
      <table className="w-full">
        <thead className="text-[12px] bg-[#F2F4F5] h-[38px] text-[#475156]">
          <tr>
            <th className="w-[45%] px-[20px] text-left">PRODUCTS</th>
            <th className="w-[15%] col-sub  sm:w-[10%]">PRICE</th>
            <th className="w-[15%] sm:w-[10%]">QUANTITY</th>
            <th className="w-[30%]   sm:w-[10%]">SUB-TOTAL</th>
          </tr>
        </thead>
        <tbody className="border-b-2">
          {cartDatas &&
            cartDatas.map((value, index) => {
              return (
                <tr key={index} className="text-[#191C1F] text-[14px]">
                  <td className="flex items-center pl-[24px] gap-4 py-[20px]">
                    <RiDeleteBin5Line
                      onClick={() => handleDeleteCart(value.products_id)}
                      className="text-red-600 text-[24px] cursor-pointer"
                    />
                    <img
                      className="w-[72px] img-table h-[72px] sm:w-[56px] sm:h-[56px]"
                      src={`${
                        process.env.REACT_APP_IMAGE_SERVER_URL
                      }${value?.product?.products_images[0]?.image?.substring(
                        6
                      )}`}
                      alt=""
                    />
                    <h1 className="PRODUCTS">{value.product.product_name}</h1>
                  </td>
                  <td className="PRICE sub py-[20px]">{`${Number(
                    value.product.product_price
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}`}</td>
                  <td className="QUANTITY py-[20px] flex gap-4 items-center justify-center">
                    <HiMinus
                      onClick={() =>
                        handleDecreaseQuantity(value.products_id, index)
                      }
                      className="cursor-pointer border-[1px] border-gray-400 text-customPrimary bg-white rounded-full text-lg sm:text-xl"
                    />
                    <h1 className="font-medium border-none text-lg sm:text-xl">
                      {value.quantity}
                    </h1>
                    <HiPlus
                      onClick={() => {
                        handleIncreaseQuantity(value.products_id, index);
                      }}
                      className="cursor-pointer border-[1px] border-gray-400 text-customPrimary bg-white rounded-full text-lg sm:text-xl"
                    />
                  </td>
                  <td className="   text-center min-w-[120px] font-semibold">{`${Number(
                    value.total
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}`}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTableList;
