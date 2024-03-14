import React, { useState } from 'react';
import FetchSearchResults from './FetchSearchResults';
import styles from "../searchInput/index.module.css"

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Fetch search results based on the search query and type (movies, persons, companies)
      const results = await FetchSearchResults('movies', searchQuery); // Adjust the search type as needed
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies, persons, company, etc.."
      />

      {/* Display search results */}
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
























// import React from 'react';
// import styles from '../searchInput/index.module.css'


// const HeroSearchBar = () => {
//   return (
//     <>
//       <div className="heroBanner">

//         <div className='flex '>
//           <input type="text" name="search" placeholder="Search movies, persons, company, etc.." className={styles.input}></input>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSearchBar;

