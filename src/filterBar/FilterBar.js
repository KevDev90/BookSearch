import React from 'react';

export default function FilterBar(props) {
   
    return(
        <div>
            <form>
                <label htmlFor='filter-by-print'>Select print type</label>
                <select onChange={e => props.handlePrintType(e.target.value)} >
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
            </form>
            <form>
                <label htmlFor='filter-by-book-type'>Select book type</label>
                <select onChange={e => props.handleBookType(e.target.value)} >
                    <option value='noFilter'>No Filter</option>
                    <option value='partial'>Partial Preview</option>
                    <option value='full'>Full Preview</option>
                    <option value='ebooks'>E-Books</option>
                    <option value='free-ebooks'>Free E-Books</option>
                    <option value='paid-ebooks'>Paid E-Books</option>
                </select>
            </form>
        </div>
    )
    
}