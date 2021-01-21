import React from 'react';

export default function Book(props) {
    const { bookTitle, bookAuthor, bookImg } = props;
    const title = bookTitle;
    let authors = '';
    if (bookAuthor) {
        authors = props.bookAuthor.map(author => {
            if(typeof author === 'string'){
                return author;
            } 
            return author;
        })
    }
    
    const img = <img src={bookImg} alt='book cover'/>
    
    return (
        <div>
            {img}
            <p>Title: {title}</p>
            <p>Author: {authors}</p>
            <button>Details</button>
        </div>
    )
}