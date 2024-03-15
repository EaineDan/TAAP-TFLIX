import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiscoverMovieCard from "../../movieCard/DiscoverMovieCard";

const DiscoverMovies = () => {
    const BASE_URL = "https://api.themoviedb.org/3";
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/discover/movie?language=en-US&page=6`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY,
                },
            });
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

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
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mr-4 ml-4 px-5 text-40">Discover Movies</h2>
            <div className="flex overflow-x-auto max-w-screen-xl mx-auto">
                <Slider {...settings} className="w-full">
                    {movies.map((movie) => (
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