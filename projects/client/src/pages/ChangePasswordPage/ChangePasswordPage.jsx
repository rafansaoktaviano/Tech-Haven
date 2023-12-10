import toast, { Toaster } from "react-hot-toast";
import TabBar from "../../components/TabBar/TabBar";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const handleChange = (e) => {
        const newState = { ...state };
        newState[e.target.name] = e.target.value;
        setState(newState);
    };

    const changePassword = async (e) => {
        try {
            const { oldPassword, newPassword } = state;

            const loginToken = Cookies.get("user_token");

            const userData = await axiosInstance.get(
                `/auth/userdata/${loginToken}`
            );

            const res = await axiosInstance.post(`/auth/change-password`, {
                userId: userData.data.result.id,
                oldPassword,
                newPassword,
            });

            toast.success(res.data.message);
            Cookies.remove("user_token");
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div>
            <Toaster />
            <TabBar />
            <div className="flex items-center justify-center">
                <div className="flex flex-col pb-2 mt-8 w-[380px] sm:w-[550px] sm:h-[250px] xl:w-[600px] xl:h-[350px] rounded-xl place-items-center border-2">
                    <h1 className="text-black pt-2 sm:pt-4 text-3xl">
                        Welcome Back!
                    </h1>
                    <div className="text-black pt-2 text-s text-center">
                        Please input your old & new password!
                    </div>
                        <div>
                            <label className="relative block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <RiLockPasswordLine className="text-neutral-700" />
                                </span>
                                <input
                                    className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[420px] xl:w-[510px] h-[30px] xl:h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4 xl:mt-8"
                                    placeholder="Old Password"
                                    type="password"
                                    name="oldPassword"
                                    value={state.oldPassword}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="relative block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <RiLockPasswordLine className="text-neutral-700" />
                                </span>
                                <input
                                    className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[420px] xl:w-[510px] h-[30px] xl:h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4 xl:mt-8"
                                    placeholder="New Password"
                                    type="password"
                                    name="newPassword"
                                    value={state.newPassword}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button
                            className="border border-black text-white rounded-md w-[175px] h-[30px] xl:w-[250px] xl:h-[45px] mt-8 bg-yellow-500 font-bold"
                            onClick={changePassword}
                        >
                            Change Password
                        </button>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
