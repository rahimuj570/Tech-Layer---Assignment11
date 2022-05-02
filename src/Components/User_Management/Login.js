import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-slate-700">
          LOGIN
        </h1>
        <div className=" w-36 h-1 bg-slate-700 mx-auto rounded-lg" />
      </div>

      <form
        className="mb-20 sm:w-2/6 w-5/6 mx-auto flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Your Email"
            id="email"
            className="text-sm border-2 bg-slate-200 my-1 p-1"
            {...register("firstName", { required: true })}
          />
          {errors.firstName?.type === "required" && (
            <p className="text-sm text-red-400">* Please Input Your Email</p>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="password">Password</label>
          <div className="relative flex">
            <input
              type={`${!showPass ? "password" : "text"}`}
              placeholder="Your Password"
              id="password"
              className="w-full text-sm border-2 bg-slate-200 my-1 p-1"
              {...register("lastName", { required: true })}
            />
            {showPass ? (
              <FiEye
                onClick={() => setShowPass(!showPass)}
                className="right-3 cursor-pointer inset-y-3 absolute"
              />
            ) : (
              <FiEyeOff
                onClick={() => setShowPass(!showPass)}
                className="right-3 cursor-pointer inset-y-3 absolute"
              />
            )}
          </div>
          {errors.lastName && (
            <p className="text-sm text-red-400">* Please Input Your Password</p>
          )}
        </div>

        <input
          className="shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
          type="submit"
          value={"Login"}
        />
      </form>
    </>
  );
};

export default Login;
