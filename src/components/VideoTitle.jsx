import React from "react"

const VideoTitle = (props) => {
  const { title, description } = props
  return (
    <div className="absolute w-full h-screen bg-gradient-to-r from-black flex">
      <div className="container mx-auto xl:w-[1140px] w-[90%] mt-auto mb-40">
        <div className="content w-full">
          <h1 className="text-6xl font-bold text-white">{title}</h1>
          <p className="w-1/2 my-8 text-white">{description}</p>
          <div className="flex gap-4">
            <div className="flex bg-[#393e44] text-white px-[24px] py-[12px] rounded-[6px] hover:bg-white hover:text-black cursor-pointer gap-3 group">
              <svg className="group-hover:fill-black" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    className="group-hover:fill-black"
                    fill="#fff"
                    d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                  />
                </g>
              </svg>
              Play Now
            </div>
            <div className="flex bg-[#393e44] text-white px-[24px] py-[12px] rounded-[6px] hover:bg-white hover:text-black cursor-pointer gap-1 group">
              <svg className="group-hover:fill-black" width="24" height="24" viewBox="0 0 24 24">
                <path
                  className="group-hover:fill-black"
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M11 8a1 1 0 0 0 1 1h.008a1 1 0 1 0 0-2H12a1 1 0 0 0-1 1m1 9a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1"
                  clip-rule="evenodd"
                />
              </svg>
              More info
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
