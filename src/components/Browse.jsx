import React, { useEffect } from "react"
import Lenis from "lenis"

// all componets here...
import Header from "./Header"
import MainContainer from "./MainContainer"

// all hooks here...
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRatedSeries from "../hooks/useTopRatedSeries"

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  useTopRatedSeries()

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="browse-main relative">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
