import React from "react"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  const series = useSelector((store) => store.series)
  if (!movies) return null
  console.log("🚀 ~ SecondaryContainer ~ movies:", movies)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated Series"} movies={series?.topRatedSeries} />
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
    </div>
  )
}

export default SecondaryContainer
