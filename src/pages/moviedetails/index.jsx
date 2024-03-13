import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                const data = await response.json();
                setMovie(data); // Update state with fetched movie details
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        const fetchMovieReviews = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie reviews');
                }
                const data = await response.json();
                setReviews(data.results); // Update state with fetched reviews
            } catch (error) {
                console.error('Error fetching movie reviews:', error);
            }
        };

        fetchMovieDetails();
        fetchMovieReviews();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className="relative h-screen">
                <img className='absolute inset-0 w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div class="absolute inset-0 bg-black opacity-70"></div>

                {/* Additional image at the left */}
                <div className="absolute inset-0 mb-20 flex items-center">
                    <img className='ml-6 h-3/4 md:w-1/2 rounded-lg shadow-lg max-w-80' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

                </div>
                {/* text area for title, release date, tagline and overview */}
                <div className="absolute left-1/4 top-1/3 ml-20 text-white mr-6 text-left">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <span className="text-lg mb-2 italic">{movie.release_date}</span>
                    <span className="text-lg mb-2 block">{movie.tagline}</span>
                    <span className="text-lg">{movie.overview}</span>
                </div>
            </div>
            {/* Review deatils */}
            <div><h1>Rating</h1></div>

            <div className="container mx-auto mt-8 grid grid-cols-3 gap-4">
                {reviews.map(review => (
                    <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            {review.author_details.avatar_path && (
                                <img src={`https://www.themoviedb.org/t/p/w64_and_h64_face/${review.author_details.avatar_path}`} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                            )}
                            <div className="flex justify-between">
                                <span className="text-sm block">{review.author}</span>
                                <p className="text-sm right-20 text-gray-500 block">Rating: {review.author_details.rating}/10</p>
                            </div>

                        </div>
                        <p className="text-sm h-48 overflow-hidden ">{review.content}</p>

                    </div>
                ))}
            </div>
        </section>
    );
}
