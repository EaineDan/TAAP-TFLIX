import React from "react";
import backgroundImage from "../../assets/images/foot.jpg";



const Footer = () => {
  return (
    <div
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:cursor-pointer my-5 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-evenly">
        <div className="my-5 flex flex-col items-center">
          <span className="text-white font-semibold mb-2">Follow Us</span>
        </div>
        <div className="my-5">
          <p>Company</p>
          <ul>
            <li>Meet the Team</li>
            <li>Reviews</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="my-5">
          <p>Links</p>
          <ul>
            <li>Movie List</li>
            <li>Top Rated</li>
            <li>Popular</li>
            <li>Trending</li>
          </ul>
        </div>
        <div className="my-5">
          <p>Legal</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Subscription plan</li>
          </ul>
        </div>
      </div>
      <p className="flex justify-center py-3 text-gray-200">
        Copyright &#169; 2024 Tflix Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
