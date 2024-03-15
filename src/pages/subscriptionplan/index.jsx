import React from "react";
import "./subscription.css";
import Footer from "../../components/landcomponents/footer";
import Navbar from "../../components/landcomponents/navbar";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubscriptionPlan = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gray-800 min-h-screen flex items-center subby ">
        <div className="w-lg mx-auto mt-8 flex justify-center opacity-90">
          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105 card">
            <div className="px-6 py-8 hover:text-black hover:shadow-pink-500">
              <h2 className="text-3xl font-bold mb-4">Basic</h2>
              <div className="mb-4">
                <p className="text-2xl font-bold">Ghc30</p>
                <p className="text-gray-500 text-lg">/month</p>
              </div>
              <ul className="text-lg text-gray-600">
                <li className="flex items-center mb-2 ">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Limited downloads</span>
                </li>
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Up to 50 movies</span>
                </li>
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Contains ads</span>
                </li>
              </ul>
            </div>
            <Link to="/billing"><div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-50">
                Subscribe
              </button>
            </div></Link>
          </div>

          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105 card">
            <div className="px-6 py-8">
              <h2 className="text-3xl font-bold mb-4">Standard</h2>
              <div className="mb-4">
                <p className="text-2xl font-bold">Ghc60</p>
                <p className="text-gray-500 text-lg">/month</p>
              </div>
              <ul className="text-lg text-gray-600">
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/>  <span className="mr-2">Limited downloads</span>
                </li>
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Up to 100 movies</span>
                </li>
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/>  <span className="mr-2">Contains ads</span>
                </li>
              </ul>
            </div>
            <Link to="/billing"><div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-50">
                Subscribe
              </button>
            </div></Link>
          </div>

          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105 card">
            <div className="px-6 py-8">
              <h2 className="text-3xl font-bold mb-4">Premium</h2>
              <div className="mb-4">
                <p className="text-2xl font-bold">Ghc80</p>
                <p className="text-gray-500 text-lg">/month</p>
              </div>
              <ul className="text-lg text-gray-600">
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Limited downloads</span>
                </li>
                <li className="flex items-center mb-2 ">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Up to 100 movies</span>
                </li>
                <li className="flex items-center mb-2 ">
                <FaCheck className="text-pink-500 mr-4"/>  <span className="mr-2">No ads</span>
                </li>
              </ul>
            </div>
            <Link to="/billing"><div className="bg-gray-100 py-4 px-6">
              <button
                className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-50"
              >
                Subscribe
              </button>
            </div></Link>
          </div>

          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105 card">
            <div className="px-6 py-8">
              <h2 className="text-3xl font-bold mb-4">Premium +</h2>
              <div className="mb-4">
                <p className="text-2xl font-bold">Ghc100</p>
                <p className="text-gray-500 text-lg">/month</p>
              </div>
              <ul className="text-lg text-gray-600">
                <li className="flex items-center mb-2 ">
                <FaCheck className="text-pink-500 mr-4"/>  <span className="mr-2">Limited downloads</span>
                </li>
                <li className="flex items-center mb-2 ">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">Up to 100 movies</span>
                </li>
                <li className="flex items-center mb-2">
                <FaCheck className="text-pink-500 mr-4"/> <span className="mr-2">No ads</span>
                </li>
              </ul>
            </div>
            <Link to="/billing"><div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-50">
                Subscribe
              </button>
            </div></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPlan;
