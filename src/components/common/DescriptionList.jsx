import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import TicketContext from '../../contexts/ticketContext'

export default function DescriptionList () {

  const ticketContext = useContext(TicketContext);
  let { id } = useParams();
  let current = ticketContext.find(({ tag }) => tag == id)

  current = current ?? ticketContext[0];

  const rows = [
    { title: "Ticket #", name: "tag" },
    { title: "Title", name: "title" },
    { title: "Status", name: "status" },
    { title: "Description", name: "description" },
    { title: "Urgency", name: "urgency" },
    { title: "Assignee", name: "assignee", prop: "name" },
    { title: "Assigned To", name: "assignedTo", prop: "name" },
  ]

  return (
    <div className="bg-gray-900 shadow w-full h-full overflow-hidden mr-5 xl:mr-10 rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="md:text-lg leading-6 font-medium text-gray-400">
          Ticket Information
        </h3>
        <p className="mt-1 max-w-2xl text-xs md:text-sm text-gray-500">
          Ticket details and description.
        </p>
      </div>

      <div className="border-t border-gray-500">
        <dl>
          {rows.map(({ title, name, prop }) =>
          (<div key={name} className="bg-gray-900 px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-xs md:text-sm font-medium text-gray-500">
              {title}
            </dt>
            <dd className="mt-1 text-xs md:text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              {current ? prop ? current[name][prop] : current[name] : ""}
            </dd>
          </div>))
          }

          <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-xs md:text-sm font-medium text-gray-500">
              Attachments
            </dt>
            <dd className="mt-1 text-xs md:text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-xs md:text-sm">
                  <div className="w-0 flex-1 flex items-center">

                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate">
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-lime-400 hover:text-gray-500">
                      Download
                    </a>
                  </div>
                </li>

              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
