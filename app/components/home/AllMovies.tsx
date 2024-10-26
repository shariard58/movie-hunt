"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MovieType } from "../../../types/movieTypes";
import SearchInput from "../input/SearchInput";
import LoadingSpinner from "../loading/LoadingSpinner";
import MovieCard from "./MovieCard";

export default function AllMovies() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<MovieType[]>({
    queryKey: ["movies", page, debouncedSearchTerm],
    queryFn: async () => {
      let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

      if (debouncedSearchTerm.length >= 2) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debouncedSearchTerm}&page=${page}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.results;
    },
    enabled: debouncedSearchTerm.length >= 0,
  });

  const loadMoreMovies = () => {
    setPage((old) => old + 1);
  };

  const loadPreviousMovies = () => {
    setPage((old) => old - 1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  const hasMovies = movies?.length || 0;

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error fetching movies</div>;

  return (
    <div className="flex justify-start items-start mb-8">
      <div className="w-full">
        <SearchInput
          onSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />

        <h2 className="sm:text-[18px] md:text-[22px] lg:text-[18px] mb:2 md:mb-3 font-extrabold mt-4">
          All Movies
        </h2>
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {movies && movies.length > 0 ? (
              movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))
            ) : (
              <div className="col-span-full h-[70vh] flex justify-center items-center">
                <p className="text-gray-500 text-md md:text-3xl font-bold text-center">
                  Sorry, no movies found.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
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
              disabled={hasMovies < 20}
              className={`py-3 px-4 ${
                hasMovies < 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-400 hover:bg-orange-600"
              } text-[14px] text-white font-semibold rounded-lg shadow-md transition duration-200`}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
