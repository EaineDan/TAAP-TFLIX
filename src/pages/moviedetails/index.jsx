import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import play from '../../assets/images/play.png';
import Footer from "../../components/landcomponents/footer";

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
                <div className="flex justify-between">
                    {/* Additional image at the left */}
                    <div className="absolute inset-0 mb-20 flex items-center">
                        <img
                            className='hidden sm:block ml-6 h-3/4 md:w-1/2 rounded-lg shadow-lg max-w-80'
                            style={{ boxShadow: '0px 4px 6px rgba(247, 67, 102, 0.5)' }}
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>

                    {/* text area for title, release date, tagline and overview */}
                    <div className="absolute lg:left-1/4 lg:top-1/3 lg:ml-20 lg:mr-6 text-white lg:text-left lg:mx-auto sm:text-sm top-1/3 ml-6 mr-5">
                        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                        <span className="text-lg mb-2 italic">{movie.release_date}</span>
                        <span className="text-lg mb-2 block">{movie.tagline}</span>
                        <span className="text-lg">{movie.overview}</span>
                        
                        {/* the play button */}
                        <div class="mt-4">
                           <Link to="/signin"> <button class="play-button p-2 bg-transparent border-none transition-transform duration-300 hover:scale-110">
                                <img src={play} alt="PLAY NOW" />
                            </button></Link>
                        </div>

                    </div>

                </div>

            </div>
            {/* Review deatils */}
            <div className="p-10">
                <h1 className="font-bold text-center text-3xl">Reviews</h1>
                <div className="container mx-auto mt-8 grid grid-cols-3 gap-4">
                    {reviews.length == 0 && <div className="text-3xl text-center font-bold ">No reviews for this Movie </div>}
                    {reviews.slice(0, 3).map(review => (
                        <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-2">
                                {review.author_details.avatar_path && (
                                    <img src={`https://www.themoviedb.org/t/p/w64_and_h64_face/${review.author_details.avatar_path}`} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                )}
                            </div>
                            <div>
                                <span className="text-sm block ">{review.author}</span>
                                <p className="text-sm text-gray-500 ">Rating: {review.author_details.rating}/10</p>

                            </div>

                            <p className="text-sm h-48 overflow-auto ">{review.content}</p>

                        </div>
                    ))}
                </div>
            </div>
            <Footer/>


        </section>
    );
}
