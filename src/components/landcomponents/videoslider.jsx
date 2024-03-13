import React, { useState, useEffect } from "react";

const MovieSlider = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handlePlayTrailer = (key) => {
    // Open modal or navigate to a new page to play the trailer
    console.log("Playing trailer with key:", key);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-full h-full relative rounded-lg overflow-hidden"
            style={{ minWidth: "250px", maxWidth: "500px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {movie?.videos?.results?.length > 0 && (
              <button
                onClick={() => handlePlayTrailer(movie.videos.results[0].key)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors duration-300"
                style={{ zIndex: 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
