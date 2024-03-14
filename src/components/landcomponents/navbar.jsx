import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ee4f8727d85b0242c3871ddae6ad3c55&query=${searchQuery}`
      );
      setSearchResults(response.data.results);
      setSearchQuery("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="fixed w-full top-0 bg-black text-white py-4 px-6 hover:cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <span className="text-pink-500 text-4xl font-mono">TFLIX</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center justify-between text-lg">
            <div className="mr-5">
              <Link to="/movielist">
                <span className="hover:text-pink-500">Movies</span>
              </Link>
            </div>
            <div className="mr-5">
              <Link to="/tvseries">
                <span className="hover:text-pink-500">TV Series</span>
              </Link>
            </div>
            <div className="mr-5">
              <Link to="/pricing">
                <span className="hover:text-pink-500">Pricing</span>
              </Link>
            </div>
            <div className="bg-gray-600 py-2 px-4 rounded-md flex items-center">
              <input
                type="text"
                placeholder="Search Movies..."
                className="w-full bg-transparent focus:outline-none text-white h-8"
                style={{ padding: "6px", border: "none" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="text-white ml-2 focus:outline-none"
                onClick={handleSearch}
              >
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
          <div className="hidden md:block ml-5">
            <Link to="/signin">
              <button className="bg-pink-600 text-white rounded hover:bg-purple-500 px-3 py-2">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/movielist" onClick={toggleMenu}>
            <span className="block py-2">Movies</span>
          </Link>
          <Link to="/tvseries" onClick={toggleMenu}>
            <span className="block py-2">TV Series</span>
          </Link>
          <Link to="/pricing" onClick={toggleMenu}>
            <span className="block py-2">Pricing</span>
          </Link>
          <Link to="/signin" onClick={toggleMenu}>
            <button className="bg-pink-600 text-white rounded hover:bg-purple-500 px-3 py-2 mt-2">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}