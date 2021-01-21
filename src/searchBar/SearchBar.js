import React from 'react';

export default function SearchBar(props) {
    
    return(
        <div>
            <label htmlFor='searchTerm'>SEARCH</label>
            <input
                name='searchTerm'
                type='text'
                placeholder='enter search term'
                value={props.searchTerm}
                onChange={e => props.handleSearchTerm(e.target.value)}>
                </input>
                <button onClick={() => props.updateSearchResults()}>SEARCH</button>
        </div>
    )
    
}