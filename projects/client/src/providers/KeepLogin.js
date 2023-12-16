import { useEffect } from "react";
import axiosInstance from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Features/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const KeepLogin = ({ children }) => {
    const userSelector = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const refresh = async () => {
        const loginToken = Cookies.get("user_token");

        try {
            const userData = await axiosInstance.get(`/auth/userdata/${loginToken}`);
            dispatch(login(userData.data.result));
        } catch (error) {
            // Handle the case when the refresh token is invalid or expired
            // Redirect to login or perform necessary actions
            console.error("Failed to refresh token:", error);
        }
    };

    useEffect(() => {
        if (!userSelector.id) {
            refresh();
        }
    }, [userSelector.id]);

    return children;
};

export default KeepLogin;
