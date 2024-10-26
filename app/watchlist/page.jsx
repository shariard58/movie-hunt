"use client";
import { useEffect, useState } from "react";
import WatchListMovieCard from "../components/WatchList/WatchListMovieCard";
export default function Watchlist() {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  const fetchWatchlistMovies = async () => {
    const response = await fetch("/api/watchList");
    if (response.ok) {
      const data = await response.json();
      console.log("Fetched watchlist data:", data);
      setWatchlistMovies(data.watchlist);
    } else {
      console.error("Failed to fetch watchlist movies");
    }
  };

  // Refresh function to fetch movies again
   const refreshWatchlist = () => {
    fetchWatchlistMovies();
  };

  useEffect(() => {
    fetchWatchlistMovies();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

      {watchlistMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlistMovies.map((movie, index) => (
            <WatchListMovieCard key={index} movie={movie} refreshWatchlist={refreshWatchlist} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-600">Your watchlist is currently empty.</p>
      )}
    </div>
  );
}
