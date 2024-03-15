import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.vanas.ca/images/blog/vfx-visual-effects-vanas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div
          className={`p-4 max-w-lg mx-auto bg-gray-800 bg-opacity-80 rounded-xl shadow-md m1-4  ${
            isOpen ? "" : "hidden"
          }`}
        >
          <Link to="/">
            <div className="flex items-center justify-end">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 cursor-pointer"
                onClick={handleClose}
              >
                <FaTimes className="text-white" />
              </div>
            </div>
          </Link>
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Sign In
          </h2>
          <form>
            <div className="p-6">
              <label
                htmlFor="username"
                className="block text-gray-100 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
              />
            </div>
            <div className="p-6 mb-4">
              <label
                htmlFor="password"
                className="block text-gray-100 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
              />
            </div>
            <div className="mb-6 text-center">
              <Link to="/movielist">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
          <p className="text-gray-100 text-center">
            New user?{" "}
            <a href="/signup" className="text-blue-500">
              Sign up here
            </a>
          </p>
        </div>
      </div>
      <Link to="/"><div className="absolute left-0 top-0 mt-10 ml-16">
        <h1 className="text-6xl text-red-500 font-bold">TFLIX</h1>
      </div></Link>
    </div>
  );
};

export default SignInForm;