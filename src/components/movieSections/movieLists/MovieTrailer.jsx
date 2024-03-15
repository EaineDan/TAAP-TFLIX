import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieTrailerCard from "../../movieCard/MovieCard copy";

const MovieTrailer = () => {
    const BASE_URL = "https://api.themoviedb.org/3";
    const [movies, setMovies] = useState([]);

    const fetchMoviesAndTrailers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/discover/movie?language=en-US&page=6`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            const moviesData = response.data.results;

            const updatedMovies = await Promise.all(
                moviesData.map(async (movie) => {
                    const trailersResponse = await axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
                        params: {
                            api_key: process.env.REACT_APP_MOVIE_API_KEY
                        }
                    });
                    const trailers = trailersResponse.data.results;
                    return {
                        ...movie,
                        trailers
                    };
                })
            );

            setMovies(updatedMovies);
        } catch (error) {
            console.error("Error fetching movies and trailers:", error);
        }
    };

    useEffect(() => {
        fetchMoviesAndTrailers();
    }, []);

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4 ml-5 text-gray-500">Movie Trailers</h2>
            <div className="flex flex-wrap">
                {movies.map((movie) => (
                    <div key={movie.id} className="p-2">
                        <MovieTrailerCard movie={movie} />
                        {movie.trailers && (
                            <div className="mt-2">
                                {movie.trailers.map((trailer) => (
                                    <div key={trailer.id}>
                                        <h4>{trailer.name}</h4>
                                        <div className="relative aspect-w-16 aspect-h-9">
                                            <iframe
                                                title={trailer.name}
                                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                                className="absolute top-0 left-0 w-full h-full"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MovieTrailer;