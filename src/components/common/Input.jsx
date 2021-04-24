import React from "react";


export default function Input ({ name, ...rest }) {
  return (
    <div className="w-1/2 md:w-56 m-2">
      <input
        name={name}
        id={name}
        {...rest}
        className="text-xs md:text-sm focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 w-full md:w-full  placeholder-gray-500 border h-11 rounded-full py-2 pl-10" />
    </div>
  )
}