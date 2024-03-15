import React from 'react'
import { Link } from 'react-router-dom';

const WatchListHeader = () => {
    return (
        <>
            <div className="watchContainer flex flex space-between bg-gray-700 text-white">
                <Link to={'/movies/whatchlist'}><h2>My Watchlist</h2></Link>
                <div className="list">
                    <Link to={'/movies/watchlist'}><span>Watchlists</span></Link>
                    <Link to={'/watchlist/watched'}><span>Watched</span></Link>
                    <Link to={'/watchlist/add'}><span><button>+ADD</button></span></Link>

                </div>
            </div>
        </>
    )
}

export default WatchListHeader;