import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mtn from "../../assets/images/mtn.png";
import voda from "../../assets/images/voda.png";
import paypal from "../../assets/images/paypal.png";
import card from "../../assets/images/card.jpg";



const BillingForm = () => {

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
            className='p-4 max-w-lg mx-auto bg-gray-800 bg-opacity-80  rounded-xl shadow-md m1-4'
          >
            <h2 className="text-3xl font-bold mb-4 text-white text-center">
              Billing Form
            </h2>
            <form>
              <div className="p-6">
                <label
                  htmlFor="country"
                  className="block text-white font-medium mb-1"
                >
                  Country
                </label>
                <input
                  type="country"
                  id="country"
                  name="country"
                  className="w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
                />
              </div>
              <div className="p-6 mb-4">
                <label
                  htmlFor="phonenumber"
                  className="block text-white font-medium mb-1"
                >
                  Phone number
                </label>
                <input
                  type="phonenumber"
                  id="phonenumber"
                  name="phonenumber"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="paymentMethod"
                  className="block text-white font-medium mb-1 mx-7"
                >
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  className=" w-96 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-transparent bg-black text-white mx-6"
                >
                  <option value="" className='text-black'> Select a payment method</option>
                  <option value="paypal" className='text-black'>PayPal</option>
                  <option value="mtnMobileMoney" className='text-black'>MTN Mobile Money</option>
                  <option value="card" className='text-black'>Card</option>
                  <option value="vodafoneCash" className='text-black'>Vodafone Cash</option>
                </select>
              </div>
              <div className="mb-6 text-center">
                <Link to="/confirmation">
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-pink-500 focus:outline-none focus:bg-blue-600"
                  >
                    Submit
                  </button>
                </Link>
              </div>
              <div className='flex ml-20 items-center'>
              <img className='mr-3 w-10 ' src={mtn} alt='mtn'/>
              <img className='mr-3 w-10' src={voda} alt="voda"/>
              <img className='mr-3 w-10' src={paypal} alt="paypal"/>
              <img className='mr-3 w-10' src={card} alt="card"/>
              </div>
            </form>
          </div>
        </div>
        <Link to="/">
          <div className="absolute left-0 top-0 mt-10 ml-16">
            <h1 className="text-6xl text-red-500 font-bold">TFLIX</h1>
          </div>
        </Link>
      </div>
    );
}

export default BillingForm;