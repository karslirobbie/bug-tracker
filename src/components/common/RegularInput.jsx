import React from 'react'

export default function RegularInput ({ label, name, onChange, error }) {
  return (
    <div>
      <label htmlFor="city" className="block text-xs sm:text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        className="mt-1 text-gray-400 bg-gray-800 outline-none border-none  focus:ring-0 focus:ring-offset-gray-600 block w-full shadow-sm sm:text-xs rounded-md"
      />
      <span className="text-red-400 text-xs">{error}</span>
    </div>
  )
}
