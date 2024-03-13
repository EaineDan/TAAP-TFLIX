import React from "react";
import logo from "../../assets/images/logo.png";
import './index.css';



const Footer = () => {
  return (
    <div
      className="bg-gradient-to-r from-black via-purple-700 to-pink-600 text-white hover:cursor-pointer bg-cover"
      
    >
      <div className="flex justify-evenly">
        <div className="my-10 flex flex-col items-center">
          <span className="text-white font-bold mb-2 p-5">Follow Us</span>
          <img className="logo_pic" src={logo} alt="logo"/>
        </div>
        <div className="my-10 leading-loose p-5">
          <p className="font-bold">Company</p>
          <ul>
            <li>Meet the Team</li>
            <li>Reviews</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="my-10 leading-loose p-5">
          <p className="font-bold">Links</p>
          <ul>
            <li>Movie List</li>
            <li>Top Rated</li>
            <li>Popular</li>
            <li>Trending</li>
          </ul>
        </div>
        <div className="my-10 leading-loose p-5">
          <p className="font-bold">Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Subscription plan</li>
          </ul>
        </div>
      </div>
      <p className="flex justify-center py-3 text-gray-300">
        Copyright &#169; 2024 Tflix Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
