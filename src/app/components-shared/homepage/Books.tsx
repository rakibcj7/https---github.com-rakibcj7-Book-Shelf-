
import booksData from "../../../../public/booksData.json";
import Type from '@/types/BookType'
import BookCard from '../BookCard'
const books: Type[] = booksData;



const Books = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Books</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.slice(0,4).map((book) => (
            <BookCard key={book.bookId ?? book.bookName} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
