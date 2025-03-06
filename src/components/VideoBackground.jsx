import React from "react"
import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = (props) => {
  const { movieId } = props

  // all hooks here...
  const trailerVideo = useSelector((state) => state.movies.trailerVideo)

  useMovieTrailer(movieId)

  return (
    <div className="bg-video-main w-full h-screen aspect-video overflow-hidden">
      <iframe
        className="w-full h-full aspect-video scale-[1.18]"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&mute=1&autoplay=1&loop=1&playlist=${trailerVideo?.key}&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground
