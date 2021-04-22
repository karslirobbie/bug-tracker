import React from 'react'
import notfound from '../images/not-found.svg'

export default function NotFound () {
  return (
    <div className="flex text-gray-400 font-semibold text-base md:text-2xl gap-10 h-full flex-col justify-center place-items-center mx-3 text-center">
      <img src={notfound} />
      <h1>
        <span className="text-lime-400 font-bold text-base md:text-3xl">404 : </span>
        Whoops! Looks like you got lost in space!
       </h1>
    </div>
  )
}
