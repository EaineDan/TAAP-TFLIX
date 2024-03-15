import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DiscoverMovieCard from "../../movieCard/DiscoverMovieCard";

const DiscoverMovies = () => {
    // Define the API URL
    const BASE_URL = "https://api.themoviedb.org/3";
    // State to store the fetched movies
    const [movies, setMovies] = useState([]);

    // Function to fetch movies from the API
    const fetchMovies = async () => {
        try {
            // Send GET request to the API
            const response = await axios.get(`${BASE_URL}/discover/movie/?language=en-US&page=6`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            // Set the fetched movies in state
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    // Fetch movies when the component mounts
    useEffect(() => {
        fetchMovies();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <>
            <h2 className="text-lg font-semibold text-gray-800 mr-4 ml-12 px-6">Discover Movies</h2>
            {/* Container for trending movies with horizontal scroll */}
            <div className="flex overflow-x-auto">
                <Slider {...settings} className="w-full">
                    {/* Map through the movies array to display each movie card */}
                    {movies.map(movie => (
                        <div key={movie.id} className="p-2">
                            <DiscoverMovieCard movie={movie} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default DiscoverMovies;