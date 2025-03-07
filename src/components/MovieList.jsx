import React from "react"
import MovieCard from "./MovieCard"

const MovieList = (props) => {
  const { title, movies } = props
  return (
    <div className="movie-list-main container mx-auto xl:w-[1540px] w-[90%] relative z-[11] -top-52 pb-16">
      <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
      <div className="flex gap-5 overflow-auto">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            imgPath={movie?.poster_path}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieList
