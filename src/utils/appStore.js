import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./userSlice"
import moviesSliceReducer from "./moviesSlice"
import seriesSliceReducer from "./seriesSlice"

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
    series: seriesSliceReducer
  }
})

export default appStore
