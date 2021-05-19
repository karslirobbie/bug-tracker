import React from 'react'
import _ from 'lodash'


export default function Pagination ({ currentPage, data, onPageChange }) {

  let pages = Math.round(data.length / 20);
  pages = pages == 0 ? 1 : pages;
  pages = _.range(1, pages + 1);

  const shown = data.length < 20 ? data.length : 20 * pages;

  return (
    <div className="flex justify-between place-items-center mx-10 mt-10">
      <p className="lg:text-sm text-gray-500">Showing {shown} of {data.length}</p>

      <nav className="bg-gray-900 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <div onClick={() => currentPage > 1 ? onPageChange(currentPage -= 1) : null} className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-800 lg:text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>

        {pages.map(page =>
          <div onClick={() => onPageChange(page)} key={page} className="relative cursor-pointer inline-flex items-center px-4 py-2 border border-gray-800 bg-gray-900 lg:text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
            {page}
          </div>
        )}
        <div onClick={() => pages > currentPage ? onPageChange(currentPage += 1) : null} className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-800 bg-gray-900 lg:text-sm font-medium text-gray-500 hover:bg-lime-400 hover:text-gray-900">
          <span className="sr-only">Next</span>

          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </nav>
    </div>
  )
}
