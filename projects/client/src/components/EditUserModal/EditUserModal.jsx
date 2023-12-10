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

export default function EditUserModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [input, setInput] = useState({
        fullname: "",
    });

    const { id } = useSelector((state) => state.user);

    const handleChangeFullname = (e) => {
        const newInput = { ...input };
        newInput[e.target.name] = e.target.value;
        setInput(newInput);
    };

    const changeName = async (e) => {
        try {
            const { fullname } = input;
            const res = await axiosInstance.patch(`/user/user=${id}`, {
                fullname,
            });

            toast.success(res.data.message);

            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <Button onPress={onOpen} color="primary">
                Change Fullname
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
                                Change your Username
                            </ModalHeader>
                            <ModalBody>
                                <input
                                    className="border rounded-xl"
                                    name="fullname"
                                    value={input.fullname}
                                    onChange={handleChangeFullname}
                                    type="text"
                                    placeholder="Enter your new fullname here..."
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    onClick={changeName}
                                    onPress={onClose}
                                >
                                    Change Full Name
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
