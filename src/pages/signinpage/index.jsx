import React from "react";


const SignInForm = () => {
  return (
    <div className="relative bg-gray-800 min-h-screen flex items-center sign ">

      <div className="p-4 max-w-lg mx-auto mt-8  bg-black bg-opacity-80 rounded-xl shadow-md m1-4 ">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Sign In</h2>
        <form>
          <div className=" p-6 ">
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
          <div className=" p-6 mb-4">
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            ><a href="/Movielist">Sign In</a>
              
            </button>
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
  );
};

export default SignInForm;
