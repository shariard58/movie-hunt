import MovieCard from "./components/home/MovieCard";
export default function Home() {
  return (
    <div>
      <div>
        <h2 className="sm:text-[18px] md:text-[22px] lg:text-[18px] mb:2 md:mb-3 font-extrabold">
          All Movies
        </h2>
        <MovieCard />
      </div>
    </div>
  );
}
