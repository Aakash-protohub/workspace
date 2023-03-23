import React from 'react'
import ChalkBoard from "../assets/Chalkboard.svg"
import DribbleLogo from "../assets/DribbbleLogo.svg"
import BlueButton from './BlueButton'

const Box3 = () => {
  return (
    <div className="min-h-screen p-2 pt-4 w-5/12 bg-[url('/src/assets/bg.png')] bg-cover">
       <div className="flex justify-around">
        <BlueButton text="Inspect" iconsrc={ChalkBoard}/>
        <BlueButton text="Design Area" iconsrc={DribbleLogo}/>
      </div></div>
  )
}

export default Box3