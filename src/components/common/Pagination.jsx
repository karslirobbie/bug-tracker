import React from 'react'
import _ from 'lodash'

export default function Pagination ({ pages = 3 }) {
  pages = _.range(1, pages + 1);

  return (
    <div className="flex justify-between place-items-center mx-10">
      <p className="text-sm text-gray-500">Showing 1 of 100</p>

      <nav class="bg-gray-900 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-800 text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>

        {pages.map(page =>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-800 bg-gray-900 text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
            {page}
          </a>
        )}
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-800 bg-gray-900 text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
          <span class="sr-only">Next</span>

          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  )
}
