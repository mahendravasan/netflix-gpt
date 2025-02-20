import React, { useEffect } from "react"

function App() {
  const images = [
    {
      id: 1,
      path: "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
    },
    {
      id: 2,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXOU0o5WfqEGH13SEARPdwaYoUySEG-4g076inaORmIEZlTgvXZS4CgCaXfjKlaX2cWfevZByjWwuAGT6FU-w7ybKpmAhsA0gbkA.jpg?r=fe4"
    },
    {
      id: 3,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaJJIdyKMNvEcWhAtI5Xk12MQLY8DLxAkM2k8unVHyRordNL9Jn726cLoEmP_DAn44vwE3_l9dWTpDQTvmzsk6REyj4veXm9bvQ8.jpg?r=e19"
    },
    {
      id: 4,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd_jf8MRfBz0OPTaahchNqdLr0sPOyNftWdXKQODJENpo-_zImAcaXtv5GHbyaa3snTklsolxf7wSlrYV0AG3159L5yxUewbziub.jpg?r=241"
    },
    {
      id: 5,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZdzXihPCaRJIKxCasqE_cBYMGdRJlFSd26KAgTyT0-wwXSBE_9eqnDOeYpJmsLnbXj-Pm42EBrGY1Ga5Mfpngb5yvIi8S2Am-NP.jpg?r=afa"
    },
    {
      id: 6,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYvnDOMDbtu6OP64DCWwB6yXIGgx2sT19tWax4Le-zfbncmW7GLc75T6mguv-Yh2e5quDd3gBBS0m5cfDQWPa6Z01CTez51EFoUR.jpg?r=e6e"
    },
    {
      id: 7,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdfKmwX892NCiVjZDTlK4meyIWCHboPP6z_4CY5uTcvpoVAp4kFZ7_d-NMGjktueiWgCVTJ4nV-Kf5gZZsSvyrQZC3pCu8nWudOD.jpg?r=610"
    },
    {
      id: 8,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbQSBinP28L0aKfl9oGVlbbHPiLqyNR3qD-OXSPc1MNUKisifRqEv9NXUZjkRGZ6VJtBMvoffdZ4F6BQbBq7RuVO79UQj-XZOz-p.jpg?r=dce"
    },
    {
      id: 9,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW8k_Pt0NfhI111qO_8yDpmststJaWbw4xRq9qsEb6CXKV6cen9sGBCPaivRihyH-B3NMcMkNb5-lGFUvlEX4cLbNIpMkIxRirEL.jpg?r=cee"
    },
    {
      id: 10,
      path: "https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUArZ6XDidXHYVNtcQsw8sOOySFUvRyynZy1bg5dCtXo9W9vaW7jFxn-TIKAtb8EEIS4kpsR9CrawcgsY6YAT5ZFT84CvlFbFrpp.jpg?r=42d"
    }
  ]
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
  return (
    <div className="main bg-[#101728] w-full h-screen" id="main">
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
    </div>
  )
}

export default App
