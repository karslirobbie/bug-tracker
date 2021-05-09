import React from 'react'
import MobileNav from './MobileNav'


export default function BasicHeader ({ title, subtitle }) {
  return (
    <div className="flex flex-col h-1/6">
      <MobileNav />

      <header className="flex w-full h-full items-end justify-around md:justify-between">
        <h2 className="text-lg md:text-3xl font-medium tracking-tight text-gray-300 px-5 md:px-24">{title}</h2>
        <div className="text-gray-300 text-xs w-1/4 max-w-xs md:text-lg font-medium  md:mx-20">
          {subtitle}
        </div>
      </header>
    </div>
  )
}
