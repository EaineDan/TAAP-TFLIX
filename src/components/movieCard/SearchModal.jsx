import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSearchBar from '../searchInput/SearchBar';
import MovieCard from './MovieCard';

const SearchModal = ({ onClose }) => {
    const BASE_URL = "https://api.themoviedb.org/3";
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async (type) => {
        setSelectedType(type);

        const endpoint = type === 'company'
            ? `${BASE_URL}/search/company`
            : type === 'movie'
                ? `${BASE_URL}/movie`
                : type === 'multi'
                    ? `${BASE_URL}/multi`
                    : type === 'person'
                        ? `${BASE_URL}/person`
                        : type === 'tv'
                            ? `${BASE_URL}/tv`
                            : '';
        try {
            const response = await axios.get(`${endpoint}?searchTerm=${searchTerm}`);
            setSearchResults(response.data.results);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        onClose();
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSearch(selectedType);
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedType]);

    return (
        <>
            <HeroSearchBar SearchTerm={searchTerm} onInputChange={handleInputChange} />

            {/* Render search type buttons and handleSearch function here */}
            {/* ... */}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeModal}>
                            Close
                        </button>
                        <div className="cards-container">
                            {searchResults.map((item) => (
                                <div key={item.id} className="card">
                                    <MovieCard />
                                    {/* Render card content here */}
                                    {/* ... */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchModal;