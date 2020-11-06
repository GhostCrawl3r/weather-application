import React from 'react';

const SearchBox = ({setQuery, query, search}) => {
    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Enter a location, example: London or a specific location, example: New York, US"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    )
}

export default SearchBox;
