"use client";
import { SingleMovieType } from "@/types/movieTypes";
import Image from "next/image";
import Link from "next/link";

export default function WatchListMovieCard({ movie }: SingleMovieType) {
  const starRating = Math.round((movie.vote_average ?? 6) / 2);
  const movieId = movie?.id ? movie.id.toString() : "";

  const removeFromWatchlist = (id: string) => {
    console.log(id);
  };
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Movie Poster */}
      <div
        className="bg-cover bg-center h-[240px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden mb-4"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`
            : "url('/assets/joker.jpg')",
        }}
      />

      {/* Movie Details */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{movie.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{movie.genre}</p>

      {/* Star Rating */}
      <div className="flex items-center justify-start space-x-1 mb-4">
        {[...Array(starRating)].map((_, index) => (
          <Image
            key={index}
            src="/assets/icons/star.png"
            width={14}
            height={14}
            alt="Star Icon"
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-auto">
        <Link
          className="bg-[#FF8C00] rounded-lg py-2 px-3 sm:px-4 text-white text-sm font-semibold"
          href={`/movies/${movieId}`}
        >
          View Details
        </Link>
        <button
          className="bg-gray-200 rounded-lg py-2 px-3 sm:px-4 text-sm font-semibold text-black"
          onClick={removeFromWatchlist(movieId)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
