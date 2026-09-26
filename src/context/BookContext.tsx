'use client'

import { createContext, ReactNode, useState } from 'react';


export const BookContext = createContext({});



const BookProvider = ({children}: {children: React.ReactNode}) => {

const [readBooks, setReadBooks] = useState([]);
const [wishList, setWishList] = useState([]);

const sharedData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
}
    return <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>


};

export default BookProvider;