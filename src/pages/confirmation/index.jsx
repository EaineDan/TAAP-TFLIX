import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <div className="absolute left-0 top-0 mt-10 ml-16">
          <h1 className="text-6xl text-red-500 font-bold">TFLIX</h1>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center text-3xl leading-loose my-30">
        <div className="text-center">
          Your payment has been successfully received. 
          <p>Congratulations on your monthly subscription.</p>
          <p>Enjoy your movies!</p>
        </div>
        <FaCheckCircle className="text-pink-500 text-5xl mt-4" />
      </div>
    </div>
    
  )
}

export default ConfirmationPage;