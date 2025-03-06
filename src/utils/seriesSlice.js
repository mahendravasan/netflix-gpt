import { createSlice } from "@reduxjs/toolkit"

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    topRatedSeries: null
  },
  reducers: {
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload
    }
  }
})

export const { addTopRatedSeries } = seriesSlice.actions
export default seriesSlice.reducer
