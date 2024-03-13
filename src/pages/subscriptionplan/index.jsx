//

import React from "react";
import './subscription.css'

const SubscriptionPlan = () => {
  return (
    <div className="relative bg-gray-800 min-h-screen flex items-center subby ">
      <div className="w-lg mx-auto mt-8 flex justify-center opacity-90 ">
        <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">Basic</h2>
            <div className="mb-4">
              <p className="text-3xl font-bold">Ghc24</p>
              <p className="text-gray-500 text-sm">/month</p>
            </div>
            <ul className="text-sm text-gray-600">
              <li className="flex items-center mb-2">
                <span className="mr-2">limited downloads</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">Up to 3,000 subscribers</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">Up to 300 movies</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 py-4 px-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-xs bg-white shadow-md rounded-md overflow-hidden mx-2">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>
            <div className="mb-4">
              <p className="text-3xl font-bold">Ghc50</p>
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
            </ul>
          </div>
          <div className="bg-gray-100 py-4 px-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex-1 w-lg bg-white shadow-md rounded-md overflow-hidden mx-2">
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
              {/* <li className="flex items-center mb-2">
                <span className="mr-2">No Ads</span>
              </li> */}
            </ul>
          </div>
          <div className="bg-gray-100 py-4 px-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
