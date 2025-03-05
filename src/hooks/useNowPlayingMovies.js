import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants"

const useNowPlayingMovies = () => {
  // all hooks here...
  const dispatch = useDispatch()

  // all functions here...
  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS)
    const data = await response.json()
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies
