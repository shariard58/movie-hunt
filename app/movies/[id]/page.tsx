import RelatedMovieCard from "@/app/components/movieDetails/RelatedMovieCard";
import { FaRegBookmark } from "react-icons/fa";

interface MovieDetailsProps {
  params: { id: string };
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const { id } = await params; // Awaiting params object

  console.log("The movie id of this page is", id);
  // Predefined movie data with formatted release date
  const movie = {
    title: "Joker",
    overview:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral that leads to the creation of an iconic villain.",
    release_date: "2019-10-04",
    genres: [{ name: "Crime" }, { name: "Drama" }, { name: "Thriller" }],
    vote_average: 8.4,
    vote_count: 12000,
    popularity: 100.0,
    cast: [
      { id: 1, name: "Joaquin Phoenix", character: "Arthur Fleck / Joker" },
      { id: 2, name: "Robert De Niro", character: "Murray Franklin" },
      { id: 3, name: "Zazie Beetz", character: "Sophie Dumond" },
      { id: 4, name: "Frances Conroy", character: "Penny Fleck" },
      { id: 5, name: "Brett Cullen", character: "Thomas Wayne" },
    ],
  };

  // Pre-formatting release date
  const formattedReleaseDate = new Date(
    movie.release_date
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
        {/* Left Section */}
        <div
          className="md:w-1/2 bg-cover bg-center h-[70vh]"
          style={{
            backgroundImage: "url('/assets/joker.jpg')",
          }}
        ></div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-black">{movie.title}</h2>
          <p className="my-2 text-black italic">{movie.overview}</p>
          <ul className="text-black space-y-2 my-4">
            <li>
              <strong>Release Date:</strong> {formattedReleaseDate}
            </li>
            <li>
              <strong>Average Vote:</strong> {movie.vote_average}
            </li>
            <li>
              <strong>Vote Count:</strong> {movie.vote_count}
            </li>
            <li>
              <strong>Popularity:</strong> {movie.popularity}
            </li>
            <li>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </li>
          </ul>
          <div className="my-4">
            <h3 className="text-lg font-bold">Cast:</h3>
            <ul className="space-y-1">
              {movie.cast.slice(0, 5).map((actor) => (
                <li key={actor.id}>
                  {actor.name} as {actor.character}
                </li>
              ))}
            </ul>
          </div>
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
