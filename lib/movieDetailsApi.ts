// Fetch the movie details from TMDB API
import { z } from "zod";
import { MovieDetailsSchema } from "./schemas";

// Creating  TypeScript types from the Zod schemas
type MovieDetails = z.infer<typeof MovieDetailsSchema>;

// Fetch movie details
export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  return data;
  //   return MovieDetailsSchema.parse(data);
};

// Fetch cast information
export const fetchMovieCast = async (id: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie cast");
  }

  const data = await response.json();

  if (!data || !data.cast) {
    throw new Error("No data received for cast");
  }

  return data;
};
