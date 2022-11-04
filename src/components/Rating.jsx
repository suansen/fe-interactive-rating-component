import React, { useState } from "react"
import { Button } from "./RatingButton"

export const Rating = ({ cols, clicked, setClicked }) => {
  const buttonsGrid = Array.from({ length: cols }, (_, index) => {
    return (
      <Button
        key={index + 1}
        content={index + 1}
        clicked={clicked}
        setClicked={setClicked}
      />
    )
  })

  return <div className="flex justify-between py-8">{buttonsGrid}</div>
}
