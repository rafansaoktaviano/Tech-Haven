import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { login } from "../redux/Features/auth";
import { useEffect } from "react";
import axiosInstance from "../config/api";

const KeepLogin = ({ children }) => {
    const userSelector = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const refresh = async () => {
        const loginToken = Cookies.get("user_token");

        const userData = await axiosInstance.get(
            `/auth/userdata/${loginToken}`
        );

        if (userData) {
            dispatch(login(userData.data.result));
        } else {
            navigate("/login");
        }
    };

    useEffect(() => {
        if (!userSelector.id) {
            refresh();
        }
    }, []);

    return children;
};

export default KeepLogin;
