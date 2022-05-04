import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import useGetData from "../../Hooks/useGetData";

const MyProducts = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [products, setProducts] = useGetData();

  // ======== Delete Action =======
  const deleteAction = (id) => {
    const confirm = prompt(
      `Are you sure to delete (${
        products.find((product) => product._id === id).name
      })? Then type "DELETE" to confirm your action.`
    ).toLocaleUpperCase();
    if (confirm === "DELETE") {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          const remainingPD = products.filter((product) => product._id !== id);
          setProducts(remainingPD);
        })
      );
    } else {
      toast.error(`Type "DELETE" in Uppercase to Delete This Product`);
      return;
    }
  };
  return (
    <>
      <div className=" pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          MY PRODUCTS
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
            {products
              .filter((pd) => pd.uid === user.uid)
              ?.map(({ _id, name, price, supplier, image, quantity }) => (
                <tr
                  key={_id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
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
                    <div onClick={() => deleteAction(_id)}>
                      <FaRegTrashAlt
                        title="Delete"
                        className="text-red-600 cursor-pointer hover:text-red-500 text-2xl"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProducts;
