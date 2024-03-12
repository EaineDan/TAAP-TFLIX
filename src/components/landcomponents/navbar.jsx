export default function Navbar() {
  return (
    <div className="fixed w-full top-0 bg-black text-white flex justify-evenly h-15 py-3 hover:text-pink-500 hover:cursor-pointer">
      <span>logo</span>
      <span className="text-pink-500">TFLIX Movie App</span>
      <span>Home</span>
      <span>Movies</span>
      <span>TV Series</span>
      <span>Pricing</span>
      <button className="bg-pink-500 text-white rounded hover:bg-blue-600" style={{width: "70px", height: "30px"}}>Sign in</button>
    </div>
  );
}
