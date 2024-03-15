import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function MovieSlider() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ee4f8727d85b0242c3871ddae6ad3c55&language=en"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);


  return (
    <div className="">
      <Navbar className="absolute inset-0"/>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={4}
          infiniteLoop={true}
          showStatus={false}
        >
          

          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
    
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="Movie"
                />
              </div>
              <div className="posterImage__overlay absolute top-1/2  left-0 w-1/2 bg-black/80 leading-loose ">
                <div className="posterImage__title text-6xl p-4"> 
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime text-3xl p-4">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating text-2xl">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
