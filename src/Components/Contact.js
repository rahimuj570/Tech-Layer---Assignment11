import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div className="pb-20 bg-fuchsia-400">
      <div className=" pb-10  bg-fuchsia-400 pt-20">
        <h1 className="pb-2 text-4xl text-center font-extrabold text-white">
          Contact US
        </h1>
        <div className=" w-36 h-1 bg-white mx-auto" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("We Will Contact You Soon...");
          e.target.reset();
        }}
        className="flex flex-col w-4/6 mx-auto"
      >
        <input
          required
          className="my-2 p-2 rounded w-full"
          type="text"
          placeholder="Your Name"
        />
        <input
          required
          className="my-2 p-2 rounded w-full"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          required
          className="my-2 p-2 rounded w-full"
          type="text"
          placeholder="Your Message"
        />
        <input
          className="my-2 p-2 rounded shadow-lg bg-white w-1/6 mx-auto hover:text-fuchsia-500 text-base font-semibold duration-300 hover:border-indigo-500 border-2"
          type="submit"
          value={"SEND"}
        />
      </form>
    </div>
  );
};

export default Contact;
