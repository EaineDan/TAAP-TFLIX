import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-purple-700 to-pink-600 text-white bg-cover">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="my-5 flex flex-col items-center">
          <span className="text-white font-bold mb-2 p-5 text-2xl">Follow Us</span>
          <div className="flex justify-center md:justify-between">
            <FaFacebook className="text-blue-500 text-2xl" />
            <FaTwitter className="text-blue-400 ml-4 text-2xl" />
            <FaInstagram className="text-purple-500 ml-4 text-2xl" />
            <FaYoutube className="text-red-500 ml-4 text-2xl"/>
          </div>
          <img className="logo_pic" src={logo} alt="logo" />
        </div>
        <div className="my-10 leading-loose p-5">
          <p className="font-bold text-lg">Company</p>
          <ul >
            <li>Meet the Team</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="my-10 leading-loose p-5">
          <p className="font-bold text-lg">Movie List</p>
          <ul>
            <li><Link to="/movielist">Newest Releases</Link></li>
            <li><Link to="/movielist">Top Rated</Link></li>
            <li><Link to="/movielist">Popular</Link></li>
            <li><Link to="/movielist">Upcoming</Link></li>
          </ul>
        </div>
        <div className="my-10 leading-loose p-5">
          <p className="font-bold text-lg">Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li><Link to="/subscription">Subscription plan</Link></li>
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
