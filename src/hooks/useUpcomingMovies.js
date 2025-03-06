import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants"

const useUpcomingMovies = () => {
  // all hooks here...
  const dispatch = useDispatch()

  // all functions here...
  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS)
    const data = await response.json()
    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(() => {
    getUpcomingMovies()
  }, [])
}

export default useUpcomingMovies
