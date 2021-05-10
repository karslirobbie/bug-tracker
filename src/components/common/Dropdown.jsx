import React from 'react'

export default function Dropdown ({ label, data, error, ...rest }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="project" className="block text-xs sm:text-sm font-medium text-gray-400">
        {label}
      </label>
      <select
        {...rest}
        className="mt-1 text-gray-400 bg-gray-800 outline-none border-none text-xs sm:text-sm block w-full py-2  px-3 border border-gray-300 rounded-md shadow-sm focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 "
      >
        <option className="selected disabled hidden">Select..</option>
        {data.map(({ label, value }, ind) => <option key={ind} value={value ?? label}>{label}</option>)}

      </select>
      <span className="text-red-400 text-xs">{error}</span>
    </div>
  )
}
