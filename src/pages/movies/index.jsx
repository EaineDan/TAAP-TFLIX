import React, { useState } from "react";
import Trending from "../../components/movieSections/trending/Trending";
import MovieListTabBar from "../../components/tabs/MovieListTab";
import NowPlaying from "../../components/movieSections/movieLists/NowPlaying";
import Popular from "../../components/movieSections/movieLists/Popular";
import TopRated from "../../components/movieSections/movieLists/TopRated";
import Upcoming from "../../components/movieSections/movieLists/Upcoming";
import DiscoverMovies from "../../components/movieSections/movieLists/DiscoverMovies";
import MovieListHeader from "../../components/movieSections/movieLists/header/MovieListHeader";
import SearchResults from "../../components/searchInput/SearchResults";




const Movies = () => {
    const [activeTab, setActiveTab] = useState('now_playing')

    return (
        // Main container for the movies page
        <>
            <MovieListHeader />
            <div className="ml-32 px-8 ps-5 mt-12">
                <SearchResults />
            </div>
            {/* <HeroSearchBar /> */}
            <main className="container mx-auto mt-20 px-20">
                {/* Section for trending movies */}
                <section className="bg-gray-100">
                    {/* <MovieTrailer /> */}
                </section>
                < section className="bg-gray-100">
                    < DiscoverMovies />
                </section >
                {/* Add other sections for Popular, Top rated, Best Trailers, and Free to watch movies here */}
                < section className="mt-10 bg-gray-100">
                    <Trending />
                </section >
                < section className="mt-10 bg-gray-100">
                    <MovieListTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === 'now_playing' && <NowPlaying />}
                    {activeTab === 'popular' && <Popular />}
                    {activeTab === 'top_rated' && <TopRated />}
                    {activeTab === 'upcoming' && <Upcoming />}
                </section >
            </main >
        </>

    );
};

export default Movies;