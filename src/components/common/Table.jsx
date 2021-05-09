import React, { Fragment, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as ID } from '../../images/id.svg'
import { TicketContext, ProjectContext } from '../../context';
import Pagination from './Pagination'

function Table ({ header, type }) {
  let history = useHistory();
  const classes = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";

  const ticketContext = useContext(TicketContext);
  const projectContext = useContext(ProjectContext)
  const data = type == "tickets" ? ticketContext : projectContext;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = (page) => console.log(page)

  return (
    <Fragment>
      <div className="py-2 w-full md:px-4 mb-6  lg:pr-8 h-3/4 overflow-y-auto">
        <div className="overflow-x-scroll border-b border-t bg-gray-900 border-l border-r border-gray-900 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                {header.map(th =>
                  <th key={th}
                    scope="col"
                    className="px-3 md:px-6 lg:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {th}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-900">
              {data.map(row =>
                <tr key={row._id}
                  onClick={() => history.push({ pathname: `/${type}/${row.tag}` })}
                  className="cursor-pointer transition-all transform hover:scale-105 hover:bg-gray-900">
                  <td className="px-3 md:px-4 xl:px-2 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="xl:ml-2">
                        <div className="lg:text-sm font-medium text-gray-400">
                          {row.tag}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="flex px-3 md:px-6 lg:px-2 xl:px-2 py-4 whitespace-wrap truncate">
                    <div className="flex-none w-24 lg:w-32 xl:w-52 2xl:w-auto lg:text-sm text-gray-400">
                      <p className="truncate">{row.title} </p>
                    </div>
                  </td>
                  <td className="px-3 md:px-5 xl:px-2 py-4 whitespace-nowrap text-gray-400">
                    {row.status}
                  </td>
                  <td className="px-3 md:px-5 xl:px-2 py-4 whitespace-wrap text-gray-400">
                    {
                      type == "tickets" &&
                      <span className={row.urgency == 'High' ? `${classes}  bg-red-300 text-red-800`
                        : row.urgency == 'Med' ? `${classes} bg-yellow-300 text-yellow-800`
                          : `${classes} bg-green-300 text-green-800`}>

                        {row.urgency}
                      </span>
                    }
                    {type != "tickets" && row.dateCreated}
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        type={type}
        currentPage={currentPage}
        onPageChange={handleNextPage}
      />
    </Fragment>
  )
}

Table.defaultProps = {
  header: [<ID />, 'Title', 'Status', 'Urgency'],
  type: "tickets"
}

export default Table
