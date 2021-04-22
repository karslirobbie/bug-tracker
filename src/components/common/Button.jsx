import React from 'react'

export default function Button ({ label, classes, ...rest }) {
  return (
    <div className="w-1/2 md:w-56 font-bold">
      <button
        {...rest}
        className={`${classes} shadow-none border-none btn font-semibold tracking-wider text-sm md:text-base w-full rounded-full p-3 bg-lime-400 focus:outline-none text-gray-800`}>
        {label.toUpperCase()}
      </button>
    </div>
  )
}
