import React from 'react';
import Image from 'next/image';
import logo from '@/assets/book.ico';
import Link from 'next/link'

const navbar = () => {
  return (

    <nav className='bg-base-100 shadow-sm'>
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Book Vibes logo" width={40} height={40} />
          <a className="btn btn-ghost text-xl">Book VIbes</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex gap-2">
        <ul className="menu menu-horizontal px-1">
        <div className="flex gap-2">
         <Link href='/listedbooks'>Books</Link>
         <Link href='/ReadList'>Read list</Link>
         <Link href='/WishList'>Wishlist</Link>
         </div>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-success">Sign In</a>
        <a className="btn btn-error">Sign Up</a>
      </div>
    </div>
    </nav>
  );
};

export default navbar;