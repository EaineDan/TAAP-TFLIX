import React, { useEffect, useState } from "react";


const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // Track current page number

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=ee4f8727d85b0242c3871ddae6ad3c55&page=2`
        );
        const json = await response.json();
        setMovies((prevMovies) =>
          page > 1 ? [...prevMovies, ...json.results] : json.results
        );
      } catch (error) {
        console.error("Error fetching new released movie data:", error);
      }
    };

    fetchUpcomingMovies();

    
    return () => {
      
    };
  }, [page]);

  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md overflow-hidden rounded-xl">
      <h2 className="font-bold p-4 text-3xl font-sans cursor-pointer">Upcoming</h2>
      <div className="flex overflow-x-auto">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 mr-4"
            style={{ width: "250px", height: "400px" }}
          >
            <div className="max-w-xs bg-gray-100 rounded-lg overflow-hidden h-full transition-transform duration-400 hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4 h-1/4 flex flex-col justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-2">
        <button
          onClick={handleSeeMore}
          className="bg-purple-700 text-white rounded font-bold px-4 py-2 hover:bg-pink-600"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
