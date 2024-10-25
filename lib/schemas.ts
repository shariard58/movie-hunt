import { z } from "zod";

const CastMember = z.object({
  adult: z.boolean().optional(),
  gender: z.number().optional(),
  id: z.number(),
  known_for_department: z.string().optional(),
  name: z.string(),
  original_name: z.string().optional(),
  popularity: z.number().optional(),
  profile_path: z.string().optional(),
  cast_id: z.number().optional(),
  character: z.string().optional(),
  credit_id: z.string().optional(),
  order: z.number().optional(),
});

// Define the cast details schema
const CastDetailsSchema = z.object({
  id: z.number(),
  cast: z.array(CastMember),
});

// Defineing the schema for movie details
const MovieDetailsSchema = z.object({
  adult: z.boolean().optional(),
  backdrop_path: z.string().optional(),
  belongs_to_collection: z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      poster_path: z.string().optional(),
      backdrop_path: z.string().optional(),
    })
    .optional(),
  budget: z.number().optional(),
  genres: z
    .array(
      z.object({
        id: z.number().optional(),
        name: z.string().optional(),
      })
    )
    .optional(),
  homepage: z.string().optional(),
  id: z.number().optional(),
  imdb_id: z.string().optional(),
  original_language: z.string().optional(),
  original_title: z.string().optional(),
  overview: z.string().optional(),
  popularity: z.number().optional(),
  poster_path: z.string().optional(),
  production_companies: z
    .array(
      z.object({
        id: z.number().optional(),
        logo_path: z.string().optional(),
        name: z.string().optional(),
        origin_country: z.string().optional(),
      })
    )
    .optional(),
  release_date: z.string().optional(),
  revenue: z.number().optional(),
  runtime: z.number().optional(),
  spoken_languages: z
    .array(
      z.object({
        english_name: z.string().optional(),
        iso_639_1: z.string().optional(),
        name: z.string().optional(),
      })
    )
    .optional(),
  status: z.string().optional(),
  tagline: z.string().optional(),
  title: z.string().optional(),
  video: z.boolean().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
});

export { CastDetailsSchema, MovieDetailsSchema };
