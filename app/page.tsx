import MovieCard from "./components/home/MovieCard";

export default function Home() {
  const movies = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    title: `Movie ${index + 1}`,
    genre: "Action",
    imageUrl: "/assets/joker.jpg",
  }));

  return (
    <div>
      <h2 className="sm:text-[18px] md:text-[22px] lg:text-[18px] mb:2 md:mb-3 font-extrabold">
        All Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} />
        ))}
      </div>
    </div>
  );
}
