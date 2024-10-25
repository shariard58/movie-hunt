"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Sample data for the slider items
const slidesData = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Slide ${index + 1}`,
  // Add any image URL you want here
  imageUrl: `https://via.placeholder.com/240x320?text=Image+${index + 1}`,
}));

function ExampleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="relative md:h-[32vh] lg:h-[50vh] mt-2 ">
      <p className="mt-[30px] mb-[14px] text-[24px] font-bold">Casts</p>
      <div className="max-w-[100%] md:h-[20vh] absolute mx-auto ">
        <Slider {...settings}>
          {slidesData.map(({ id, title, imageUrl }) => (
            <div key={id} className="flex justify-center">
              <div
                className="w-full max-w-[300px] h-[320px] p-4 bg-gray-200 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-center text-white bg-black bg-opacity-50 p-2 rounded">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ExampleSlider;
