import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS, TOPRATED_SERIES_URL } from "../utils/constants"
import { addTopRatedSeries } from "../utils/seriesSlice"

const useTopRatedSeries = () => {
  // all hooks here...
  const dispatch = useDispatch()

  // all functions here...
  const getTopRatedSeries = async () => {
    const response = await fetch(TOPRATED_SERIES_URL, API_OPTIONS)
    const data = await response.json()
    dispatch(addTopRatedSeries(data.results))
  }

  useEffect(() => {
    getTopRatedSeries()
  }, [])
}

export default useTopRatedSeries
