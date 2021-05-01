import React from 'react'

export default function MobileNav () {
  return (
    <div className="flex md:hidden">
      <div className="flex flex-col justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
        <div className="flex justify-center mt-5 ml-5 place-items-center w-10 h-10 bg-gray-900 cursor-pointer text-lime-400 rounded-full transform transition-all hover:shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}
