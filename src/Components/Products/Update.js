import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const [singlePD, setSinglePD] = useState([]);
  const { _id, name, quantity, price, image, supplier, info } = singlePD;

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url).then((res) => res.json().then((data) => setSinglePD(data)));
  }, []);

  // =========== Form Action ==========
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // reset();
    toast.success("Product Added");
  };

  return (
    <>
      <div className="py-16">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
                {name}
              </h1>
              <ul className="mb-5 text-xl">
                <li>
                  <span className="font-bold font-signika">Price:</span>{" "}
                  <span>{price}TK</span>
                </li>
                <li>
                  <span className="font-bold font-signika">Quantity: </span>
                  <span>{`${quantity} ${
                    quantity < 2 ? "Items" : "Items"
                  }`}</span>
                </li>
                <li>
                  <span className="font-bold font-signika">Supplier: </span>
                  <span>{supplier}</span>
                </li>
              </ul>
              <p className="text-xl">{info}</p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow-lg rounded-3xl px-1 items-center flex flex-col py-5 mt-2"
              >
                <input
                  title="Input Product Quantity to Deliver/Add-Stock"
                  className="w-full  border-2  rounded-md  p-1 border-sky-500"
                  type="number"
                  placeholder="Input Product Quantity to Deliver/Add-Stock"
                  {...register("quantity", {
                    required: true,
                    pattern: /^[1-9]/,
                  })}
                />
                {errors.quantity?.type === "required" && (
                  <p className="text-sm text-red-400">
                    * Please Input The Quantity
                  </p>
                )}
                {errors.quantity?.type === "pattern" && (
                  <p className="text-sm text-red-400">
                    * Please Input a Valid Data
                  </p>
                )}
                <div className="mt-2">
                  <button
                    href="#"
                    className="smax:text-sm xsmax:px-2 text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 hover:bg-transparent  hover:text duration-300 hover:text-purple-600 inline-block border border-purple-600 mr-3"
                  >
                    Delivery
                  </button>
                  <button
                    href="#"
                    className="smax:text-sm xsmax:px-2 text-white duration-300 rounded-full py-2 px-5 text-lg font-semibold bg-green-400 inline-block border hover:bg-white hover:text-black"
                  >
                    Add Stock
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-5/12 order-2">
              <img src={image} alt="" className="rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
