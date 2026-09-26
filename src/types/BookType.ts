 type Book = {
  bookId?: number;
  image: string;
  bookName: string;
  category: string;
  rating: number;
  author: string;
  review: string;
  tags: string[];
  totalPages: number;
  yearOfPublishing: number;
};

export default Book;