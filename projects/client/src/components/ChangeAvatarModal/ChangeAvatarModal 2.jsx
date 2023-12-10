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

export default function ChangeAvatarModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { id } = useSelector((state) => state.user);

    const [images, setImages] = useState([]);

    const onSelectImages = (event) => {
        try {
            const files = [...event.target.files];
            files.forEach((value) => {
                if (value.size > 10000000)
                    throw {
                        message: `${value.name} Size Harus Dibawah 1MB`,
                    };
                if (value.type.split("/")[0] !== "image") {
                    throw {
                        message: `${value.name} Harus Gambar`,
                    };
                }
            });
            setImages(files);
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    const changeAvatar = async (e) => {
        try {
            const res = await axiosInstance;

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
                Change your avatar
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
                                Please select a file
                            </ModalHeader>
                            <ModalBody>
                                {/* <input
                                    className="border rounded-xl"
                                    name="fullname"
                                    value={input.fullname}
                                    onChange={handleChangeFullname}
                                    type="text"
                                    placeholder="Enter your new fullname here..."
                                /> */}
                                <input
                                    onChange={(e) => onSelectImages(e)}
                                    type="file"
                                    multiple="multiple"
                                    placeholder="Product Image"
                                    id=""
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose} onClick={changeAvatar}>
                                    Change your avatar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
