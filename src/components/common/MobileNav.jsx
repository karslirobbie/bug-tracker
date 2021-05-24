import React, { Fragment, useState } from 'react'
import Nav from './Nav'
import { Dialog, Transition } from '@headlessui/react'


export default function MobileNav ({ admin }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={show}
          onClose={setShow}
        >
          <Transition.Child
            as={Fragment}
            enter="transform ease-out duration-300"
            enterFrom="opacity-0 -translate-x-10"
            enterTo="opacity-100 translate-x-0"
            leave="transform ease-in duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-20"
          >

            <div className="z-50 md:z-0 w-full h-full fixed overflow-hidden">
              <Dialog.Overlay className="fixed inset-0 bg-opacity-75 transition-all transform " />
              <div className="md:hidden w-full h-full">
                <Nav admin={admin} />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <div className="flex md:hidden absolute z-50" onClick={() => setShow(!show)}>
        <div className="flex flex-col justify-center place-items-center gap-3 transform hover:scale-110 transition-all delay-100 ease-in">
          <div className="flex justify-center mt-10 ml-10 place-items-center w-10 h-10 bg-gray-900 cursor-pointer text-lime-400 rounded-full transform transition-all hover:shadow-xl">
            {!show && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>}

            {show && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            }
          </div>
        </div>
      </div>
    </>
  )
}
