"use client";
import { fetchMovieDetails } from "@/lib/movieDetailsApi";
import { SingleMovieType } from "@/types/movieTypes";
import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

interface WatchlistButtonProps {
  movieId: string;
}

const WatchlistButton = ({ movieId }: WatchlistButtonProps) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [movieData, setMovieData] = useState<SingleMovieType | null>(null); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieData(data as SingleMovieType); 
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
        toast.error("Failed to load movie details.");
      }
    };

    fetchMovie();
  }, [movieId]); 

  const handleToggleWatchlist = async () => {
    if (!movieData) {
      toast.error("Can't save movie: Movie details not loaded yet.");
      return; 
    }

    const response = await fetch("/api/watchList", {
      method: "POST",
      body: JSON.stringify(movieData), 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setIsInWatchlist(true);
      toast.success("Added to Watchlist!");
    } else {
      const { message } = await response.json();
      toast.error(message);
    }
  };

  return (
    <button
      className={`flex items-center mt-4 bg-[#FF8C00] text-white px-4 py-2 rounded hover:bg-[#FFA500] ${
        isInWatchlist ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={isInWatchlist ? undefined : handleToggleWatchlist}
      disabled={isInWatchlist}
    >
      <FaRegBookmark className="mr-2" />
      {isInWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
    </button>
  );
};

export default WatchlistButton;
