import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../Loading";

const MyProducts = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // console.log(products[0].status);
  console.log(products);
  // ========= Fetch Data ==========
  useEffect(() => {
    const url = `https://tranquil-hamlet-69916.herokuapp.com/userProducts`;
    fetch(url, {
      headers: {
        authorization: `${user.uid} ${user.email} ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ======== Delete Action =======
  const deleteAction = (id) => {
    const confirm = prompt(
      `Are you sure to delete this product? Then type "DELETE" to confirm your action.`
    ).toLocaleUpperCase();
    if (confirm === "DELETE") {
      fetch(`https://tranquil-hamlet-69916.herokuapp.com/delete/${id}`, {
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

  if (products?.length === 0) {
    return (
      <>
        <div className="px-1 absolute inset-x-0 h-screen flex flex-col items-center justify-center">
          <h1 className="mb-2 text-center font-extrabold text-2xl">
            <span className="text-4xl text-red-600">*</span> May Be You Have{" "}
            <span className="text-3xl text-red-400">NO</span> Products. <br />{" "}
            Please Add One
          </h1>
          <h1 className="text-center font-extrabold text-2xl">
            <span className="text-4xl text-red-600">*</span> Or Wait, <br /> May
            Be Your Connection is not Stable.
          </h1>
        </div>
        <Loading />
      </>
    );
  }
  if (products[0].status === "unAuthorization") {
    toast.error("Something Went Wrong. Please Login Again.");
    signOut(auth);
    return;
  }
  return (
    <>
      <UseTitle title={"My Products"} />
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
                Price (TK)
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map(
              ({ _id, name, price, supplier, image, quantity }) => (
                <tr
                  key={_id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <td className="px-6 py-4">
                    <img className="w-10" src={image} alt="" />
                  </td>
                  {name.length > 40 ? (
                    <th
                      title={name}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {name.length > 40 ? name.slice(0, 40) + " ..." : name}
                    </th>
                  ) : (
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {name}
                    </th>
                  )}
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
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProducts;
