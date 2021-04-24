import React from 'react'
import Form from './Form'


export default class ModalContent extends Form {
  state = {
    data: {}
  }

  render () {
    return (
      <div className="flex justify-center bg-gray-900 w-full h-full overflow-auto">
        <div className="w-3/4">
          <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 space-y-6 sm:p-6">
                  <div>
                    <div>
                      <label htmlFor="city" className="block text-xs sm:text-sm font-medium text-gray-400">
                        Title
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 text-gray-400 bg-gray-800 outline-none border-none  focus:ring-0 focus:ring-offset-gray-600 block w-full shadow-sm sm:text-xs sm:text-sm  rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-xs sm:text-sm font-medium text-gray-400">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm text-gray-400 bg-gray-800 outline-none border-none  focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 mt-1 block w-full text-xs sm:text-sm border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500">
                      Brief description for this ticket.
                    </p>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="project" className="block text-xs sm:text-sm font-medium text-gray-400">
                      Project
                      </label>
                    <select
                      id="project"
                      name="project"
                      autoComplete="project"
                      className="mt-1 text-gray-400 bg-gray-800 outline-none border-none text-xs sm:text-sm block w-full py-2  px-3 border border-gray-300 rounded-md shadow-sm focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 "
                    >
                      <option>Project 1</option>
                      <option>Project 2</option>
                      <option>Project 3</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="assignedTo" className="block text-xs sm:text-sm font-medium text-gray-400">
                      Assign To
                      </label>
                    <select
                      id="assignedTo"
                      name="assignedTo"
                      autoComplete="assignedTo"
                      className="text-gray-400 bg-gray-800 outline-none border-none mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:border-lime-400 focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600 text-xs sm:text-sm"
                    >
                      <option>Robbie Karsli</option>
                      <option>Robbie Karsli</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400">Attachments</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-400 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-xs sm:text-sm text-gray-600 ">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-lime-400 hover:text-lime-400 hover:underline focus:border-opacity-0 focus:outline-none focus:ring-0 focus:ring-offset-gray-600"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div >
      </div >
    )
  }
}


