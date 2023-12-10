import toast from "react-hot-toast";
import TabBar from "../../components/TabBar/TabBar";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import axiosInstance from "../../config/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ForgetPasswordPage = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        userEmail: "",
    });

    const handleChange = (e) => {
        const newState = { ...state };
        newState[e.target.name] = e.target.value;
        setState(newState);
    };

    const sendEmail = async (e) => {
        try {
            const { userEmail } = state;

            const res = await axiosInstance.post(`/auth/send-reset-password-email`, {
                userEmail
            })

            const resetToken = await axiosInstance.get(`/auth/reset/${userEmail}`)

            Cookies.set("reset_token", resetToken.data.result[0].token)

            toast.success(res.data.message);
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
            <TabBar />
            <div className="flex items-center justify-center">
                <div className="flex flex-col pb-2 mt-8 w-[380px] sm:w-[550px] sm:h-[160px] xl:w-[600px] xl:h-[260px] rounded-xl place-items-center border-2">
                    <h1 className="text-black pt-2 sm:pt-4 text-3xl">
                        Welcome Back!
                    </h1>
                    <div className="text-black pt-2 text-s text-center">
                        Please input your email to send an reset password confirmation!
                    </div>
                        <div>
                            <label className="relative block">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <AiOutlineMail className="text-neutral-700" />
                                </span>
                                <input
                                    className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[420px] xl:w-[510px] h-[30px] xl:h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4 xl:mt-8"
                                    placeholder="Email"
                                    type="text"
                                    name="userEmail"
                                    value={state.userEmail}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button
                            className="border border-black text-white rounded-md w-[175px] h-[30px] xl:w-[250px] xl:h-[45px] mt-8 bg-yellow-500 font-bold"
                            type="submit"
                            onClick={sendEmail}
                        >
                            Send Reset Password Email
                        </button>
                </div>
            </div>
        </div>
    );
};
export default ForgetPasswordPage;
