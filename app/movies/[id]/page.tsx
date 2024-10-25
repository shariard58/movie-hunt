import RelatedMovieCard from "@/app/components/movieDetails/RelatedMovieCard";
import { fetchMovieCast, fetchMovieDetails } from "@/lib/movieDetailsApi";
import { FaRegBookmark } from "react-icons/fa";

interface MovieDetailsProps {
  params: { id: string };
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const { id } = await params; // Awaiting params object

  // Fetching movie data
  const movieData = await fetchMovieDetails(id);

  console.log("The movie details of this page is", movieData);

  // Fetching cast data of the movie
  const castData = await fetchMovieCast(id);

  // Pre-formatting release date
  const formattedReleaseDate = new Date(
    movieData.release_date
  ).toLocaleDateString();

  // Mock related movies data
  const relatedMovies = [
    { id: 2, title: "The Dark Knight", poster_path: "/assets/dark_knight.jpg" },
    { id: 3, title: "Fight Club", poster_path: "/assets/fight_club.jpg" },
    { id: 4, title: "Psycho", poster_path: "/assets/psycho.jpg" },
    { id: 5, title: "Taxi Driver", poster_path: "/assets/taxi_driver.jpg" },
    { id: 6, title: "Se7en", poster_path: "/assets/seven.jpg" },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section: Movie Poster */}
        <div
          className="md:w-1/2 bg-cover bg-center h-[70vh]"
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
              <strong>Release Date:</strong> {formattedReleaseDate || "N/A"}
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
            <li>
              <strong>Genres:</strong>{" "}
              {movieData.genres?.length > 0
                ? movieData.genres.map((genre) => genre.name).join(", ")
                : " "}
            </li>
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

          <button className="flex items-center mt-4 bg-[#FF8C00] text-white px-4 py-2 rounded hover:bg-[#FFA500]">
            <FaRegBookmark className="mr-2" />
            Add to Watch List
          </button>
        </div>
      </div>

      {/* Related Movies Section */}
      <div className="mt-8 p-8 bg-white">
        <h2 className="text-2xl font-bold text-black">Related Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {relatedMovies.map((relatedMovie) => (
            <RelatedMovieCard key={relatedMovie.id} movie={relatedMovie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
