import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import UseTitle from "../../Hooks/UseTitle";
import Loading from "../Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // ========= Loading ============
  if (loading) {
    return <Loading />;
  }

  // ========= Error ============
  if (error) {
    if (error.code === "auth/user-not-found") {
      toast.error("User Not Found !");
    } else if (error.code === "auth/wrong-password") {
      toast.error("Password is Wrong !. ");
    }
  }

  if (user) {
    fetch("https://tranquil-hamlet-69916.herokuapp.com/login/", {
      method: "POST",
      body: JSON.stringify({
        email: user.user.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.Email, data.Password);
    reset();
  };

  return (
    <>
      <UseTitle title={"Login"} />
      <div className=" pb-10 mt-16 ">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-indigo-400">
          LOGIN
        </h1>
        <div className=" w-36 h-1 bg-indigo-400 mx-auto rounded-lg" />
      </div>

      <div className="mb-20 p-5 rounded-md shadow-lg mx-5 ">
        <form
          className=" sm:w-2/6 w-5/6 mx-auto flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type={"email"}
              placeholder="Your Email"
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

          <div className="mb-4 flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="relative flex">
              <input
                type={`${!showPass ? "password" : "text"}`}
                placeholder="Your Password"
                id="password"
                className="w-full text-sm border-2 bg-slate-200 my-1 p-1"
                {...register("Password", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
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
            {errors.Password?.type === "required" && (
              <p className="text-sm text-red-400">
                * Please Input Your PassWord
              </p>
            )}
            {errors.Password?.type === "pattern" && (
              <ul className="text-sm text-red-400">
                <p>* Password Must Be Contain With</p>
                <li>A-Z</li>
                <li>a-z</li>
                <li>Special Character</li>
                <li>Numeric Character</li>
              </ul>
            )}
          </div>

          <input
            className="shadow mx-auto w-2/6 rounded bg-indigo-400 text-white hover:bg-indigo-300 my-1 p-1"
            type="submit"
            value={"Login"}
          />
        </form>
        <div className="mb-5 items-center mt-5 w-4/6 mx-auto flex justify-center ">
          <p
            onClick={() => navigate("/reset_pass")}
            className="font-bold hover:text-sky-400 duration-300 hover:no-underline mr-5 text-sky-600 underline cursor-pointer"
          >
            Forgot Password?
          </p>
          <p
            onClick={() => navigate("/signup")}
            className="font-bold hover:text-sky-400 duration-300 hover:no-underline ml-5 text-sky-600 underline cursor-pointer"
          >
            Don't have an Account?
          </p>
        </div>
        <SocialLogin />
      </div>
    </>
  );
};

export default Login;
