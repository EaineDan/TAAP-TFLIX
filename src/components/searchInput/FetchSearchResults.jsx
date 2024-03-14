import axios from 'axios';

const FetchSearchResults = async (searchType, searchQuery) => {
    try {
        const apiUrl =
            searchType === 'movies'
                ? 'https://api.themoviedb.org/3/search/movie'
                : searchType === 'persons'
                    ? 'https://api.themoviedb.org/3/search/person'
                    : searchType === 'companies'
                        ? 'https://api.themoviedb.org/3/search/company'
                        : 'https://api.themoviedb.org/3/search/movie'; // Default to movie search

        const response = await axios.get(apiUrl, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                query: searchQuery,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};

export default FetchSearchResults;
