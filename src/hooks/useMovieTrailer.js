import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice"

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()

  // all functions here...
  const getTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    )
    const data = await response.json()
    const filterTrailers = data.results.filter((trailer) => trailer.type === "Trailer")
    const trailer = filterTrailers.length ? filterTrailers[0] : data.results[0]
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    getTrailer()
  }, [])
}

export default useMovieTrailer
