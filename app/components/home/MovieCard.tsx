import Image from "next/image";
import Link from "next/link";
import { MovieType } from "../../../types/movieTypes";
interface MovieCardProps {
  movie: MovieType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // console.log("the movie is", movie);
  const starRating = Math.round(movie.vote_average / 2);
  // release date
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <figure className="shadow-lg p-3 border border-black/10 dark:border-white/10 rounded-xl sm:max-w-[300px]  h-[320px]  sm:h-[340px] md:max-w-[320px] md:h-[360px] lg:max-w-[340px] lg:h-[380px] xl:max-w-[360px] xl:h-[400px] flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-5px] cursor-pointer">
      <div
        className="bg-cover bg-center h-[160px] sm:h-[160px] md:h-[200px] lg:h-[220px] xl:h-[248px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: movie.poster_path
            ? `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`
            : "url('/assets/joker.jpg')",
        }}
      />
      <figcaption className="flex-grow pt-2 flex flex-col justify-between">
        <div>
          <h3 className="text-lg mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{releaseDate ?? ""}</p>
          <div className="flex items-center justify-start space-x-1 mb-4">
            {[...Array(starRating)].map((_, index) => (
              <Image
                key={index}
                src="/assets/icons/star.png"
                width="14"
                height="14"
                alt="star"
              />
            ))}
          </div>
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movies/${movie.id}`}
          scroll={false}
        >
          <Image
            src="/assets/icons/detail.png"
            width={20}
            height={20}
            alt="Tag Icon"
          />
          <span>View Details</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
