
import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center overflow-hidden rounded-3xl bg-slate-100 shadow-lg md:grid-cols-2">
        
        {/* Text */}
        <div className="space-y-6 px-8 py-12 md:px-12 lg:px-16">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Discover your next read
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            Books to freshen up
            <br />
            your bookshelf
          </h2>

          <p className="max-w-md text-base leading-relaxed text-slate-600">
            Find something new to read, explore different stories, and build
            a bookshelf you'll love.
          </p>

          <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg">
            View The Desk
          </button>
        </div>

        {/* Image */}
        <div className="relative h-80 md:h-full md:min-h-[420px]">
          <Image
            src={bannerImg}
            alt="A collection of books"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;

