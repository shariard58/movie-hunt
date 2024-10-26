"use client";
import { SingleMovieType } from "@/types/movieTypes";
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

interface WatchlistButtonProps {
  movie: SingleMovieType;
}

const WatchlistButton = ({ movie }: WatchlistButtonProps) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const handleToggleWatchlist = async () => {
    const response = await fetch("/api/watchList", {
      method: "POST",
      body: JSON.stringify(movie),
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
      {isInWatchlist ? "Added to Watchlist" : "Add to Watchlist"}{" "}
    </button>
  );
};

export default WatchlistButton;
