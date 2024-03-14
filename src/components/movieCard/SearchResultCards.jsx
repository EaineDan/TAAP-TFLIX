import React from 'react';
import MovieCard from './MovieCard'; // Assuming you have a MovieCard component

const SearchResultCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Pass the item as a prop to the MovieCard component */}
      <MovieCard movie={item} />
    </div>
  );
};

export default SearchResultCard;
