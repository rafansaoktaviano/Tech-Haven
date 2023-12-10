import React from "react";
import { GoStack } from "react-icons/go";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { PiNotebookDuotone } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { GoSignOut } from "react-icons/go";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../redux/Features/auth";

const SideBarDashboard = ({ tabValue, setTabValue, currentPath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutButtonHandler = () => {
        dispatch(logout());
        Cookies.remove("user_token");
        navigate("/login");
    };

    return (
        <>
            <div className="left w-[264px] h-full border-[1px]  shadow-2xl rounded-[4px] py-[16px]">
                <Link to={"/dashboard/profile"}>
                    <div
                        onClick={() => {
                            setTabValue(1);
                        }}
                        className={`flex  items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
                            currentPath === "/dashboard/profile"
                                ? "bg-primaryOrange  text-white"
                                : ""
                        }`}
                    >
                        <GoStack className="text-[18px]" />
                        <h1 className="text-[14px] ">Profile</h1>
                    </div>
                </Link>
                <Link to={"/dashboard/orders"}>
                    <div
                        onClick={() => setTabValue(2)}
                        className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
                            currentPath === "/dashboard/orders" ||
                            currentPath === "/dashboard/orders/details"
                                ? "bg-primaryOrange  text-white"
                                : ""
                        }`}
                    >
                        <AiOutlineShop className="text-[18px]" />
                        <h1 className="text-[14px] ">Order History</h1>
                    </div>
                </Link>
                <Link to={"/dashboard/wishlist"}>
                    <div
                        onClick={() => setTabValue(3)}
                        className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
                            currentPath === "/dashboard/wishlist"
                                ? "bg-primaryOrange  text-white"
                                : ""
                        }`}
                    >
                        <AiOutlineHeart className="text-[18px]" />
                        <h1 className="text-[14px] ">Wishlist</h1>
                    </div>
                </Link>
                <Link to={"/dashboard/addresses"}>
                    <div
                        onClick={() => setTabValue(4)}
                        className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
                            currentPath === "/dashboard/addresses"
                                ? "bg-primaryOrange  text-white"
                                : ""
                        }`}
                    >
                        <PiNotebookDuotone className="text-[18px]" />
                        <h1 className="text-[14px] ">Addresses</h1>
                    </div>
                </Link>
                <Link to={"/dashboard/settings"}>
                    <div
                        onClick={() => setTabValue(5)}
                        className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
                            tabValue === 5 ? "bg-primaryOrange  text-white" : ""
                        }`}
                    >
                        <LuSettings className="text-[18px]" />
                        <h1 className="text-[14px] ">Settings</h1>
                    </div>
                </Link>
                <div
                    onClick={() => setTabValue(6)}
                    className={`flex items-center px-[26px] gap-3 h-[40px] text-[#5F6C72] cursor-pointer ${
                        tabValue === 6 ? "bg-primaryOrange  text-white" : ""
                    }`}
                >
                    <GoSignOut className="text-[18px]" />
                    <button
                        className="text-[14px]"
                        onClick={logoutButtonHandler}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideBarDashboard;
