import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { API_OPTIONS, TOPRATED_MOVIES_URL } from "../utils/constants"

const useTopRatedMovies = () => {
  // all hooks here...
  const dispatch = useDispatch()

  // all functions here...
  const getTopRatedMovies = async () => {
    const response = await fetch(TOPRATED_MOVIES_URL, API_OPTIONS)
    const data = await response.json()
    dispatch(addTopRatedMovies(data.results))
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])
}

export default useTopRatedMovies
