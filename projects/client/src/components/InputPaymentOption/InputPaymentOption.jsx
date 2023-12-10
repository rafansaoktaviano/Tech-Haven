import React from "react";

const InputPaymentOption = ({ payments, setPaymentsOption }) => {
  return (
    <>
      <label
        for="countries"
        class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
      >
        Payment Option
      </label>
      <select
        id="countries"
        className="border-[#E4E7E9] w-full text-gray-500 rounded-[4px] h-[44px]"
        onChange={(e) => setPaymentsOption(e.target.value)}
      >
        <option onChange={() => setPaymentsOption("")} selected>
          Select a Payment
        </option>
        {payments.map((value, index) => {
          return (
            <>
              <option key={index} value={value.id}>{value.method}</option>
            </>
          );
        })}
      </select>
    </>
  );
};

export default InputPaymentOption;
