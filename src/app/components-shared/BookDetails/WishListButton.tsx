'use client'
import Book from '@/types/BookType';
import React, { useContext } from 'react';
import { BookContext } from '@/context/BookContext';


const WishListButton = ({book}: {book: Book}) => {


    const {wishList, setWishList} = useContext(BookContext);
 

    const handleAddToWishList = ()=>{
       
        setWishList([...wishList, book])
        alert(`you have added ${book.bookName}`)

    }
    return (
      
            <button className="btn btn-primary px-8" onClick={() => handleAddToWishList()}>
              Add to wishlist
            </button>
          
    );
};

export default WishListButton;