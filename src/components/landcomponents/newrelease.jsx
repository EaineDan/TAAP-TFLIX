export default function Newrelease(){
    return(
        <div
      className="flex-shrink-0 mx-5 mb-5 bg-white shadow-md overflow-hidden rounded-lg"
      style={{ width: "250px", height: "400px" }}
    >
      <h2 className="font-bold py-2">Newest Releases</h2>
      <div className="bg-gray-400 rounded-lg shadow-lg p-2 flex flex-col justify-between h-full">
        {/* <img src={} alt="" /> */}
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
      </div>
      <div className="px-4 py-2 bg-gray-100">Card content goes here.</div>
      <div className="px-4 py-2 bg-gray-100 flex justify-end">
      </div>
    </div>
    )
}