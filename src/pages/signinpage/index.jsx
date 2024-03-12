import React from "react";

const SignInForm = () => {
  return (
    <div className="relative bg-gray-800 min-h-screen flex items-center">

      <div className="p-4 max-w-lg mx-auto mt-8  bg-white bg-opacity-80 rounded-lg shadow-md m1-4 ">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-gray-700 text-center">
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
