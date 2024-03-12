


export default function Popular() {
  return (
    <div
      className="flex-shrink-0 mx-5 bg-white shadow-md overflow-hidden rounded-xl"
      style={{ width: "250px", height: "400px" }}
    >
      <h2 className="font-bold py-2">Popular Movies</h2>
      <div className="bg-gray-400 rounded-lg shadow-lg p-2 flex flex-col justify-between h-full">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
      </div>
      <div className="px-4 py-2">Card content goes here.</div>
      <div className="px-4 py-2 flex justify-end">
      </div>
    </div>
  );
}
