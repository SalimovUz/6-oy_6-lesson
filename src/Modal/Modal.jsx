import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BiSkipNextCircle } from "react-icons/bi";




const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [closeModal, setCloseModal] = useState(true)

  const handleLogin = (e) => {
    e.preventDefault();
    setShowModal(true);
    setCloseModal(false);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
    setCloseModal(true);
  };

  return (
    <div>
      {closeModal && (
        <form className="flex flex-col gap-6">
          <h1 className="text-center text-2xl font-bold text-white">Login</h1>
          <label htmlFor="name">
            <input
              className="px-5 py-3 rounded-lg border w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your username"
            />
          </label>
          <label htmlFor="password">
            <input
              className="px-5 py-3 rounded-lg border w-full"
              type="password"
              name="Password"
              id="password"
              placeholder="Enter your Password"
            />
          </label>
          <button
            onClick={handleLogin}
            className="border rounded-xl px-3 py-2 bg-slate-600 text-white text-xl hover:text-slate-700 hover:font-semibold hover:bg-white transition-all duration-700 flex items-center justify-center gap-2"
          >
            <IoMdLogIn />
            Login
          </button>
        </form>
      )}
      {showModal && (
        <div className="w-full h-full border px-10 py-7 flex flex-col gap-5">
          <h1 className="text-center text-2xl font-semibold">
            Succesfully Login
          </h1>

          <h3 className="text-md text-center font-semibold text-white">
            Select one of the buttons below
          </h3>

          <div className="buttons gap-6 flex mx-auto">
            <button
              onClick={handleClose}
              className="border rounded-xl px-10 py-2 bg-slate-600 text-white text-lg hover:text-slate-700 hover:font-semibold hover:bg-white transition-all duration-700 flex items-center justify-center gap-2"
            >
              <IoCloseCircleOutline />
              Close
            </button>
            <button
              onClick={() => {
                alert("The site is not yet fully operational");
              }}
              className="border rounded-xl px-10 py-2 bg-slate-600 text-white text-lg hover:text-slate-700 hover:font-semibold hover:bg-white transition-all duration-700 flex items-center justify-center gap-2"
            >
              <BiSkipNextCircle />
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
