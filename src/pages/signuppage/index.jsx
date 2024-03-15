import React, {useState} from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const SignUpForm = () => {

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
          className={`p-4 max-w-lg mx-auto bg-gray-800 bg-opacity-80 rounded-xl shadow-md m1-4 ${
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
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Sign Up</h2>
        <div> 
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-gray-100 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="fullname"
              id="fullname"
              name="fullname"
              className="w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500  bg-transparent text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-100 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-100 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phonenumber"
              className="block text-gray-100 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              text="phonenumber"
              id="phonenumber"
              name="phonenumber"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
              required
            />
          </div>

          <div className="text-center">
            <Link to="/movielist"><button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-pink-500 focus:outline-none focus:bg-blue-600"
            >Sign Up{" "}
              
            </button></Link>
          </div>
        </div>
      </div>
      </div>
      <Link to="/"><div className="absolute left-0 top-0 mt-10 ml-16">
        <h1 className="text-6xl text-red-500 font-bold">TFLIX</h1>
      </div></Link>
    </div>
  );
};

export default SignUpForm;
