//

import React from "react";
import './subscription.css';
import Footer from "../../components/landcomponents/footer"
import Navbar from "../../components/landcomponents/navbar";

const SubscriptionPlan = () => {
  return (
    <div>
      <Navbar/>
      <h2 className="text-white justify-center font-bold">
        Select any of our subscription packages and enjoy unlimited downloads
        and streams
      </h2>
      <div className="relative bg-gray-800 min-h-screen flex items-center subby  ">
        <div className="w-lg mx-auto mt-8 flex justify-center opacity-90 ">
          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105">
            <div className="px-6 py-8 hover:text-black hover:shadow-pink-500">
              <h2 className="text-3xl font-bold mb-4">Basic</h2>
              <div className="mb-4">
                <p className="text-2xl font-bold">Ghc50</p>
                <p className="text-gray-500 text-xl">/month</p>
              </div>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <span className="mr-2">limited downloads</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Up to 3,000 subscribers</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Stream Up to 70 movies</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Contains Ads</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4">Standard</h2>
              <div className="mb-4">
                <p className="text-3xl font-bold">Ghc80</p>
                <p className="text-gray-500 text-sm">/month</p>
              </div>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <span className="mr-2">limited downloads</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Up to 6,000 subscribers</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Stream Up to 100 movies</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Contains Ads</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4">Premium</h2>
              <div className="mb-4">
                <p className="text-3xl font-bold">Ghc100</p>
                <p className="text-gray-500 text-sm">/month</p>
              </div>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <span className="mr-2">limited downloads</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Up to 5,000 subscribers</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Up to 1000 movies</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Contains Ads</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex-1 w-lg bg-white shadow-md rounded-md overflow-hidden mx-2 transition-transform duration-300 hover:scale-105">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold mb-4">Premium++</h2>
              <div className="mb-4">
                <p className="text-3xl font-bold">Ghc99</p>
                <p className="text-gray-500 text-sm">/month</p>
              </div>
              <ul className="text-sm text-gray-600">
                <li className="flex items-center mb-2">
                  <span className="mr-2">Full Access to all movies</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">Unlimited Downloads</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">10,000+ subscribers</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">No Ads</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 py-4 px-6">
              <button className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPlan;
