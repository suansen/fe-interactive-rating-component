import React, { useState } from "react"

import { Star } from "./components/Star"
import { Rating } from "./components/Rating"
import { SubmitButton } from "./components/SubmitButton"
import { ThankYou } from "./components/ThankYou"

import "./App.css"

function App() {
  const [clicked, setClicked] = useState(0)
  const [submit, setSubmit] = useState(false)

  return (
    <main className=" min-w-screen min-h-screen flex justify-center items-center font-tw-overpass bg-tw-v-dark-blue">
      {submit ? (
        <section className="bg-tw-dark-blue w-5/6 max-w-md py-12 px-8 rounded-3xl flex flex-col items-center text-center">
          <div className="">
            <ThankYou />
          </div>
          <div className="bg-tw-dark-blue brightness-125 my-8 py-2 px-8 rounded-l-full rounded-r-full">
            <p className=" text-tw-orange">You selected {clicked} out of 5</p>
          </div>
          <div className="my-4">
            <h2 className="text-3xl text-tw-white pb-4">Thank you!</h2>
            <p className=" text-tw-light-grey">
              We appreciate you taking the time to give a rating.
            </p>
            <p className=" text-tw-light-grey">
              If you ever need more support, don't hesitate to get in touch!
            </p>
          </div>
        </section>
      ) : (
        <section className="bg-tw-dark-blue w-5/6 max-w-md py-12 px-8 rounded-3xl">
          <Star color="#FC7614" />
          <h1 className="text-tw-white text-2xl font-bold mt-8 mb-4">
            How did we do?
          </h1>
          <p className=" text-tw-light-grey">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <Rating cols={5} clicked={clicked} setClicked={setClicked} />
          <SubmitButton setSubmit={setSubmit} submit={submit} />
        </section>
      )}
    </main>
  )
}

export default App
