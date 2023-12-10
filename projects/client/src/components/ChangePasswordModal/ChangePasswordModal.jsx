import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import axiosInstance from "../../config/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ChangePasswordModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const navigate = useNavigate()

    const { id } = useSelector((state) => state.user);

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

            const res = await axiosInstance.post(`/auth/change-password`, {
                userId: id,
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
        <>
            <Button onPress={onOpen} color="primary">
                Change Password
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Change your Password
                            </ModalHeader>
                            <ModalBody>
                                <input
                                    className="border rounded-xl"
                                    placeholder="Old Password"
                                    type="password"
                                    name="oldPassword"
                                    value={state.oldPassword}
                                    onChange={handleChange}
                                />
                                <input
                                    className="border rounded-xl"
                                    placeholder="New Password"
                                    type="password"
                                    name="newPassword"
                                    value={state.newPassword}
                                    onChange={handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    onClick={changePassword}
                                    onPress={onClose}
                                >
                                    Change Password
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
