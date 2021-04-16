import React from "react";


export default function Input ({ name, ...rest }) {
  return (
    <div className="relative w-56 m-2">
      <input
        name={name}
        id={name}
        {...rest}
        className="text-sm focus:outline-none focus:ring-0 focus:ring-black w-full focus:ring-opacity-0 placeholder-gray-500 border border-gray-200 h-11 rounded-full py-2 pl-10" />
    </div>
  )
}