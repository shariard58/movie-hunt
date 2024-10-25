"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MovieData } from "../../../types/movieTypes";
import LoadingSpinner from "../loading/LoadingSpinner";
import MovieCard from "./MovieCard";
export default function AllMovies() {
  const [page, setPage] = useState(1);
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // Fetching movies data  using React Query
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<MovieData[]>({
    queryKey: ["movies", page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.results;
    },
    keepPreviousData: true,
  });

  const loadMoreMovies = () => {
    setPage((old) => old + 1);
  };

  const loadPreviousMovies = () => {
    setPage((old) => old - 1);
  };

  console.log("All the movies are", movies);
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error fetching movies</div>;

  return (
    <div>
      <h2 className="sm:text-[18px] md:text-[22px] lg:text-[18px] mb:2 md:mb-3 font-extrabold">
        All Movies
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {movies &&
            movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex gap-4">
          <button
            onClick={loadPreviousMovies}
            disabled={page === 1}
            className={`py-3 px-4 ${
              page === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-400 hover:bg-orange-600"
            } text-[14px] text-white font-semibold rounded-lg shadow-md transition duration-200`}
          >
            Previous
          </button>
          <button
            onClick={loadMoreMovies}
            disabled={movies.length < 20}
            className={`py-3 px-4 ${
              movies.length < 20
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-400 hover:bg-orange-600"
            } text-[14px] text-white font-semibold rounded-lg shadow-md transition duration-200`}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
