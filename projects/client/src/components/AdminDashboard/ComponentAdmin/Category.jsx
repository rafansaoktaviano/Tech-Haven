import React, { useEffect, useState } from "react";
import axiosInstance from "../../../config/api";
import ModalAddCategory from "./ModalAddCategory";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getKategori = async () => {
    try {
      const data = await axiosInstance.get(`/category`); // data kategori
      const res = await axiosInstance.get(`/product`); // data product , product punya kategori_id
      const categoryCounts = { 1 : 3, 2 : 2};

      for (const product of res.data) {
        const categoryId = product.products_categories_id; //2
        if (categoryCounts[categoryId]) {
          categoryCounts[categoryId]++;
        } else {
          categoryCounts[categoryId] = 1;
        }
      }
      for (const product of res.data) {
        const categoryId = product.products_categories_id;
        product.total_product = categoryCounts[categoryId];
      }

      const categoryMap = new Map();
      data.data.forEach((category) => {
        categoryMap.set(category.id, category);
      });

      // Memindahkan nilai total product
      res.data.forEach((product) => {
        const categoryId = product.products_categories_id;
        const category = categoryMap.get(categoryId);
        if (category) {
          category.total_product = product.total_product;
        }
      });
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      const result = await swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "you want to delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        const response = await axiosInstance.delete(`/category/${id}`);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: response.data.message,
          icon: "success",
        });
        getKategori();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Delete has been cancelled",
          icon: "error",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleEdit = async (id) => {
    try {
        setModalIsOpen(true)
        localStorage.setItem("kategori", id)
    } catch (error) {
        toast.error(error.response.data.message);
    }
  }
  useEffect(() => {
    getKategori();
  }, []);
  return (
    <>
      <ModalAddCategory
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}

      />
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Total Product</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {categories &&
              categories.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`http://localhost:8000${item.category_image.substring(
                                6
                              )}`}
                              alt="image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.total_product? item.total_product : "-" }</td>
                    <td>
                      <button onClick={() => handleEdit(item.id)} className=" btn-ghost btn-xs">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className=" btn-ghost btn-xs">Delete</button>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td></td>
              <td></td>
              <td className="text-end">
                <button
                  onClick={() => {
                    setModalIsOpen(true);
                  }}
                  className=" btn-ghost btn-xs"
                >
                  Add Category
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Category;
