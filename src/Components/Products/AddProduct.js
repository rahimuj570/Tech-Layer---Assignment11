import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";

const AddProduct = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    data.uid = user.uid;
    const url = `https://tranquil-hamlet-69916.herokuapp.com/add`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    reset();
    toast.success("Product Added");
  };

  return (
    <>
      <UseTitle title={"Add Product"} />
      <div className="pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          ADD NEW PRODUCTS
        </h1>
        <div className=" w-36 h-1 bg-indigo-400 mx-auto rounded-lg" />
      </div>

      <form
        className="mt-5 sm:w-2/6 w-5/6 mx-auto flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex flex-col">
          <label htmlFor="name">Product Name</label>
          <input
            type={"text"}
            placeholder="Your Product Name"
            id="name"
            className="text-sm border-2 bg-slate-200 my-1 p-1"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="image">Product Image</label>
          <input
            type={"text"}
            placeholder="Your Product Image"
            id="image"
            className="text-sm border-2 bg-slate-200 my-1 p-1"
            {...register("image", {
              required: true,
            })}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="quantity">Quantity</label>
          <input
            type={"number"}
            placeholder="Your Product Quantity"
            id="quantity"
            className="text-sm border-2 bg-slate-200 my-1 p-1"
            {...register("quantity", {
              required: true,
              pattern: /^[1-9]/,
            })}
          />
          {errors.quantity?.type === "required" && (
            <p className="text-sm text-red-400">* Please Input The Quantity</p>
          )}
          {errors.quantity?.type === "pattern" && (
            <p className="text-sm text-red-400">* Please Input a Valid Data</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="price">Product Price</label>
          <input
            type={"text"}
            placeholder="Per Product Price"
            id="price"
            className="text-sm border-2 bg-slate-200 my-1 p-1"
            {...register("price", {
              required: true,
              pattern: /^[1-9]|^,/,
            })}
          />
          {errors.price?.type === "required" && (
            <p className="text-sm text-red-400">* Please Input The Price</p>
          )}
          {errors.price?.type === "pattern" && (
            <p className="text-sm text-red-400">* Please Input a Valid Data</p>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="supplier">Supplier Name</label>
          <input
            title="You Can't Edit This Input."
            type={"text"}
            readOnly
            defaultValue={user.displayName}
            placeholder="Product Supplier Name"
            id="supplier"
            className="text-sm border-2 bg-slate-200 border-sky-300 my-1 p-1"
            {...register("supplier")}
          />
          {errors.supplier?.type === "required" && (
            <p className="text-sm text-red-400">
              * Please Input The Supplier Name
            </p>
          )}
          {errors.supplier?.type === "pattern" && (
            <p className="text-sm text-red-400">* Please Input a Valid Data</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="description">Short Description</label>
          <textarea
            type={"text"}
            placeholder="Your Product Description"
            id="description"
            className="text-sm border-2 bg-slate-200 my-1 p-1"
            {...register("info", {
              required: true,
            })}
          />
        </div>

        <input
          className="mb-20 shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
          type="submit"
          value={"Add Product"}
        />
      </form>
    </>
  );
};

export default AddProduct;
