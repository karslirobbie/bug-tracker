import React, { useState } from 'react'
import MobileNav from './MobileNav';


export default function Header ({ title, children, onShow }) {

  return (
    <div className="flex flex-col h-1/6">
      <MobileNav />

      <header className="flex w-full h-full items-end justify-between">
        <h2 className="text-lg lg:text-3xl font-medium tracking-tight text-gray-300 px-5 md:px-24">{title}</h2>
        <button onClick={onShow} className="focus:ring-offset-lime-400 focus:ring-2 focus:ring-lime-400 hover:text-lime-400 hover:border-lime-400 transform group flex items-center rounded-md bg-gray-900 border border-gray-600  text-gray-300 shadow-none focus:outline-none text-xs md:text-md font-medium px-3 py-2 md:px-4 md:py-2 mx-5 md:mx-20">
          <svg className="mr-2" width="12" height="20" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
           New
        </button>
      </header>

      { children}
    </div>
  )
}
