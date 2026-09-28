import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Book Vibe</h3>
            <p className="text-gray-600 text-sm">Discover your next favorite book. Curated recommendations for every reader.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/listedbooks" className="hover:text-gray-900">All Books</Link></li>
              <li><Link href="/ReadList" className="hover:text-gray-900">Read List</Link></li>
              <li><Link href="/WishList" className="hover:text-gray-900">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Fiction</li>
              <li>Classic</li>
              <li>Fantasy</li>
              <li>Mystery</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Goodreads</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;