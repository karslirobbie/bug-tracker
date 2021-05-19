import React from 'react'

export default function Dropdown ({ placeholder, data, error, ...rest }) {
  return (
    <div className="w-1/2  md:w-56 m-2">
      <select
        {...rest}
        className="text-xs text-gray-3000 md:text-sm focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 w-full md:w-full  placeholder-gray-500 border h-11 rounded-full py-2 pl-10"
      >
        <option className="selected disabled hidden text-gray-3000">{placeholder}</option>
        {data.map(({ label, value }, ind) => <option key={ind} value={value ?? label}>{label}</option>)}

      </select>
      <span className="text-red-400 text-xs">{error}</span>
    </div>
  )
}
