import React from "react"

export const SubmitButton = ({ submit, setSubmit }) => {
  const handleClick = () => {
    setSubmit(!submit)
  }

  return (
    <div
      onClick={handleClick}
      className="group rounded-l-full rounded-r-full bg-tw-orange flex items-center justify-center p-3 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-tw-white"
    >
      <p className=" text-tw-white font-bold group-hover:text-tw-orange">
        SUBMIT
      </p>
    </div>
  )
}
