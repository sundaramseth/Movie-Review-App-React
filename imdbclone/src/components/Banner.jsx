import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies?limit=20")
      .then((res) => {
        const data = res.data.movies || res.data;
        setMovies(data);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // small mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-10 bg-black">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="px-2">
            <div className="relative group cursor-pointer">
              <img
                src={movie.poster || movie.Poster || ""}
                alt={movie.title || "Movie Poster"}
                className="rounded-xl w-full h-[250px] md:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm md:text-lg font-semibold">
                  {movie.title || movie.Title || "Untitled"}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
