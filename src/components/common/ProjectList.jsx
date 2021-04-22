import React from 'react'

export default function ProjectList ({ title }) {
  return (
    <div className="flex text-sm flex-col rounded-3xl bg-gray-900 border-gray-700 overflow-hidden border my-12 h-full">

      <div className="flex text-gray-400 justify-between mx-6 my-3 place-items-center h-10 font-semibold">
        <p>{title}</p>
        <div className="w-7 h-6 text-xs rounded-md text-gray-400 bg-gray-800 flex place-items-center justify-center">2</div>
      </div>

      <div className="flex cursor-pointer hover:bg-green-400 justify-center text-gray-900 place-items-center w-5/6 px-10 h-10 bg-lime-400 rounded-lg place-self-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </div>


      <div className="h-5/6 w-full place-items-center flex flex-col overflow-y-auto">
        <div className="flex flex-shrink-0 gap-4 flex-col  pl-2 py-2 text-gray-500 place-self-center mt-5 w-5/6 h-36 bg-gray-800 rounded-xl justify-between ">
          <p className="text-sm font-medium text-gray-400">Title here</p>
          <p className="font-normal text-xs overflow-ellipsis overflow-hidden">description of the ticket above. Anything could go here.</p>
          <p className="text-xs">2 assigned</p>
        </div>
        <div className="flex flex-shrink-0 gap-4 flex-col  pl-2 py-2 text-gray-500 place-self-center mt-5 w-5/6 h-36 bg-gray-800 rounded-xl justify-between ">
          <p className="text-sm font-medium text-gray-400">Title here</p>
          <p className="font-normal text-xs overflow-ellipsis overflow-hidden">description of the ticket above. Anything could go here.</p>
          <p className="text-xs">2 assigned</p>
        </div>

        <div className="flex flex-shrink-0 gap-4 flex-col border-dashed border-2 transform transition-all hover:scale-95 hover:bg-gray-800 border-gray-700 pl-2 py-2 text-gray-500 place-self-center mt-5 w-5/6 h-36 bg-gray-900 rounded-xl justify-between mb-10">

        </div>
      </div>

    </div>
  )
}
