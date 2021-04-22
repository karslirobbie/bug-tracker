import React from 'react'
import _ from 'lodash'

export default function Pagination ({ pages = 3 }) {
  pages = _.range(1, pages + 1);

  return (
    <div className="flex justify-between place-items-center md:mx-10 mt-10">
      <p className="md:text-sm text-gray-500">Showing 1 of 100</p>

      <nav className="bg-gray-900 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-800 md:text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>

        {pages.map(page =>
          <a href="#" key={page} className="relative inline-flex items-center px-4 py-2 border border-gray-800 bg-gray-900 md:text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
            {page}
          </a>
        )}
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-800 bg-gray-900 md:text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
          <span className="sr-only">Next</span>

          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  )
}
