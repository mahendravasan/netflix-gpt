import React from "react"
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = (props) => {
  const { imgPath, title } = props
  return (
    <div className="card min-w-[200px] min-h-[345px]">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={IMG_CDN_URL + imgPath}
        alt={title}
      />
    </div>
  )
}

export default MovieCard
