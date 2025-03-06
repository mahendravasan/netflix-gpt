import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addPopularMovies } from "../utils/moviesSlice"
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants"

const usePopularMovies = () => {
  // all hooks here...
  const dispatch = useDispatch()

  // all functions here...
  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_URL, API_OPTIONS)
    const data = await response.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
}

export default usePopularMovies
