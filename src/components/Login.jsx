import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth"

// all utilities here...
import { images } from "../utils/utils"
import { checkValidData } from "../utils/validate"
import { auth } from "../utils/firebase"
import { addUser } from "../utils/userSlice"

// all components here...
import Header from "./Header"

// all images here...
import userAvatar from "../assets/images/user-avatar.jpg"

const Login = () => {
  // all states here...
  const [isSingIn, setIsSingIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  // all hooks here...
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // all refs here...
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  // all functions here...
  useEffect(() => {
    Shery.imageEffect("#back", {
      style: 4,
      gooey: true,
      debug: true,
      config: {
        a: { value: 1.15, range: [0, 30] },
        b: { value: -0.97, range: [-1, 1] },
        zindex: { value: 999, range: [-9999999, 9999999] },
        aspect: { value: 2.088913282107574 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.09, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.76, range: [0, 10] },
        metaball: { value: 0.15, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 15.27, range: [0, 100] }
      }
    })
  }, [])

  const handleToggleSignIn = () => {
    setIsSingIn(!isSingIn)
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return

    // Sign in or Sign up logic here...
    if (!isSingIn) {
      // Sign up logic here...
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvatar
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              )
              localStorage.setItem("user", JSON.stringify(auth.currentUser))
              navigate("/browse")
            })
            .catch((error) => {
              // An error occurred
              // ...
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(`Error: ${errorCode} - ${errorMessage}`)
        })
    } else {
      // Sign in logic here...
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user

          localStorage.setItem("user", JSON.stringify(user))
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(`Email or password is incorrect. Please try again.`)
        })
    }
  }

  return (
    <>
      <Header />
      <div className="login-main relative bg-[#101728] w-full h-screen" id="main">
        <div id="back" className="w-full h-screen">
          {images.map((img) => {
            return (
              <img
                key={img?.id}
                src={img?.path}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
            )
          })}
        </div>
        <div className="login-form absolute w-[80%] xl:w-[450px] bg-[rgba(0,0,0,0.7)] rounded-[6px] xl:p-16 p-6 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[9999] text-white">
          <h1 className="text-4xl font-semibold mb-8">{isSingIn ? "Sign In" : "Sign Up"}</h1>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            {!isSingIn && (
              <div className="form-control my-4 w-full">
                <input
                  ref={name}
                  type="text"
                  placeholder="Full name"
                  autoComplete="username"
                  className="h-14 p-4 bg-[rgba(0,0,0,0.6)] border-1 border-gray-400 w-full rounded-[4px] focus-visible:border-[#e50914] focus:border-[#e50914] focus:outline-0 transition-all ease-in"
                />
              </div>
            )}
            <div className="form-control my-4 w-full">
              <input
                ref={email}
                type="text"
                placeholder="Email address"
                autoComplete="username"
                className="h-14 p-4 bg-[rgba(0,0,0,0.6)] border-1 border-gray-400 w-full rounded-[4px] focus-visible:border-[#e50914] focus:border-[#e50914] focus:outline-0 transition-all ease-in"
              />
            </div>
            <div className="form-control my-4 w-full">
              <input
                ref={password}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="h-14 p-4 bg-[rgba(0,0,0,0.6)] border-1 border-gray-400 w-full rounded-[4px] focus-visible:border-[#e50914] focus:border-[#e50914] focus:outline-0 transition-all ease-in"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 font-semibold text-[12px] my-3">{errorMessage}</p>
            )}
            <button
              className="w-full bg-[#e50914] h-10 text-center rounded-[4px] cursor-pointer hover:bg-red-700 transition-all ease-in font-medium"
              onClick={handleButtonClick}
            >
              {isSingIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          {isSingIn ? (
            <p className="text-[#ccc] mt-8">
              New to Netflix?&nbsp;
              <Link
                className="text-white hover:border-b border-white transition-all ease-in font-medium"
                onClick={() => handleToggleSignIn()}
              >
                Sign up now.
              </Link>
            </p>
          ) : (
            <p className="text-[#ccc] mt-8">
              Already have an account?&nbsp;
              <Link
                className="text-white hover:border-b border-white transition-all ease-in font-medium"
                onClick={() => handleToggleSignIn()}
              >
                Sign in now.
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Login
