import React from "react";

const OptionStatus = (props) => {
  // "Payment Pending",
  // "Waiting for Payment Approval",
  // "Order Process",
  // "Package Sent",
  // "Package Arrived",
  // "Order Completed",
  // "Order Canceled"

  return (
    <>
      <select
        id="status"
        className="border-[#E4E7E9] w-[200px] text-gray-500 rounded-[4px] h-[40px] text-[14px] cursor-pointer"
        onChange={props.onChange}
      >
        <option selected value="">
          {props.valueName || "Select Status"}
        </option>
        <option value="Payment Pending">Payment Pending</option>
        <option value="Waiting for Payment Approval">
          Waiting for Payment Approval
        </option>
        <option value="Order Process">Order Process</option>
        <option value="Package Sent">Package Sent</option>
        <option value="Package Arrived">Package Arrived</option>
        <option value="Order Completed">Order Completed</option>
        <option value="Order Canceled">Order Canceled</option>
      </select>
    </>
  );
};

export default OptionStatus;
