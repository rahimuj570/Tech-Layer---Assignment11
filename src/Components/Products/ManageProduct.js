import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageProducts = ({ product }) => {
  const { _id, name, price, supplier, image, quantity } = product;
  return (
    <>
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
        <td className="px-6 py-4">
          <img className="w-10" src={image} alt="" />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {name}
        </th>
        <td className="px-6 py-4">{supplier}</td>
        <td className="px-6 py-4">{quantity}</td>
        <td className="px-6 py-4">{price}</td>
        <td className="px-6 py-4 text-right">
          <FaRegTrashAlt
            title="Delete"
            className="text-red-600 cursor-pointer hover:text-red-500 text-2xl"
          />
        </td>
      </tr>
    </>
  );
};

export default ManageProducts;
