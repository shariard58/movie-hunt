"use client";
import Image from "next/image";
import Link from "next/link";

export default function Watchlist() {
  const watchlistMovies = [
    {
      id: 1,
      title: "Joker",
      poster_path: "/assets/joker.jpg",
      rating: 8.4,
      genre: "Drama/Thriller",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/assets/joker.jpg",
      rating: 9.0,
      genre: "Action/Crime",
    },
    {
      id: 3,
      title: "Fight Club",
      poster_path: "/assets/joker.jpg",
      rating: 8.8,
      genre: "Drama",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

      {watchlistMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlistMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md p-4 rounded-lg flex flex-col transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* Movie Poster */}
              <div
                className="bg-cover bg-center h-[240px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden mb-4"
                style={{ backgroundImage: `url(${movie.poster_path})` }}
              />

              {/* Movie Details */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {movie.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{movie.genre}</p>

              {/* Star Rating */}
              <div className="flex items-center justify-start space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
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
                  href={`/movies/${movie.id}`}
                >
                  View Details
                </Link>
                <button
                  className="bg-gray-200 rounded-lg py-2 px-3 sm:px-4 text-sm font-semibold text-black"
                  onClick={() => alert(`Removed ${movie.title} from watchlist`)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-600">Your watchlist is currently empty.</p>
      )}
    </div>
  );
}
