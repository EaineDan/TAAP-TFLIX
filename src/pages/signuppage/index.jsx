import React from "react";
import './signup.css'
const SignUpForm = () => {
  return (
    <div className="relative bg-gray-800 min-h-screen flex items-center sign ">
      <div className="max-w-xl mx-auto mt-8 p-8 bg-black bg-opacity-80 rounded-xl shadow-md ">
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            ><a href="/subscriptionplan">Next{" "}</a>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
