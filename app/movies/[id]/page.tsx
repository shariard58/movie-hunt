import WatchlistButton from "@/app/components/button/WatchListButton";
import AnimatedRelatedMovies from "@/app/components/movieDetails/AnimatedRelatedMovies";
import CastSlider from "@/app/components/movieDetails/CastSlider";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchRelatedMovies,
} from "@/lib/movieDetailsApi";
interface PageProps {
  params: Promise<{ id: string }> | undefined;
}

export default async function MovieDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const movieId = resolvedParams?.id ? resolvedParams.id : "1";

  // Fetching movie data
  const movieData = await fetchMovieDetails(movieId);

  // Fetching cast data of the movie
  const castData = await fetchMovieCast(movieId);

  // Fetching the related movies of this movies

  const relatedMovies = await fetchRelatedMovies(movieId);

  // Pre-formatting release date
  const formattedReleaseDate = movieData?.release_date
    ? new Date(movieData.release_date).toLocaleDateString()
    : "Unknown Release Date";

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section: Movie Poster */}
        <div
          className="sm:px-4 md:w-1/2 bg-cover bg-center h-[70vh]"
          style={{
            backgroundImage: `url(${
              movieData.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`
                : "/assets/joker.jpg"
            })`,
          }}
        ></div>

        {/* Right Section: Movie Details */}
        <div className="md:w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-black">{movieData.title}</h2>
          <p className="my-2 text-black italic">{movieData.overview}</p>
          <ul className="text-black space-y-2 my-4">
            <li>
              <strong>Release Date:</strong> {formattedReleaseDate || ""}
            </li>
            <li>
              <strong>Run Time:</strong>{" "}
              {movieData?.runtime
                ? `${movieData.runtime} minutes`
                : "102 minutes"}
            </li>
            <li>
              <strong>Average Vote:</strong>{" "}
              {movieData.vote_average?.toFixed(1) ?? ""}
            </li>
            <li>
              <strong>Vote Count:</strong> {movieData.vote_count ?? ""}
            </li>
            <li>
              <strong>Popularity:</strong>{" "}
              {movieData.popularity?.toFixed(1) ?? ""}
            </li>
            {movieData?.genres && (
              <li>
                <strong>Genres:</strong>{" "}
                {movieData.genres?.length > 0
                  ? movieData.genres.map((genre) => genre.name).join(", ")
                  : " "}
              </li>
            )}

            <li>
              <strong>Budget:</strong> $
              {movieData.budget ? movieData.budget.toLocaleString() : " "}
            </li>
            <li>
              <strong>Revenue:</strong> $
              {movieData.revenue ? movieData.revenue.toLocaleString() : " "}
            </li>
            <li>
              <strong>Adult:</strong> {movieData.adult ? "Yes" : "No"}
            </li>
            <li>
              <strong>Original Language:</strong>{" "}
              {movieData.original_language === "en" ? "English" : "Other"}
            </li>
          </ul>

          {/* watchlist buton  */}
          <WatchlistButton movie={movieData} />
        </div>
      </div>

      <div className="my-4 hidden md:block">
        {/* <ExampleSlider /> */}
        {castData && castData.cast && <CastSlider castData={castData.cast} />}
      </div>

      <div>
        <AnimatedRelatedMovies relatedMovies={relatedMovies} />
      </div>

      {/* Related Movies Section */}
    </>
  );
}
