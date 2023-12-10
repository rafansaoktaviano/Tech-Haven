import React from "react";

const OptionCity = (props) => {
  return (
    <>
      <label
        for="countries"
        class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
      >
        Province
      </label>
      <select
        id="countries"
        className="border-[#E4E7E9] w-[100%] text-gray-500 rounded-[4px] h-[44px]"
      >
        <option disabled value={props.valueId} selected>{props.valueName}</option>
      </select>
    </>
  );
};

export default OptionCity;
