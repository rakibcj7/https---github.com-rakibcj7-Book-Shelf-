'use client'
import Book from '@/types/BookType';
import React, { useContext } from 'react';
import { BookContext } from '@/context/BookContext';

const ReadButton = ({book}: {book: Book}) => {


    const {readBooks, setReadBooks} = useContext(BookContext);
 

    const handleReadBook = ()=>{
        console.log("read button clicked", book)
        setReadBooks([...readBooks, book])
      alert(`you have added ${book.bookName}`)
    }
    return (
      
            <button className="btn btn-primary px-8" onClick={() => handleReadBook()}>
              Read
            </button>
          
    );
};

export default ReadButton;