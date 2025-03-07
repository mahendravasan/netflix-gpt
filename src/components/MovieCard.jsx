import React from "react"
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants"

const MovieCard = (props) => {
  const { imgPath, title, id } = props
  const handleGetMovieID = async (id, title) => {
    console.log("Movie Name", title)
    console.log("Movie id", id)
    const movieDetailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      API_OPTIONS
    )
    const movieResponse = await movieDetailsResponse.json()
    console.log("🚀 ~ handleGetMovieID ~ movieResponse:", movieResponse)
  }
  return (
    <div className="card min-w-[200px] min-h-[345px]" onClick={() => handleGetMovieID(id, title)}>
      <img
        className="w-full h-full object-cover rounded-lg"
        src={IMG_CDN_URL + imgPath}
        alt={title}
      />
    </div>
  )
}

export default MovieCard
