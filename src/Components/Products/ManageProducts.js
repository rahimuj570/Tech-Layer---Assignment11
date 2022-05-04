import React from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../../Hooks/useGetData";
import ManageProducts from "./ManageProduct";
import Product from "./Product";

const ManageProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          MANAGE PRODUCTS
        </h1>
        <div className=" w-36 h-1 bg-indigo-400 mx-auto rounded-lg" />
      </div>

      <div className="mb-5 text-center">
        <button
          onClick={() => navigate("/add")}
          className="p-1 font-semibold hover:bg-indigo-400 hover:text-white duration-300 hover:border-white sm:w-2/6 w-5/6 bg-white border-indigo-400 border-4 text-indigo-400"
        >
          Add New Products
        </button>
      </div>

      <div className="pb-20 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-5/6 mx-auto smax:w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Supplier name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {useGetData()?.map((product) => (
              <ManageProducts key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProduct;
