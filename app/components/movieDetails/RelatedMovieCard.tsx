import Image from "next/image";
import Link from "next/link";

const RelatedMovieCard = () => {
  return (
    <figure className="shadow-md p-3 border border-gray-200 rounded-lg sm:max-w-[280px] h-[300px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <div
        className="bg-cover bg-center h-[140px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/assets/joker.jpg')",
        }}
      />
      <figcaption className="flex-grow pt-2 flex flex-col justify-between">
        <div>
          <h3 className="text-lg mb-1 font-semibold">Joker</h3>
          <p className="text-gray-600 text-sm mb-2">Drama/Thriller</p>
          <div className="flex items-center justify-start space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/assets/icons/star.png" // Adjust the path to your star icon
                width={14}
                height={14}
                alt="Star Icon"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            className="bg-[#FF8C00] rounded-lg py-1 px-3 text-white text-sm font-semibold"
            href="/movies/1"
            scroll={false}
          >
            View Details
          </Link>
          <Link
            className="bg-gray-200 rounded-lg py-1 px-3 text-[#171923] text-sm font-semibold"
            href="/watchlist"
          >
            Add to Watch List
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default RelatedMovieCard;
