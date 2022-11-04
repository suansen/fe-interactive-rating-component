import React, { useState } from "react"

export const Button = ({ content, clicked, setClicked }) => {
  // const [active, setActive] = useState(false)

  const handleClick = (index) => {
    console.log(`${index} clicked`)
    setClicked(index)
    console.log("clicked is ", clicked)
  }

  return (
    <div
      onClick={() => handleClick(content)}
      className={`group rounded-full p-4 w-12 h-12 flex items-center justify-center hover:cursor-pointer hover:bg-tw-orange transition duration-150 ease-in-out ${
        clicked === content
          ? "bg-tw-medium-grey"
          : "bg-tw-dark-blue brightness-125"
      }`}
    >
      <p
        className={`font-bold group-hover:text-tw-white ${
          clicked === content ? "text-tw-white" : "text-tw-medium-grey"
        }`}
      >
        {content}
      </p>
    </div>
  )
}
