import { SingleMovieType } from "@/types/movieTypes";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const filePath = path.join(process.cwd(), "watchList.json");

interface WatchlistData {
  watchlist: SingleMovieType[];
}

// ro read data from the file
const readData = (): WatchlistData => {
  try {
    const jsonData = fs.readFileSync(filePath, "ucs2");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading data:", error);
    return { watchlist: [] };
  }
};

// to write data in the file
const writeData = (data: WatchlistData): void => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing data:", error);
  }
};

// The Get api to get all the response from the Data .
export async function GET() {
  const data = readData();
  return NextResponse.json(data.watchlist);
}

// The post api
export async function POST(request: Request) {
  const newMovie: Movie = await request.json();
  const data = readData();

  const movieExists = data.watchlist.some((movie) => movie.id === newMovie.id);
  if (movieExists) {
    return NextResponse.json(
      { message: "Movie already in watchlist!" },
      { status: 400 }
    );
  }

  data.watchlist.push(newMovie);
  writeData(data);

  return NextResponse.json(
    {
      message: "Movie added to watchlist successfully!",
      movie: newMovie,
    },
    { status: 201 }
  );
}

export async function DELETE(request: Request) {
  const { id }: { id: number } = await request.json();
  const data = readData();
  // Check if the movie exists in the watchlist
  const movieExists = data.watchlist.some((movie) => movie.id === id);
  if (!movieExists) {
    return NextResponse.json(
      { message: "Movie not found in watchlist" },
      { status: 404 }
    );
  }
  // Remove movie from watchlist
  const updatedWatchlist = data.watchlist.filter((movie) => movie.id !== id);
  data.watchlist = updatedWatchlist;

  writeData(data);

  return NextResponse.json(
    { message: "Movie removed from watchlist" },
    { status: 200 }
  );
}
