import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Input from "../Input/Input";
import axiosInstance from "../../config/api";
import toast from "react-hot-toast";
import {
    Button,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
} from "@nextui-org/react";

const AdminEditUserModal = ({ onPress, getProduct }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [warehouse, setWarehouse] = useState([]);

    const status = [
        {
            name: "Active",
        },
        {
            name: "Inactive",
        },
    ];

    const [data, setData] = useState({
        users_id: user.result.id,
        warehouses_id: "",
        status: "",
        role: "",
    });

    const [role, setRole] = useState("");

    const [test, setTest] = useState("");

    const getAllWarehouse = async () => {
        try {
            const data = await axiosInstance.get(`/warehouse`);
            setWarehouse(data.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllWarehouse();
        if (user) {
            setRole(user.result.role);
        }
    }, []);

    const handleChange = (e) => {
        let newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    const editUserHandler = async () => {
        try {
            const res = await axiosInstance.patch(`/admin/edit-users`, {
                users_id: data.users_id,
                status: data.status,
                warehouses_id: data.warehouses_id,
                role: data.role,
            });
                toast.success(res.data.message);
                getProduct()
        } catch (error) {
            console.log(error);
        }
    };

    const assignAdmin = () => {
        setTest("true");
        let newData = { ...data };
        newData.role = "Warehouse Admin";
        setData(newData);
    };

    return (
        <>
            <ModalHeader className="flex flex-col gap-1">
                Edit User
            </ModalHeader>
            <ModalBody>
                <div className="w-full flex flex-col gap-4">
                    <div
                        key={"sm"}
                        className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                    >
                        <Select
                            size={"sm"}
                            onChange={handleChange}
                            name="status"
                            label={
                                // product
                                //     ? product[0].products_category.category
                                //     : "Pilih Kategori"
                                "Pilih Status"
                            }
                            className="max-w-xs"
                            value={data.status}
                        >
                            {status?.map((status) => (
                                <SelectItem
                                    key={status.name}
                                    value={status.name}
                                >
                                    {status.name}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>
                <div>
                    {role === "Warehouse Admin" || test !== "" ? (
                        <div className="w-full flex flex-col gap-4">
                            <div
                                key={"sm"}
                                className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                            >
                                <Select
                                    size={"sm"}
                                    onChange={handleChange}
                                    name="warehouses_id"
                                    label={
                                        // product
                                        //     ? product[0].products_category.category
                                        //     : "Pilih Kategori"
                                        "Pilih Warehouse"
                                    }
                                    className="max-w-xs"
                                    value={data.warehouses_id}
                                >
                                    {warehouse?.map((warehouse) => (
                                        <SelectItem
                                            key={warehouse.id}
                                            value={warehouse.id}
                                        >
                                            {warehouse.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                {role === "Customer" && (
                    <Button onClick={assignAdmin}>
                        Assign as warehouse admin
                    </Button>
                )}
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={onPress}>
                    Close
                </Button>
                <Button
                    color="primary"
                    onClick={editUserHandler}
                    onPress={onPress}
                >
                    Simpan
                </Button>
            </ModalFooter>
        </>
    );
};

export default AdminEditUserModal;
