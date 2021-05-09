import React from 'react'
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ModalTemplate ({ content, onSubmit, show, onHide }) {

  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef()

  useEffect(() => {
    setOpen(show)
  })

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-full h-full pt-10 px-4 sm:pb-3 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-full" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-900 rounded-2xl text-left overflow-y-scroll shadow-xl transform my-3 transition-all sm:align-middle h-full sm:h-full w-full sm:max-w-2xl">
              <div className="flex flex-col h-full">
                <div className="h-1/6 sm:h-1/6 bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 sm:mx-0 sm:h-10 sm:w-10 text-lime-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div className="my-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-sm sm:text-lg leading-6 sm:font-medium text-gray-400">
                        Create New
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Please provide all necessary information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-3/4 text-gray-500 bg-gray-900">
                  {content}
                </div>
                <div className="h-full  px-4 place-items-center sm:px-6 flex flex-row-reverse gap-3 sm:gap-1">
                  <button
                    type="button"
                    className="w-auto sm:h-10 inline-flex justify-center rounded-md border shadow-sm px-5 py-2  border-gray-400 font-medium text-gray-400  focus:outline-none focus:text-lime-400 hover:border-lime-400 hover:text-lime-400 focus:ring-offset-lime-400 focus:ring-1 focus:border-opacity-0 focus:ring-lime-400 sm:ml-3 text-xs sm:text-sm"
                    onClick={onSubmit}
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    className="w-auto sm:h-10 inline-flex justify-center rounded-md border outline-none border-gray-400 shadow-sm px-4 py-2 bg-gray-900  font-medium text-gray-400 hover:border-lime-400 hover:text-lime-400 focus:text-lime-400 focus:outline-none focus:ring-offset-lime-400 focus:border-opacity-0 focus:ring-1 focus:ring-lime-400 sm:mt-0 sm:ml-3 text-xs sm:text-sm"
                    onClick={onHide}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
