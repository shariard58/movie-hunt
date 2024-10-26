export type MovieType = {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type SingleMovieType = MovieType & {
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget?: number;
  homepage?: string;
  imdb_id?: string;
  genres?: {
    id: number;
    name: string;
  }[];
  production_companies?: {
    id: number;
    logo_path?: string | null;
    name: string;
    origin_country: string;
  }[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
};
