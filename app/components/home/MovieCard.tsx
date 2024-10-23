import Image from "next/image";
import Link from "next/link";

const MovieCard = () => {
  return (
    <figure className="shadow-lg p-3 border border-black/10 dark:border-white/10 rounded-xl max-w-[240px] w-full h-[320px] sm:max-w-[260px] sm:h-[340px] md:max-w-[280px] md:h-[360px] lg:max-w-[300px] lg:h-[380px] xl:max-w-[320px] xl:h-[400px] flex flex-col">
      <div
        className="bg-cover bg-center h-[160px] sm:h-[160px] md:h-[200px] lg:h-[220px] xl:h-[248px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/assets/joker.jpg')",
        }}
      />
      <figcaption className="flex-grow pt-2 flex flex-col justify-between">
        <div>
          <h3 className="text-lg mb-1">Joker</h3>
          <p className="text-[#575A6E] text-sm mb-2">Action/Adventure</p>
          <div className="flex items-center justify-start space-x-1 mb-4">
            {[...Array(5)].map((_, index) => (
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
          href="#"
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
