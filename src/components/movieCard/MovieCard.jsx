import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, id }) => {
    return (
        <div className="flex-shrink-0 mr-4" style={{ width: "100%", maxWidth: "200px", height: "100%" }}>
            <div className="bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col justify-between h-full text-left">
                <Link to={`/movies/${movie.id}`} ><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-t-md object-cover object-center" style={{ aspectRatio: "2/3" }} /></Link>
                <div className="movie-info mt-2">
                    <Link to={`/movies/${movie.id}`}><h2 className="text-lg font-semibold text-gray-300 truncate">{movie.title}</h2></Link>
                    <Link to={`/movies/${movie.id}`}><p className="text-sm text-gray-400">{movie.release_date}</p></Link>
                    {/* <p className="text-sm text-gray-300 truncate">{movie.overview}</p> */}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;