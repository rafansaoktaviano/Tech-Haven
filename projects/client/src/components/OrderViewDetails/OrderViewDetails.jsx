import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import { PiNotebookDuotone } from "react-icons/pi";
import { TfiPackage } from "react-icons/tfi";
import { TbTruck } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import ProductTableViewDetails from "../ProductTableViewDetails/ProductTableViewDetails";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../../config/api";
import moment from "moment";
const OrderViewDetails = ({ setTabValue }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const transactionUid = queryParams.get("transaction_uid");
  const status = queryParams.get("status");

  const currentPath = location.pathname;

  const [order, setOrder] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderStatus, setOrderStatus] = useState({});

  let users_id;
  if (currentPath === "/admin/orders/details") {
    users_id = queryParams.get("ID");
  }

  const getOrderDetails = async () => {
    try {
      const res = await axiosInstance.post("/order/order-details", {
        transaction_uid: transactionUid,
        users_id: users_id,
      });

      const status = await axiosInstance.post("/order/status", {
        transaction_uid: transactionUid,
        users_id: users_id,
      });
      setOrderStatus(status.data.data.status);
      setOrder(res.data.order);
      setOrderDetails(res.data.orderDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  const parsedTimestamp = moment(order.createdAt);

  const formattedTimestamp = parsedTimestamp.format("DD MMM, YYYY [at] h:mm A");
  const orderExpected = moment(order.createdAt).add(3, "days");
  const orderExpected2 = moment(order.createdAt).add(5, "days");

  return (
    <>
      <Link
        to={`${
          currentPath === "/admin/orders/details"
            ? "/admin/orders"
            : "/dashboard/orders"
        }`}
      >
        <div
          onClick={() => setTabValue(2)}
          className="cursor-pointer px-[24px] py-[16px] flex mb-[24px]  items-center gap-3 border-b-2"
        >
          <HiOutlineArrowSmLeft className="text-[24px]" />
          <h1>ORDER DETAILS</h1>
        </div>
      </Link>
      <div className="w-full px-[24px] mb-[24px]">
        <div className="h-[104px] p-[24px] bg-[#FDFAE7] border-[4px] border-[#F7E99E] flex justify-between items-center mb-[24px]">
          <div>
            <h1 className="text-[20px] mb-[8px] text-[#191C1F]">
              {transactionUid}
            </h1>
            <h1 className="text-[14px] text-[#475156]">
              {`${orderDetails.length} Products Order Placed in ${formattedTimestamp}`}
            </h1>
          </div>
          <h1 className="text-[28px] text-[#2DA5F3]">{`${Number(
            order.total_price || 0
          ).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}`}</h1>
        </div>
        <h1>{`Order expected arrival ${orderExpected.format(
          "DD MMM, YYYY [at] h:mm A"
        )} - ${orderExpected2.format("DD MMM, YYYY [at] h:mm A")}`}</h1>
      </div>
      {orderStatus !== "Order Canceled" ? (
        <div className=" px-[24px] flex justify-center flex-col  border-b-2">
          <div className="flex  justify-center items-center mb-[32px]">
            <AiFillCheckCircle
              className={` bg-white text-[32px] text-primaryOrange `}
            />
            <div
              className={`${
                orderStatus === "Waiting for Payment Approval"
                  ? "bg-[#FFE7D6]"
                  : "bg-primaryOrange"
              } w-[200px] h-[8px] `}
            ></div>
            {orderStatus === "Order Process" ||
            orderStatus === "Package Sent" ||
            orderStatus === "Package Arrived" ||
            orderStatus === "Order Completed" ? (
              <AiFillCheckCircle
                className={` bg-white text-[32px] text-primaryOrange `}
              />
            ) : (
              <div className="w-[28px] h-[28px] rounded-[50%] bg-white border-2 border-primaryOrange"></div>
            )}
            <div
              className={`${
                orderStatus === "Order Process" ||
                orderStatus === "Waiting for Payment Approval"
                  ? "bg-[#FFE7D6]"
                  : "bg-primaryOrange"
              } w-[200px] h-[8px] `}
            ></div>
            {orderStatus === "Package Sent" ||
            orderStatus === "Package Arrived" ||
            orderStatus === "Order Completed" ? (
              <AiFillCheckCircle
                className={` bg-white text-[32px] text-primaryOrange `}
              />
            ) : (
              <div className="w-[28px] h-[28px] rounded-[50%] bg-white border-2 border-primaryOrange"></div>
            )}
            <div
              className={`${
                orderStatus === "Order Process" ||
                orderStatus === "Waiting for Payment Approval" ||
                orderStatus === "Package Sent"
                  ? "bg-[#FFE7D6]"
                  : "bg-primaryOrange"
              } w-[200px] h-[8px] `}
            ></div>
            {orderStatus === "Package Arrived" ||
            orderStatus === "Order Completed" ? (
              <AiFillCheckCircle
                className={` bg-white text-[32px] text-primaryOrange `}
              />
            ) : (
              <div className="w-[28px] h-[28px] rounded-[50%] bg-white border-2 border-primaryOrange"></div>
            )}
          </div>

          <div className="flex px-[24px]  justify-center gap-[110px] mb-[24px]">
            <div className="flex w-[120px] h-auto  flex-col items-center gap-3">
              <PiNotebookDuotone
                className={`${
                  orderStatus === "Waiting for Payment Approval"
                    ? "text-[#2DB224]"
                    : "text-primaryOrange"
                } text-[32px] text-[#2DB224]`}
              />
              <h1>Order Placed</h1>
            </div>
            <div className="flex w-[120px] h-auto flex-col items-center gap-3">
              <TfiPackage
                className={`${
                  orderStatus === "Order Process"
                    ? "text-[#2DB224]"
                    : "text-primaryOrange"
                } text-[32px] text-[#2DB224]`}
              />
              <h1>Packaging</h1>
            </div>
            <div className="flex w-[120px] h-auto flex-col items-center gap-3">
              <TbTruck
                className={`${
                  orderStatus === "Package Sent"
                    ? "text-[#2DB224]"
                    : "text-primaryOrange"
                } text-[32px] text-[#2DB224]`}
              />
              <h1>On The Road</h1>
            </div>
            <div className="flex w-[120px] h-auto flex-col items-center gap-3">
              <FaRegHandshake
                className={`${
                  orderStatus === "Package Arrived"
                    ? "text-[#2DB224]"
                    : "text-primaryOrange"
                } text-[32px] text-[#2DB224]`}
              />
              <h1>Delivered</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <h1 className="text-3xl text-red-500 font-bold">ORDER CANCELED</h1>
        </div>
      )}

      <div className="py-[32px]  px-[24px] w-full  border-b-2">
        <h1 className="text-[18px] mb-[24px]">Order Activity</h1>
        <div className="flex gap-[16px] h-full mb-[16px]">
          <div className="w-[48px] h-[48px] bg-[#EAF7E9] flex justify-center items-center">
            <BsCheck2All className="text-[24px] text-[#2DB224]" />
          </div>
          <div className="h-[48px] flex flex-col justify-between ">
            <h1 className="text-[14px] text-[#191C1F]">
              Your order has been delivered. Thank you for shopping at Clicon!
            </h1>
            <h1 className="text-[14px] text-[#77878F]">
              23 Jan, 2021 at 7:32 PM
            </h1>
          </div>
        </div>
      </div>
      <div className="py-[32px] px-[24px] border-b-2">
        <h1 className="text-[18px] mb-[24px]">Product </h1>
        <ProductTableViewDetails orderDetails={orderDetails} />
      </div>
      <div className="px-[24px] py-[32px]">
        <h1 className="text-[18px] mb-[24px]">Shipping Address</h1>
        <h1 className="text-[#191C1F]">{order.user?.fullname}</h1>
        <div className="flex gap-2">
          <h1>Address Detail : </h1>
          <h1 className="text-[#5F6C72]"> {order.address_detail}</h1>
        </div>
        <div className="flex gap-2">
          <h1>Province : </h1>
          <h1 className="text-[#5F6C72]">
            {order.tb_ro_city?.tb_ro_province?.province_name}
          </h1>
        </div>
        <div className="flex gap-2">
          <h1>City : </h1>
          <h1 className="text-[#5F6C72]">{order.tb_ro_city?.city_name}</h1>
        </div>
        <div className="flex gap-2">
          <h1>Email : </h1>
          <h1 className="text-[#5F6C72]">{order.user?.email}</h1>
        </div>
      </div>
    </>
  );
};

export default OrderViewDetails;
