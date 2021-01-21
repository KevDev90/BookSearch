import React from 'react';
import Book from '../book/Book';

export default function BookList(props) {
    const books = props.books.map(book=> {
       return (
            <Book 
                key={book.id}
                bookId={book.id}
                bookTitle={book.volumeInfo.title}
                bookAuthor={book.volumeInfo.authors}
                bookDesc={book.volumeInfo.description}
                bookImg={book.volumeInfo.imageLinks.thumbnail}
            />
       )
            
    });
    
    return (
        <div>
        <ul>
            <li>
              {books}
            </li>
        </ul>
        </div>  
    )
}

 BookList.defaultProps = {
    books: [],
 }