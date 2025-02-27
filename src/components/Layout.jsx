import React, { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import Login from "./Login"
import Browse from "./Browse"
import { addUser, removeUser } from "../utils/userSlice"
import { auth } from "../utils/firebase"

const Layout = () => {
  const dispatch = useDispatch()
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
      } else {
        dispatch(removeUser())
      }
    })
  }, [])
  return (
    <div className="body">
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Layout
