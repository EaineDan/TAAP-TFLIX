import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="fixed w-full top-0 bg-black text-white flex justify-evenly h-15 py-3 hover:text-pink-500 hover:cursor-pointer">
      <span className="text-pink-500">TFLIX</span>
      <Link to="/"><span>Home</span></Link>
      <Link to="/movielist"><span>Movies</span></Link>
      <Link to="/movielist"><span>TV Series</span></Link>
      <Link to="/pricing"><span>Pricing</span></Link>
      <input
        type="text"
        placeholder="Search movies..."
        className="px-2 py-1 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
      />
      <Link to="/signin"><button
        className="bg-pink-600 text-white rounded hover:bg-purple-500"
        style={{ width: "70px", height: "30px" }}
      >
        Sign in
      </button>
      </Link>
    </div>
  );
}
