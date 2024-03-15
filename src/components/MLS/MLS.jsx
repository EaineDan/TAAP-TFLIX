import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MLS = () => {
    const BASE_URL = "https://api.themoviedb.org/3";
    const [mls, setMls] = useState([]);

    const getMovies = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
                params: { api_key: REACT_APP_MOVIE_API_KEY }
            });
            setMls(response.data.results)
        } catch (error) {
            console.log('Sorry cannot get movies', error);
        }

    }
    useEffect(() => {
        getMovies()
    }, []);
    return (
        <div>MLS</div>
    )
}

export default MLS