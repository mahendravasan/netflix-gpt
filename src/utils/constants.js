export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDVmMjNmYWI1NDRiNDdjYWQ4OWM4M2NkZmZjZWE2ZCIsIm5iZiI6MTc0MTAwNjQ4OC4zNTUsInN1YiI6IjY3YzVhNjk4YTg5M2Y4ZGFhNWU3NzQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY0PaiAYxp0qJ8WSRQNmm1dGtIiXVjbjp6i5yDZqzRk"
  }
}

export const NOW_PLAYING_MOVIES_URL = "https://api.themoviedb.org/3/movie/now_playing?&page=1"

export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?&page=1"

export const TOPRATED_MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?&page=1"

export const UPCOMING_MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?S&page=1"

export const TOPRATED_SERIES_URL = "https://api.themoviedb.org/3/tv/top_rated?&page=1"

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
