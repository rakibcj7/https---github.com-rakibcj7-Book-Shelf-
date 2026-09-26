import booksData from "../../../../public/booksData.json";
import Type from "@/types/BookType";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const book = booksData.find(
    (b: Type) => b.bookId === Number(id)
  );

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-200">
        <figure className="lg:w-2/5 bg-base-200 p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={300}
            className="max-h-[500px] w-auto rounded-lg object-cover shadow-lg"
          />
        </figure>

        <div className="card-body lg:w-3/5 p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-primary">
              {book.category}
            </span>

            <span className="badge badge-outline">
              {book.yearOfPublishing}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold lg:text-4xl">
            {book.bookName}
          </h1>

          <p className="text-lg text-base-content/60">
            by{" "}
            <span className="font-medium text-base-content">
              {book.author}
            </span>
          </p>

          <div className="mt-4 flex items-center gap-6">
            <div>
              <p className="text-sm text-base-content/50">Rating</p>
              <p className="text-xl font-semibold">
                ⭐ {book.rating}
              </p>
            </div>

            <div className="h-8 w-px bg-base-300" />

            <div>
              <p className="text-sm text-base-content/50">Pages</p>
              <p className="text-xl font-semibold">
                {book.totalPages}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-lg font-semibold">Review</h2>
            <p className="leading-7 text-base-content/70">
              {book.review}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span key={tag} className="badge badge-outline">
                #{tag}
              </span>
            ))}
          </div>

          <div className="card-actions mt-8">
            <button className="btn btn-primary px-8">
              Listen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;