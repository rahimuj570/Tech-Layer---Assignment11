import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.int";
import Loading from "../Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // ======== Loading =============
  if (loading) {
    return <Loading />;
  }

  // ============ Error =======
  if (error) {
    toast.error("Something Went Wrong!");
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

  return (
    <>
      <div className="mt-10 md:w-2/6 sm:w-3/6 w-5/6 mx-auto flex items-center justify-center">
        <div className="w-4/6 h-1 bg-sky-400"></div>
        <div className="mx-2 text-sky-400 text-4xl">OR</div>
        <div className="w-4/6 h-1 bg-sky-400"></div>
      </div>

      <div className="pb-10 md:w-2/6 sm:w-3/6 smax:w-6/6 mt-5 flex flex-col  mx-auto">
        <div
          onClick={() => signInWithGoogle()}
          className="hover:bg-slate-50 duration-300 py-2 px-1 rounded cursor-pointer shadow flex justify-center  items-center"
        >
          <FcGoogle className="mr-2 basis-10  sm:text-4xl text-2xl" />
          <span className=" smax:text-xl text-2xl font-bold">
            Continue With Google
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
