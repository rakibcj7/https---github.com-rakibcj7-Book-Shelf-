'use client'

import { BookContext } from "@/context/BookContext";
import React, {useContext} from 'react';


const ReadList = () => {

    const {readBooks, wishList} = useContext(BookContext);
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Read List</h2>
            {readBooks.length === 0 ? (
                <p className="text-gray-600">No books read yet</p>
            ) : (
                <ul className="space-y-4">
                    {readBooks.map((book: any) => (
                        <li key={book.bookId} className="flex items-center gap-4 p-4 border rounded-lg bg-white">
                            <img src={book.image} alt={book.bookName} className="w-20 h-28 object-cover rounded" />
                            <div>
                                <h3 className="font-semibold text-lg">{book.bookName}</h3>
                                <p className="text-gray-600">By {book.author}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReadList;