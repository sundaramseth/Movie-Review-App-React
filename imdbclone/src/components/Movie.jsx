import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";


function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 18;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies?limit=${limit}&page=${page}`)
      .then((res) => {
        setMovies(res.data.movies || res.data);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white px-6 py-10">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
        Trending Movies
        </h1>
        <p className="text-gray-400 mt-2 text-center max-w-xl">
          Explore what's hot right now — powered by your movie database.
        </p>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} poster_path={movie.poster} title={movie.title} rating={movie.rating} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Movie;
