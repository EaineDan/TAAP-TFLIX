import React, { useState } from 'react';
import axios from 'axios';
import SearchResultCard from '../movieCard/SearchResultCards';
import styles from "../searchInput/index.module.css"


const SearchResults = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const apiUrl = 'https://api.themoviedb.org/3/search/movie';
            const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

            const response = await axios.get(apiUrl, {
                params: {
                    api_key: apiKey,
                    query: searchQuery,
                },
            });

            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <div className="heroBanner">
                <div className="flex">
                    <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search movies, persons, company, etc.."
                        className={styles.searchinput}
                    />
                </div>
            </div>

            {/* Display search results in a responsive grid */}
         {    <div className={`  ${searchResults.length != 0 && 'p-20 bg-black/80 absolute right-0 w-full top-0  left-0'} mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 `}>
                {searchResults.map((result) => (
                    <div key={result.id} className="bg-gray-100 rounded-lg shadow-lg p-4">
                        <SearchResultCard movie={result} />
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default SearchResults;