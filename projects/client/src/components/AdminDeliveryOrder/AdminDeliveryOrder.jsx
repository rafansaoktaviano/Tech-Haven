import React, { useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import axiosInstance from "../../config/api";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
const AdminDeliveryOrder = ({ isRefreshing, refreshOrders }) => {
  const [adminOrderList, setAdminOrderList] = useState([]);
  const cardsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = adminOrderList?.slice(indexOfFirstCard, indexOfLastCard);

  const getData = async () => {
    try {
      const res = await axiosInstance.post("/order/delivery-list");

      setAdminOrderList(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const nextPage = () => {
    if (indexOfLastCard < adminOrderList.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSendPackage = async (value) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Send Package",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosInstance.put("/order/send-package", {
            transaction_uid: value.transaction_uid,
            users_id: value.users_id,
          });

          Swal.fire({
            title: "Package Sent!",
            text: "The Order  has been sent",
            icon: "success",
          });
          refreshOrders();
          getData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full overflow-auto py-[16px] px-[24px] flex justify-between items-center">
        <h1 className="text-[16px]    font-medium">DELIVERY ORDER LIST</h1>
        <div className="h-[38px] px-[24px] flex  justify-end items-center">
          <button
            onClick={() => {
              refreshOrders();
              getData();
            }}
            className="cursor-pointer  flex gap-2 justify-center items-center"
          >
            <FiRefreshCw
              className={`font-bold text-[14px] ${
                isRefreshing === true ? "spin" : ""
              }`}
            />
            <h1 className="text-[14px]">Refresh</h1>
          </button>
        </div>
      </div>
      <table className="w-full  ">
        <thead className="h-[38px] w-full  bg-[#F2F4F5]">
          <tr className="w-full  text-[12px] text-[#475156]">
            <th className="w-[20%] col-order text-start pl-[24px]">ORDER ID</th>
            <th className="w-[20%] text-start">STATUS</th>
            <th className="w-[20%] col-date text-start">DATE</th>
            {/* <th className="w-[20%] text-start">Warehouse</th> */}
            <th className="w-[20%]  text-start pr-[24px]">ACTION</th>
          </tr>
        </thead>
      </table>
      <div className="w-full h-[520px] overflow-auto ">
        {currentCards.length !== 0 && isRefreshing === false ? (
          <table className="w-full    ">
            <tbody className=" w-full  ">
              {currentCards.map((value, index) => {
                return (
                  <tr
                    key={index}
                    value={value.transaction_uid}
                    className="w-full h-[64px]  text-[14px] "
                  >
                    <td className="w-[20%] col-order text-start pl-[24px] text-[#191C1F] ">
                      {value.transaction_uid}
                    </td>
                    <td
                      className={`w-[20%] text-start ${
                        value.status === "Payment Pending"
                          ? " text-[#FFD700]"
                          : value.status === "Waiting for Payment Approval"
                          ? "text-[#FFA500]"
                          : value.status === "Order Process"
                          ? "text-[#00BFFF]"
                          : value.status === "Package Sent"
                          ? "text-[#008000]"
                          : value.status === "Package Arrived"
                          ? "text-[#008000]"
                          : value.status === "Order Completed"
                          ? "text-[#008000]"
                          : value.status === "Order Canceled"
                          ? "text-[#FF0000]"
                          : ""
                      }`}
                    >
                      {value.status}
                    </td>
                    <td className="w-[20%] col-date text-start text-[#5F6C72]">
                      {moment(value.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                    </td>
                    {/* <td className="w-[20%] text-start text-[#475156] ">
                      {value.warehouse?.name}
                    </td> */}

                    <td className="w-[20%]   h-full ">
                      {value.status !== "Payment " ? (
                        <div className="flex justify-center px-[10px]">
                          <button
                            onClick={() => {
                              handleSendPackage(value);
                              //   navigate(
                              //     `/admin/orders/details?transaction_uid=${value.transaction_uid}&ID=${value.users_id}`
                              //   );
                            }}
                            className="flex w-full  rounded-xl justify-center gap-2 items-center cursor-pointer  bg-primaryOrange text-white "
                          >
                            Send Package
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : isRefreshing === true ? (
          <div className="flex justify-center items-center h-full">
            <FiRefreshCw className={`font-bold text-[50px] spin`} />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-[px] text-center">
              Oops! It seems there are no orders that match your search
              criteria.
            </h1>
          </div>
        )}
      </div>
      <div className="Pagination  mt-[25px] mx-[20px] flex  justify-between mb-[20px]">
        <Button
          btnCSS="test1  w-[200px] bg-white text-primaryOrange rounded-xl  border-2 border-orange-500 "
          btnName="Previously"
          onClick={() => previousPage()}
        />
        <Button
          onClick={() => nextPage()}
          btnCSS="test2 w-[200px] text-white rounded-xl"
          btnName="Next"
        />
      </div>
    </>
  );
};

export default AdminDeliveryOrder;
