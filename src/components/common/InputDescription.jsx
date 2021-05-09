import React from 'react'

export default function InputDescription ({ type, error, ...rest }) {
  return (
    <div>
      <label htmlFor="about" className="block text-xs sm:text-sm font-medium text-gray-400">
        Description
      </label>
      <div className="mt-1">
        <textarea
          {...rest}
          rows={3}
          className="shadow-sm text-gray-400 bg-gray-800 outline-none border-none  focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 mt-1 block w-full text-xs sm:text-sm border-gray-300 rounded-md"
          defaultValue={''}
        />
      </div>
      <p className="mt-2 text-xs sm:text-sm text-gray-500">
        {error ? <span className="text-red-400 text-xs">{error}</span> :
          `Brief description for this ${type}.`}

      </p>
    </div>
  )
}
