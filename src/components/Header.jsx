import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const Header = () => {
  // all hooks here...
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const dropdown = useRef(null)
  const user = useSelector((state) => state.user)

  // all states here...
  const [showDropdown, setShowDropdown] = useState(false)

  // all functions here...
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        localStorage.removeItem("user")
        navigate("/")
      })
      .catch((error) => {
        console.log("🚀 ~ signOut ~ error:", error)
      })
  }

  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleClickOutside = (event) => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        localStorage.removeItem("user")
        navigate("/")
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <div className="header-main fixed z-[9999] w-full flex items-center bg-gradient-to-b from-black py-8">
      <div className="container mx-auto xl:w-[1540px] w-[90%] flex justify-between items-center">
        <Link to={"/"}>
          <div className="logo cursor-pointer">
            <svg
              viewBox="0 0 111 30"
              version="1.1"
              role="img"
              className="w-[148px] h-[40px] fill-[#e50914]"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
        </Link>
        {user && (
          <div className="flex items-center gap-4">
            <div className="user-name text-[15px] text-white font-semibold">
              {user?.displayName}
            </div>
            <div
              ref={dropdown}
              className="flex items-center gap-3 cursor-pointer relative"
              onClick={() => handleDropdown()}
            >
              <div className="user-icon">
                <img src={user?.photoURL} alt="user" className="w-8 h-8 rounded-[4px]" />
              </div>
              <div className="relative inline-block text-left">
                <svg width="15" height="15" viewBox="0 0 512 512">
                  <path
                    fill="#fff"
                    d="m98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62"
                  />
                </svg>
              </div>
              {showDropdown && (
                <div className="dropdown text-white px-1 py-1 bg-black text-[14px] rounded-[4px] absolute top-9 w-[150px] text-center cursor-pointer">
                  <ul className="w-full">
                    <li className="w-full flex items-center gap-3 px-2 py-2">
                      <svg width="16" viewBox="0 0 448 512" className="me-1">
                        <path
                          fill="#fff"
                          d="M304 128a80 80 0 1 0-160 0a80 80 0 1 0 160 0m-208 0a128 128 0 1 1 256 0a128 128 0 1 1-256 0M49.3 464h349.5c-8.9-63.3-63.3-112-129-112h-91.4c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3"
                        />
                      </svg>
                      About
                    </li>
                    <li className="w-full flex items-center gap-3 px-2 py-2 mb-2">
                      <svg width="20" viewBox="0 0 24 24">
                        <path
                          fill="#fff"
                          d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                        />
                      </svg>
                      Help
                    </li>
                    <li
                      className="w-full flex items-center justify-center gap-3 p-2 text-center border-t border-[#333]"
                      onClick={() => handleSignOut()}
                    >
                      Signout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
