"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const fetchMovies = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setIsError(true);
    }
  };

  console.log("All movies are", movies);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const newMovies = await fetchMovies(page);
      if (newMovies) {
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      }
      setIsLoading(false);
    };

    loadMovies();
  }, [page]);

  const loadMoreMovies = () => {
    setPage((old) => old + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching movies</div>;

  return (
    <div>
      <h2 className="sm:text-[18px] md:text-[22px] lg:text-[18px] mb:2 md:mb-3 font-extrabold">
        All Movies
      </h2>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {movies &&
            movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </div>
      </div>
      <button
        onClick={loadMoreMovies}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Load More
      </button>
    </div>
  );
}
