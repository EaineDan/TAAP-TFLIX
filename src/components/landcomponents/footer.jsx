const Footer = () => {
  return (
    <div className="bg-h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:cursor-pointer my-5">
      <div className="flex justify-evenly">
        <div className="my-5">social media links</div>
        <div className="my-5">
          <p>Company</p>
          <ul>
            <li>Meet the Team</li>
            <li>Reviews</li>
            <li>About</li>
            <li>contact</li>
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
