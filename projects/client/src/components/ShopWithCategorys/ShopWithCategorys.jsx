import React from "react";
import CardCategory from "../CardCategory/CardCategory";
import { Link } from "react-router-dom";

const ShopWithCategorys = () => {
  return (
    <>
      <div className="flex rounded-md  flex-wrap flex-col mb-10">
        <div className="text-center font-bold text-2xl mb-5">
          Shop With Categorys
        </div>
        <CardCategory />
      </div>
    </>
  );
};

export default ShopWithCategorys;
