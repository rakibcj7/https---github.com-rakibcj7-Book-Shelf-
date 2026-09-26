import React from 'react'
import Image from 'next/image'
import Type from '@/types/BookType'
import Link from 'next/link'



const BookCard = ({ book }: { book: Type }) => {
  return (
    <article className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative aspect-[3/4] w-full bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Category + Rating */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {book.category}
          </span>

          <span className="text-sm font-medium text-gray-700">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          By {book.author}
        </p>

        {/* Review */}
        <p className="mt-3 line-clamp-3 text-sm leading-5 text-gray-600">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-sm font-semibold text-gray-800">
              {book.totalPages}
            </p>
            <p className="text-xs text-gray-500">
              Pages
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
            <p className="text-xs text-gray-500">
              Published
            </p>
          </div>

        </div>

        {/* Button */}
<Link href={`/books/${book.bookId}`} className="mt-4 w-full block rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white text-center transition hover:bg-gray-700">
  View Details
</Link>
      
       
   

      </div>
    </article>
  );
};

export default BookCard;