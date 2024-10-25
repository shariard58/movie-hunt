"use client";
import { RelatedMovie } from "@/types/relatedMovieTypes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AnimatedRelatedMoviesProps {
  relatedMovies: RelatedMovie[];
}

type RelatedMovieCardProps = {
  movie: RelatedMovie;
};

const RelatedMovieCard = ({ movie }: RelatedMovieCardProps) => {
  const starCount = movie.vote_average ? Math.round(movie.vote_average / 2) : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: -1 }}
      whileInView={{
        opacity: 1,
        x: 1,
        transition: {
          duration: 3,
        },
      }}
      viewport={{ once: false }}
      className="relative shadow-lg p-3 border border-gray-200 rounded-lg sm:max-w-[280px] h-[350px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer overflow-hidden"
    >
      <div
        className="bg-cover bg-center h-[200px] rounded-lg"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`
            : "url('/assets/joker.jpg')",
        }}
      />
      <div className="flex-grow pt-2 flex flex-col justify-between">
        <div className="flex-grow">
          <h3 className="text-lg mb-1 font-semibold line-clamp-1">
            {movie.title || "Untitled"}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {movie.overview || "No overview available."}
          </p>
          <div className="flex items-center justify-start space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/assets/icons/star.png"
                width={14}
                height={14}
                alt="Star Icon"
                className={`${
                  index < starCount ? "text-yellow-400" : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Link
            className="bg-[#FF8C00] rounded-lg py-1 px-3 text-white text-sm font-semibold"
            href={`/movies/${movie.id}`}
            scroll={false}
          >
            View Details
          </Link>
          <Link
            className="bg-gray-200 rounded-lg py-1 px-3 text-[#171923] text-sm font-semibold"
            href="/watchlist"
          >
            Add to Watch List
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedRelatedMovies: React.FC<AnimatedRelatedMoviesProps> = ({
  relatedMovies,
}) => {
  return (
    <div className="my-8 bg-white">
      <h2 className="text-2xl font-bold text-black">Related Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {relatedMovies &&
          relatedMovies.map((relatedMovie, index) => (
            <RelatedMovieCard key={index} movie={relatedMovie} />
          ))}
      </div>
    </div>
  );
};

export default AnimatedRelatedMovies;

{
  /* <RelatedMovieCard key={index} movie={relatedMovie} /> */
}
