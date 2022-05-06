import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../Loading";

const ResetPass = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // ========= Loading =========
  if (sending) {
    return <Loading />;
  }

  // ========= Error =========
  if (error) toast.error("User Not Found !");

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.Email);
    toast.success("Check Your Email");
  };

  return (
    <>
      <UseTitle title={"Reset Password"} />
      <div className=" pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          RESET PASSWORD
        </h1>
        <div className=" w-36 h-1 bg-indigo-400 mx-auto rounded-lg" />
      </div>

      <div className="mb-20 p-5 rounded-md shadow-lg mx-5 ">
        <form
          className=" sm:w-2/6 w-5/6 mx-auto flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col">
            <label htmlFor="email">Your Email</label>
            <input
              type={"email"}
              placeholder="Input Your Email"
              id="email"
              className="text-sm border-2 bg-slate-200 my-1 p-1"
              {...register("Email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.Email?.type === "required" && (
              <p className="text-sm text-red-400">* Please Input Your Email</p>
            )}
            {errors.Email?.type === "pattern" && (
              <p className="text-sm text-red-400">
                * Example: <span className="font-bold">xyz@mail.com</span>
              </p>
            )}
          </div>
          <input
            className={`bg-indigo-400 hover:bg-indigo-300"
            } shadow mx-auto w-2/6 rounded  text-white my-1 p-1`}
            type="submit"
            value={"RESET"}
          />
        </form>
        <div className="mt-5 mb-10 text-center">
          <p
            onClick={() => navigate("/login")}
            className="inline  font-bold hover:text-sky-400 duration-300 hover:no-underline text-sky-600 underline cursor-pointer"
          >
            Remember Password?
          </p>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
