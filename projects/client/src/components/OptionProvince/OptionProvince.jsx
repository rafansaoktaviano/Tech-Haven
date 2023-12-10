import React from "react";

const OptionProvince = (props) => {
  return (
    <>
      <label
        for="provinces"
        class="block mb-[8px] text-sm font-medium text-gray-900 dark:text-white"
      >
        City
      </label>
      <select
        id="provinces"
        className="border-[#E4E7E9] w-full text-gray-500 rounded-[4px] h-[44px]"
      >
        <option selected disabled value={props.valueId}>
          {props.valueName || "Select"}
        </option>
      </select>
    </>
  );
};

export default OptionProvince;
