import React from "react";
import TabBar from "../../components/TabBar/TabBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
//icon
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
//components
import Button from "../../components/Button/Button";
import CartTableList from "../../components/CartTableList/CartTableList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//hooks
import { useDebouncedCallback, useDebounce } from "use-debounce";
import Cookies from "js-cookie";
import axiosInstance from "../../config/api";
import "./cartpage.css";
import { getCartAsync } from "./../../redux/Features/order";
const CartPage = () => {
  const [cartDatas, setCartDatas] = useState([]);
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataCart = async () => {
    try {
      const res = await axiosInstance.post("/order/cartdata");
      setCartDatas(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cart = useSelector((state) => state.order.cart);

  const debouncedUpdateQuantity = useDebouncedCallback(
    async (id, newQuantity) => {
      try {
        const res = await axiosInstance.post("/order/update-quantity", {
          productId: id,
          quantity: newQuantity,
        });
        dispatch(getCartAsync());
        dataCart();
      } catch (error) {
        console.log(error);
      }
    },
    500
  );

  const subTotal = cartDatas.reduce((item, current) => {
    return Number(item) + Number(current.total);
  }, 0);
  const tax = subTotal * 0.05;
  const totalPrice = subTotal + tax;

  const handleIncreaseQuantity = async (id, index) => {
    try {
      const updateQuantity = [...cartDatas];
      updateQuantity[index].quantity++;
      debouncedUpdateQuantity(id, updateQuantity[index].quantity);
      setCartDatas(updateQuantity);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleDecreaseQuantity = async (id, index) => {
    try {
      const updateQuantity = [...cartDatas];

      if (updateQuantity[index].quantity > 0) {
        updateQuantity[index].quantity--;

        debouncedUpdateQuantity(id, updateQuantity[index].quantity);

        if (updateQuantity[index].quantity === 0) {
          const deleteCart = await axiosInstance.post("/order/delete-cart", {
            productId: id,
          });
          // dataCart();
          dispatch(getCartAsync());
        }
        setCartDatas(updateQuantity);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataCart();
  }, []);

  const handleDeleteCart = async (id) => {
    try {
      const deleteCart = await axiosInstance.post("/order/delete-cart", {
        productId: id,
      });

      toast.success(deleteCart.data.message);
      dataCart();
      dispatch(getCartAsync());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1280px] m-auto ">
      <TabBar />

      <div className="wrap-cart flex flex-col md:flex-col lg:flex-row gap-5 mb-[150px]">
        <div className="left-side left-table relative w-[70%] h-auto border-[#E4E7E9] border-2  ">
          <h1 className="text-[18px] px-[24px] py-[20px]">Shopping Cart</h1>
          <div className="mb-[100px]">
            {cartDatas.length === 0 ? (
              <div className="w-full h-full  flex justify-center items-center text-center ">
                <h1 className="text-center font-bold mt-[100px]">
                  Your Cart is Empty. Please add items to your cart before
                  proceeding.
                </h1>
              </div>
            ) : (
              <CartTableList
                cartDatas={cartDatas}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleDeleteCart={handleDeleteCart}
              />
            )}
            <div className=" absolute bottom-0 w-full flex  justify-end px-[24px] py-[24px]  ">
              <Link to={"/product"}>
                <button className="cursor-pointer px-[24px] h-[48px] border-2 border-[#2DA5F3] bg-white rounded-none text-[#2DA5F3] flex items-center gap-2">
                  <AiOutlineArrowLeft className="text-[20px]" /> RETURN TO SHOP
                </button>
              </Link>
              {/* <Button
                btnName="UPDATE CART"
                btnCSS="px-[24px] h-[48px] border-2 border-[#2DA5F3] bg-white rounded-none text-[#2DA5F3] "
              /> */}
            </div>
          </div>
        </div>
        <div className="right-side right-cart h-full w-[30%] border-[#E4E7E9] border-2 font-medium">
          <h1 className="px-[24px] pt-[20px] text-[18px] font-semibold ">
            Cart Totals
          </h1>
          <div className="flex justify-between px-[24px] pt-[24px] text-[14px]">
            <h1 className="text-[#5F6C72]">Sub-total</h1>
            <h1 className="text-[#191C1F]">{`${Number(subTotal).toLocaleString(
              "id-ID",
              { style: "currency", currency: "IDR" }
            )}`}</h1>
          </div>
          <div className="flex justify-between px-[24px] py-[12px] text-[14px]">
            <h1 className="text-[#5F6C72] ">Shipping</h1>
            <h1 className="text-[#191C1F]">Rp. 20.000 - Rp. 50.000</h1>
          </div>
          <div className="flex justify-between px-[24px] pb-[24px] text-[14px]">
            <h1 className="text-[#5F6C72] ">Tax(5%)</h1>
            <h1 className="text-[#191C1F] ">
              {cartDatas
                ? `${Number(tax).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}`
                : 0}
            </h1>
          </div>
          <div className="flex justify-between mx-[24px] font-semibold  py-[20px] border-t-2 text-[14px]">
            <h1 className="text-[#191C1F] text-[16px]">Total</h1>
            <h1 className="text-[#191C1F] text-[16px]">{`${Number(
              totalPrice
            ).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}`}</h1>
          </div>
          <div
            onClick={() => {
              if (cartDatas.length === 0) {
                return toast.error(
                  "Your Cart is Empty. Please add items to your cart before proceeding."
                );
              }
              navigate("/checkout");
            }}
            className="w-full h-[56px] px-[24px] mb-[24px]"
          >
            <button className="w-full cursor-pointer h-full rounded-none text-white font-bold bg-primaryOrange flex justify-center items-center gap-5">
              PROCEED TO CHECKOUT <AiOutlineArrowRight className="text-[px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
