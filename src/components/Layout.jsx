import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"

const Layout = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  return (
    <div className="body">
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Layout
