
import booksData from "../../../public/booksData.json";
import Type from '@/types/BookType'
import BookCard from '../components-shared/BookCard'
const books: Type[] = booksData;



const ListedBooks = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">All books</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.bookId ?? book.bookName} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
