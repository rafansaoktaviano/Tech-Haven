import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SwiperAuto from "../../components/SwiperAuto/SwiperAuto";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Cookies from "js-cookie";
import axiosInstance from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { getCartAsync } from "./../../redux/Features/order";
const DetailProduct = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState(Cookies.get("user_token"));
  const navigate = useNavigate();
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const cartData = async () => {
    try {
      const res = await axiosInstance.post("/order/cartdata");
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (id) => {
    try {
      if (!user) {
        toast.error("Please log in to add items to your cart.");
        navigate("/login");
      }
      const res = await axiosInstance.post("/order/cart", {
        productId: idProduct,
        quantity: quantity,
      });
      toast.success(res.data.message);
      dispatch(getCartAsync());
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      cartData();
    }
  }, []);
  const getProduct = async () => {
    try {
      const res = await axiosInstance.get(`/product/${idProduct}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    cartData();
    getProduct();
  }, []);

  return (
    <div className="mt-[154px] mx-2 md:mx-20 rounded-sm flex justify-center mb-[100px]">
      <div className="flex  gap-10">
        <SwiperAuto gambar={product} />
        {product &&
          product.map((item, index) => {
            return (
              <div>
                <div className="text-[20px] font-bold mb-[16px] mt-[50px]">
                  {item.product_name}
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <h1 className="text-[14px] text-[#5F6C72]">
                      Availability :
                    </h1>
                    <h1
                      className={
                        item.totalStock == "0"
                          ? `text-red-500 text-[14px]  font-semibold`
                          : `text-[#2DB224] text-[14px]  font-semibold`
                      }
                    >
                      {item.totalStock == "0"
                        ? "Out Of Stock : 0"
                        : `In Stock : ${item.totalStock}`}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-5">
                  <h1 className="text-[14px] text-[#5F6C72]">Category :</h1>
                  <h1 className="text-[14px]  font-semibold">
                    {item.products_category.category}
                  </h1>
                </div>
                <h1 className="text-[#2DA5F3] text-[20px] font-bold mt-[24px] mb-[32px]">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.product_price)}
                </h1>
                <span className="text-[14px] font-semibold mt-[32px] border-b-2 border-b-primaryOrange">
                  DESCRIPTION
                </span>{" "}
                <br />
                {item.product_description.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <p className="text-[#5F6C72] text-[14px] mt-[14px]">
                  {/* {item.product_description} */}
                </p>
                <div className="w-full flex items-center  gap-10 mt-[32px]">
                  <div className="flex justify-around h-[56px]  items-center gap-5  border-2 w-[25%]">
                    <AiOutlineMinus
                      onClick={() => handleDecrement()}
                      className="cursor-pointer  text-customPrimary bg-white rounded-full text-xl"
                    />
                    <h1 className="font-medium border-none    text-xl">
                      {quantity}
                    </h1>
                    <AiOutlinePlus
                      onClick={() => handleIncrement()}
                      className="cursor-pointer text-customPrimary bg-white rounded-full text-xl "
                    />
                  </div>
                  <button
                    onClick={() => addToCart()}
                    className="w-[75%] flex items-center justify-center gap-5 font-bold text-[16px] text-white h-[56px] bg-primaryOrange"
                  >
                    ADD TO CART{" "}
                    <AiOutlineShoppingCart className="text-[24px]" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DetailProduct;
